
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import {StyleSheet, View,Text, Image, Pressable, Alert, Modal, Button} from 'react-native'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartReducer'

export default function CartEntry(props){

    const [deleteModal,setDeleteModal] = useState(false)
   
    return <View style={[styles.cartEntryContainer,{justifyContent:props.product ? 'space-around': 'flex-end'}]}>
        <Modal
            visible={deleteModal}
            onRequestClose={()=> setDeleteModal(false)}
            animationType="fade"
            transparent={true}
        >
            <View style={[styles.modal]}>
                <View>
                    <Text style={{marginVertical:35,marginLeft:"20%",fontSize:24,fontWeight:'bold'}}>Confirm Removal</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Button onPress={()=>{props.onRemoveFromCart(props.product.id);setDeleteModal(false)}} color="red" title="Remove"/>
                    <Button onPress={()=> {props.moveToWishlist(props.product.id);setDeleteModal(false)}}title="Move To Wishlist"/>
                    <Button onPress={()=> {setDeleteModal(false)}} title="Cancel"/>    
                </View>
                
            </View>
        </Modal>
        {props.product ? <>
        <Pressable onPress={()=> props.onProductClick(props.product.id)}><Image style={{width:100,height:100}} source={{uri:props.product.imagesrcs[0]}} /></Pressable>
        <Text style={styles.text}>{props.product.title}</Text>
        <Text style={styles.text}>{props.product.currency} {props.product.price}</Text>
        <Pressable onPress={()=>setDeleteModal(true)}><MaterialIcons style={{color:'red'}} name="remove-shopping-cart" size={24} color="black" /></Pressable>
        </> 
        : 
        <Text style={styles.totaltext}>Total : {props.curreny} {props.total}</Text>
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
    },
    modal:{
        backgroundColor: '#ECEFF1',
        width: '85%',
        height:'20%',
        margin:30,
        marginTop: '70%',
        borderRadius:2,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset:{height:10,width:0}
    }
    
})