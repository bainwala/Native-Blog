import React, {useContext} from 'react';
import {View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../screens/context/BlogContext'
import { FontAwesome, AntDesign } from '@expo/vector-icons';


const indexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
        
    return (
        <View>
            <Button title = 'Add Post' onPress = {addBlogPost}/>
            <FlatList
            data={state}
            keyExtractor={(blog) => blog.title}
            renderItem={({item}) => {
                return( 
                <TouchableOpacity onPress = {() => navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                            <FontAwesome name="trash" style={styles.trashIcon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                )
            }}
            />
        </View>
    );
}

indexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
            <TouchableOpacity onPress = {() => navigation.navigate('Create')}>
                <AntDesign name="pluscircleo" style={styles.addIcon} />
            </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    trashIcon: {
        fontSize: 24
    },
    addIcon: {
        fontSize: 30,
        color: 'black',
        marginRight: 15
    },
    row: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        borderColor: 'grey'
    }, 
    title: {
        fontSize:18
    }
})

export default indexScreen;