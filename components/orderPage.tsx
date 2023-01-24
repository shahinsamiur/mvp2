import React from 'react'
import Image from 'next/image'
import Styles from "../styles/orderPage.module.css"


export default function orderPage() {
  return (
    <div className={Styles.card}>

    <Image src="https://m.media-amazon.com/images/I/81ARh719W9L._AC_SX522_.jpg" 
    width={100} 
    height={109}
    alt="no image"
    className={Styles.Image}
    >
    </Image>

<h3 className={Styles.head}>Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5</h3>
<h2 className={Styles.price}>price :$120 <sup>x</sup>2</h2> 


    </div>
  )
}
