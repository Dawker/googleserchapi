import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const SearchItem = ({ item }) => {
  return (
    <div className="searchPage_result">
      <a href={item.link}> {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
        <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
      )} {item.displayLink} <ArrowDropDownIcon style={{ "fontSize": "20px" }} /></a>
      <a className="searchPage_resultTitle" href={item.link} target="_blank" rel="noopener noreferrer" >
        <h2>{item.title}</h2>
      </a>
      <p className="searchPage_resultDescription">
        {item.snippet}
      </p>
    </div>
  )
}

export default SearchItem
