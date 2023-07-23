import logo from '../quogle_logo_250.png';
import { NavLink as ReactLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import '../components_css/Navbar1.css';

const Navbar1=()=>{

    return(

        <div id="header1">
        <NavLink tag={ReactLink} to="/"><img src={logo} alt="logo" id="logo" /></NavLink> 
        </div>
    );

};

export default Navbar1;