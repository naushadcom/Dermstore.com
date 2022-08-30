import React,{useState,useEffect} from 'react'
import {Box,Stack,Heading,Text, Flex, Select,Button} from '@chakra-ui/react'
import FilterSection from '../Components/FilterSection'
import ProductList from '../Components/ProductList'
import HairTop from '../Components/HairTop'

import {getProductsBestSellers} from '../Redux/action'
import {useSelector,useDispatch} from 'react-redux'

const BestSellers = () => {

   const products=useSelector((state) =>state.products);
  
   const dispatch = useDispatch();
   const [selected,setSelected]=useState('')
   const [page,setPage] =useState(1)
   let arr=new Array(4).fill(0)
    

    useEffect(()=>{
        
        if(products.length===0 || selected || page){
                dispatch(getProductsBestSellers(selected,page))
        }
    },[products.length,selected,page])


  return (
    <Box>
        <Box>
            <HairTop  heading={'Dermstore Bestsellers'}/>
        </Box>
        <Stack display={{md:'flex'}} flexDirection={{md:"row"}}>
            <Box>
                <FilterSection name={'Skin'}/>
            </Box>
            <Box   width='100%'>
                <Heading as='h3' align="left" >Dermstore Bestsellers</Heading>
                <Text align="left" p='0.5rem 1.5rem '>545 results</Text>

                <Flex justifyContent='space-between' >
                    <Box  width={{base:'50%',md:'30%'}} p='0.5rem'  display='flex'>
                       <Text p='0.5rem ' w='100px' display={{base:"none",md:"block"}}>Sort by</Text> 
                     <Select placeholder='Default'  borderColor='black' onChange={(e)=>setSelected(e.target.value)}>
                    <option value='option1'>Bestseller</option>
                    <option value='asc'>Price: low to high</option>
                    <option value='desc'>Price: high to  low</option>
                    <option value='option2'>A_Z</option>
                    <option value='option3'>Newest Arrivals</option>
                    <option value='option3'>Percentage Discount</option>
                    </Select>
                    </Box>
                    <Box  width='auto'  display={{base:"none",md:"block"}}>
                    <Box width='100%' border='1px solid black'>
                    <Button disabled={page==1} onClick={()=>setPage(page-1)} fontSize='25px'  >{`<`}</Button>
                        {
                         arr.map((item,page)=><Button onClick={()=>setPage(page+1)} border='1px solid black'  >{page+1}</Button>)
                         }
                     <Button onClick={()=>setPage(page+1)}  fontSize='25px'>></Button>
                     </Box>
                  
                    </Box>
                </Flex>

                <Flex flexWrap='wrap' justifyContent='space-around'>
                {
              products?.map((el)=>{
                   return <ProductList  key={el.id} image={el.image} title={el.title} price={el.price} discription={el.discription} rating={el.rating.rate} count={el.rating.count} id={el.id}/>
              })
            }
                </Flex>
            </Box>
        </Stack>
    </Box>
  )
}

export default BestSellers