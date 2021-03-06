import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//images
import avatarImage from '../../images/profile.jpg';

const Sidebar = () => {
    useEffect(() => {
        const body = document.getElementsByClassName('body-container')[0]
        body.addEventListener('scroll', onScroll)
    }, [])

    const onScroll = () => {
        const el = document.getElementsByClassName('sidebar-container')[0]
        const child = document.getElementsByClassName('menu-section')[0]
        const parent = document.getElementsByClassName('body-container')[0]
        // const rect = el.getBoundingClientRect()
        // let height 
        if(parent.scrollTop > child.offsetTop){
            el.style.transform = `translateY(${parent.scrollTop -child.offsetTop}px)`
            // el.style.transform = `translateY(${parent.scrollTop - (rect.height -  parent.offsetHeight)}px)`
        }
        if(parent.scrollTop === 0){
            el.style.transform = `translateY(${0}px)`
        }
    }

    return(
        <div className='sidebar-container'>
            <div className='profile-section'>
                {/* <div className='profile-section--cover' style={{ backgroundImage: `url(https://source.unsplash.com/4jd8B_t-qgI`}}> */}
                    <div className='profile-section--cover-profile-picture'>
                        <img src={avatarImage} alt='profile' />
                    </div>
                {/* </div> */}
                <div className='profile-section--username'>
                    <span className='profile-section--username-name'>Yashveer Talan</span>
                    <span className='profile-section--username-username'>@yv-official</span>
                </div>
                <div className='profile-section--userdescription'>
                    <span className='profile-section--userdescription-description'>Web & App Developer at Entrepreneurship Cell, HBTU Kanpur</span>
                </div>
                <div className='profile-section--userdetails'>
                    {/* <div className='profile-section--userdetails-posts'>
                        <span className='profile-section--userdetails-posts-number'>10</span>
                        <span className='profile-section--userdetails-posts-title'>Posts</span>
                    </div> */}
                    <div className='profile-section--userdetails-connections'>
                        <span className='profile-section--userdetails-connections-title'>Connections</span>
                        <span className='profile-section--userdetails-connections-number'>45</span>
                    </div>
                    <div className='profile-section--userdetails-hits'>
                        <span className='profile-section--userdetails-hits-title'>Hits</span>
                        <span className='profile-section--userdetails-hits-number'>70</span>
                    </div>
                </div>
            </div>
            <div className='menu-section'>
                <ul>
                    <NavLink to='/feeds' className='link' activeClassName='link selected'><li>Feeds</li></NavLink>
                    <NavLink to='/clubs'  className='link' activeClassName='link selected'><li>Clubs</li></NavLink>
                    <NavLink to='/ask' className='link' activeClassName='link selected'><li>Ask HBTU</li></NavLink>
                    <NavLink to='/blogs' className='link' activeClassName='link selected'><li>Blogs</li></NavLink>
                </ul>
            </div>
            
        </div>
    );
}

export default Sidebar;