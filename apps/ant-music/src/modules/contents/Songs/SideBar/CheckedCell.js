import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { StyledSideCheckedCell } from './index.styled';

const CheckedCell = ({ selected, data, onChange }) => {
  return (
    <StyledSideCheckedCell onClick={() => onChange(data.id)}>
      <Checkbox
        checked={selected.some((item) => item === data.id)}
        color='primary'
      />
      <p className='mb-0'>{data.name}</p>
    </StyledSideCheckedCell>
  );
};

export default CheckedCell;

CheckedCell.propTypes = {
  selected: PropTypes.array,
  data: PropTypes.object,
  onChange: PropTypes.func,
};

CheckedCell.defaultProps = {
  selected: [],
  data: {},
};
