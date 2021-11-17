import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Platform, TouchableWithoutFeedback,Keyboard, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function Login({navigation}) {
  return (
    
<TouchableWithoutFeedback onPress={() => {
  Keyboard.dismiss();
console.log('dismissed keyboard');
}}>


<ScrollView>
    <View style={{flex: 2, justifyContent: "center", alignItems: "center", backgroundColor: 'yellow',marginBottom: 10 }}>
        <Image 
        style={{
            width: 130,
            height: 130,
            marginTop: 30,
            borderRadius: 10,
            transform:[{rotate:"45deg"}],
            marginBottom: 30,
        }}
        source= {{uri:"https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
          }}
         />
         
       <Text style={{color: "rgba(0,0,0,0.6)", 
       fontSize: 24 ,
        fontWeight: '600',
         fontSize: 30,
         paddingBottom:50,
         fontStyle:"italic",
         marginBottom: 40,
         }}> CLOTHING </Text>
        

         </View>
         
         
   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'white',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80 ,
     paddingBottom: 50,
     bottom:70

    }}>

      <View style={{padding:5}}>
       
      </View>

      


   <Text style={{ marginTop: 15}}>EMAIL OR USERNAME</Text>

   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    margin:10,
    width:200,
    }} placeholder="new" /> 


   <Text>PASSWORD</Text>
   
   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    margin:10,
    width:200,
    }} placeholder="new" /> 

     <TouchableOpacity style={{ borderRadius: 10 }} onPress={() => {
       navigation.navigate("Home")
      }}>
      <Text style={{backgroundColor: "black", 
     padding: 10,
     paddingHorizontal: 60 ,
     flexDirection: 'row',
     alignItems: 'center',
     marginTop: 20,
     color:'white',
     }}>LOG IN</Text>
      </TouchableOpacity>

    <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         <AntDesign name="google" size={24} color="rgb(256,100,10)" />
    <Text style={{fontSize: 20 , marginLeft: 10 }}>Login With Gmail</Text>
  
    

   </TouchableOpacity>


   <TouchableOpacity>
   <Text style={{marginTop:10, fontWeight: '500', color: 'grey' ,}}> Not a member ?
    <Text style={{color:"orange" , fontWeight: 'bold',}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
   



    </View>
    
    </ScrollView>

    </TouchableWithoutFeedback>

  );
}