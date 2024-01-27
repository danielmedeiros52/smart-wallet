import { Layout } from 'antd';
import React from 'react';
import * as Style from './styles';
import BarChart from '@/components/molecules/BarChart';


const ChartContainer = () => {
    return (

        <Layout.Content style={{ margin: '24px 16px 0' }}>
            <div style={Style.ContainerLayout}>
                <BarChart />
            </div>
        </Layout.Content>
    );
};

export default ChartContainer;
