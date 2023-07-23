export const useItemType = () => {
  const handleItemType = (code: string, isHighlighted: boolean) => {
    switch (code.length) {
      case 1:
        return {
          padding: '10px 0 10px 10px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 2:
        return {
          padding: '10px 0 10px 20px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 3:
        return {
          padding: '10px 0 10px 30px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 4:
        return {
          padding: '10px 0 10px 40px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 5:
        return {
          padding: '10px 0 10px 50px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 6:
        return {
          padding: '10px 0 10px60px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 7:
        return {
          padding: '10px 0 10px 70px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 8:
        return {
          padding: '10px 0 10px 80px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };
      case 9:
        return {
          padding: '10px 0 10px 90px',
          color: `${isHighlighted ? '#4CAF50' : 'black'}`,
        };

      default:
        return {
          padding: '0',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
    }
  };
  return {handleItemType};
}