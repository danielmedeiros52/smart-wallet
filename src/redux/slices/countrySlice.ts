import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { CountryProps } from '@/components/types/countryTypes';

export type RegistrationFields = 'country_code' | 'name';

export interface updateFieldProps {
  field: RegistrationFields;
  value: any;
}

const initialState: CountryProps = {
  country_code: 'BRA',
  name: 'Brasil',
  simbol: 'R$',
  currency: 'BRL'
};

const counterSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    updateCountry: (state, action: PayloadAction<CountryProps>) => {
      console.log('--- Redux - Country - Updated entire user info ---');
      return {
        ...state,
        ...action.payload
      };
    },

  }
});

export const { updateCountry } =
  counterSlice.actions;

export const selectCountryInformation = (state: RootState) => state.country;

export default counterSlice.reducer;
