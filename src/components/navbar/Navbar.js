import "./Navbar.css";
import Search from '@mui/icons-material/Search';
import Login from "../../pages/login";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for notices or courses"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">


            <Link to="/login"><span className="topbarLink" onClick={() => <Login />}>LOGIN</span>
</Link>
            </div>
        </div>
        
    );
}
