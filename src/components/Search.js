import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionTypes } from "../context/reducer";

const Search = ({ hideButtons = false }) => {
  const [, dispatch] = useStateValue();

  const [input, setInput] = useState('');
  const history = useHistory()


  const handleSearch = (e) => {
    e.preventDefault();
    if (input === "" || input == null | undefined || !input) return;
    dispatch(
      {
        type: actionTypes.SET_SEARCH_TERM,
        term: input
      }
    )
    history.push('/search')
  }


  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />

      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>

          <Button variant="outlined">
            I'm Feeling Lukcy
          </Button>


        </div>

      ) : (
        <div className="search_buttons">
          <Button className="search__buttonsHidden" type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>

          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lukcy
          </Button>


        </div>
      )}




    </form>
  )
}

export default Search
