import { Pressable, Text, View } from "react-native";
import {AntDesign, Ionicons} from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function CartCounter(props){

    const navigation = useNavigation()

    const {cartIds} = useSelector(state=> state.cartIds)
    const {wishlistIds} = useSelector(state=> state.wishlistIds)
    return <View style={{flexDirection:'row',marginRight:props.marginRight,justifyContent:'center',alignItems:'center'}}>
            <Pressable style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Wishlist')}><AntDesign name="heart" size={20} color="#424242" style={{marginRight:4}}/><Text style={{marginRight:10,fontSize:13,fontWeight:'800',color:'#1B5E20'}}>{wishlistIds.length}</Text></Pressable>
            <Pressable style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Cart')}><Ionicons name="cart" size={24} color="#424242" style={{marginRight:4}}/><Text style={{marginRight:10,fontSize:13,fontWeight:'800',color:'#263238'}}>{cartIds.length}</Text></Pressable>
        </View>
}