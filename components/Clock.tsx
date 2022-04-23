import { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';

export default function Clock() {
    const [date, setdate] = useState(new Date().toLocaleString());
    const [time, settime] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
            const datetime = new Date().toLocaleString().split(',')
            setdate(datetime[0])
            settime(datetime[1])
        },1000)

        return () => clearInterval(secTimer);
    }, []);
  return (
    <View>
        
        <Text>Today's Date: {date}</Text>
        <Text>Today's Time (MST): {time}</Text>
    </View>
  );
}

