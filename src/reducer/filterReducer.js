export function filterReducer(filterState, action) {
  switch (action.type) {
    case "SORT": 
      return { ...filterState,
        date : action.payload 
      }

    case "FILTER_BY_PRIORITY":
      return {
        ...filterState,
        priority: action.payload
      };

    case "FILTER_BY_TAG":
      return {
        ...filterState,
        tags: {
          ...filterState.tags, [action.payload]: !filterState.tags[action.payload]
        },
      };

    case "CLEAR":
      return {
        sort : "",
        priority: "",
        tags: {}
      };

    default:
      return filterState;
  }
}
