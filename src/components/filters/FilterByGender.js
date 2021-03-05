import React from 'react';
import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const { gender, handleForm } = props;

  const handleChange = (ev) => {
    handleForm({
      key: 'gender',
      value: ev.target.value,
    });
  };

  return (
    <fieldset className="filter__list">
      <label htmlFor="gender" className="filter__list--label">
        Gender:
      </label>
      <select className="filter__list--input" name="gender" id="gender" value={gender} onChange={handleChange}>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </fieldset>
  );
};

FilterByGender.propTypes = {
  handleForm: PropTypes.func,
};

export default FilterByGender;
