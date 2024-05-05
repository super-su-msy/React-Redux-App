import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'John Doe'},
    {id: '1', name: 'Hossein Abedi'},
    {id: '2', name: 'Brian Philips'},
    {id: '3', name: 'Tomas Mathew'},
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action){
                state.push(action.payload);
            }
        }
    }
});

export const selectAllUsers = (state) => state.users;
export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;