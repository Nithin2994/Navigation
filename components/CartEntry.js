
import { MaterialIcons } from '@expo/vector-icons'
import {StyleSheet, View,Text, Image, Pressable} from 'react-native'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartReducer'

export default function CartEntry(props){

   
    return <View style={[styles.cartEntryContainer,{justifyContent:props.product ? 'space-around': 'flex-end'}]}>
        {props.product ? <>
        <Pressable onPress={()=> props.onProductClick(props.product.id)}><Image style={{width:100,height:100}} source={{uri:props.product.imagesrc}} /></Pressable>
        <Text style={styles.text}>{props.product.title}</Text>
        <Text style={styles.text}>{props.product.currency} {props.product.price}</Text>
        <Pressable onPress={()=> props.onRemoveFromCart(props.product.id)}><MaterialIcons style={{color:'red'}} name="remove-shopping-cart" size={24} color="black" /></Pressable>
        </> : <Text style={styles.totaltext}>Total : {props.curreny} {props.total}</Text>
        }
    </View>
}

const styles = StyleSheet.create({
    cartEntryContainer:{
        flexDirection: 'row',
        borderBottomColor:'black',
        borderStyle:"solid",
        borderWidth:1,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
        padding:10,
    },
    text:{
        fontSize:15
    },
    totaltext:{
        fontSize:20,
        fontWeight:'700',
        color:'#43A047'
    }
})