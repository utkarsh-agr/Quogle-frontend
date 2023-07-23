import girl from "../girlWalking.gif"
import "./css/Login.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faFaceGrinWink } from '@fortawesome/free-solid-svg-icons';
import Base1 from "../components/Base1";
import { Button, Card, CardBody, CardFooter, CardHeader, Container, Form, FormGroup, Input } from "reactstrap";
import { useEffect, useState } from "react";
import { logIn } from "../Services/user-service";

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
                    <Input type="email" className="input" id="email" name="userEmail" placeholder="Enter your email" onChange={(e)=>handleChange(e,'username')} value={data.userEmail} style={{marginTop:"5%"}} />
                     <br />
                    <Input type="password" className="input" id="password" name="userPassword" onChange={(e)=>handleChange(e,'password')} value={data.userPassword} placeholder="Enter your password" /><br />
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

export default Login;
