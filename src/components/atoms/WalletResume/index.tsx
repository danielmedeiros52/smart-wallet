import { Flex } from 'antd';
import React from 'react';
import * as Style from './styles';
import { useTranslation } from 'react-i18next'

type WalletResumeProps = {
    country: string;
    amount: number;
};

const WalletResume = ({ country, amount }: WalletResumeProps) => {
    const { t } = useTranslation();

    return (
        <Flex align='center' justify='flex-end'>
            <div style={Style.ResumeContainer}>
                {t('dashboard.countrySelected')} {country}, {t('dashboard.balance')} {country === 'Brasil' ? `R$ ${amount}` : `$ ${amount}`}
            </div>
        </Flex>
    );
};

export default WalletResume;
