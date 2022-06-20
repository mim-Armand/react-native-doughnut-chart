import * as React from 'react';

// export declare class Donut extends React.Component<DonutProps, any> {}
export declare const Donut: React.SFC<DonutProps>;

export interface DonutProps {
  data: {
    value: number;
    color: string;
  }[];
  radius?: number;
  fill?: string;
  strokeWidth?: number;
  strokeLinejoin?: string;
  gap?: number;
}

export default Donut;
