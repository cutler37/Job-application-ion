import { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import {  LineChart  } from "react-native-chart-kit";
const axios = require("axios");
import { Button,TextInput,Dimensions } from 'react-native';
import ActualGraph from './ActualGraph'
import Stats from './Stats'

export default function TabTwoScreen() {
    useEffect(() => {
        axios.get(url).then(function(response){
            setdata(response.data)            
            setdate(0)
        }).catch((error)=>{
            console.log(error)
        })
    }, []);
    
    const [state,setsstate] = useState('va')
    const [data, setdata] = useState(0)
    const [date,setdate] = useState(0)
    
    const url = `https://api.covidtracking.com/v1/states/${state}/daily.json`    

    const getData = async ()=>{
        axios.get(url).then(function(response){
            setdata(response.data)            
            setdate(0)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    const increment = 1
    const BackDay = (currentCount)=>{
        if(currentCount >= 0 ){
            currentCount = currentCount + increment;
            setdate(currentCount)
        }
    }
    

    const ForwardDay = (currentCount)=>{
        if(currentCount !== 0 ){
            currentCount = currentCount - increment;
            setdate(currentCount)
            console.log()
        }
    }   

    console.log('state')    
    console.log(data[date])
    console.log(state)
    console.log(date)

    return (
        <View style={styles.chartContainer}>
            <Text>Covid data for today in {state}</Text>
            <Button title="Go back 1 Day" onPress={()=>BackDay(date)}></Button>
            <Button title="Go forward 1 Day" onPress={()=>ForwardDay(date)}></Button>
            <Text>To switch state enter in your two character state code in lower case:</Text>
            <TextInput value={state} onChangeText={(state)=> setsstate(state)} onKeyPress={getData} style={styles.input}></TextInput>
            {
                (data[date]===undefined)
                    ? <Text> ERROR LOADING Data</Text> 
                    : <Stats data={data} date={date}></Stats>
            }   
            <ActualGraph data={data[date]}></ActualGraph>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    chartContainer: {
      flex: 1,
      padding: '5%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });