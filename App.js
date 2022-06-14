import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Donut from "./Donut";

let initialData = [
  {
    value: 1,
    color: 'brown',
  },
  {
    value: 2,
    color: 'red',
  }, {
    value: 3,
    color: 'green',
  }, {
    value: 4,
    color: 'gold',
  }, {
    value: 5,
    color: 'blue',
  },
]


const App: () => Node = () => {

  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map(d => ({...d, value: Math.round(Math.random() * 100)}));
      setData(newData)
    }, 1999)
    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>

        <Donut data={data}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
