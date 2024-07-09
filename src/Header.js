import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from  "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BuisnessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


function Header() {
  return (
    <div className='header'>


        <div className='header__left'>
        <img 
            src="linkedin.png" 
            alt=""
        />

            <div className="header__search">
                <SearchIcon />
                <input type="text"/>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BuisnessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="/imesh.jpg" title='me'/>
        </div>
        
    </div>
  )
}

export default Header