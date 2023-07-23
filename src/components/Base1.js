
import Navbar1 from './Navbar1';

const Base1=({title="Welcome",children})=>{
    return (

        <div className="container-fluid" style={{margin:"0",padding:"0"}}>
                <Navbar1 />
 
                {children}

                <div style={{margin: "0", padding: "0", background:"#37a1ce", height:"100px"}}></div>
        </div>
        

    );
};

export default Base1;