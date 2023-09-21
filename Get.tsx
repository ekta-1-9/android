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
} from "react-native";

const Get=()=>{
    const [getName, setGetName] = useState("");
    const [getSalary,setGetSalary]=useState("");
    const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

    const fetchUser = () => {
        fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
          .then((response) => response.json())
          .then((json) =>
            {setGetName(json.data.employee_name); setGetSalary(json.data.employee_salary);
              console.log(json.data.employee_name);}
          );
      };
    return(
        <View style={{flex:1,paddingHorizontal:20}}>
            <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',paddingTop:20}}>GET:</Text>
             <TextInput
             placeholder="ID"
             value={id}
             onChangeText={setID}
            />
            <Button
            title="Retrieve"
            onPress={fetchUser}
            color="#222222"
            />
            <Text style={{padding:20,}}>Employee Name: {getName}</Text>
          <Text style={{paddingLeft:20,}}>Salary: {getSalary}</Text>
        </View>
);

}
export default Get;