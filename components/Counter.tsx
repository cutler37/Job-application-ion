import { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native';

export default function Counter() {
    const [count, setcount] = useState(0);
    const [increment, setincrement] =  useState(1);

    const increaseCount = (currentCount)=>{
        currentCount = currentCount + increment;
        setcount(currentCount)
    }

    const decreaseCount = (currentCount)=>{
        currentCount = currentCount - increment;
        setcount(currentCount)
    }

    const toggleIncrement = ()=>{
        setcount(0)
        if (increment===1){
            setincrement(2)
        }else {
            setincrement(1)
        }
    }
  return (
    <View>
        <Text style={{justifyContent:'center'}}>Total:{count}
        </Text>
        <View style={{flexDirection:'row'}}>
            <Button title="Add" onPress={()=>increaseCount(count)}></Button>
            <Button title="Subtract" onPress={()=>decreaseCount(count)}></Button>
        </View>
        <Button title="Toggle" onPress={()=>toggleIncrement()}></Button>

    </View>
  );
}

