export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_TITLE":
      return { ...state, title: payload };
    case "SET_CONTENT":
      return { ...state, content: payload };
    case "SET_COLOR":
      return { ...state, color: payload };
    case "SET_TAGS":
      return {
        ...state,
        tags: state.tags.concat(payload),
      };

    case "ADD_TAGS":
      return {
        ...state,
        tags: state.tags.concat(payload),
      };

    case "REMOVE_TAGS":
      return {
        ...state,
        tags: state.tags.filter((_, index) => index !== payload),
      };
    case "SET_PRIORITY":
      return { ...state, priority: payload };
    case "SET_PIN":
      return { ...state, pin: payload };
    case "SET_DATE":
      return { ...state, date: payload };
    case "EDIT_NOTE":
      return { ...payload };
    case "CLEAR_NOTE":
      return {
        title: "",
        content: "",
        color: "",
        tags: [],
        priority: [],
        pin: false,
        date: new Date() ,
      };
    default:
      return state;
  }
}
