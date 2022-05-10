import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, Pressable, Dimensions, ImageBackground } from 'react-native'
import { categories } from '../data/MasterData'

export default function ShowCategories({navigation}) {

    const width = Dimensions.get('window').width

    const onPresshandler = (id) =>{
        navigation.navigate('CategoryProducts',{categoryId:id})
    }

    const categoryTile = (item,onPress) => {
        return <Pressable
            onPress={()=> onPress(item.item.id)}
            style={({ pressed }) => pressed ? styles.buttonPressed : styles.button}>
            <View style={[styles.categoryContainer]}>
                <ImageBackground
                    style={{ flex: 1 ,justifyContent: "center",opacity:0.9}}
                    resizeMode="cover"
                    source={{ uri: item.item.image }}
                >
                    <Text style={{textAlign:'center',fontSize:20}}>{item.item.category}</Text>
                </ImageBackground>
            </View>
        </Pressable>

    }

    return <FlatList
        data={categories}
        renderItem={(item) => categoryTile(item,onPresshandler)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onPress={onPresshandler}
    />
}

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.3
    },
    categoryContainer: {
        flex: 1,
        height: 150,
        width:150,
        margin: 16,
        marginHorizontal:23,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 6 }
    }
})