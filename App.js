import React,{useState} from 'react';
import { FlatList, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import AppButton from './components/appButton';
import AppTextInput from './components/appTextInput';


let lastId = 0;

export default function App() {
  const [goals,setGoals] = useState([]);
  const [currentGoal,setCurrentGoal] = useState('')
  const [modalVisible,setModalVisible] = useState(false)
  const goalInputHandler=(val)=>{
      setCurrentGoal(val)
  }

  const pushGoals=()=>{
    let testObj = {
      id : ++lastId,
      value: currentGoal
    }
    goals.push(testObj)
    setCurrentGoal('')
    setModalVisible(false)
  }

  const deleteItem=(obj)=>{
    console.log('Running',obj)
    console.log('Goals',goals)
    let filteredData = goals.filter(val => val.id !== obj.id )
    console.log('filter=>',filteredData)
    setGoals(filteredData)
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
        <Modal visible={modalVisible}>
          <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ef3054'}}>
            <Image source={require('./src/images/target.png')} style={{height:150,width:150,tintColor:'#fff'}}/>
            <View style={{height:20}}/>
            <AppTextInput 
            placeholder='Add your goal'
            value={currentGoal}
            onChangeText={(val)=>goalInputHandler(val)}
            />
            <View style={styles.inputContainer}>
              <AppButton
              onColor = '#F25471'
              offColor = '#FFF'
              onPress={()=>pushGoals()}
              title = {'ADD'}
              />
              <AppButton
              title={'CANCEL'}
              onPress={()=>setModalVisible(false)}
              onColor = '#8F8F8F'
              offColor = 'black'
              textColor={'#fff'}
              />
            </View>
          </SafeAreaView>
      </Modal>
      <View style={styles.listContainer}>
        <AppButton
          onPress={()=>setModalVisible(true)}  
          title = {'ADD GOAL'}
          style={{marginVertical:8,width:'80%'}}
          onColor='#F25471'
          offColor='#FFA630'
          />
        <FlatList
        data={goals}
        keyExtractor={(item, index) => String(index)}
        scrollEnabled={true}
        renderItem={({item})=>(
          <AppButton
          style={{marginVertical:8,width:'80%'}}
          title = {item.value}
          onPress={()=>deleteItem(item)} 
          onColor='#F25471'
          offColor='#fff'
          />
        )}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ef3054',
    alignItems: 'center',
  },
  inputContainer:{
    flexDirection: 'row',
    width:'60%',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:20
  },
  listContainer:{
    marginTop:10,
    width:'100%',
  }
});
