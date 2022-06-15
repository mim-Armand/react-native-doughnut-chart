import * as React from 'react';

declare class Donut extends React.Component<DonutProps, any> {}

export interface DonutProps {
  data: [data_point];
}

interface data_point {
  value: string;
  color: string;
}

export default Donut;
