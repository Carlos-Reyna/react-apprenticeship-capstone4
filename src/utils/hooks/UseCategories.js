import { useEffect, useState } from 'react';
import { getCategories } from '../ItemsHelper';
import { urlHelper } from '../urlHelper';
import { useLatestAPI } from './useLatestAPI';
import { FetchHelper } from '../FetchHelper';

export function useCategories(params) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [categories, setCategories] = useState({
    data: [],
    isLoading: true,
  });

  function clearFilter() {
    const currentCategories = [...categories.data];
    currentCategories.map((cat) => {
      const newCat = cat;
      newCat.isSelected = false;
      return newCat;
    });

    setCategories({ ...categories, data: currentCategories });
  }

  function applyCategoryFilter(customCategories) {
    const strParams = params[0];
    const paramArray = strParams.split(',');

    customCategories.forEach((cat) => {
      const newCat = cat;
      newCat.isSelected = false;
      paramArray.forEach((selected) => {
        if (cat.data.name === selected) {
          newCat.isSelected = true;
        }
      });
      return newCat;
    });
    return customCategories;
  }

  function filterCategories(categoryName) {
    const nextFilter = [...categories.data];
    const index = categories.data.findIndex(
      (cat) => cat.data.name === categoryName
    );

    nextFilter[index].isSelected = !nextFilter[index].isSelected;
    const getFilteredCategories = nextFilter.filter(
      (cat) => cat.isSelected === true
    );
    const categoryParams = getFilteredCategories
      .map((cat) => cat.data.name)
      .join(',');
    setCategories({ ...categories, nextFilter });

    return categoryParams;
  }

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function fetchCategories() {
      try {
        const url = await urlHelper(apiRef, 'CATEGORY', null);
        const data = await FetchHelper(url, controller);
        const customCategories = await getCategories(data.results);

        if (params.length !== 0) {
          applyCategoryFilter(customCategories);
        }
        setCategories({ data: customCategories, isLoading: false });
      } catch (err) {
        setCategories({ data: [], isLoading: false });
      }
    }
    fetchCategories();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return { categories, filterCategories, clearFilter };
}
