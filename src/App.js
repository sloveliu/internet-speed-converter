import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
// 三個分類沒用到的可以不用載
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import UnitControl from './components/UnitControl';
import UnitConverter from './components/UnitConverter';
import CardFooter from './components/CardFooter';
import './App.css';

library.add(fab, fas, far);
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(parseInt(value));
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter inputValue={inputValue} handleInputChange={handleInputChange} />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
};

export default App;
