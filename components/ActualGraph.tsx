import { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import {  LineChart  } from "react-native-chart-kit";
const axios = require("axios");
import { Button,TextInput,Dimensions } from 'react-native';

export default function ActualGraph(props) {
    const data = props.data
    const categories = ['deaths','hospitalized','positive','inIcuCurrently'] 

    return (
        <View >
            {
                (data===undefined)
                    ? <Text> ERROR LOADING GRAPH</Text>
                    : <LineChart
                    data={{
                    labels: categories,
                    datasets: [
                        {
                        data: [
                            data['death'],
                            data['hospitalized'],
                            data['positive'],
                            data['inIcuCurrently'],
                            ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={300}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
            }
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    chartContainer: {
      flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });