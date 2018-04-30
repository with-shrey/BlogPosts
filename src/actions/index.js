import axios from 'axios';
import { CREATE_POST, DELETE_POST, FETCH_POST, FETCH_POSTS } from "./types";

const API_KEY="?key=shrey_posts_india";
const BASE_URL="http://reduxblog.herokuapp.com/api";

export const fetchPosts = () => {
    const fetch =axios.get(`${BASE_URL}/posts${API_KEY}`);
return {
    type:FETCH_POSTS,
    payload:fetch
}
};

export const fetchPost = (id) => {
    const fetch =axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
return {
    type:FETCH_POST,
    payload:fetch
}
};

export const createPost = (props) => {
    const fetch =axios.post(`${BASE_URL}/posts${API_KEY}`,props);
return {
    type:CREATE_POST,
    payload:fetch
}
};

export const deletePost = (id) => {
    const fetch =axios.delete(`${BASE_URL}/posts/${id}${API_KEY}`);
    return {
        type:DELETE_POST,
        payload:fetch
    }
};