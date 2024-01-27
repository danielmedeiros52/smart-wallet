import { CountryProps } from "./countryTypes";

export interface WalletProps {
    amount: number;
    country: CountryProps
}

export interface Wallets{
    wallets: WalletProps[];
    transactions?: TransactionProps[];
}