import { GET_PRODUCTS_DATA_REQUEST,GET_PRODUCTS_DATA_SUCCESS,GET_PRODUCTS_DATA_FAILURE } from "./actionType";
import { GET_SINGLE_PRODUCTS_DATA_REQUEST,GET_SINGLE_PRODUCTS_DATA_SUCCESS,GET_SINGLE_PRODUCTS_DATA_FAILURE } from "./actionType";
import { ADD_CART_DATA_REQUEST,ADD_CART_DATA_SUCCESS,ADD_CART_DATA_FAILURE,FETCH_CART_SUCCESS } from "./actionType";
import { DELETE_CART_DATA_REUEST,DELETE_CART_DATA_SUCCESS,DELETE_CART_DATA_FAILURE} from "./actionType";
import { FetchSkinMedicaData,FetchBestSellersData,FetchNeocutisData,FetchTrendingData,FetchBlogData,FetchNewarraivals} from "./actionType";
import axios from 'axios';

export const getskinmedicadata = (payload) => ({
  type: FetchSkinMedicaData,
  payload,
});
export const getbestsellersdata = (payload) => ({
  type: FetchBestSellersData,
  payload,
});
export const getNeocuticsdata = (payload) => ({
  type: FetchNeocutisData,
  payload,
});
export const gettrendingdata = (payload) => ({
  type: FetchTrendingData,
  payload,
});
export const getnewarrivaldata = (payload) => ({
  type: FetchNewarraivals,
  payload,
});
export const getblogdata = (payload) => ({
  type: FetchBlogData,
  payload,
});

export const getProductsData = () => (dispatch) => {
  fetch("http://localhost:8080/SkinMedica")
    .then((res) => res.json())
    .then((res) => dispatch(getskinmedicadata(res)));
};
export const getBestProductsData = () => (dispatch) => {
  fetch("http://localhost:8080/BestSellers")
    .then((res) => res.json())
    .then((res) => dispatch(getbestsellersdata(res)));
};

export const getNeocuticsProductsData = () => (dispatch) => {
  fetch("  http://localhost:8080/Neocutis")
    .then((res) => res.json())
    .then((res) => dispatch(getNeocuticsdata(res)));
};

export const gettrendingProductsData = () => (dispatch) => {
  fetch("http://localhost:8080/Trending")
    .then((res) => res.json())
    .then((res) => dispatch(gettrendingdata(res)));
};
export const getarrivalProductsData = () => (dispatch) => {
  fetch(" http://localhost:8080/NewArrivals")
    .then((res) => res.json())
    .then((res) => dispatch(getnewarrivaldata(res)));
};
export const getblogProductsData = () => (dispatch) => {
  fetch(" http://localhost:8080/Blog")
    .then((res) => res.json())
    .then((res) => dispatch(getblogdata(res)));
};

export const postProductsData = (payload) => (dispatch) => {
  axios
    .post("http://localhost:8080/cartProducts", payload)
    .then(function (response) {
      // handle success
      console.log(response.data);
      dispatch({ type: "CART_PRODUCTS", payload: payload });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};


//------------------------->>>>>>>>>>>>>>>>>>>>>>>----------------------------------------------------------------

export const getProducts = (selected,page) => dispatch =>{

  dispatch({type: GET_PRODUCTS_DATA_REQUEST})
  return axios({
  method: 'get',
  url:"http://localhost:8080/hair",
  
  params:{
    _page:page,
    _limit:10,
    _sort:"price",
    _order:selected,
}
})
  .then((r)=>{
      dispatch({type:GET_PRODUCTS_DATA_SUCCESS,payload:r.data});
      return GET_PRODUCTS_DATA_SUCCESS
  })
  .catch((err) =>dispatch({type:GET_PRODUCTS_DATA_FAILURE,payload:err}))
}


export const getProductsSkin =(selected,page) => dispatch=>{

dispatch({type: GET_PRODUCTS_DATA_REQUEST})
  return axios({
method: 'get',
url:"http://localhost:8080/SkinMedica",
params:{
  _page:page,
  _limit:10,
  _sort:"price",
  _order:selected,
}
})
.then((r)=>{
    dispatch({type:GET_PRODUCTS_DATA_SUCCESS,payload:r.data});
    return GET_PRODUCTS_DATA_SUCCESS
})
.catch((err) =>dispatch({type:GET_PRODUCTS_DATA_FAILURE,payload:err}))
}


export const getProductsBestSellers =(selected,page) => dispatch=>{

dispatch({type: GET_PRODUCTS_DATA_REQUEST})
return axios({
method: 'get',
url:"http://localhost:8080/BestSellers",
params:{
  _page:page,
  _limit:10,
  _sort:"price",
  _order:selected,
}
})
.then((r)=>{
    dispatch({type:GET_PRODUCTS_DATA_SUCCESS,payload:r.data});
    return GET_PRODUCTS_DATA_SUCCESS
})
.catch((err) =>dispatch({type:GET_PRODUCTS_DATA_FAILURE,payload:err}))
}

export const getProductsTrending =(selected,page) => dispatch=>{

dispatch({type: GET_PRODUCTS_DATA_REQUEST})
return axios({
method: 'get',
url:" http://localhost:8080/men",
params:{
  _page:page,
  _limit:10,
  _sort:"price",
  _order:selected,
}
})
.then((r)=>{
    dispatch({type:GET_PRODUCTS_DATA_SUCCESS,payload:r.data});
    return GET_PRODUCTS_DATA_SUCCESS
})
.catch((err) =>dispatch({type:GET_PRODUCTS_DATA_FAILURE,payload:err}))
}

export const getSingleProduct = (id) => dispatch =>{

  dispatch({type: GET_SINGLE_PRODUCTS_DATA_REQUEST})
  return axios.get(`http://localhost:8080/hair/${id}`)
  .then((r)=>dispatch({type:GET_SINGLE_PRODUCTS_DATA_SUCCESS,payload:r.data}))
  .catch((err) =>dispatch({type:GET_SINGLE_PRODUCTS_DATA_FAILURE,payload:err}))
}

export const addProductCart =(payload) => dispatch =>{
  dispatch({type: ADD_CART_DATA_REQUEST})
  return axios.post(`http://localhost:8080/cart`,payload)
  .then((r)=>dispatch({type:ADD_CART_DATA_SUCCESS,payload:r.data}))
  .catch((err) =>dispatch({type:ADD_CART_DATA_FAILURE,payload:err}))
}


export const fetchCart =() => dispatch =>{
dispatch({type: ADD_CART_DATA_REQUEST})
return axios.get(` http://localhost:8080/cart`)
.then((r)=>dispatch({type:FETCH_CART_SUCCESS,payload:r.data}))
.catch((err) =>dispatch({type:ADD_CART_DATA_FAILURE,payload:err}))
}

export const deleteProductCart = (id) => dispatch =>{

dispatch({type:DELETE_CART_DATA_REUEST})
return axios.delete(`http://localhost:8080/cart/${id}`)
.then(r=>dispatch({type:DELETE_CART_DATA_SUCCESS,payload:r.data}))
.then(()=>dispatch(fetchCart()))
.catch((err) =>dispatch({type:DELETE_CART_DATA_FAILURE,payload:err}))
}