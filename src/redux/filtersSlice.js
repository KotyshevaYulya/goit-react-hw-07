import { createSlice,  createSelector} from "@reduxjs/toolkit";
 import { selectContact } from "./contactsSlice";

const slice = createSlice({
    name: 'filters',
    initialState: { name: "" },
    reducers: {changeFilter: (state, action) => {
             state.name = action.payload;
    }   
    }
    
})


export const selectFilterName = state => state.filters.name;
export const { changeFilter } = slice.actions; 
export default slice.reducer; 

export const selectVisibleContacts = createSelector([selectFilterName, selectContact],
    (filters, contacts) => {
             return contacts.filter(obj =>
        obj.name.toLowerCase().includes(filters.toLowerCase()));
      })