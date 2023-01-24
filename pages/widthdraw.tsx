import React from 'react'
import Image from 'next/image'
import styles from "../styles/widthdraw.module.css"
import Logo from "../public/images/Amazon_logo.svg"
import {FaUserAlt} from "react-icons/fa";
import Link from 'next/link';
import { RiLogoutCircleLine } from 'react-icons/ri';


const WithdrawPage = () => {
  return (
    <div className={styles.withdrawPage}>
      <Link href="/home">
     <Image src={Logo} width={100} height={100} alt="there is no image " className={styles.amazonLogo1Icon}></Image>
     </Link>
      <FaUserAlt className={styles.profilepicIcon} />
      <div className={styles.username}>MDAshrafuIslam</div>
      <div className={styles.blance}>Available Blance :$5000</div>
      <div className={styles.topmessage}>
        **It takes less then 1 hour and muximum 24 hours **
      </div>
      <div className={styles.card}>
        <div className={styles.card1} />
        <button className={styles.widthbutton}>Withdraw</button>

        <div className={styles.yourUsdtAddress}>Your USDT Address :</div>

        <div className={styles.usdtbox}>
        <div className={styles.usdtaddress}>0xae27c6186e0808eba6e7d605586</div>
       </div>


       <div className={styles.withdrawalamounttext}>Withdrawal Amount:</div>
        <input className={styles.widthdrawinput} type="number" />
        <button className={styles.allbutton}>All</button>


        <div className={styles.addresschangemessage}>If you want change your wallet address then go to 
        address on home page </div>
      </div>


      <hr className={styles.line} />


      <div className={styles.historytext}>You have no widthdraw history</div>
    </div>
  );
};

export default WithdrawPage;
