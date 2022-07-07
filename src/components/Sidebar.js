import "./Sidebar.css";
import logo from "../utils/PU-logo.png"
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} alt="" className="logo_icon" />
            <Link to="/" style={{ textDecoration: 'none' }}> <SidebarOption active Icon={HomeIcon} text="Home" /> </Link>
            {/* <SidebarOption Icon={SearchIcon} text="Explore" /> */}
            <Link to="/notice"><SidebarOption Icon={MailOutlineIcon} text="Notices" /></Link>
            <Link to="/courses"> <SidebarOption Icon={ListAltIcon} text="Courses" /></Link>
            <Link to="/schedule"> <SidebarOption Icon={ListAltIcon} text="Schedule" /></Link>
            <Link to="/login"> <SidebarOption Icon={PermIdentityIcon} text="Login" /></Link>


            {/* <SidebarOption Icon={PermIdentityIcon} text="Profile" /> */}
            {/* <SidebarOption Icon={MoreHorizIcon} text="login" /> */}

        </div>
    )
}

export default Sidebar;
