import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { addFilter } from 'store/filter/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
    const { filter } = useAuth();

  const handleFilterChange = e => {
    dispatch(addFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <div className={styles.filterForm}>
      <label className={styles.filterLabel}>
        Find contacts by name or number:
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search..."
          className={styles.inputField}
        />
      </label>
    </div>
  );
};

export default Filter;
