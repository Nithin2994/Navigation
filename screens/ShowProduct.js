
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Button, ImageBackground } from 'react-native'
import { products } from '../data/MasterData'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, removeFromWishList } from '../redux/wishlistReducer';
import { addToCart, removeFromCart } from '../redux/cartReducer';
import { ScrollView } from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box'
export default function ShowProduct(props) {

    const route = useRoute()
    const navigation = useNavigation()
    var product = products.find(p => p.id == route.params.productId)

    const dispatch = useDispatch();
    const {wishlistIds}  = useSelector((state) => state.wishlistIds);
    const {cartIds}  = useSelector((state) => state.cartIds);

    const [isWishlisted,setIsWishlisted] = useState(wishlistIds.includes(product.id))
    const [inCart ,setInCart] = useState(cartIds.includes(product.id))
    
    console.log(cartIds)
    useLayoutEffect(() => {
        product = products.find(p => p.id == route.params.productId)
        navigation.setOptions({
            title: product.title,
            headerShown: true
        })
    }, [route, navigation])

    const handleCartToggle= () =>{
        console.log('handleCartToggle')
        if(inCart){
            dispatch(removeFromCart({id: product.id}))
        }else{
            dispatch(addToCart({id: product.id}))
        }
        
        setInCart(!inCart)
    }

    const handleWishlistToggle = () =>{
        if(isWishlisted){
            dispatch(removeFromWishList({id: product.id}))
        }else{
            dispatch(addToWishList({id: product.id}))
        }
        setIsWishlisted(!isWishlisted)
    }

    const width = Dimensions.get('window').width

    return <ImageBackground
    style={{ flex:1 }}
    blurRadius={10}
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusMHlC6osS-V6uVYTznqimvUpwzME6qe8pPVnnjHhOl7JXV-kObJ0BOR8akuPWT8aMBI&usqp=CAU' }}>
    <View style={styles.productContainer}>
        
            {/* <Image
                style={[{ width: width < 400 ? 180 : 200, height: width < 400 ? 200 : 200 }]}
                source={
                    { uri: product.imagesrc }
                }
            /> */}
            <SliderBox 
                        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                        sliderBoxHeight={300}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        paginationBoxVerticalPadding={20}
                        circleLoop
                        images={product.imagesrcs} />
        <View style={{height:'60%'}}>
            <ScrollView >
            <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.currency} {product.price}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
            </View>
            </ScrollView>
        </View>

    </View>
        <View style={styles.addButtons}>
            <View style={styles.addToFavButton}><Button onPress={handleWishlistToggle} title={isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"} color="#000000" /></View>
            <View style={styles.addToCartButton}><Button onPress={handleCartToggle} disabled={!product.available} title={product.available ? !inCart ? "Add To Cart" : "Remove From Cart" : "Out Of Stock"} color="white" /></View>
        </View>
        </ImageBackground>
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        minWidth: '100%'
    },
    image: {
        paddingHorizontal: 100,
        marginVertical: 30
    },
    details: {
        marginHorizontal: 20
    },
    description: {
        marginHorizontal: 20,
        marginVertical: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "bold"
    },
    price: {
        fontSize: 20,
        fontWeight: "400"
    },
    outofstock: {
        fontSize: 20,
        color: 'red'
    },
    available: {
        fontSize: 20,
        color: 'green'
    },
    productDescription: {
        fontSize: 18,
        color: 'grey'
    },
    addButtons: {
        flexDirection: 'row',
    },
    addToCartButton: {
        flex: 1,
        paddingVertical: 15,
        marginTop: 20,
        backgroundColor: '#455A64'
    },
    addToFavButton: {
        flex: 1,
        paddingVertical: 15,
        marginTop: 20,
        backgroundColor: '#A5D6A7'
    }
})