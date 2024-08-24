'use client';
import { Area } from '@ant-design/charts';
import { CardProps } from 'antd';
import { Card } from '../card/card';

type Activity = {
  day: string;
  value: number;
};

type ChartProps = {
  data: Activity[];
};

const AreaChart = ({ data }: ChartProps) => {
  const config = {
    data,
    xField: 'day',
    yField: 'value',
    xAxis: {
      range: [0, 1]
    },
    smooth: true
  };

  return <Area {...config} />;
};

type Props = {
  data: Activity[];
} & CardProps;

export const WeeklyActivityCard = ({ data, ...others }: Props) => {
  return (
    <Card title="Weekly activity" {...others}>
      <AreaChart data={data} />
    </Card>
  );
};
