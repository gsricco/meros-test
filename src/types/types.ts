type ItemType = {
  padding: string;
  color: string;
};
export type StyledPropsType = {
  itemType: ItemType;
};
export type HandleItemType = {
  handleItemType: (code: string, isHighlighted: boolean) => ItemType;
};
export type Item = {
  code: string;
  parent_code: string;
  section: string;
  name: string;
  comment: string;
  children?: Item[];
};
export type SearchResultItem = Item & {
  children?: SearchResultItem[];
};
export type SearchResultsPropsType = {
  items: Item[]
  searchQuery: string
  searchResult:SearchResultItem[]
}