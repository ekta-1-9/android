import React,{ useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ToastAndroid,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
}  from "react-native";
const Post=()=>{
    const [id, setID] = useState(2);
    const [getName, setGetName] = useState("");
    const [getSalary,setGetSalary]=useState("");
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
  
    const [showMethod, setShowMethod] = useState(null);
  
    const AddUser = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/create`, {
          method: "POST",
          body: {
            name: name,
            salary: salary,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            ToastAndroid.show(
              "Created object at id: " + json.id,
              ToastAndroid.SHORT
            );
          });
      };
    return(
    <View style={{flex:1,paddingHorizontal:20}}>
        <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingTop:20}}>POST:</Text>
        <TextInput
            placeholder="Employee Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Salary"
            value={salary}
            onChangeText={setSalary}
          />
          <Button
            title="Create"
            onPress={AddUser}
            color="#222222"
          />
</View>
);
}
export default Post;