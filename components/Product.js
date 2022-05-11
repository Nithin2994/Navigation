import { View, Image,Text, StyleSheet, Dimensions,SafeAreaView, Pressable } from "react-native";
import ShowProduct from "../screens/ShowProduct";
import {SliderBox} from 'react-native-image-slider-box'
export  default function Product(props){

    const width = Dimensions.get('window').width

    return <SafeAreaView>
            <Pressable onPress={() => props.onPress(props.product.id)}>
            <View style={[styles.ProductCard]}>
                <Image 
                    style={[{width: width < 400 ? 180 : 200, height :  width < 400 ? 180 : 200, marginLeft:4}]} 
                    source={{
                        uri: props.product.imagesrcs[0],
                      }}
                />
                

                <View>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>{props.product.title}</Text>
                    <Text style={{fontSize:18}}>{props.product.currency} {props.product.price}</Text>
                </View>
            </View>
            </Pressable>
        </SafeAreaView>
    
    
}

const styles= StyleSheet.create({
   
    ProductCard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        overflow:'hidden',
    }
})