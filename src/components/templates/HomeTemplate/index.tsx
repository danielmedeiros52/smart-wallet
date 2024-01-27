import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Header from '@/components/organisms/Header';
import WalletResume from '@/components/atoms/WalletResume';
import { selectCountryInformation } from '@/redux/slices/countrySlice';
import { useSelector } from 'react-redux';
import ChartContainer from '@/components/organisms/ChartContainer';
import FormContainer from '@/components/organisms/FormContainer';
import { selectWalletformation } from '@/redux/slices/walletSlice';
import { WalletProps } from '@/components/types/walletTypes';

const HomeTemplate = () => {
    const country = useSelector(selectCountryInformation);
    const financialInf = useSelector(selectWalletformation);
    const [wallet, setWallet] = useState({} as WalletProps);

    useEffect(() => {
        if (financialInf.wallets.find((wallet) => wallet.country.country_code === country.country_code)) {
            setWallet(financialInf.wallets.find((wallet) => wallet.country.country_code === country.country_code) as WalletProps);
        } else {
            setWallet({
                amount: 0,
                country: {
                    name: '',
                    country_code: '',
                    simbol: '',
                    currency: '',
                }
            } as WalletProps);
        }
    }, [country, financialInf]);

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Layout.Sider breakpoint="lg" theme='dark' />
                <Layout>
                    <Header countryCode={country.country_code} />
                    <WalletResume country={country.name} amount={wallet.amount} />
                    <ChartContainer />
                    <FormContainer />
                    <Layout.Footer style={{ textAlign: 'center' }}>
                        SmartFastPay ©{new Date().getFullYear()} Created by Daniel
                    </Layout.Footer>
                </Layout>
            </Layout>

        </>
    );
};

export default HomeTemplate;
