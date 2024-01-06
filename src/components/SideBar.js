import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { SiYoutubeshorts , SiYoutubegaming } from "react-icons/si";
import { MdSubscriptions , MdOutlineWatchLater, MdWatchLater , MdOutlineMovieCreation , MdOutlinePodcasts  } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaYoutube ,  FaHistory } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { CiVideoOff, CiYoutube } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdMusicalNote } from "react-icons/io";
import { CgMediaLive } from "react-icons/cg";
import { IoNewspaperSharp } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { TbHanger } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackLine } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { BsYoutube } from "react-icons/bs";

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen) ; 

  const charA = useSelector((store) => store.app.charA) ; 

  if(charA == 'a'){
    return (
    <div></div>
  );
  }
 else{
  if(!isMenuOpen) return (
    
    <div className="w-[5%] h-screen shadow-lg pl-3 pr-2 pt-5 overflow-y-scroll  sticky top-20 z-5">
    <ul>
    <Link to="/"><li className="pl-[1px] flex"><FaHouse  className="m-[3px]"/></li></Link>
    <li className="pl-[1px] flex"><SiYoutubeshorts className="m-[3px]" /></li>
    <li className="pl-[1px] flex"><MdSubscriptions className="m-[3px]"/></li>
    </ul>
    <ul>
      <li className="pl-[1px] flex"><GrChannel className="m-[3px] mt-7" /></li>
      <li className="pl-[1px] flex"><FaHistory className="m-[3px]"/></li>
      <li className="pl-[1px] flex"><CiYoutube className="m-[3px]"/></li>
      <li className="pl-[1px] flex"><MdWatchLater className="m-[3px]"/></li>
    </ul>
    <ul>
        <li className="pl-[1px] flex">< BsFire className="m-[3px] mt-7"/></li>
     
        <li className="pl-[1px] flex">< HiOutlineShoppingBag className="m-[3px]"/></li>
        <li className="pl-[1px] flex">< IoMdMusicalNote className="m-[3px]" /></li>
        <li className="pl-[1px] flex"><MdOutlineMovieCreation className="m-[3px]" /></li>
        <li className="pl-[1px] flex"><CgMediaLive className="m-[3px]" /></li>
        <li className="pl-[1px] flex"><SiYoutubegaming className="m-[3px]" /></li>
        <li className="pl-[1px] flex"><IoNewspaperSharp className="m-[3px]" /></li>
        <li className="pl-[1px] flex">< TfiCup className="m-[3px]" /></li>
        <li className="pl-[1px] flex">< PiLightbulbFilamentLight className="m-[3px]" /></li>
        <li className="pl-[1px] flex">< TbHanger className="m-[3px]" /></li>
        <li className="pl-[1px] flex">< MdOutlinePodcasts className="m-[3px]" /></li>
    </ul>
    <ul>
    <li className="pl-[1px] flex mt-5">< BsYoutube className="m-[3px] mt-7" /></li>
    <li className="pl-[1px] flex ">< SiYoutubestudio className="m-[3px]" /></li>
    <li className="pl-[1px] flex ">< SiYoutubemusic className="m-[3px]" /></li>
    <li className="pl-[1px] flex ">< TbBrandYoutubeKids className="m-[3px]" /></li>
   </ul>

   <ul>
   <li className="pl-[1px] flex mt-5">< IoSettingsOutline className="m-[3px] mt-7" /></li>
   <li className="pl-[1px] flex">< FaFontAwesomeFlag className="m-[3px]" /></li>
   <li className="pl-[1px] flex">< IoIosHelpCircleOutline className="m-[3px]" /></li>
   <li className="pl-[1px] flex">< RiFeedbackLine className="m-[3px]" /></li>
   </ul>
   </div>
  ) ; 

  return (
    <div className="w-[15%] h-screen shadow-lg pl-3 pr-2 pt-5 overflow-y-scroll  sticky top-16">
    <ul>
    <Link to="/"><li className="pl-[1px] flex"><FaHouse  className="m-[3px]"/>Home</li></Link>
    <li className="pl-[1px] flex"><SiYoutubeshorts className="m-[3px]" />Shorts</li>
    <li className="pl-[1px] flex"><MdSubscriptions className="m-[3px]"/>Subscriptions</li>
    </ul>
    <h1 className="font-bold pl-3 mt-5">You</h1>
    <ul>
      <li className="pl-[1px] flex"><GrChannel className="m-[3px]" />Channel</li>
      <li className="pl-[1px] flex"><FaHistory className="m-[3px]"/>History</li>
      <li className="pl-[1px] flex"><CiYoutube className="m-[3px]"/>Your videos</li>
      <li className="pl-[1px] flex"><MdWatchLater className="m-[3px]"/>Watch later</li>
    </ul>
    <h1 className="font-bold pl-3 mt-5">Explore</h1>
    <ul>
        <li className="pl-[1px] flex">< BsFire className="m-[3px]"/>Trending</li>
     
        <li className="pl-[1px] flex">< HiOutlineShoppingBag className="m-[3px]"/>Shopping</li>
        <li className="pl-[1px] flex">< IoMdMusicalNote className="m-[3px]" />Music</li>
        <li className="pl-[1px] flex"><MdOutlineMovieCreation className="m-[3px]" />Movies</li>
        <li className="pl-[1px] flex"><CgMediaLive className="m-[3px]" />Live</li>
        <li className="pl-[1px] flex"><SiYoutubegaming className="m-[3px]" />Gaming</li>
        <li className="pl-[1px] flex"><IoNewspaperSharp className="m-[3px]" />News</li>
        <li className="pl-[1px] flex">< TfiCup className="m-[3px]" />Sports</li>
        <li className="pl-[1px] flex">< PiLightbulbFilamentLight className="m-[3px]" />Learning</li>
        <li className="pl-[1px] flex">< TbHanger className="m-[3px]" />Fashion</li>
        <li className="pl-[1px] flex">< MdOutlinePodcasts className="m-[3px]" />Podcasts</li>
    </ul>
    
      <div className="font-bold mr-1 mt-5 pl-3 ">More </div>
    <ul>
    <li className="pl-[1px] flex ">< BsYoutube className="m-[3px]" />Premimum</li>
    <li className="pl-[1px] flex ">< SiYoutubestudio className="m-[3px]" />YoutubeStudio</li>
    <li className="pl-[1px] flex ">< SiYoutubemusic className="m-[3px] " />YoutubeMusic</li>
    <li className="pl-[1px] flex ">< TbBrandYoutubeKids className="m-[3px]" />YoutubeKids</li>
  </ul>

   <ul>
   <li className="pl-[1px] flex mt-5">< IoSettingsOutline className="m-[3px]" />Settings</li>
   <li className="pl-[1px] flex">< FaFontAwesomeFlag className="m-[3px]" />ReportHistory</li>
   <li className="pl-[1px] flex">< IoIosHelpCircleOutline className="m-[3px]" />Help</li>
   <li className="pl-[1px] flex">< RiFeedbackLine className="m-[3px]" />FeedBack</li>
   
   </ul>
   <div className="mt-5">
   About Press Copyright Contact us Creators Advertise Developers
   Terms Privacy Policy & Safety How YouTube works Test new features
    © 2024 Google LLC</div>
   </div>
  )
 }
}

export default SideBar