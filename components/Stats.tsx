import { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native';

export default function Counter(props) {
  const data = props.data
  const date = props.date
  return (
    <View>
        <Text>Deaths: {data[date]['death']}</Text>
        <Text>Hospitalized: {data[date]['hospitalized']}</Text>
        <Text>Positive: {data[date]['positive']}</Text>
        <Text>In ICU Currently: {data[date]['inIcuCurrently']}</Text>
    </View>
  );
}

