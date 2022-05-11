
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import Filter from '../components/Filter'
import {View, FlatList,Modal, StyleSheet,Text, Pressable, Button, ImageBackground} from 'react-native'
import Product from '../components/Product'
import {products} from '../data/MasterData'
import {categories} from '../data/MasterData'
export default function ShowCategoryProducts(){

    const navigation = useNavigation()
    const route = useRoute()
    const [filterModalVisible, setFilterModalVisible] = useState(false)
    const [sort, setSort] = useState(false)
    
    const [catName, setCatName] = useState(undefined)
    const [catId, setCatId] = useState(undefined)


    useLayoutEffect(()=>{
        const id = route.params.categoryId
        const name = categories.find(c=> c.id == id).category
        if(catName != name ){
            setCatName(name)
            setCatId(id)
        }
        navigation.setOptions({
            headerShown : true,
            title:catName
        })
        
    })

    const onPress = (id) =>{
        navigation.navigate('ProductDetails',{productId : id})
    }

    return <ImageBackground
    style={{ flex:1 }}
    blurRadius={10}
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusMHlC6osS-V6uVYTznqimvUpwzME6qe8pPVnnjHhOl7JXV-kObJ0BOR8akuPWT8aMBI&usqp=CAU' }}>
    <View style={styles.productsContainer}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={filterModalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setFilterModalVisible(!filterModalVisible);
              }}
        >
            <View style={styles.modal}>
                <Filter onClose={() => setFilterModalVisible(!filterModalVisible)}/>
            </View>
        </Modal>
    <FlatList 
      data={catId ? products.filter(p=>p.categoryIds.includes(catId)).sort((a,b)=> sort && a.price > b.price) : products}
      renderItem={item=> <Product product={item.item} onPress={onPress}/>}
      keyExtractor={(item,index)=> item.id}
      numColumns={2}
    />
  </View>
  <View style={styles.options}>
  <View style={styles.option}><Button onPress={()=> setFilterModalVisible(true)} title="Filter" color="white"/></View>
  <View style={styles.option}><Button onPress={() => setSort(!sort)} title={sort ? "Revert Sort": "Sort By Price"} color="white"/></View>
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
    options:{
        flexDirection:'row',
        backgroundColor:'#263238'
    },
    option:{
        flex:1,
        paddingVertical: 15,
    },
    modal:{
        width: '85%',
        height:'75%',
        backgroundColor: '#E0F7FA',
        margin:30,
        padding:10,
        marginTop: '30%',
        borderRadius:2,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset:{height:10,width:0}
    }
})