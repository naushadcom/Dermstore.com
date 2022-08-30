import React from "react";
import Icon from "./Icons";

import styled from "./Footer.module.css";
const Footer = () => {
  return (
    <>
  <hr />
  {/* main div */}
    <div className={styled.mainFooter}>

{/* first div  */}
      <div className={styled.firstdiv}>
          
          {/* first div child1 */}

        <div className={styled.firstdivchild1}>
        <p>
            Sign up to our newsletters and receive the latest exclusive
            discounts and deals
          </p> 
          <button style={{marginTop:"20px"}} className={styled.firstDivchlid1Btn} >SIGN ME UP</button>
        </div>

          {/* first div child2 */}


        <div className={styled.firstdivchild2}>
                      <p>Connect with us</p>
                      <div style={{marginTop:"20px"}}>
                      <Icon />
                      </div>
     
        </div>
        <div>
 
        </div>

      </div>

{/* second div */}

      <div className={styled.seconddiv}>
        <div className={styled.secondDivfirstchild}>
        <hr />
          <p>Customer Service</p>
          <p className={styled.hoverEffect}>Help Center/FAQs</p>
          <p className={styled.hoverEffect}>Returns</p>
          <p className={styled.hoverEffect}>Shipping Information</p>
          <p className={styled.hoverEffect}>Order Status</p>
          <p className={styled.hoverEffect}>Cookie Settings</p>
        </div>


        <div>
        <hr />
          <p>My Account</p>
          <p className={styled.hoverEffect}>Manage My Subscriptions </p>
          <p className={styled.hoverEffect}>My Rewards</p>
          <p className={styled.hoverEffect}>My Favorites</p>
          <p className={styled.hoverEffect}>Referrals</p>
          <p className={styled.hoverEffect}>Order History</p>
        </div>


        <div>
        <hr />
          <p>Company</p>
          <p className={styled.hoverEffect}>About Us</p>
          <p className={styled.hoverEffect}>Press</p>
          <p className={styled.hoverEffect}>What is Klarna?</p>
        </div>


        <div>
        <hr />
        <p>Legal</p>
        <p className={styled.hoverEffect}>Privacy</p>
        <p className={styled.hoverEffect}>Terms & conditions</p>
        <p className={styled.hoverEffect}>Mordern Slavery Statement</p>
        <p className={styled.hoverEffect}>Product Recall</p>
        <p className={styled.hoverEffect}>Accessibility</p>
        </div>
      </div>
     
      {/* third div */}
      <div className={styled.thireddiv}>
          {/* <p>kk</p> */}
        <div className={styled.lastDivpadd}>

        <h1>T H G</h1>
         <p>2022 © The Hut.com Ltd.</p>
        </div>

        <div className={styled.thiredDiv_secondPart}>
<div>
   <img className={styled.img} src="data:image/png;base64,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" alt="" />
        
</div>
<div>
  <img className={styled.img} src="data:image/png;base64,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" alt="" />
  
</div>
<div>
<img className={styled.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8BtaMvb6oKZkrSElEfn3v-LdwHFUcErotg&usqp=CAU" alt="" />
</div>
<div>
  <img className={styled.img} src="data:image/png;base64,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" alt="" />

</div>
<div>
  <img className={styled.img} src="data:image/png;base64,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" alt="" />

</div>
<div>
<img className={styled.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWnHHQ2V6LObt9HrHGwWXQmUgfsh2uN_zrg&usqp=CAU" alt="" />

</div>
<div>
  <img className={styled.img} src="data:image/png;base64,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" alt="" />
</div>
<div><img className={styled.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qhgXmhOU8rBTWI_8UwHHDQ7boSs33t3dkw&usqp=CAU" alt="" /></div>
<div><img className={styled.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobEnje0HgGavyldETDsw8kcMbA7jQ4C376g&usqp=CAU" alt="" /></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;