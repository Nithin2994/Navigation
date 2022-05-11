
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, StyleSheet, Button, Text, ImageBackground, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Product from '../components/Product'
import { products } from '../data/MasterData'
import { SliderBox } from "react-native-image-slider-box";

export default function Home() {

    const navigation = useNavigation()

    return <>
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex:1 }}
                blurRadius={20}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusMHlC6osS-V6uVYTznqimvUpwzME6qe8pPVnnjHhOl7JXV-kObJ0BOR8akuPWT8aMBI&usqp=CAU' }}
            >
                <ScrollView style={styles.homeContainer}>
                    
                    <View style={styles.block1}>
                        <SliderBox 
                        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
                        sliderBoxHeight={400}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        paginationBoxVerticalPadding={20}
                        circleLoop
                        images={[
        "https://assets.ajio.com/cms/AJIO/MOBILE/10052022-WHP-M-topbanner-p1-avaasa-soch-under799.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WO-r_0hWyW8Qo42TGeDddYqSzmNeJQPY7GUbZoYIoIlQlTFef0hoG3fmEiEM4K2ZOeo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaUmk0PGKBuMV00hncpGwHvo9Dv1fWDeOBsa763Oa3cMAYxrJNUS5v-WYy7Wa-oyyNdUo&usqp=CAU"]} />
                        
                    </View>
                    
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
        marginBottom: 10
    },
    block2: {
        flexDirection: 'row',
        width: 360,
        height: 250,
        borderRadius: 5,
        
        marginBottom: 5
    },
    block21: {
        width: 180,
        height: 250,
        marginLeft:10
    }
})