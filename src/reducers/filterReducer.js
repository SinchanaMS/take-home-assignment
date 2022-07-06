export const filterReducer = (state, { type, payload }) => {
  const { brand, gender, size } = state;
  const initialFilterState = {
    brand: [],
    size: "",
    gender: "",
    sortBy: "",
  };
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: payload };
    case "BRAND":
      return brand.includes(payload)
        ? { ...state, brand: brand.filter((brand) => brand !== payload) }
        : { ...state, brand: [...brand, payload] };
    case "GENDER":
      return gender.includes(payload)
        ? {
            ...state,
            gender: gender.filter((gender) => gender !== payload),
          }
        : { ...state, gender: [...gender, payload] };
    case "SIZE":
      return size.includes(payload)
        ? { ...state, size: size.filter((size) => size !== payload) }
        : { ...state, size: [...size, payload] };
    case "CLEAR":
      return initialFilterState;
    default:
      return state;
  }
};
