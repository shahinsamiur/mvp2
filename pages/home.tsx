import Image from 'next/image'
import React from 'react'
import Style from "../styles/home.module.css"
import Logo from "../public/images/Amazon_logo.svg"
import { FaShoppingCart,FaMailBulk ,FaWallet,FaEnvelopeOpen,FaRegClipboard,FaCopy,FaUserAlt} from "react-icons/fa";
import Fotter from '@/components/fotter';
import Marquee from "react-fast-marquee";
import Link from 'next/link';
import  Head  from 'next/head'

export default function home() {



// const  FaShoppingCarthandleClick =()=>{
// alert("please wait , This page is under devoloping ")
// }

const  FaMailBulkhandleClick =()=>{
  alert("You have to complete at last $3000 order for get your refarel link ")
  }




  const  FaEnvelopeOpenhandleClick =()=>{
    alert("This function isn't available now ")
    }
  












  return (
  <div className={Style.page}>


<Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Amazon</title>
    </Head>











  <div className={Style.header}>
    <Image src={Logo} width={100} height={100} alt="there is no image " className={Style.logo}></Image>

    <div className={Style.Profile}>
    {/* logo is here  */}

    <h1 className={Style.userName}> <FaUserAlt />
    MDAshraful1212</h1>
    </div>
  </div>


  <div className={Style.TotalAssets}>Total Assets : $5000</div>


  <div className={Style.Buttons}>
  <Link href="/recharge" >
    <button>Recharge</button>
    </Link>


    <Link href="/widthdraw">
    <button>Withdraw</button>
    </Link>

  </div>



     {/* </p> */}
     <div className={Style.MessageSection}>
     <Marquee  gradient={false} speed={60} delay={4}>
      congratulation to samiur for getting a commission of 28.789   |
  </Marquee>
     </div>
 

  <div className={Style.PagesButton}>

<Link href="order"  style={{ display:"inline-block", color:"black"}}>
<div className={Style.pageCard} >
  <FaShoppingCart className={Style.FaShoppingCart} /> 
  <p className={Style.FaShoppingCartTxt}>Order</p>
  </div>
  </Link>

<div className={Style.pageCard} onClick={FaMailBulkhandleClick}>
  <FaMailBulk className={Style.FaMailBulk} />
   <p className={Style.FaWalletTxt}>Invite</p>

  </div>

<Link href="/address"  style={{ display:"inline-block", color:"black"}}>

<div className={Style.pageCard}>
  <FaWallet className={Style.FaWallet}/>
  <p className={Style.FaWalletTxt}>Address</p>
   </div>

   </Link>




<div className={Style.pageCard} onClick={FaEnvelopeOpenhandleClick}>
  <FaEnvelopeOpen className={Style.FaEnvelopeOpen}/>
  <p className={Style.FaEnvelopeOpenTxt}>Support </p>

  </div>


  <Link href="/shoprules"  style={{ display:"inline-block", color:"black"}}>
<div className={Style.pageCard}>
  <FaRegClipboard className={Style.FaRegClipboard}/>
  <p className={Style.FaRegClipboardTxt}> Shop rules </p>
   </div>
   </Link>


   <Link href="/Qp"  style={{ display:"inline-block", color:"black"}}>
<div className={Style.pageCard}>
   <FaCopy className={Style.FaCopy}/> 
   <p className={Style.FaCopyTxt}>  Qualification to the platform  </p>
   </div>
   </Link>


  </div>
 

<Fotter />




  </div>
  )
}
