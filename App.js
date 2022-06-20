import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';

import { Donut } from 'react-native-donut-chart';

let initialData = [
  {
    value: 1,
    color: 'brown',
  },
  {
    value: 2,
    color: 'red',
  },
  {
    value: 3,
    color: 'green',
  },
  {
    value: 4,
    color: 'gold',
  },
  {
    value: 5,
    color: 'blue',
  },
];

const App: () => Node = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = data.map(d => ({
        ...d,
        value: Math.round(Math.random() * 100),
      }));
      setData(newData);
    }, 3999);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
        <Donut data={data} radius={120} strokeWidth={15} gap={9} bgStrokeColor={'gray'} bgStrokeOpacity={'.1'} bgStrokePadding={10}/>
        <View style={{marginTop: 20, width: '100%'}} />
        <Donut data={data} radius={90} strokeWidth={9} gap={3} bgStrokeColor={'lightgray'} bgStrokeOpacity={'.9'} bgStrokePadding={0}/>
        <View style={{marginTop: 20, width: '100%'}} />
        <Donut data={data} radius={120} strokeWidth={36} gap={12} bgStrokeColor={'navy'} bgStrokeOpacity={'.3'} bgStrokePadding={6}/>
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
