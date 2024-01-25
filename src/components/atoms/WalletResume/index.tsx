import { Button, Flex, Layout } from 'antd';
import React from 'react';
import * as Style from './styles';

type WalletResumeProps = {
    country: string;
    amount: number;
};

const WalletResume = ({ country, amount }: WalletResumeProps) => {
    return (
        <Flex align='center' justify='flex-end'>
            <div style={Style.ResumeContainer}>
                Pais Atual: {country}, Saldo: {country === 'Brazil' ? `R$ ${amount}` : `$ ${amount}`}
            </div>
        </Flex>
    );
};

export default WalletResume;
