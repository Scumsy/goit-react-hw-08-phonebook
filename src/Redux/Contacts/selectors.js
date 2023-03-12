// export const selectContacts = state => state.contactsSlice.contacts.items;
// export const selectFilter = state => state.contactsSlice.contacts.filter.value;
// export const selectLoadingStatus = state => state.contactsSlice.isLoading;
// export const selectError = state => state.contactsSlice.error;

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.contacts.filter;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
