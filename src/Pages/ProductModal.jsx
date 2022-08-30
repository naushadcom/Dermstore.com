import {Modal,ModalOverlay,ModalContent,ModalFooter,ModalBody,ModalCloseButton,Button,Flex,Box,} from '@chakra-ui/react'
import {addProductCart} from '../Redux/action'
import { useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react'

function ProductModal({el}) {
  
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cart=useSelector(state=>state.cart);
  
  let bag =  0 ; 

  for(let i=0; i<cart.length ; i++){

    bag = bag + (cart[i].price*cart[i].qty)
   }
  
     
  
    //   useEffect(()=>{
  
    //     if(id){
    //       const data =currentProductData?.find((el)=>el.id===Number(id));
       
    //       data && setSingle(data)
    //     }
    // },[id,currentProductData])
  
  const addToCartHandler=()=>{
    el && dispatch(addProductCart(el))
    navigate('/cart')
  }

    

  return (
    <>
     
     <Box  loadingText="Submitting"
                    size="lg"
                    width= '100%'
                    height='40px'
                   color="white"
                   p='5px'
                   textAlign={'center'}
                   backgroundColor="#242830" border="1px solid"
                  _hover={{bg: 'grey',color: 'white'}}  onClick={onOpen}>QUICK BUY</Box>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin='auto'>
        
          <ModalCloseButton  width='100%' marginLeft={'2%'} border='none'>
            <Flex justifyContent='space-between' gap='150' padding='1.5rem 3rem' fontSize='18px' marginLeft={'2%'}>
            <h2>Added to your cart</h2>
            <h2 style={{cursor:"pointer"}}>X</h2>
            </Flex>
          </ModalCloseButton>
          <ModalBody border={"1px solid black"} marginTop={'4rem'}>
           
            <Box>
                <Flex>
                <Box>
                    <img src={el.image} alt="" style={{width:"200px",height:"200px"}}/>
                </Box>
                <Box>
                    <p>{el.title}</p>
                    <p>Quantity 1</p>
                    <h4>${el.price}</h4>
                </Box>
                </Flex>
                
            </Box>
            <Flex justifyContent={"space-between"}>
                <Box padding={"20px"}>
                    <p>Subtotal:</p>
                    <p>{`( ${cart.length} items in your cart )`}</p>
                    <h5>Rewards members earn 1700 points on this order</h5>
                </Box>
                <Box padding={"20px"}>
                    <p style={{fontWeight:"bold"}}>${bag}</p>
                </Box>
            </Flex>
            <Box padding={"10px"} borderBottom="1px solid grey" borderTop={"1px solid grey"}>
                <Flex justifyContent={"center"} gap='20'>
                    <Button width={"300px"}height={"40px"} background={"white"}>CONTINUE SHOPPING</Button>
                    <Button width={"300px"} height={"40px"} background={"black"} color="white" onClick={addToCartHandler}>VIEW CART</Button>
                </Flex>
            </Box>

            <Box textAlign={"center"}>
                <p style={{fontWeight:"bold"}}>Customers who bought this also bought:</p>

                <Flex gap={"30px"}>
                    <Box>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/original/11128858-1184969821365946.jpg" alt="" style={{width:"130px",height:"130px"}}/>
                        <p>Briogeo Scalp Revival Charcoal Coconut Oil  Shampoo (8 oz.)</p>
                        <h3>$58.00</h3>
                    </Box>
                    <Box>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg" alt="" style={{width:"130px",height:"130px"}}/>
                        <p>Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)Eminence Organic Skin Care Clear Skin Willow Bark Booster-Serum 1 fl. oz</p>
                        <h3>$68.00</h3>
                    </Box>
                    <Box>
                        <img src="https://static.thcdn.com/images/small/webp//productimg/original/13175693-1054889419083984.jpg" alt="" style={{width:"130px",height:"130px"}}/>
                        <p>Living Proof Perfect hair Day (PhD) Advanced Clean Dry Shampoo 2.4 oz.</p>
                        <h3>$76.00</h3>
                    </Box>
                    <Box>
                        <img src="https://static.thcdn.com/images/small/original//productimg/original/11370415-1234871822858973.jpg" alt="" style={{width:"130px",height:"130px"}}/>
                        <p>Eminence Organic Skin Care Clear Skin Willow Bark Booster-Serum 1 fl. oz</p>
                        <h3>$56.00</h3>
                    </Box>
                </Flex>

            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </>
  )
}
    
  

  export default ProductModal