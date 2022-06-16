import * as React from 'react';
import {View} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import {useEffect, useState} from 'react';

export default function Donut(props = []) {
  const {data, radius = 80} = props;
  const strokeWidth = 10;
  const color = 'green';
  const gap = 3;
  const halfCircle = radius + strokeWidth;
  let lastOffsetRotation = 0;

  const [state, setState] = useState({
    max: 100,
    circumference: 33,
    radius: 80,
  });

  useEffect(() => {
    const newMax = data.reduce((p, c) => {
      return p + c.value;
    }, 0);
    const circumference = 2 * Math.PI * radius;
    setState({
      max: newMax,
      circumference,
      radius,
    });
  }, [data, props, radius]);

  return (
    <View style={{width: state.radius * 2, height: state.radius * 2}}>
      <Svg
        height={state.radius * 2}
        width={state.radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            r={state.radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />

          {data.map((p, i) => {
            const totalGap = gap * data.length;
            const startOffset = state.circumference - totalGap;
            const endOffset = (p.value * state.circumference) / state.max;
            const currentRotation =
              (p.value * 360) / state.max + lastOffsetRotation;
            lastOffsetRotation = currentRotation;

            return (
              <Circle
                key={i}
                cx="50%"
                cy="50%"
                r={state.radius}
                originX={state.radius + strokeWidth}
                originY={state.radius + strokeWidth}
                rotation={currentRotation}
                stroke={p.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDashoffset={startOffset + endOffset}
                strokeDasharray={state.circumference}
                // fill="red"
              />
            );
          })}
        </G>
      </Svg>
    </View>
  );
}
