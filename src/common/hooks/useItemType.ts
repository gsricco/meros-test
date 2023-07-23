
export const useItemType = ()=>{
  const handleItemType = (code: string, isHighlighted:boolean) => {
    switch (code.length) {
      case 1:
        return {
        padding: '5px 0 0 10px',
          color: `${isHighlighted ? 'red' : 'black'}`,
      };
      case 2:
        return {
          padding: '5px 0 0 20px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 3:
        return {
          padding: '5px 0 0 30px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 4:
        return {
          padding: '5px 0 0 40px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 5:
        return {
          padding: '5px 0 0 50px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 6:
        return {
          padding: '5px 0 0 60px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 7:
        return {
          padding: '5px 0 0 70px',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
      case 8:
        return {
          padding: '5px 0 0 80px',
          color: `${isHighlighted ? 'red' : 'black'}`,
          };
case 9:
        return {
          padding: '5px 0 0 90px',
          color: `${isHighlighted ? 'red' : 'black'}`,
          };

      default:
        return {
          padding: '0',
          color: `${isHighlighted ? 'red' : 'black'}`,
        };
    }
  };


  return {handleItemType}
}