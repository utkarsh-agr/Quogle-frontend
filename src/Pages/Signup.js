import { Button, Card, CardBody, CardFooter, CardHeader, Container, FormGroup, Form, Input, FormFeedback } from "reactstrap";
import Base1 from "../components/Base1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faFaceGrinWink } from "@fortawesome/free-solid-svg-icons";
import './css/Signup.css';
import loader from "../quogle-loader.gif"
import { useState } from "react";
import { signup } from "../Services/user-service";

import {NavLink} from "reactstrap";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup=()=>{ 

  const navigate=useNavigate();

  const [data,setData]=useState({
    userFullName:'',
    userEmail:'',
    userPassword:''
  })

  const [error,setError]=useState({
    errors:{},
    isError:false,
  })

  const handleChange=(event,property)=>{
    setData({...data, [property]:event.target.value});
  }

  const submitForm=(event)=>{
    event.preventDefault();

    if(error.isError){

        
        toast.error("Data invalid, correct to submit..");
        setError({...error,isError:false})
        return;
      
    }

    console.log(data);

    //Validate the data

    //calling server api for logging in
    signup(data).then((resp)=>{
      console.log(resp)
      console.log("successfully registered")

      toast.success("Successfully registered!! Kindly login to continue.. ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        setData({
          userFullName:'',
          userEmail:'',
          userPassword:''
        });

       setTimeout(()=>{
          navigate('/login');
       },3000);
      
     
    }).catch((error)=>{
      console.log(error);
      console.log("error log");
      
      setError({
        errors:error,
        isError:true
      });

      if(error.response?.data?.message? true:false){
        toast.error(error.response?.data?.message);
        setError({...error,isError:false});
      }
      

    });

}

    return (
        <Base1>
        
          <div className="gif_image" style={{marginLeft:"0", marginRight:"0"}}>
            <Card className="gif" style={{border:"0", margin:"0", marginLeft:"0", marginRight:"0"}}>
              <CardBody>
                  <img src={loader} alt="" style={{width: "100%",marginTop: "100px"}} />
              </CardBody>
                
            </Card>
    
            <Container className="image_form" style={{margin:"0",marginLeft:"0", marginRight:"0"}}>
    
                <Card className="form">
    
                  <CardHeader style={{textAlign:"center", padding:"7%"}}>
                      <h2 style={{color: "#37a1ce"}}><strong> <FontAwesomeIcon icon={faArrowRightToBracket} style={{color: "#37a1ce"}}></FontAwesomeIcon>&nbsp;Register here!!</strong></h2>
    
                  </CardHeader>
    
                  <CardBody>
    
                  <Form onSubmit={(e)=>submitForm(e)}>
    
                    <FormGroup>

                        <Input type="text" className="input" id="fullname" name="userFullName" placeholder="Enter your Full Name" onChange={(e)=>handleChange(e,'userFullName')} value={data.userFullName} style={{marginTop:"3%",marginBottom:0}} invalid={error.errors?.response?.data?.userFullName? true:false} />
                        

                         <FormFeedback style={{marginLeft:"10%"}}>
                          {error.errors?.response?.data?.userFullName }
                         </FormFeedback>

                         <br />
                    </FormGroup>

                    <FormGroup>

                        <Input type="text" className="input" id="email" name="userEmail" placeholder="Enter your email" onChange={(e)=>handleChange(e,'userEmail')} value={data.userEmail} style={{marginTop:"3%",marginBottom:0}} invalid={error.errors?.response?.data?.userEmail? true:false} />
                        <FormFeedback style={{marginLeft:"10%"}}>
                          {error.errors?.response?.data?.userEmail }
                         </FormFeedback>
                         <br />

                    </FormGroup>

                    <FormGroup>
                        <Input type="password" className="input" id="password" name="userPassword" onChange={(e)=>handleChange(e,'userPassword')} value={data.userPassword} placeholder="Enter your password" style={{marginTop:"3%",marginBottom:0}} invalid={error.errors?.response?.data?.userPassword? true:false} />
                        <FormFeedback style={{marginLeft:"10%"}}>
                          {error.errors?.response?.data?.userPassword }
                         </FormFeedback>
                       

                    </FormGroup>

                        <Button className="submitButton" type="submit">Quogle&nbsp;<FontAwesomeIcon icon={faFaceGrinWink} /></Button>
    
                    

                    <br/>

                      <NavLink tag={ReactLink} to="/login" style={{textAlign:"right",color:"blue"}}>Login here!!</NavLink>
                    
                    </Form>
    
                  </CardBody>
    
                  <CardFooter style={{display:"none"}}></CardFooter>
                   
                   
    
                </Card>
    
                
               
            </Container>
    
          </div>

          <ToastContainer/>
    
          </Base1>
      );

};

export default Signup;