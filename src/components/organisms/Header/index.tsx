import { Button, Flex, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Style from './styles';
import { updateCountry } from '@/redux/slices/countrySlice';
import { Countries } from '@/constants/countries';
import { CountryProps } from '@/components/types/countryTypes';
import { useTranslation } from 'react-i18next'


type HeaderProps = {
    countryCode: string;
};

const Header = ({ countryCode }: HeaderProps) => {
    const dispatch = useDispatch();
    const [country, setCountry] = useState({} as CountryProps);
    const [isChange, setIsChange] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (countryCode === 'BRA') {
            setCountry(Countries.find((country) => country.country_code === 'COL') || {} as CountryProps);
        } else {
            setCountry(Countries.find((country) => country.country_code === 'BRA') || {} as CountryProps);
        }

    }, [isChange]);


    const handleClick = () => {
        setIsChange(!isChange);
        dispatch(
            updateCountry({
                country_code: country.country_code,
                name: country.name,
                simbol: country.simbol,
                currency: country.currency,
            }));
        i18n.changeLanguage('es-ES');
    }

    return (
        <Layout.Header style={Style.HeaderLayout}>
            <Flex align='center' justify='space-between'>
                {t('dashboard.title')}
                <Button style={Style.Button} onClick={handleClick}> {t('dashboard.changeCountry')} {countryCode}</Button>
            </Flex>
        </Layout.Header>
    );
};

export default Header;
