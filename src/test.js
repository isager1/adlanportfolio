import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import { FaAngleDown, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './components/css/App.css'


function App() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);

    window.scroll({
      top: document.body.offsetHeight,
      down: 1,
      behavior: 'smooth',
    });

  };

  const handleScroll = event => {
  
  }


  return (
    <div>
      <Header />
      <FaChevronDown className='flachDown' onClick={handleClick} />
      {isShown && (
        <FaChevronUp className='flachUp' onClick={handleScroll} />
      )}

      {isShown && (
        <Body />
      )},
    </div>
  );
}



export default App;
