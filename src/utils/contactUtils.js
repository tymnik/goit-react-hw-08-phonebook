import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../store/reducer';
import { selectVisibleContacts } from '../store/selectors';

export const useContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectVisibleContacts);

  return { filteredContacts };
};
