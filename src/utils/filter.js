const Compose = (filterState, ...functions) => (notes) =>
  functions.reduce((acc, cur) => cur(filterState, acc), notes);

const filterSortBy = (filterState, notes) => {
  switch (filterState.date) {
    case "EARLIER":
      return [...notes].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case "LATEST":
      return [...notes].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    default:
      return notes;
  }
};

const tagsFilter = (filterState, notes) => {
  const tagsPresent = Object.keys(filterState.tags).filter(
    (value) => filterState.tags[value] === true
  );
  if (tagsPresent.length === 0) {return notes}
  else {
    return notes.filter(
      (note) =>
        note.tags.filter((tag) => tagsPresent.includes(tag)).length > 0
    );

  }
  
};

const priorityFilter = (filterState, notes) => {
  switch (filterState.priority) {
    case "High":
      return [...notes].filter((item) => item.priority === "High");
    case "Medium":
      return [...notes].filter((item) => item.priority === "Medium");
    case "Low":
      return [...notes].filter((item) => item.priority === "Low");
    default:
      return notes;
  }
};

export { Compose, filterSortBy, priorityFilter, tagsFilter };