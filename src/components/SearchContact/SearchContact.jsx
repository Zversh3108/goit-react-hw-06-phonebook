import React from 'react';
import PropTypes from 'prop-types';
import { Text, Input } from './SearchContact.Styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
export default function SearchContactByName(props) {
  const dispatch = useDispatch();
  const { title } = props;

  const onFilterChange = evt => {
    const { value } = evt.target;
    dispatch(filterContacts(value));
  };
  return (
    <div>
      <Text>{title}</Text>
      <form>
        <Input
          type="text"
          onChange={onFilterChange}
          placeholder="Search by name"
        />
      </form>
    </div>
  );
}
SearchContactByName.propTypes = {
  title: PropTypes.string.isRequired,
};
