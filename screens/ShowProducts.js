
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import {View, FlatList, StyleSheet,Text, Pressable, Button, Modal} from 'react-native'
import Filter from '../components/Filter'
import Product from '../components/Product'
import {products} from '../data/MasterData'
import {categories} from '../data/MasterData'


export default function ShowProducts(){

    const navigation = useNavigation()
    const [filterModalVisible, setFilterModalVisible] = useState(false)
    const [sort, setSort] = useState(false)
    const onPress = (id) =>{
        navigation.navigate('ProductDetails',{productId : id})
    }

    return <>
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
      data={products.sort((a,b)=> sort && a.price > b.price)}
      renderItem={item=> <Product product={item.item} onPress={onPress}/>}
      keyExtractor={(item,index)=> item.id}
      numColumns={2}
    />
    
  </View>
  <View style={styles.options}>
        <View style={styles.option}><Button onPress={()=> setFilterModalVisible(true)} title="Filter" color="white"/></View>
        <View style={styles.option}><Button onPress={() => setSort(!sort)} title={sort ? "Revert Sort": "Sort By Price"} color="white"/></View>
    </View>
  </>
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
        backgroundColor: '#E0F7FA',
        width: '85%',
        height:'70%',
        margin:30,
        padding:10,
        marginTop: '30%',
        borderRadius:2,
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowOffset:{height:10,width:0}
    }
})