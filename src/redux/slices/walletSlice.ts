import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Wallets } from '@/components/types/walletTypes';
import { TransactionProps } from '@/components/types/transacionType';
import { CountryProps } from '@/components/types/countryTypes';

export type RegistrationFields = 'amount';

export interface updateFieldProps {
  field: RegistrationFields;
  value: any;
}

const initialState: Wallets = {
  wallets: [
    {
      amount: 100,
      country: {
        name: '',
        country_code: 'BRA',
        simbol: '',
        currency: '',
      },
      
    },
    {
      amount: 200,
      country: {
        name: '',
        country_code: 'COL',
        simbol: '',
        currency: '',
      },

    },
  ],
  transactions: [
    {
      value: 100,
      date: '01/1/2021',
      description: 'Compra de um carro',
      currency: 'R$',
      type: 'debit',
      country: 'Brasil',
      country_code: 'CC'
    },
    {
      value: 200,
      date: '01/1/2021',
      description: 'Compra de comida',
      currency: 'R$',
      type: 'debit',
      country: 'Colombia',
      country_code: 'COL'
    },


  ]
};


const counterSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<{ amount: number, country: CountryProps, transaction: TransactionProps }>) => {
      console.log('--- Redux - Wallet - Add Transaction ---');
      if (state.wallets.find((wallet) => wallet.country.country_code === action.payload.country.country_code)) {
        state.wallets.find((wallet) => wallet.country.country_code === action.payload.country.country_code)!.amount += action.payload.amount
      } else {
        state.wallets.push({
          amount: action.payload.amount,
          country: action.payload.country
        })
      }
      
      state.transactions!.push(action.payload.transaction);

    },
    updateWallet: (state, action: PayloadAction<Wallets>) => {
      console.log('--- Redux - Wallet - Updated entire user info ---');
      return {
        ...state,
        ...action.payload
      };
    },



  }
});

export const { updateWallet, addTransaction } =
  counterSlice.actions;

export const selectWalletformation = (state: RootState) => state.wallet;

export default counterSlice.reducer;
