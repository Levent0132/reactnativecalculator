import React from "react";
import { SafeAreaView,StyleSheet,Text,TextInput, View, TouchableOpacity,flexDirection} from "react-native";
import { Component } from 'react/cjs/react.production.min';

export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
    currentNumber: "0"};}


 calculate = () =>  {
    let result = eval(this.state.currentNumber).toString();
    this.setState({currentNumber: result});
    return;
 }

handleChange = (value) => {
  if (this.state.currentNumber === "0" && value !== ".") {
    this.setState({currentNumber: value})
    return;
  }
  else if(value === "="){
      this.calculate()
      return;
  }
  else{
    this.setState({currentNumber: this.state.currentNumber + value});
  }
}
 
  render(){
  return (
    <View style={{flex:1,backgroundColor:'#212121'}}>

       
    <View style={{flex:3,justifyContent:'center',marginHorizontal:10}}>
      <Text style={{color:'#FFFFFF',fontSize:48,textAlign:'right',color:'white'}}>{this.state.currentNumber}</Text>
    </View>

          
    <TouchableOpacity style={{flex:1,justifyContent:'center',justifyContent:'center',padding:20}}
    onPress={() =>this.setState({currentNumber: "0"})}>
              <Text style={{color:'white',fontSize:30,textAlign:'right'}}>TEMİZLE</Text>
            </TouchableOpacity>
    <View style={{flexDirection:'row'}}>
            
            <TouchableOpacity style={{flex:1,backgroundColor:'#a9a9a9',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange('(')}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#a9a9a9',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange( ')')}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#a9a9a9',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange('00')}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#ff7f50', justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange('*')}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("7")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("8")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("9")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#ff7f50',justifyContent:'center',justifyContent:'center',padding:25}}
             onPress={() =>this.handleChange('+')}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("4")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("5")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("6")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#ff7f50',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("-")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("1")}>     
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("2")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("3")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#ff7f50',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("=")}>
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{flex:3,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange(".")}>     
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#696969' ,justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("0")}>     
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'#ff7f50',justifyContent:'center',justifyContent:'center',padding:25}}
            onPress={() =>this.handleChange("/")}>     
              <Text style={{color:'white',fontSize:30,textAlign:'center'}}>/</Text>
            </TouchableOpacity>
            
            </View> 
    </View>
    
  );
};
}