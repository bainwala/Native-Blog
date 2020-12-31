import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BlogForm = (props) => {
    const [title, setTitle] = useState(props.initialValues.title);
    const [content, setContent] = useState(props.initialValues.content)

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
            value={title} 
            onChangeText = {(val) => setTitle(val)} 
            style={styles.input}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
            value={content} 
            onChangeText = {(val) => setContent(val)} 
            style={styles.input}/>
            <Button 
            title="Save Blog Post"
            onPress={() => {
                props.onSubmit(title, content)
            }}   
            />
        </View>
    )
}

BlogForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    }, 
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default BlogForm;
