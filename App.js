
import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ShowCategoryProducts from './screens/ShowCategoryProducts';
import ShowCategories from './screens/ShowCategories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ShowProduct from './screens/ShowProduct';
import ShowProducts from './screens/ShowProducts';
import Home from './screens/Home';
import {Provider, useSelector} from 'react-redux'
import { store } from './redux/store';
import ShowWishlistItems from './screens/ShowWishlistItems';
import CartCounter from './components/CartCounter';
import ShowCartItems from './screens/ShowCartItems';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const stack = createNativeStackNavigator()
  const drawer = createDrawerNavigator()

  const DrawerNavigation = () => {
    return  <drawer.Navigator
      initialRouteName="Home"
      screenOptions={
        { 
          headerTintColor:'#00695C',
          drawerStyle:{
            width:'50%'
          },
          drawerActiveTintColor:'#1B5E20',
          drawerContentStyle:{
            backgroundColor:'#C8E6C9'
          },
          headerStyle :{
            backgroundColor: '#FFECB3',
          },
          contentStyle:{
            backgroundColor: '#ECEFF1'
          },
          headerRight:()=>(<CartCounter marginRight={15}/>)
        }
      }>
      <drawer.Screen
        name="Home"
        component={Home}
        options={
          {
            drawerIcon: ()=> (<Ionicons name="home" size={20}/>)
          }
        }
      />
      <drawer.Screen
        component={ShowCategories}
        name="Categories"
        options={
          {
            drawerIcon: ()=> (<Ionicons name="book" size={20}/>)
          }
        }
      />
      <drawer.Screen
        component={ShowWishlistItems}
        name="Wishlist"
        options={
          {
            drawerIcon: ()=> (<Ionicons name="heart" size={20}/>)
          }
        }
      />
      <drawer.Screen
        component={ShowProducts}
        name="Products"
        options={
          {
            drawerIcon: ()=> (<Ionicons name="grid" size={20}/>)
          }
        }
      />
      <drawer.Screen
        component={ShowCartItems}
        name="Cart"
        options={
          {
            drawerIcon: ()=> (<Ionicons name="cart" size={24}/>)
          }
        }
      />
    </drawer.Navigator>
  }


  return (
    <ImageBackground
                style={{ flex:1 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusMHlC6osS-V6uVYTznqimvUpwzME6qe8pPVnnjHhOl7JXV-kObJ0BOR8akuPWT8aMBI&usqp=CAU' }}
            >
    <Provider store={store}>
    <NavigationContainer>
      <View style={styles.container}>
      
        <StatusBar style="light" />

        <stack.Navigator screenOptions={{
          headerShown: false,
          headerTintColor:'#00695C',
          headerStyle :{
            backgroundColor: '#FFECB3'
          },
          contentStyle:{
            backgroundColor: '#ECEFF1'
          },
          headerRight:()=>(<CartCounter marginRight={0}/>)
        }}>
          <stack.Screen name="DrawerHome" component={DrawerNavigation} />
          <stack.Screen component={ShowCategoryProducts} name="CategoryProducts" />
          <stack.Screen name="ProductDetails" component={ShowProduct} />
        </stack.Navigator>
      </View>
    </NavigationContainer>
    </Provider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
