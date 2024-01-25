import { theme } from 'antd';

const { getDesignToken } = theme;

const globalToken = getDesignToken();

export const ContainerLayout = {
    padding: 24,
    minHeight: 300,
    borderRadius: globalToken.borderRadius,
    backgroundColor: globalToken.colorBgContainer,
}

