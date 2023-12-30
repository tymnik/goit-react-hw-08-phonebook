import { createSelector } from 'reselect';

const selectContacts = state => state.contacts.items;
const selectFilter = state => state.contacts.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        number.trim().includes(normalizedFilter)
    );
    return filteredContacts;
  }
);
