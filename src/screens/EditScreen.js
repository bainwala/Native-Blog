import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from './context/BlogContext';
import BlogForm from './components/BlogForm'

const EditScreen = ({navigation}) => {
    const {state, editBlogPost} = useContext(Context)

    const id = navigation.getParam('id')

    const blogPost = state.find((blogPost) => {
        return blogPost.id === id
    })


    return (
        <BlogForm 
            onSubmit = {(newTitle, newContent) => {
                editBlogPost(id, newTitle, newContent, () => navigation.pop())
            }}
            initialValues = {{title: blogPost.title, content: blogPost.content}}
        />
    )
}

const styles = StyleSheet.create({
    
})

export default EditScreen