import { useState } from 'react';
import './Searchbar.css'
import { IoFlaskOutline } from "react-icons/io5";

const Searchbar = () => {
  const [inputState, setInputState] = useState(false);
  return (
    <div className="searchbar">
      <div className="search-container">
          <input onFocus={() => {setInputState(true);}} type="text" placeholder='Ask us something'/>
          <IoFlaskOutline className='search-icon' size={28}/>
      </div>

    </div>
  )
}

export default Searchbar