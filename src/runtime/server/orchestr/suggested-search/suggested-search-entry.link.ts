import { SuggestedSearchEntriesLink } from '@laioutr-core/canonical-types/suggested-search';
import { suggestionResultsFragmentToken } from '../../const/passthroughTokens';
import { defineOxidLink } from '../../middleware/defineOxid';

export default defineOxidLink(SuggestedSearchEntriesLink, async ({ passthrough }) => {
  const results = passthrough.require(suggestionResultsFragmentToken);

  return {
    links: [
      {
        sourceId: '#',
        targetIds: results.map((res) => res.id),
      },
    ],
  };
});
