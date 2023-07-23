import { myAxios } from "./helper";

export const logIn=(user)=>{
    return myAxios.post("/api/v1/auth/login",user).then((response)=>response.data);
};

export const signup=(user)=>{
    return myAxios.post("/api/v1/auth/register",user).then((response)=>response.data);
};