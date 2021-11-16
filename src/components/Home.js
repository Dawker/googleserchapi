import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import './Home.css'
import Search from './Search';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <AppsIcon className="home_ImagesFirst --active" />
          <Avatar style={{ "fontSize": "12px" }} className="home_Images" />
        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <div className="home__footer">
        Google clone! No rights reserved - this is a demo!
      </div>
    </div>
  )
}

export default Home
