function getCategories(rawCategories) {
  return rawCategories.map((cat) => ({ isSelected: false, ...cat }));
}

function filterProducts(categories, products) {
  const activeCategories = categories.filter((cat) => {
    if (cat.isSelected) {
      return cat.id;
    }
    return null;
  });

  if (activeCategories.length === 0) {
    return products;
  }

  const activeCategoriesIds = activeCategories.map((cat) => cat.id);

  const filteredProducts = products.filter((product) => {
    if (activeCategoriesIds.includes(product.data.category.id)) {
      return product;
    }
    return null;
  });

  return filteredProducts;
}

function ValidateRequestObject(object) {
  return Object.keys(object).length !== 0;
}

export { getCategories, filterProducts, ValidateRequestObject };
