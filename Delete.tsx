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

const Delete=()=>{
  const [id, setID] = useState(2);
  const [getName, setGetName] = useState("");
  const [getSalary,setGetSalary]=useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const [showMethod, setShowMethod] = useState(null);
    const DeleteUser = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/delete/` + id, {
          method: "DELETE",
        }).then((response) => {
          console.log(response);
          ToastAndroid.show("Deleted object", ToastAndroid.SHORT);
        });
      };
    return(
        <View style={{flex:1,paddingHorizontal:20,}}>
            <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingTop:20}}>Delete</Text>
            <TextInput
            placeholder="ID"
            value={id}
            onChangeText={setID}
          />
          <Button
            title="remove"
            onPress={DeleteUser}
            color="#222222"
            
          />
        </View>
    );
}
export default Delete;