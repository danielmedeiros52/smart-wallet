import { theme } from 'antd';

const { getDesignToken } = theme;

const globalToken = getDesignToken();

export const ContainerLayout = {
    padding: 24,
    minHeight: 300,
    height: '100%',                                                                                                         
    borderRadius: globalToken.borderRadius,
    backgroundColor: globalToken.colorBgContainer,
}

