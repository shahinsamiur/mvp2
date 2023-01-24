import Image from 'next/image'
// import React from 'react'
import Logo from "../public/images/Amazon_logo.svg"
import  Style  from '@/styles/signup.module.css'
import Link from 'next/link'
import { useState } from 'react'










export default function signup() {


  const [errorMessage, seterrorMessage]=useState('')

const [userName,setuserName]=useState()
const [useremail,setuseremail]=useState('')
const [userPassword,setuserPassword]=useState('')
const [userRePassword,setuserRePassword]=useState('')
const [Reff,setReff]=useState('')


const userNamehandle=(e:any)=>{
  let value=e.target.value.trim()
  if(!value)seterrorMessage('username is missing ')
 else if(value.length<=3) seterrorMessage('username should be more than 3 ')
 else {setuserName(value)
   seterrorMessage("")}
}


const useremailhandle=(e:any)=>{
  
  let value=e.target.value.trim()

 const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(value)) {
      
      seterrorMessage('')
      setuseremail(value)
    } else {
      seterrorMessage('Invalid Email')
    }

  if(!value)seterrorMessage('username is missing ')
}


const userPasswordhandle=(e:any)=>{
  let value=e.target.value.trim()
  if(value.length<=7) seterrorMessage('password should be more than 8 ')
 else if(!value)seterrorMessage('password is missing ')
 else {setuserPassword(e.target.value)
   seterrorMessage("")}
  
}


const userRePasswordhandle=(e:any)=>{
  let value=e.target.value.trim()
  if(userPassword!=value) seterrorMessage('comform your password')
  else seterrorMessage('')
  setuserRePassword(e.target.value)
}

const Reffq=(e:any)=>{
  if (!Reff) seterrorMessage("invalid refarel id ")
  else seterrorMessage('')
  setReff(e.target.value)
}



const signupHandle=async()=>{

const rawData={
  userName:userName,
  email:useremail,
  password:userPassword,
  Reff:Reff
}


  if(!errorMessage&&userName&&useremail&&userPassword&&Reff&&userRePassword){
    const res=await fetch("http://localhost:4000/signup",{
      method:"Post",
      body:JSON.stringify(rawData)
    })

    

    console.log(res)

  }else{
    seterrorMessage('something is worng')
  }
}




  return (
    <>
    <Image src={Logo} width={100}  height={100} className={Style.logo} alt="there is no image"></Image>
    
    <div className={Style.form}>

        <div className={Style.header}>Create account</div>
        <p className={Style.error}>{errorMessage}</p>
        <div className={Style.inputTitle}>Your User Name:</div>
        <input className={Style.Input} type="text" onChange={userNamehandle} />
        <div className={Style.inputTitle}>Your Email:</div>
        <input className={Style.Input} type="text" onChange={useremailhandle}/>
        <div className={Style.inputTitle}>Your Password:</div>
        <input className={Style.Input} type="password" onChange={userPasswordhandle}/>
        <div className={Style.inputTitle} >Re-type Password:</div>
        <input className={Style.Input}type="password" onChange={userRePasswordhandle}/>
        <div className={Style.inputTitle}> Reffer Id:</div>
        <input className={Style.Input} type="text" onChange={Reffq}/>

        <p className={Style.p}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className={Style.Button} onClick={signupHandle}>Signup</button>

        <p className={Style.LoginText}>Already have an account?</p> 
        <Link href="/">
        <h1 className={Style.Login}> Sign in</h1> 
        </Link>
    </div>
    
    
    
    </>
  )
}
