import React, { useState, useEffect } from 'react'
import './SearchPage.css'
import { Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import Search from '../components/Search'
import { useStateValue } from '../context/StateProvider';
import { API_KEY, CONTEXT_KEY } from '../utils/keys';
import SearchItem from '../components/SearchItem';


const SearchPage = () => {
  const [{ term }] = useStateValue();
  const history = useHistory();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!term) {
      return history.push('/');
    }

    // fetching google results if we have a term to search for
    const fetchData = async () => {
      setLoading(true)
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(
          response => response.json()
        ).then(result => {
          setData(result)
          setLoading(false);
        })
    }
    fetchData();

  }, [term, history])

  return (
    <div className="searchPage">

      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
              <div className="searchPage__option">
                <SearchIcon style={{ 'fontSize': '14px', 'color': 'lightcoralghtblue' }} />
                <Link className="search__text">
                  All
                </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon className="search__text" />
                <Link className="search__text">
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferOutlinedIcon className="search__text" />
                <Link className="search__text">
                  Shopping
                </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon className="search__text" />
                <Link className="search__text">
                  Maps
                </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon className="search__text" />
                <Link className="search__text">
                  News
                </Link>
              </div>
              <div className="searchPage__option">
                <MoreVertOutlinedIcon className="search__text" />
                <Link className="search__text">
                  More
                </Link>
              </div>
            </div>
            <div className="searchPage__optionRight">
              <div className="searchPage__option">
                <Link style={{ 'fontSize': '13px' }} to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link style={{ 'fontSize': '13px' }} to="/tools"> Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!loading && data ? (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for <strong>{term}</strong>
          </p>
          {data?.items.map((item, index) => (
            <SearchItem item={item} key={index} />
          ))}
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  )
}

export default SearchPage

