import { Button, Card, CardBody, CardFooter, CardHeader, Container, FormGroup, Form, Input } from "reactstrap";
import Base1 from "../components/Base1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faFaceGrinWink } from "@fortawesome/free-solid-svg-icons";
import './css/Signup.css';
import loader from "../quogle-loader.gif"
import { useState } from "react";
import { signup } from "../Services/user-service";

const Signup=()=>{ 

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

    console.log(data);

    //Validate the data

    //calling server api for logging in
    signup(data).then((resp)=>{
      console.log(resp)
      console.log("successfully registered")
    }).catch((error)=>{
      console.log(error);
      console.log("error log");
    })

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

                        <Input type="text" className="input" id="fullname" name="userFullName" placeholder="Enter your Full Name" onChange={(e)=>handleChange(e,'userFullName')} value={data.userFullName} style={{marginTop:"3%",marginBottom:0}} />
                         <br />

                        <Input type="email" className="input" id="email" name="userEmail" placeholder="Enter your email" onChange={(e)=>handleChange(e,'userEmail')} value={data.userEmail} style={{marginTop:"3%",marginBottom:0}} />
                         <br />
                        <Input type="password" className="input" id="password" name="userPassword" onChange={(e)=>handleChange(e,'userPassword')} value={data.userPassword} placeholder="Enter your password" style={{marginTop:"3%",marginBottom:0}} /><br />
                        <Button className="submitButton" type="submit">Quogle&nbsp;<FontAwesomeIcon icon={faFaceGrinWink} /></Button>
    
                    </FormGroup>
                    
                    </Form>
    
                  </CardBody>
    
                  <CardFooter style={{display:"none"}}></CardFooter>
                   
                   
    
                </Card>
    
                
               
            </Container>
    
          </div>
    
          </Base1>
      );

};

export default Signup;