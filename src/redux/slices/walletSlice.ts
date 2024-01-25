import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { WalletProps } from '@/components/types/walletTypes';

export type RegistrationFields = 'amount';

export interface updateFieldProps {
  field: RegistrationFields;
  value: any;
}

const initialState: WalletProps = {
  amount: 0,
};

const counterSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    updateWalletAmount: (state, action: PayloadAction<WalletProps>) => {
      console.log('--- Redux - Wallet - Updated entire user info ---');
      return {
        ...state,
        ...action.payload
      };
    },

  }
});

export const { updateWalletAmount } =
  counterSlice.actions;

export const selectWalletformation = (state: RootState) => state.wallet;

export default counterSlice.reducer;
