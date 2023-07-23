import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faMagnifyingGlass,faBell,faMoon,faUser } from '@fortawesome/free-solid-svg-icons';
import '../components_css/Base.css';
import logo from '../quogle_logo_250.png';
import Navbar2 from './Navbar2';

const Base2=({title="Welcome to the website", children})=>{
    return (
        <div className="container-fluid" style={{margin:"0",padding:"0"}}>
           
           <Navbar2 />

                {children}

            <h1>This is footer</h1>
        </div>
    );
};

export default Base2;