import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from './cart.module.css'
import {useSelector ,useDispatch} from 'react-redux';
import {fetchCart,deleteProductCart} from '../Redux/action'
import axios from 'axios'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [qyt,setQyt] = useState(1)
    

    const cart_data = useSelector((state)=>state.cart)

     
  var bag =  0 ; 

  for(var i=0; i<cart_data.length ; i++){

    bag = bag + (cart_data[i].price*cart_data[i].qty)
   }
   useEffect(()=>{
    if(cart_data.length==0){
            dispatch(fetchCart())
    }
    },[cart_data.length])

  const deletehandler = (id)=>{
    dispatch(deleteProductCart(id))
  }
  const handleSelect = (id,qyt)=>{
    console.log(id,qyt)
    setQyt(qyt);
    var increase = {
        qty : qyt ,
      }
      axios.patch(`http://localhost:8080/cart/${id}`,increase)
      .then((res)=>{
        console.log(res.data)
        dispatch(fetchCart())
      })
      .catch((e)=>{
        console.log(e)
      })
  }
    const also = [{img:"https://static.thcdn.com/images/small/webp//productimg/original/11370310-1684944342590145.jpg",name:"EltaMD UV Lip Balm BroadSpectrum SPF 36 (0.28 oz.)",price:"$14.99"},{img:"https://static.thcdn.com/images/small/webp//productimg/original/11401172-1034864721065269.jpg",name:"COSRX Acne Pimple Master Patch (24 count)",price:"$6.00"},{img:"https://static.thcdn.com/images/small/webp//productimg/original/11207490-7694859309962455.jpg",name:"DHC Silky Cotton Master Patch(80 piece...) ",price:"$6.00"},{img:"https://static.thcdn.com/images/small/webp//productimg/original/12902964-1694871508225786.jpg",name:"Supergoop!® PLAY Lip Shield SPF 30 Mint 0.5 oz.",price:"$14.00"}];

  

    return (
        <>
       
        <div className={styled.container}>
        {/* 1st div */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <p style={{fontSize:"20px" , padding:"1rem 0rem"}}>Your Cart</p>
            <button className={styled.button} onClick={() => navigate("/checkout")}>CHECKOUT SECURELY NOW</button>
            </div>

            {/* 2nd div */}

            <div>
                <div className={styled.blue}>
                    <img src="https://static.thcdn.com/www/common/svg/alert/info-fadc02068a.svg" alt="" />
                    <p>Treat yourself to a lightweight gel moisturizer- Avene Hydrance AQUA-GEL (Worth $38)</p>
                </div>
                <div className={styled.green}>
                    <img src="https://static.thcdn.com/www/common/svg/alert/success-99f4650f77.svg" alt="" />
                    <p>You have qualified for: Choose your gift with any purchase over $50</p>
                </div>
            </div>

            {/* 3rd div */}

            <div className={styled.Cart}>
                <div className={styled.item}>

                    <div className={styled.head}>

                        <h4>Items</h4>
                        <h4 style={{marginLeft:"370px"}}>Price</h4>
                        <h4 style={{marginLeft:"140px"}}>Quantity</h4>
                        <h4 style={{marginLeft:"120px"}}>Subtotal</h4>
                        <h4 style={{marginLeft:"120px"}}></h4>

                    </div>

                    {
                      cart_data.length && cart_data.map((el) => {
                            return <>
                           <div key={el.id}>
                            <div className={styled.cartItem} >
                      
                            <img src={el.image} style={{width:"70px",height:"70px"}} alt="sss" />
                        
                            <div>
                             <p style={{width:"250px"}}>{el.title}</p>
                            <p style={{width:"250px"}}>In stock - Usually dispatched within 24 hours</p>

                             </div>
                        <p style={{marginLeft:"100px"}}>{el.price}</p>

                        <div key={el.id} style={{display:"flex", gap:"10px", marginLeft:"145px",fontWeight:"bold"}}>
                       <p  style={{cursor: "pointer"}}  onClick={()=>handleSelect(el.id,qyt-1)} >-</p>{el.qty}<p style={{cursor: "pointer"}} onClick={()=>handleSelect(el.id,qyt+1)} >+</p>
                       <h5 style={{marginLeft:"140px"}}>{`$${( el.qty *el.price )}`}</h5>

                      
                       </div>

                        {/* <Quantity qtyE={el.price} setMoney={setMoney}/> */}
                        <img src='https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-cross-icon-png-image_4232054.jpg' style={{height:"35px",padding:"0.2rem 5rem" , cursor: "pointer"}} onClick={()=>deletehandler(el.id)}/>
                         </div>
                         </div>
                         </>
                            })
                    }

                    <div style={{textAlign:"center"}}>
                        <p>Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand.</p>
                    </div>
                    <br />

                    <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid grey",paddingBottom:"30px"}}>
                        <h3>Rewards members earn 610 points on this order</h3>
                        <p>Cart Subtotal: ${bag}</p>
                    </div>

                    <div style={{textAlign:"center", padding:"20px",borderBottom:"1px solid grey"}}>
                        <input type="text" style={{width:"300px",height:"40px",border:"1px solid black"}} placeholder="Got Coupon Code? Enter it here"/> 
                        <button style={{background:"black",color:"white",width:"100px",height:"40px"}}>ADD</button>
                    </div>
                
                </div>

                <div className={styled.gift}>
                    
                    <div >
                        <p style={{fontSize:"20px",fontWeight:"400"}}>Gift Selection</p>
                        <p>Choose your gift with any purchase over $50</p>
                        <br />
                        <h4 style={{color:"green"}}>Qualified</h4>
                        <p>0/1 free gifts selected</p>
                        <div className={styled.Giftcard}>
                            <img src="https://s1.thcdn.com//productimg/70/70/12817183-1044840901242074.jpg" alt="" />
                            <p>Vichy Normaderm PhytoAction Acne Control Daily Moisturiser 3ml ($3 Value)</p>
                        </div>
                        <div className={styled.Giftcard}>
                            <img src="https://s1.thcdn.com//productimg/70/70/13179323-1794969739110482.jpg" alt="" />
                            <p>ClarityRx Good To Go Sample ($1 Value)</p>
                        </div>
                        <div className={styled.Giftcard}>
                            <img src="https://s1.thcdn.com//productimg/70/70/11806857-6114930859376390.jpg" alt="" />
                            <p>Leonor Greyl Anti-Dandruff Shampoo 16ml (Worth $1.50)</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* also bought */}
            <div className={styled.alsoBought}>
                <p>Customers who bought this also bought:</p>

                <div style={{display:"flex",justifyContent:"space-around"}}>
                    {
                        also.map((item) => (
                            <div>
                        <img src={item.img} style={{width:"200px",height:"200px"}} alt="" />
                        <p>{item.name}</p>
                        <h5>{item.price}</h5>
                        <button style={{backgroundColor:"black",color:"white", cursor:"pointer"}}>Quick Buy</button>
                    </div>
                        ))
                    }
                </div>

            </div>


        </div>
        </>
    )

}
export default Cart