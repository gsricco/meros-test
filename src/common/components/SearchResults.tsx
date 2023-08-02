import React from "react";
import {HandleItemType, SearchResultItem, SearchResultsPropsType} from "../../types/types";
import {StyledBox, StyledBoxComment} from "../../app/App.styled";
import {useItemType} from "../hooks/useItemType";
import icon from "../../styles/assets/images/ok.svg";

export const SearchResults = ({items, searchQuery, searchResult}: SearchResultsPropsType) => {
  const {handleItemType}: HandleItemType = useItemType();
  const renderItems = (items: SearchResultItem[]) => {
    return (
      <>
        {items.map((item, index) => {
          const highlightedText = new RegExp(searchQuery, 'gi');
          const replacedTextName = item.name.replace(highlightedText, (match) => `<mark>${match}</mark>`);
          const replacedTextCode = item.code.replace(highlightedText, (match) => `<mark>${match}</mark>`);
          const replacedTextComment = item.comment.replace(highlightedText, (match) => `<mark>${match}</mark>`);


          const isItemHighlighted = (item: SearchResultItem): boolean => {
            if (searchQuery === '') return false;
            return searchResult.some((searchItem) => JSON.stringify(searchItem) === JSON.stringify(item));
          };

          return (
            <div key={index}>
              <StyledBox itemType={handleItemType(item.code, isItemHighlighted(item))}>
                {isItemHighlighted(item) && <img src={icon} width={'40px'} alt="tetst"/>}
                {replacedTextCode ? <span dangerouslySetInnerHTML={{__html: replacedTextCode}}/> : item.code}
                -
                {replacedTextName ? <span dangerouslySetInnerHTML={{__html: replacedTextName}}/> : item.name}
              </StyledBox>
              {item.comment && <StyledBoxComment itemType={handleItemType(item.code, isItemHighlighted(item))}>
                {replacedTextComment ? <span dangerouslySetInnerHTML={{__html: replacedTextComment}}/> : item.comment}
              </StyledBoxComment>}
              {item.children && renderItems(item.children)}
            </div>
          )
        })}
      </>
    );
  };

  return <React.Fragment>{renderItems(items)}</React.Fragment>;
};

