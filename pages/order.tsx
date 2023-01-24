import React from 'react'
import Image from 'next/image'
import styles from "../styles/order.module.css"
import Logo from "../public/images/Amazon_logo.svg"
import {FaUserAlt} from "react-icons/fa";
import Link from 'next/link';
import Head from 'next/head';
import OrderPage from '@/components/orderPage';
import Fotter from '@/components/fotter';

const WithdrawPage = () => {
  return (
   
    <div className={styles.withdrawPage}>
     
     <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Amazon</title>
    </Head>











      <Link href="/home">
     <Image src={Logo} width={100} height={100} alt="there is no image " className={styles.amazonLogo1Icon}></Image>
     </Link>
     
     
   
      <div className={styles.card}>
      <div className={styles.blance}>Available Blance :$5000</div>
      <div className={styles.OrderNo}>Order No: 12</div>
      <div className={styles.cost}>Cost :$3000</div>
      <div className={styles.profit}>profit:$54</div>

    
      <div className={styles.card1} />
        <button className={styles.widthbutton}>Order Now</button>
      </div>
      <hr className={styles.line} />
<div className={styles.orderlist}>

<OrderPage />
<OrderPage />
</div>
<Fotter />
    </div>
  );
};

export default WithdrawPage;
