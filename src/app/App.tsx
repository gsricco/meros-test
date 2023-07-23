import React, {useState} from 'react';
import data from '../data/data_okved.json';
import {useItemType} from "../common/hooks/useItemType";
import {StyledBox, StyledInput, StyledItem, StyledItemContainer} from "./App.styled";
import {handleItemPropsType, Item, SearchResultItem} from "../types/types";


const convertToSearchResultItem = (item: Item): SearchResultItem => {
  const {children, ...rest} = item;
  const convertedChildren = children?.map(convertToSearchResultItem);
  return {...rest, children: convertedChildren};
};


const App = () => {



  const saveSearch = localStorage.getItem('search');
  const saveFound = JSON.parse(localStorage.getItem('foundItems') || '')

  const [searchQuery, setSearchQuery] = useState(saveSearch || '');
  const [searchResult, setSearchResult] = useState<SearchResultItem[]>(saveFound);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    localStorage.setItem('search', query)
    const search = localStorage.getItem('search') || ''
    setSearchQuery(search);

    const foundItems = findItems(data, search);
    localStorage.setItem('foundItems', JSON.stringify(foundItems))
    const found = localStorage.getItem('foundItems') || ''
    setSearchResult(JSON.parse(found));
  };


  const findItems = (items: Item[], query: string): SearchResultItem[] => {
    const foundItems: SearchResultItem[] = [];

    items.forEach((item) => {
      const title = item.name.toLowerCase();
      if (title.includes(query)) {
        foundItems.push(item);
      }

      if (item.children) {
        const childResults = findItems(item.children, query);
        foundItems.push(...childResults);
      }
    });

    return foundItems;
  };

  const searchData = data.map(convertToSearchResultItem);

  const isItemHighlighted = (item: SearchResultItem): boolean => {
    if(searchQuery ==='') return false;
    else
    return searchResult.some((searchItem) => JSON.stringify(searchItem) === JSON.stringify(item));
  };



  const {handleItemType}:handleItemPropsType = useItemType()


  const renderItems = (items: SearchResultItem[])=> {

    return (
      <React.Fragment>

          {items.map((item, index) => (
            <StyledItem key={index} >
              {/*<h2>{item.code} - {item.name}</h2>*/}
              <StyledBox handleItemType={handleItemType(item.code,isItemHighlighted(item))} >
                { item.code} - {item.name}
              </StyledBox>
              <StyledBox handleItemType={handleItemType(item.code,isItemHighlighted(item))} >{item.comment}</StyledBox>
              {item.children && renderItems(item.children)}
            </StyledItem>



          ))}


      </React.Fragment>

    );
  };


  return (
    <div>

      <StyledInput>
        <h1>Meroy test</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Поиск..."
        />
      </StyledInput>
      <StyledItemContainer>
        {renderItems(searchData,)}
      </StyledItemContainer>

    </div>
  );
};

export default App;

