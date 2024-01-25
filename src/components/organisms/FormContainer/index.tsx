import {  Button, Card, Flex, Form, Input, InputNumber, Layout, Image } from 'antd';
import React from 'react';
import * as Style from './styles';
import { useSelector } from 'react-redux';
import { selectCountryInformation } from '@/redux/slices/countrySlice';


const FormContainer = () => {
    const country = useSelector(selectCountryInformation);
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    return (

        <Layout.Content style={{ margin: '24px 16px 0' }}>
            <div
                style={Style.ContainerLayout}
            >
                <Flex align='center' justify='space-between'>
                    <Layout.Content >

                        <Card title={`Adicionar Saldo: ${country.currency}`} style={{ minWidth: 300, maxWidth: 700 }} >
                            <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
                                <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="InputNumber"
                                    name="InputNumber"
                                    rules={[{ required: true, message: 'Please input!' }]}
                                >
                                    <InputNumber style={{ width: '100%' }} />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Adicionar Saldo
                                    </Button>
                                </Form.Item>

                            </Form>
                        </Card>

                    </Layout.Content>
                    <Layout.Content >

                        <Image src='logo.svg' />

                    </Layout.Content>
                </Flex>
            </div>
        </Layout.Content>
    );
};

export default FormContainer;
