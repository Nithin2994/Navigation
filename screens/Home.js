
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, StyleSheet, Button, Text, ImageBackground, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Product from '../components/Product'
import { products } from '../data/MasterData'

export default function Home() {

    const navigation = useNavigation()

    const onPress = (id) => {
        navigation.navigate('ProductDetails', { productId: id })
    }

    return <>
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://us.123rf.com/450wm/annaleni/annaleni1510/annaleni151000070/46646597-thin-shopping-retail-line-white-seamless-pattern-vector-e-commerce-online-store-and-marketplace-desi.jpg?ver=6' }}
            >
                <ScrollView style={styles.homeContainer}>
                    <Pressable>
                    <View style={styles.block1}>
                        <ImageBackground 
                            style={{width:'100%',height:'100%'}}
                            source={{uri:'https://media.slidesgo.com/storage/1568920/fashion-trends-presentation1609173409.png'}} />

                        
                    </View>
                    </Pressable>
                    <View style={styles.block2}>
                    <Pressable onPress={()=>navigation.navigate('CategoryProducts',{categoryId:8})}>
                        <View style={styles.block21}>
                            <ImageBackground
                                style={{width:'100%',height:'100%'}}
                                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WO-r_0hWyW8Qo42TGeDddYqSzmNeJQPY7GUbZoYIoIlQlTFef0hoG3fmEiEM4K2ZOeo&usqp=CAU'}}
                            />
                        </View>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('CategoryProducts',{categoryId:6})}>
                        <View style={styles.block21}>
                        <ImageBackground
                                style={{width:'100%',height:'100%'}}
                                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O1n9TBtfQUK3DYfRBvkfUAbTaF8u5pxqfQ&usqp=CAU'}}
                            />
                        </View>
                        </Pressable>
                    </View>
                    <View style={styles.block2}>
                    <Pressable onPress={()=>navigation.navigate('CategoryProducts',{categoryId:1})}>
                        <View style={styles.block21}>
                        <ImageBackground
                                style={{width:'100%',height:'100%'}}
                                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7bvavD6YEArPf9h7oZkD-uwg5BoB38DL4c17xp7-SNn-ZtFYMqfoZwt3_Jh6LTnCwrg&usqp=CAU'}}
                            />
                        </View>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('CategoryProducts',{categoryId:4})}>
                        <View style={styles.block21}>
                        <ImageBackground
                                style={{width:'100%',height:'100%'}}
                                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUmk0PGKBuMV00hncpGwHvo9Dv1fWDeOBsa763Oa3cMAYxrJNUS5v-WYy7Wa-oyyNdUo&usqp=CAU'}}
                            />
                        </View>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    </>
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    block1: {
        width: 360,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 20
    },
    block2: {
        flexDirection: 'row',
        width: 360,
        height: 250,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 15
    },
    block21: {
        width: 160,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 5,
        marginHorizontal: 10,
    }
})