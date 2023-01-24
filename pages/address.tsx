import React from 'react'
import Image from 'next/image'
import styles from "../styles/address.module.css"
import Logo from "../public/images/Amazon_logo.svg"
import {FaUserAlt} from "react-icons/fa";
import Link from 'next/link';
import { RiLogoutCircleLine } from 'react-icons/ri';
import  Head  from 'next/head'


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
      <FaUserAlt className={styles.profilepicIcon} />
      <div className={styles.username}>MDAshrafuIslam</div>
      {/* <div className={styles.blance}>Available Blance :$5000</div>
      <div className={styles.topmessage}>
        **It takes less then 1 hour and muximum 24 hours **
      </div> */}
      <Link href="/home">
      <button className={styles.cencleButton}>Cencle</button>
      </Link>
      <div className={styles.card}>
        <div className={styles.card1} />
        <button className={styles.savebutton}>Save</button>

        <div className={styles.oldAddress}>Old Address</div>

        <div className={styles.usdtbox}>
        <div className={styles.usdtaddress}>0xae27c6186e0808eba6e7d605586</div>
       </div>

       <div className={styles.NewAddress}>New Address</div>
        <input className={styles.NewAddressInput} type="text" />
       {/* <div className={styles.Rechargeamounttext}>Recharge Amount:</div>
        <input className={styles.Rechargeinput} type="number" /> */}



        {/* <button className={styles.allbutton}>All</button> */}
      </div>

    </div>
  );
};

export default WithdrawPage;

