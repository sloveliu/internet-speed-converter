const CardFooter = ({ inputValue }) => {
  let criteria = {};
  switch (true) {
    case inputValue < 15:
      criteria = {
        title: 'SLOW',
        backgroundColor: '#ee362d'
      };
      break;
    case inputValue < 40:
      criteria = {
        title: 'GOOD',
        backgroundColor: '#1b82f1'
      };
      break;
    case inputValue >= 40:
      criteria = {
        title: 'FAST',
        backgroundColor: '#13d569'
      };
      break;
    default:
      criteria = {
        title: '---',
        backgroundColor: '#d3d8e2'
      };
  }
  return (<div className="card-footer" style={{ backgroundColor: criteria.backgroundColor }}>{criteria.title}</div>);
};
export default CardFooter;