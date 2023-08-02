import React from "react";
import {StyledInput, StyledItemContainer} from "./App.styled";
import data from "../data/data_okved.json";
import {convertToSearchResultItem} from "../common/utils/convertToSearchResultItem";
import {SearchResults} from "../common/components/SearchResults";
import useSearchItems from "../common/hooks/useSearchItems";


const App = () => {

  const searchData = data.map(convertToSearchResultItem);
  const {searchQuery, searchResult, handleSearch} = useSearchItems(searchData);

  return (
    <div>
      <StyledInput>
        <h1>Meros Equity test</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          placeholder="Поиск по ОКВЭД"
        />
        <span>Результат поиска: {searchResult.length} </span>
      </StyledInput>
      <StyledItemContainer>
        <SearchResults
          items={searchData}
          searchQuery={searchQuery}
          searchResult={searchResult}
        />
      </StyledItemContainer>
    </div>
  );
};

export default App;

