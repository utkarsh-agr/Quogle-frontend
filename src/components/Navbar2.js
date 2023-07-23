import { NavLink as ReactLink } from "react-router-dom";
import logo from '../quogle_logo_250.png';
import '../components_css/Navbar2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faMagnifyingGlass,faBell,faMoon,faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "reactstrap";


const Navbar2=()=>{
    return(
        <nav id="header1">

            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </label>

            <label class="label_logo">
                <NavLink tag={ReactLink} to="/"><img src={logo} alt="logo" className="navBarlogo" style={{width: "90px", marginLeft: "35px"}} /></NavLink> 
            </label>

                <ul>

                    <li class="li1"><NavLink tag={ReactLink} to="/">My feed</NavLink></li>
                    <li class="li1"><NavLink tag={ReactLink} to="/explore" >Explore</NavLink></li>
                    <li class="li1"><NavLink tag={ReactLink} to="/bookmarks" >Bookmarks</NavLink></li>
                    <li class="li1"><NavLink tag={ReactLink} to="/more_from_quogle" >More from Quogle</NavLink></li>
                    <li class="li2"><NavLink tag={ReactLink} to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} /></NavLink></li>
                    <li class="li3"><NavLink tag={ReactLink} to="/write"><button className="button1"><FontAwesomeIcon icon={faPen} style={{color: "#ffffff",}} />&nbsp;Write</button></NavLink></li>
                    <li class="li3"><NavLink tag={ReactLink} to="/notification"><FontAwesomeIcon icon={faBell} /></NavLink></li>
                    <li class="li3"><NavLink tag={ReactLink} to="/home"><FontAwesomeIcon icon={faMoon} /></NavLink></li>
                    <li class="li3"><NavLink tag={ReactLink} to="/profile"><FontAwesomeIcon icon={faUser} /></NavLink></li>

                </ul>
            
        </nav>

    );
};

export default Navbar2;