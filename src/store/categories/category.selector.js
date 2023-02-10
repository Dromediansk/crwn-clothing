export const selectCategoriesByTitle = (state) =>
  state.categories.categories.reduce((categories, category) => {
    const { title, items } = category;
    categories[title.toLowerCase()] = items;
    return categories;
  }, {});
