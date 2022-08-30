import React from "react";
import {useNavigate } from "react-router-dom";
import styled from './checkout.module.css'

const Checkout = () => {
    const navigate = useNavigate();
    const handelsumbit =()=>{
    
        alert("Your Order has been placed successfully ")
        navigate('/')
    }
    return (
        <div className={styled.main}>

            <div className={styled.container}>

                <div>
                    
                    <div style={{display:"flex",backgroundColor:"white",padding:"10px"}}>
                        <div>
                            <p style={{fontSize:"25px",fontWeight:"500"}}>Login or sign up</p>
                            <p style={{width:"355px"}}>
                            Checkout faster with saved details and get access to exclusive offers
                            </p>
                        </div>
                        <div style={{paddingTop:"50px",marginLeft:"50px"}}>
                            <button style={{backgroundColor:"black",color:"white",width:"155px",height:"44px",cursor:"pointer"}}>LOGIN/SIGNUP</button>
                        </div>
                    </div>

                    {/* 2ndDiv */}

                    <div className={styled.inputs}>
                        <p style={{fontSize:"25px",fontWeight:"400"}}>Checkout as a guest</p>
                        <p>Complete your order without signing up, or sign up after payment.</p>
                        <br />
                        <h4>1. Email and delivery address</h4>
                        <p>*Email address</p>
                        <input type="text" name="" id="" />
                        
                        <p>*Country/Region</p>
                        <input type="text" name="" id="" />

                        <p>*Full Name</p>
                        <input type="text" name="" id="" />

                        <p>*Address Search</p>
                        <input type="text" name="" id="" placeholder="Start Typing Your Address"/>
                        <p style={{textDecoration:"underline"}}>Or Enter Address Manually</p>

                        <p>*Contact Number</p>
                        <input type="text" name="" id="" placeholder="Mobile Number"/>
                        <p style={{textDecoration:"underline",cursor:"pointer"}}>Why do we need your number?</p>

                    </div>

                    <div style={{padding:"10px",backgroundColor:"white",marginTop:"30px",paddingBottom:"20px"}}>
                        <h4>2. Select Delivery Option</h4>
                        <div style={{backgroundColor: "#E6F0F8",color:"#0065AD",padding:"10px"}}>
                        Please enter your address so we can calculate your delivery options.
                        </div>
                    </div>

                    <div className={styled.credit}>
                        <h4>3. Select Payment Method</h4>

                        <div style={{display:"flex",gap:"20px"}}>
                            <img src="https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg" alt="" />
                        </div>

                        <p>*Card Number</p>
                        <input type="number" name="" id="" placeholder="Card Number"/>

                        <p>*Name on card</p>
                        <input type="text" name="" id="" placeholder="Name"/>

                        <p>*Expiry Date</p>
                        <input type="text" name="" id="" placeholder="DD/YYYY"/>
                        <p>*Security Code (CV2)</p>
                        <input type="password" name="" id="" placeholder="????"/>
                        <br /><br />

                        <div style={{display:"flex"}}>
                        <p>Use my shipping address as my cardholder address</p>
                        <input type="checkbox" />
                        </div>


                    </div>

                    <div className={styled.payment}>

                        <h4>Use a different payment method</h4>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <img src="https://s1.thcdn.com/checkout/resources/images/52c235cfc21b037c320712891df2cffc.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/5ba5f9cd0c43d9f966774630aa65d7c6.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/959a8e732266683b799128acf46e03fd.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/3c5574b5e1fe1470a49f46bc08828ef4.svg" alt="" />
                            <img src="https://s1.thcdn.com/checkout/resources/images/6528547f8322e9cf64458725f0a72827.svg" alt="" />
                        </div>


                    </div>

                    <div className={styled.submitBtn}>
                        <button onClick={handelsumbit}>SUBMIT YOUR ORDER</button>
                        <p>By placing this order, you are confirming that you agree to our Terms and Conditions and Privacy Policy.</p>
                    </div>

                </div>

                <div className={styled.summary}>
                    <h4>Order Summary</h4>
                    <p>Order Number  :    420002383</p>
                </div>

            </div>
            
        </div>
    )
}

export default Checkout;