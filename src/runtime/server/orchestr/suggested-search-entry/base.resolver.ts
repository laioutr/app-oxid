import { SuggestedSearchEntryBase } from '@laioutr-core/canonical-types/entity/suggested-search-entry';
import { suggestionResultsFragmentToken } from '../../const/passthroughTokens';
import { defineOxidComponentResolver } from '../../middleware/defineOxid';

export default defineOxidComponentResolver({
  label: 'Shopware Suggested Search Entry Resolver',
  entityType: 'SuggestedSearchEntry',
  provides: [SuggestedSearchEntryBase],
  resolve: ({ passthrough, $entity }) => {
    const results = passthrough.require(suggestionResultsFragmentToken);

    const entities = results.suggestions.map((suggestion) =>
      $entity({
        id: suggestion.id,

        base: () => ({
          type: suggestion.type,
          title: suggestion.title,
          link: suggestion.link,
        }),
      })
    );

    return { entities };
  },
});
