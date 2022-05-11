
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import {View, FlatList, StyleSheet,Text, Pressable, Button, ImageBackground} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartEntry from '../components/CartEntry'
import Product from '../components/Product'
import {products} from '../data/MasterData'
import {categories} from '../data/MasterData'
import { removeFromCart } from '../redux/cartReducer'
import { addToWishList } from '../redux/wishlistReducer'
export default function ShowCartItems(){

    const navigation = useNavigation()
    const {cartIds}  = useSelector((state) => state.cartIds);

    const getTotal = () => {
        var sum = 0
        products.filter(p=> cartIds.includes(p.id)).forEach(p=>sum+=p.price)
        return sum
    }

    const dispatch = useDispatch()
    
    const handleProductClick= (id)=>{
        navigation.navigate('ProductDetails',{productId : id})
    }

    const handleMoveToWishlist = (id) =>{
        dispatch(addToWishList({id:id}))
        dispatch(removeFromCart({id:id}))
        navigation.navigate('Wishlist')
    }

    const handleRemoveFromCart = (id) =>{
        cartIds.filter(cid=> cid != id)
        dispatch(removeFromCart({id:id}))
    }

    return <ImageBackground
    style={{ flex:1}}
    blurRadius={10}
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusMHlC6osS-V6uVYTznqimvUpwzME6qe8pPVnnjHhOl7JXV-kObJ0BOR8akuPWT8aMBI&usqp=CAU' }}>
        <View style={styles.productsContainer}>
        <Text style={styles.heading}>Cart Items</Text>
        <View style={styles.cart}>
    <FlatList  
      data={products.filter(p=> cartIds.includes(p.id))}
      renderItem={item=> <CartEntry onProductClick={handleProductClick} moveToWishlist={handleMoveToWishlist} onRemoveFromCart={handleRemoveFromCart} product={item.item}/>}
      keyExtractor={(item,index)=> item.id}
    />
    <CartEntry curreny='Rs' total={getTotal()}/>
    <View style={{backgroundColor:'green',height:50,marginVertical:20,borderRadius:5,justifyContent:'center'}}>
    <Button title='Proceed to Payment' color="white"/>
    </View>
    
    </View>
  </View>
  </ImageBackground>
}

const styles = StyleSheet.create({
    productsContainer:{
        flex: 1,
        padding:20
    },
    categoryTitle:{
        fontSize: 20,
        margin:10
    },
    heading:{
        fontSize:24,
        fontWeight:'bold'
    },
    cart:{
        height:'90%',
        marginVertical:10
    }
})