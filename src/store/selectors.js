import { createSelector } from 'reselect';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
  }
);