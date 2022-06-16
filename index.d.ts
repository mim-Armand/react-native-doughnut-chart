import * as React from 'react';

// export declare class Donut extends React.Component<DonutProps, any> {}
export declare const Donut: React.SFC<DonutProps>;

export interface DonutProps {
  data: {
    value: number;
    color: string;
  }[];
  radius?: number;
}

export default Donut;