import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import { Text, View, SafeAreaView,FlatList,TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../styles/style';


let Customers = [
    {
      id:1,
      name:"Customer 1",
      salary:390,
    },
    {
      id:2,
      name:"Customer 2",
      salary:490,
    },
    {
      id:3,
      name:"Customer 3",
      salary:590,
    },
    {
      id:4,
      name:"Customer 4",
      salary:690,
    },
    {
      id:5,
      name:"Customer 5",
      salary:790,
    },
  ];
  
  
  function Item({name,salary,id}){
  
    const handlePress =(id) =>{
      const customer =Customers.find((cust) => {
        return cust.id === id;
      });
  
      const updateCustomer = ( id, name ) =>{
        let updatedCustomer ={
          id,
          name:name,
          salary,
        };
        
      Customers = Customers.map(
        cust => cust.id === id ? {...cust,...updatedCustomer}: cust
      );

      navigation.reset({
        index:0,
        routes:[{name:"mainScreen"}],
      });
      };





      Alert.prompt(
        "Update Customer",
        `Updating Customer ${id}`,
        [
          {
            text:'Update',
            onPress: (text) => updateCustomer(id,text),
          },
          {
            text:'Cancel',
            style:'cancel',
            onPress: () => Alert.alert("Cancelled"),
          }, 
        
      ]);
    }
  
  
    const deleteCustomer = (id) => {
      const customer = Customers.find((cust) =>{
        return cust.id === id;
      });
  
      Customers = Customers.filter((cust) =>{
        return cust.id !== customer.id;
      });

      navigation.reset({
        index:0,
        routes:[{name:"mainScreen"}],
      })

      console.log(Customers);
    };
    return(
        <TouchableOpacity 
          onPress={() => handlePress(id)} 
          onLongPress={() => deleteCustomer(id)}
          style={styles.listItem}>
            <Text style={styles.listName}>{name}</Text>
            <Text style={styles.listSalary}>{salary}</Text>
        </TouchableOpacity>
      )
    };

export default class MainScreen extends Component{
  state = {
    name: "",
    salary:0,
  }

  addcustomer = () => {
    const {salary,name} = this.state;
    if(name&&salary){
      Customers.push({
        id: Customers[Customers.length -1].id +1, 
        name: name,
        salary:salary,
      });
      this.props.navigation.reset({
        index:0,
        routes:[{name: "mainScreen"}],
      })
    } else {
      Alert.alert("Error","Fields Must Not Be Empty!")
    }
  };

    render() {
        return(
          <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}> React Native FlatList Tutorial</Text>
            <FlatList 
              data={Customers}
              renderItem={
                ({item}) =>(
                  <Item
                    id={item.id}
                    name={item.name}
                    salary={item.salary}
                  />
                )
              }
            />
            <View style={{alignItems:"center"}}>
                <Text> Add New Customer</Text>
                <TextInput
                    placeholder={"Customer Name"}
                    style={styles.input}
                    onChangeText={(text) => this.setState({name: text})}
                />
                <TextInput
                    placeholder={"Customer Salary"}
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(text) => this.setState({salary: text})}
                />
                <TouchableOpacity onPress={() => this.addcustomer()}>
                    <Text>Add Customer</Text>
                </TouchableOpacity>
            </View>
          </SafeAreaView>
        );
      }
}
