import {useState} from 'react';
import {Item, SearchResultItem} from '../../types/types';
import {useLocalStorage} from './useLocalStorage';

const useSearchItems = (data: Item[]) => {
  const {getItem, setItem} = useLocalStorage();
  const saveSearch = getItem('search');
  const saveFound = JSON.parse(getItem('foundItems') || '[]');
  const [searchQuery, setSearchQuery] = useState(saveSearch || '');
  const [searchResult, setSearchResult] = useState<SearchResultItem[]>(saveFound);

  const findItems = (data: Item[], query: string): SearchResultItem[] => {

    const foundItems: SearchResultItem[] = [];

    data.forEach((item) => {
      const name = item.name.toLowerCase();
      const code = item.code.toLowerCase();
      const comment = item.comment.toLowerCase();
      if (name.includes(query) || code.includes(query) || comment.includes(query)) {
        foundItems.push(item);
      }
      if (item.children && query !== '') {
        const childResults = findItems(item.children, query);
        foundItems.push(...childResults);
      }
    });
    return foundItems;
  };

  const handleSearch = (query: string) => {
    setItem('search', query);
    const search = getItem('search') || '';
    setSearchQuery(search);

    const foundItems = query ? findItems(data, search) : [];
    setItem('foundItems', JSON.stringify(foundItems));
    const found = (getItem('foundItems') || '');
    setSearchResult(JSON.parse(found));
  };

  return {searchQuery, searchResult, handleSearch};
};

export default useSearchItems;
