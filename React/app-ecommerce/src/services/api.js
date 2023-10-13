import axios from 'axios'

export const getAllProducts = () => {
    return axios.get(`http://localhost:3000/products`)
}

export const addProduct = (data) => {
    return axios.post(`http://localhost:3000/products`, data)
}

export const getProductById = (id) => {
    return axios.get(`http://localhost:3000/products/${id}`)
}

export const setProductById = (id, data) => {
    return axios.put(`http://localhost:3000/products/${id}`, data)
}

export const deleteProductById = (id) => {
    return axios.delete(`http://localhost:3000/products/${id}`)
}

export const getAllUsers = () => {
    return axios.get(`http://localhost:3000/users`)
}