import { Button, Card, Flex, Form, Input, InputNumber, Layout, Image, notification } from 'antd';
import React from 'react';
import * as Style from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCountryInformation } from '@/redux/slices/countrySlice';
import { addTransaction } from '@/redux/slices/walletSlice';


const FormContainer = () => {
    const dispatch = useDispatch();
    const country = useSelector(selectCountryInformation);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();

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

    const handlesubmit = (values: any) => {
        console.log(values);
        dispatch(addTransaction({
            amount: values.value,
            country: country,
            transaction: {
                value: values.value,
                date: formatDate(new Date()),
                currency: country.currency,
                type: 'add',
                country: country.name
            }
        }));

        openNotificationWithIcon('success');
        form.resetFields();
    };
    const formatDate = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0!
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const openNotificationWithIcon = (type: 'success') => {
        api[type]({
            message: 'Saldo Adicionado com sucesso!',
            description:
                `Transação no valor de ${country.simbol} ${form.getFieldValue('value')} realizada com sucesso!`,
            placement: 'top',
        });
    };

    return (
        <Layout.Content style={{ margin: '24px 16px 0' }}>
            {contextHolder}
            <div style={Style.ContainerLayout}>
                <Flex align='center' justify='space-between'>
                    <Layout.Content>
                        <Card title={`Adicionar Saldo: ${country.currency}`} style={{ minWidth: 300, maxWidth: 700 }}>
                            <Form form={form} {...formItemLayout} variant="filled" style={{ maxWidth: 600 }} onFinish={handlesubmit}>
                                <Form.Item label="Descrição" name="description" rules={[{ required: true, message: 'Este Campo é obrigatório!' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label={`Valor  ${country.currency}`}
                                    name="value"
                                    rules={[{ required: true, message: 'Este Campo é obrigatório!' }]}
                                >
                                    <InputNumber
                                        controls={false}
                                    />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        Adicionar Saldo
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Layout.Content>
                    <Layout.Content>
                        <Image src='logo.svg' />
                    </Layout.Content>
                </Flex>
            </div>
        </Layout.Content>
    );
};

export default FormContainer;
