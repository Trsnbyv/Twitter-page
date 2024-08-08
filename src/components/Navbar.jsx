import { Link, NavLink } from "react-router-dom";
import TwitterLogo from "../assets/images/twitter-logo.svg";
import {
  HomeIcon,
  BookmarkIcon,
  ExploreIcon,
  ListIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  AvatarIcon,
  DotsIcon,
} from "../assets/images/Icons";
import Button from "./Button";

function Navbar() {
  return (
    <div className="w-[25%] pt-[31px] overflow-y-auto border-r-[1px] border-[#D8D8D8] h-[100vh] flex flex-col items-center">
      <div>
        <Link to={"/"} className="mb-[49px] block">
          <img src={TwitterLogo} alt="logo" width={40} height={33} />
        </Link>
        <ul className="flex flex-col mb-[30px] gap-[30px]">
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/home"}
            >
              <img src={HomeIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/explore"}
            >
              <img src={ExploreIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/notifications"}
            >
              <img src={NotificationIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/messages"}
            >
              <img src={MessagesIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/bookmarks"}
            >
              <img src={BookmarkIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/lists"}
            >
              <img src={ListIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Lists</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/profile"}
            >
              <img src={ProfileIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="duration-300 flex items-center space-x-[20px] font-bold"
              to={"/more"}
            >
              <img src={MoreIcon} alt="logo" />
              <span className="text-[18px] leading-[23px]">More</span>
            </NavLink>
          </li>
        </ul>
        <Button title={'Tweet'} extraStyle={'py-[15px] px-[90px]'}/>
        <div className="flex items-center mt-[100px] mb-[20px]">
            <img src={AvatarIcon} alt="avatar" width={50} height={50} />
            <div className="flex flex-col ml-[10px] mr-[42px]">
              <strong className="text-[16px] leading-[21px] font-semibold">Bobur</strong>
              <p className="text-[16px] leading-[21px]">@bobur_mavlonov</p>
            </div>
            <img src={DotsIcon} alt="dots" width={17} height={4} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
