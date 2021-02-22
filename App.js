import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import SaveText from './Screen/SaveText';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator>
        <Stack.Screen name="QUOTES" component={QuotesScreen}/>
        <Stack.Screen name="Save" component={SaveText}/>
</Stack.Navigator>
</NavigationContainer>
  );
  }
const QuotesScreen = ({navigation,route},props) => {
  
const DATA = [
  {id: 1, title:'   The purpose of our life is to be happy.    -DALAI LAMA'},
  {id: 2, title:'   Some of the best memories are made in flip flops.   -KELLIE ELMORE'},
  {id: 3, title:'   Do not let yesterday use up too much of today.   -CHEROKEE PROVERB'},
  {id: 4, title:'   The way I see it, if you want the raindow, you gotta put up with the rain.   -DOLLY PARTON'},
  {id: 5, title:'   Do not you know yet? It is your light that lights the world.   -RUMI'},
  {id: 6, title:'   If you want to fly, give up everything that weighs you down.   -GURUBOGSA'},
  {id: 7, title:'   If you do not like the road you are walking, start paving another one.   -DOLLY PARTON'},
  {id: 8, title:'   Love the life you live, live the life you love.   -BOB MARLEY'},
  {id: 9, title:'   It is never too late for a new beginning in your life.   -JOYCE MEYERS'},
  {id: 10, title:'   Seek respect, not attention. It lasts longer.   -ZAIAD ABDELNOUR'}
] 
  

  const [data, setData] = useState(DATA);
  const [isRender, setisRender] = useState(false);
  const ItemView = ({item, index}) => {
  return(
    <TouchableOpacity onPress={(item) => {navigation.navigate('Save');}}>
    <Text style={styles.title} >
     {item.title}
  </Text>
  </TouchableOpacity>
  );
  }

   return (
    <SafeAreaView style={styles.screen} >
      <View style={styles.contentList}>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ItemView}
        extraData={isRender}
        />
        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  contentList:{
    flexDirection:'column',
    justifyContent:'space-around', 
    alignItems:'center'
  },
  title: {
    padding: 20,
    color: 'black',
    fontSize: 20
  },
   item:{
    width:'100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'flex-start',
    justifyContent: 'space-around'
   }
});

