import React from 'react'
import Link from 'next/link'
import { BiArrowBack } from "react-icons/bi";
import  Head  from 'next/head'
export default function Qp() {
  return (
    <div style={{padding:"10px", }}>

<Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Amazon</title>
    </Head>








      
      <Link href="/home" style={{ display:"inline-block", color:"black"}}>
      <BiArrowBack style={{width:"20px", height:'20px'}}/>
      </Link>


<h1 style={{textAlign: 'center' }}>platform qualification</h1>

  <p>Amazon Shopping E-Commerce Co., Ltd. was established on September 5,
  2018, and strives to build the first brand of the global e-commerce task supply and demand 
  platform. Cooperating with the world's largest e-commerce giant Amazon e-commerce platform,
  there are more than 67,
  000 cooperative merchants worldwide and more than 3 million users worldwide.
  All contracted merchants have passed the credit evaluation certification and paid a 
  certain deposit to ensure that each user can smoothly get the commission after completing
  the order. The platform is partnered with the Amazon e-commerce giant. It can effectively
  help merchants improve their store rankings and increase store traffic. Improve the product
  sales of online store sellers and enhance the overall reputation of the store.
<br />
<br />
<br />
<br />
<br />
  Amazon's smart cloud matching order system automatically matches
  10-70% of the payer's account balance. The buyer purchases the item 
  and confirms the return payment.You can earn the commission paid by the seller,
  and the Amazon store product commission is 3%.The promotion fee paid by the e-commerce
  company for the Amazon store is 4% of the promotion amount.In order to ensure the normal
  order placement of commodity orders issued by e-commerce merchants, it is strictly 
  forbidden for one person to execute orders with multiple accounts.The system detects 
  the IP address and real name associated with the account. If the two are the same, 
  it will be automatically detected and frozen for 3 months, and will be permanently 
  included in the order blacklist, and will not be able to participate in the order work
  for life.
  </p>



    </div>
  )
}
