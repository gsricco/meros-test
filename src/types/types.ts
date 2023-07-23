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
export interface Item {
  code: string;
  parent_code: string;
  section: string;
  name: string;
  comment: string;
  children?: Item[];
};
export interface SearchResultItem extends Item {
  children?: SearchResultItem[];
};
