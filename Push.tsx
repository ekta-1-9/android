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

const Push=()=>{
    const [id, setID] = useState(2);
    const [getName, setGetName] = useState("");
    const [getSalary,setGetSalary]=useState("");
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");
  
    const [showMethod, setShowMethod] = useState(null);
    const UpdateUser = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/update/` + id, {
          method: "PUT",
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
            console.log(json);
            ToastAndroid.show("Updated object", ToastAndroid.SHORT);
          });
      };
  
return(
<View style={{flex:1,paddingHorizontal:20}}>
        <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingTop:20}}>PUT:</Text>
          <TextInput
            placeholder="ID"
            value={id}
            onChangeText={setID}
          />
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
            title="Update"
            onPress={UpdateUser}
            color="#222222"
          />
</View>
)
}
export default Push;
