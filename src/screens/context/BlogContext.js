import React, {useState, useReducer} from 'react';
import { call } from 'react-native-reanimated';
import createDataContext from './createDataContext';
import JSONServer from '.././api/JSONServer';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blogpost':
            return action.payload

        case 'delete_blogpost':
            return state.filter((blogPost) => {
                return blogPost.id !== action.payload
            })
        case 'edit_blogpost':
            return state.map((blog) => {
                return (blog.id === action.payload.id)? action.payload : blog
            })
        default:
            return state
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const res = await JSONServer.get('/blogposts')
        dispatch({type: 'get_blogpost', payload: res.data})
    }
}
   
const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await JSONServer.post('/blogposts', {title, content})
        callback(); 
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await JSONServer.delete(`/blogposts/${id}`)
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await JSONServer.put(`/blogposts/${id}`, {title, content})
        dispatch({type: 'edit_blogpost', payload: {id, title, content}})
        callback();
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost}, 
    []
    )

 

