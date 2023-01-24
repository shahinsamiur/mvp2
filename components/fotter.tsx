import React from 'react'
import Link from 'next/link'
import { HiHome } from "react-icons/hi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaShoppingCart} from "react-icons/fa";
import Style from "../styles/home.module.css"

export default function fotter() {
  return (
    <div className={Style.FotterButton}>

<Link href="home">
    <div><HiHome className={Style.home}/></div>
    </Link>


    <Link href="order">
    <div >  <FaShoppingCart className={Style.ShoppingCart}/></div>
    </Link>
        <div> <RiEmotionHappyLine className={Style.EmotionHappyLine}/></div>
    
  
   
  </div>
  )
}
