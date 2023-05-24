import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, SINGLE_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST, SINGLE_PRODUCT_SUCCESS
} from "../constants/productConstants";
import axios from "axios";


const url = 'http://localhost:8000/'


export const fetchProductsList = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get(url + 'api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.message : error.message
        })
    }
}


export const fetchSingleProduct = (productId) => async (dispatch) => {
    try {
        dispatch({type: SINGLE_PRODUCT_REQUEST})
        const {data} = await axios.get( url +`api/products/${productId}`)
        dispatch({
            type: SINGLE_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SINGLE_PRODUCT_FAIL,
            payload: error.response && error.response.data.message ? error.response.message : error.message
        })
    }
}


