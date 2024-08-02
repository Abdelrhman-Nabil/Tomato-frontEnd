import {createContext, useCallback, useEffect, useState } from "react";

export const AuthContext=createContext({
    isLoggedIn: false,
    logIn:()=>{},
    logOut:()=>{},
    authIsOpen:false,
    setAuthIsOpen:()=>{}
})
let logOutTimer;
export const AuthProvider=({children})=>{
    const[token,setToken]=useState(false)
    const[userId,setUserId]=useState(null)
    const[tokenExpirationDate,setTokenExpirationDate]=useState();
  
   const logIn=useCallback((uid,token,expirationData)=>{
    setToken(token)
    const tokenExpirationDate= expirationData || new Date(new Date().getTime() + 1000 *60 * 60 )
    setTokenExpirationDate(tokenExpirationDate)
    setUserId(uid)
    localStorage.setItem("userData", JSON.stringify({userId:uid,token:token,expiration:tokenExpirationDate.toISOString()}))

} ,[])
  
const logOut = useCallback(() => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null)
    localStorage.removeItem('userData');
    localStorage.removeItem('userCart');
  }, []); 
  useEffect(()=>{
    if(token && tokenExpirationDate){
      const reminingTime=tokenExpirationDate.getTime() - new Date().getTime();
      logOutTimer=setTimeout(logOut,reminingTime);
    }else{
      clearTimeout(logOutTimer);
    }
  },[logOut,token,tokenExpirationDate])
  const value={isLoggedIn:!!token ,token:token,logIn,logOut,userId}

return(
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
)
}
