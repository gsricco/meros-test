import {Item, SearchResultItem} from "../../types/types";

export const convertToSearchResultItem = (item: Item): SearchResultItem => {
  const {children, ...rest} = item;
  const convertedChildren = children?.map(convertToSearchResultItem);
  return {...rest, children: convertedChildren};
};
