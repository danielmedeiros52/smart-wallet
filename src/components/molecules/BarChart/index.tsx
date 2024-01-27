import React from 'react';
import dynamic from 'next/dynamic';
import { selectWalletformation } from '@/redux/slices/walletSlice';
import { useSelector } from 'react-redux';


const BarChart = () => {

    const financialInf = useSelector(selectWalletformation);

    const Column = dynamic(
        () => import("@ant-design/charts").then((mod) => mod.Column) as any,
        { ssr: false }
    )
    function sumByCountryAndDate(transactions: any) {
        const result = transactions.reduce((acc: any, { value, date, country }: any) => {
            const key = `${country}-${date}`;

            if (!acc[key]) {
                acc[key] = { value: 0, date, country };
            }

            acc[key].value += value;

            return acc;
        }, {});

        return Object.values(result);
    }

    const config = {
        data: sumByCountryAndDate(financialInf.transactions),
        xField: 'date',
        yField: 'value',
        colorField: 'country',
        group: true,
        label: {
            position: 'inside',
            transform: [
                {
                    type: 'contrastReverse',
                },
            ],
        },


    };
    return (
        <Column {...config} />
    );
};

export default BarChart;
