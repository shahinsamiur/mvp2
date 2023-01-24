
import Link from 'next/link'
import  Style  from '@/styles/signIn.module.css'
import Image from 'next/image'
import Logo from "../public/images/Amazon_logo.svg"
import  Head  from 'next/head'
import { useState } from 'react'


export default function Home() {



  const [errorMessage, seterrorMessage]=useState('')
  const [userName, setusername]=useState('')
  const [password, setpassword]=useState('')



const userNamehandle=(event:any)=>{ 
  // console.log(event.target.value)
  setusername(event.target.value)
  }

const passwordhandle=(event:any)=>{
  setpassword(event.target.value)
  // console.log(event.target.value)
}

const signIn=async()=>{
  console.log(userName.length, password.length, errorMessage)
  
  
 if(userName.trim().length>=3&&password.trim().length>=8) seterrorMessage('')
 if(password.length<=7)  {seterrorMessage("password should be at last 8 cherecter")}
 if(password.trim().length==0)  {seterrorMessage("password is missing ")}
 if(userName.length<3) {seterrorMessage("username invalied ")}
 if(userName.trim().length==0)  {seterrorMessage("username is  missing ")}


//fetch data here 
alert("requesting now ")
const res =await fetch('http://localhost:4000/signin')
const data=await res.json()
console.log(data)

}





  return (
    <>
    <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in | Amazon</title>
    </Head>
    
    <Image className={Style.logo} src={Logo} width={100} height={50} alt="there is no image " /> 

    <div className={Style.form}>

      <div className={Style.header}>Sign in</div>
      <p className={Style.error}>{errorMessage}</p>
      <div className={Style.inputTitle}>Your User Name:</div>

      <input className={Style.Input} type="text" onChange={userNamehandle}/>

      <div className={Style.inputTitle}>Your  Password:</div>

      <input className={Style.Input} type="password" onChange={passwordhandle}/>

      <p className={Style.p}>By continuing, you agree to Amazon's Conditions of
       Use and Privacy Notice.</p>
      <p className={Style.NeedHelp}>Forget Password?</p>


      {/* <Link href="/home"> */}
      <button className={Style.SignIn} onClick={signIn} >Sign In</button>
      {/* </Link> */}

      <p className={Style.NewTo}>New to Amazon</p>

 <Link href="/signup" className={Style.Link}><button className={Style.createAmazon}>create your amazon account </button></Link>
    </div>

 
    </>
  )
}
