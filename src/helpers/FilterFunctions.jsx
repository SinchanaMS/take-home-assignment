const sortByPrice = (filterState, products) => {
  switch (filterState.sortBy) {
    case "high-to-low":
      return [...products].sort(
        (a, b) => a.price.discounted - b.price.discounted
      );
    case "low-to-high":
      return [...products].sort(
        (a, b) => b.price.discounted - a.price.discounted
      );
    default:
      return [...products];
  }
};

const filterByBrand = (filterState, products) => {
  return filterState.brand.length === 0
    ? products
    : products.filter((prod) => filterState.brand.includes(prod.brand));
};

const filterByGender = (filterState, products) => {
  return filterState.gender.length === 0
    ? products
    : products.filter((prod) => filterState.gender.includes(prod.gender));
};

const filterBySize = (filterState, products) => {
  return filterState.size.length === 0
    ? products
    : products.filter((prod) =>
        prod.size.find((size) => filterState.size.includes(size))
      );
};

const applyFilters =
  (state, ...functions) =>
  (products) => {
    return functions.reduce((acc, curr) => curr(state, acc), products);
  };

export const getProducts = (state, products) =>
  applyFilters(
    state,
    sortByPrice,
    filterByBrand,
    filterByGender,
    filterBySize
  )(products);
