
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import {View, FlatList, StyleSheet,Text, Pressable} from 'react-native'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import {products} from '../data/MasterData'
import {categories} from '../data/MasterData'
export default function ShowWishlistItems(){

    const navigation = useNavigation()
    const {wishlistIds}  = useSelector((state) => state.wishlistIds);
    console.log(wishlistIds)
    const onPress = (id) =>{
        navigation.navigate('ProductDetails',{productId : id})
    }

    return <View style={styles.productsContainer}>
        
    <FlatList 
      data={products.filter(p=> wishlistIds.includes(p.id))}
      renderItem={item=> <Product product={item.item} onPress={onPress}/>}
      keyExtractor={(item,index)=> item.id}
      numColumns={2}
    />
  </View>
}

const styles = StyleSheet.create({
    productsContainer:{
        flex: 1,
        padding:20
    },
    categoryTitle:{
        fontSize: 20,
        margin:10
    }
})