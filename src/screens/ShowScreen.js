import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Context} from './context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context) 

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
        )

    return (
        <View>
            <Text style={{fontSize: 25, marginLeft:10, marginBottom: 15}}>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress={() => 
                navigation.navigate('Edit', {id: navigation.getParam('id')})
                }>
                    <FontAwesome name="pencil" size={30} color="black" />
                </TouchableOpacity>
            )
        }
    }
}

export default ShowScreen;