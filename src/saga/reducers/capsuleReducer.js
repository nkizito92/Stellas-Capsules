import { createSlice } from '@reduxjs/toolkit'
export const capsuleReducer = createSlice({
    name: 'capsules',
    initialState: {
        capsules: [],
        isLoading: false
    },
    reducers: {
        getCapsulesFetch: (state) => {
            state.isLoading = true;
        },
        getCapsulesSuccess: (state, action) => {
            state.capsules = action.payload;
            state.isLoading = false
        },
    
        getCapsulesFailure: (state) => {
            state.isLoading = false;
        }
    }

});

export const { 
    getCapsulesFetch, 
    getCapsulesSuccess, 
    getCapsulesFailure 
} = capsuleReducer.actions;

export default capsuleReducer.reducer;
