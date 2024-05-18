import  { createSlice,createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
         state.error = null;
     
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state,action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
    state.loading = false;
      state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
    state.loading = true;
    state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
    state.loading = false;
      state.error = action.payload;
  })
});
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, contactsFilter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(contactsFilter.toLowerCase()));
})

export default contactsSlice.reducer;
