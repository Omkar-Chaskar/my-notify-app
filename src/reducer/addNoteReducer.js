import dayjs from "dayjs";

export function reducer(state ,action){
  const { type, payload } = action;
  switch (type) {
      case "SET_TITLE":
          return { ...state, title: payload }
      case "SET_CONTENT":
          return { ...state, content: payload }
      case "SET_COLOR":
          return { ...state, color: payload }
      case "SET_LABEL":
          return { ...state, label: payload }
      case "SET_PRIORITY":
          return { ...state, priority: payload }
      case "SET_PIN":
          return { ...state, pin: payload }
      case "SET_DATE":
          return { ...state, date: payload }
      case "EDIT_NOTE":
          return { ...payload }
      case "CLEAR_NOTE":
          return {
              title: "",
              content: "",
              color: "",
              label: [],
              priority: [],
              pin: false,
              date: dayjs().format("YYYY-MM-DD"),
          }
      default:
          return state;
  }
}