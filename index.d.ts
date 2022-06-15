import * as React from 'react';

// export declare class Donut extends React.Component<DonutProps, any> {}
export declare const Donut: React.SFC<DonutProps>;

export interface DonutProps {
  data: [data_point];
}

interface data_point {
  value: string;
  color: string;
}

export default Donut;
