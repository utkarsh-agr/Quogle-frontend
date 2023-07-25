import girl from "../girlWalking.gif"
import "./css/Login.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faFaceGrinWink } from '@fortawesome/free-solid-svg-icons';
import Base1 from "../components/Base1";
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Form, FormFeedback, FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { logIn } from "../Services/user-service";
import {NavLink} from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";

const Login=()=> {

  const [data,setData]=useState({

    username:'',
    password:'',

  })

  const [error,setError]=useState({
    errors:{},
    isError:false,
  })

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const handleChange=(event,property)=>{
    setData({...data, [property]:event.target.value});
  }

  const submitForm=(event)=>{
      event.preventDefault();

      
      console.log(data);

      //Validate the data

      //calling server api for logging in
      logIn(data).then((resp)=>{
        console.log(resp)
        console.log("successfully Logged")
      }).catch((error)=>{
        console.log(error);
        console.log("error log");

        setError({
          errors:error,
          isError:true
        })
  
      })

  }


  return (
    <Base1>
    
      <div className="gif_image" style={{marginLeft:"0", marginRight:"0"}}>
        <Card className="gif" style={{border:"0", margin:"0", marginLeft:"0", marginRight:"0"}}>
          <CardBody>
              <img src={girl} alt="" style={{width: "100%",marginTop: "100px"}} />
          </CardBody>
            
        </Card>

        <Container className="image_form" style={{margin:"0",marginLeft:"0", marginRight:"0"}}>

            <Card className="form">

              <CardHeader style={{textAlign:"center", padding:"7%"}}>
                  <h2 style={{color: "#37a1ce"}}><strong> <FontAwesomeIcon icon={faArrowRightToBracket} style={{color: "#37a1ce"}}></FontAwesomeIcon>&nbsp;LOGIN</strong></h2>

              </CardHeader>

              <CardBody>

              <Form onSubmit={(e)=>submitForm(e)}>

                <FormGroup>
                    <Input type="text" className="input" id="email" name="userEmail" placeholder="Enter your email" onChange={(e)=>handleChange(e,'username') } value={data.username} style={{marginTop:"5%"}} invalid={error.errors?.response?.data?.username? true:false} />
                    <FormFeedback style={{marginLeft:"10%"}}>
                      {error.errors?.response?.data?.username}
                    </FormFeedback>
                     <br />

                </FormGroup>

                <FormGroup>
                    <Input type="password" className="input" id="password" name="userPassword" onChange={(e)=>handleChange(e,'password')} value={data.password} placeholder="Enter your password" invalid={error.errors?.response?.data?.password? true:false} />
                    <FormFeedback style={{marginLeft:"10%"}}>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                    <br />
                </FormGroup>    
                    <Button className="submitButton" type="submit" style={{fontSize:"80%",width:"20%",marginLeft:"40%", marginRight:"40%"}}>Quogle&nbsp;<FontAwesomeIcon icon={faFaceGrinWink} /></Button>

                    

                
                <br/>

                <NavLink tag={ReactLink} to="/register" style={{textAlign:"right",color:"blue"}}>Register here!!</NavLink>
                
                </Form>

              </CardBody>

              <CardFooter style={{display:"none"}}>
              
              </CardFooter>
               
               

            </Card>

            
           
        </Container>

      </div>

      </Base1>
  );
};

export default Login;
