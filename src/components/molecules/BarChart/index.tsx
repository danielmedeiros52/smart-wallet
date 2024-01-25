import React from 'react';
import dynamic from 'next/dynamic';


const BarChart = () => {
    const Column = dynamic(
        () => import("@ant-design/charts").then((mod) => mod.Column) as any,
        { ssr: false }
    )
    const config = {
        data: {
            type: 'fetch',
            value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
        },
        xField: '月份',
        yField: '月均降雨量',
        colorField: 'name',
        group: true,
        label: {
            position: 'inside',
            transform: [
                {
                    type: 'contrastReverse',
                },
            ],
        },
        markBackground: {
            style: {
                fill: '#eee'
            }
        },
        style: {
            inset: 5,
        },
    };
    return (
     <Column {...config} />
    );
};

export default BarChart;
