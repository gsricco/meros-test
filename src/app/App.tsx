import React, {useState} from 'react';
import data from '../data/data_okved.json';
import {useItemType} from "../common/hooks/useItemType";
import {StyledBox, StyledBoxComment, StyledInput, StyledItemContainer} from "./App.styled";
import {HandleItemType, Item, SearchResultItem} from "../types/types";
import icon from '../styles/assets/images/ok.svg'
import {convertToSearchResultItem} from "../common/utils/convertToSearchResultItem";



const App = () => {



  const saveSearch= localStorage.getItem('search');
  const saveFound = JSON.parse(localStorage.getItem('foundItems')||'[]');

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
      const name = item.name.toLowerCase();
      const code = item.code.toLowerCase();
      const comment = item.comment.toLowerCase();
      if (name.includes(query)||(code.includes(query)||(comment.includes(query)))) {
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



  const {handleItemType}:HandleItemType = useItemType()


  const renderItems = (items: SearchResultItem[])=> {

    return (
      <React.Fragment>

          {items.map((item, index) => (
            <div key={index} >
              <StyledBox itemType={handleItemType(item.code,isItemHighlighted(item))} >
                {isItemHighlighted(item)&&<img src={icon} width={'40px'} alt="tetst"/>}
                { item.code} - {item.name}
              </StyledBox>
              {item.comment&&<StyledBoxComment itemType={handleItemType(item.code, isItemHighlighted(item))}>{item.comment}</StyledBoxComment>}
              {item.children && renderItems(item.children)}
            </div>
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
          placeholder="Поиск по ОКВЭД"
        />
        <span>Результат поиска: {searchResult.length} </span>
      </StyledInput>
      <StyledItemContainer>
        {renderItems(searchData)}
      </StyledItemContainer>

    </div>
  );
};

export default App;

