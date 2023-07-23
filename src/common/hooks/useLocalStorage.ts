export const useLocalStorage = () => {
  const setItem = (key: string, value: any) => {
    localStorage.setItem(key, (value));
  };
  const getItem = (key: string) => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value ? (value) : undefined;
    }
    return undefined;
  };
  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  }
  const clearAll = () => {
    localStorage.clear();
  }

  return {
    setItem,
    getItem,
    removeItem,
    clearAll
  }
};
