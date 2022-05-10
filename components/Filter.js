
import { useState } from 'react'
import { StyleSheet, Button, ScrollView, View, Text, Pressable } from 'react-native'

export default function Filter(props) {

    const options = [
        { key: 'Brand', values: ['Nike', 'UCB', 'USPA'] },
        { key: 'Category', values: ['T-shirts', 'Jeans'] },
        { key: 'Color', values: ['black', 'white', 'red', 'green'] },
        { key: 'Price Range', values: ['1000 - 2000', '2000 - 5000', '5000 - 10000'] },
        { key: 'Sizes', values: ['S', 'M', 'L', 'XL'] }
    ]

    const [optionSelected, setOptionSelected] = useState(undefined)

    const getOptionValues = () => {
        return optionSelected ? options.filter(op => op.key == optionSelected)[0].values : []
    }

    return <View style={{ flex: 1 }}>
        <Button onPress={props.onClose} title="Close" />
        <ScrollView>
            <View style={styles.layoutContainer}>
                <View style={styles.container}>
                    {options.map(option => {
                        return <Pressable onPress={() => setOptionSelected(option.key)}><View style={styles.leftContainer}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{option.key}</Text>
                        </View>
                        </Pressable>

                    })}
                </View>
                <View style={styles.rightContainer}>
                    {getOptionValues().map(val => {
                        return <Text style={{ fontSize: 20, margin: 5 }}>{val}</Text>
                    })}
                </View>
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    container: {
        flex: 1
    },
    leftContainer: {
        flex: 1,
        padding: 10,
        
    },
    rightContainer: {
        flex: 1,
        padding: 10
    }
})