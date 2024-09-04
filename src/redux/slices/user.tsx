import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CounterState {
    id: string;
    name: string;
    mobile: string;
    email: string;
    profile_img: string;
    address_1: string;
    address_2: string;
    state: string;
    city: string;
}

const initialState: CounterState = {
    id: '',
    name: 'ABIBO',
    mobile: '',
    email: '',
    profile_img: '', // Initialize profile image URI
    address_1: "",
    address_2: '',
    state: '',
    city: '',
};

const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        addUser: (st, action: PayloadAction<CounterState>) => {
            const { id, name, mobile, email, profile_img, address_1, address_2, city, state } = action.payload;
            st.id = id;
            st.name = name;
            st.mobile = mobile;
            st.email = email;
            st.address_1 = address_1;
            st.address_2 = address_2;
            st.state = state;
            st.city = city;
            AsyncStorage.setItem('user', JSON.stringify(st));

        },
        deleteUser: (state) => {
            AsyncStorage.clear();
            return initialState;
        },
        changeProfileImage: (state, action: PayloadAction<string>) => {
            state.profile_img = action.payload;
            AsyncStorage.setItem('user', JSON.stringify(state));

        },
    }
});

export default userSlice.reducer;
export const { addUser, deleteUser, changeProfileImage } = userSlice.actions;
