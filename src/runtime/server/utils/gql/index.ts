import { Kind } from 'graphql';
import type { DefinitionNode, DocumentNode } from 'graphql';

/**
 * Merge multiple GraphQL DocumentNodes while removing duplicate definitions
 * (by definition name). Keeps the *last* seen definition of a given name.
 *
 * Useful when composing fragments across files without worrying about
 * "There can be only one fragment named X" errors.
 */
export function gqlDedupe(...docs: Array<DocumentNode | null | undefined>): DocumentNode {
  const definitions: DefinitionNode[] = [];
  const seenByKey = new Map<string, number>();

  for (const doc of docs) {
    if (!doc) continue;
    for (const def of doc.definitions) {
      const key = getDefKey(def);
      if (!key) {
        // anonymous operation or schema def — keep as-is
        definitions.push(def);
        continue;
      }
      if (seenByKey.has(key)) {
        // replace the previous one with the newer def (last wins)
        const idx = seenByKey.get(key)!;
        definitions[idx] = def;
      } else {
        seenByKey.set(key, definitions.length);
        definitions.push(def);
      }
    }
  }

  return {
    kind: Kind.DOCUMENT,
    definitions,
  };
}

function getDefKey(def: DefinitionNode): string | null {
  switch (def.kind) {
    case Kind.FRAGMENT_DEFINITION:
      return `FRAGMENT:${def.name?.value}`;
    case Kind.OPERATION_DEFINITION:
      // some queries are anonymous; return null in that case
      return def.name ? `OP:${def.operation}:${def.name.value}` : null;
    case Kind.SCALAR_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.UNION_TYPE_DEFINITION:
    case Kind.ENUM_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.SCHEMA_DEFINITION:
    case Kind.DIRECTIVE_DEFINITION:
      // generally not present in client docs, but included for completeness
      // @ts-expect-error - many of these nodes have 'name'
      return def.name ? `${def.kind}:${def.name.value}` : def.kind;
    default:
      return null;
  }
}
