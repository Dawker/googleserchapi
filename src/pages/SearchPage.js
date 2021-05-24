import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../context/StateProvider';
import useGoogleSearch from '../utils/useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const SearchPage = () => {
  const [{ term }] = useStateValue();

  const { data } = useGoogleSearch(term)
  // const data = Response;



  console.log(data)

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
                <Link style={{ 'fontSize': '14px' }} to="/all">
                  All
                </Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon style={{ 'fontSize': '14px' }} />
                <Link style={{ 'fontSize': '14px' }} to="/images">
                  Images
                </Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferOutlinedIcon style={{ 'fontSize': '14px' }} />
                <Link style={{ 'fontSize': '14px' }} to="/shopping">
                  Shopping
                </Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon style={{ 'fontSize': '14px' }} />
                <Link style={{ 'fontSize': '14px' }} to="/maps">
                  Maps
                </Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon style={{ 'fontSize': '14px' }} />
                <Link style={{ 'fontSize': '14px' }} to="/news">
                  News
                </Link>
              </div>
              <div className="searchPage__option">
                <MoreVertOutlinedIcon style={{ 'fontSize': '14px' }} />
                <Link style={{ 'fontSize': '14px' }} to="/more">
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

      {term && (

        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for <strong>{term}</strong>
          </p>
          {data?.items.map((item, index) => (
            <div className="searchPage_result" key={index}>
              <a href={item.link}> {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
              )} {item.displayLink} <ArrowDropDownIcon style={{ "fontSize": "20px" }} /></a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultDescription">
                {item.snippet}
              </p>
            </div>
          ))}


        </div>

      )}


    </div>
  )
}

export default SearchPage
