import React from 'react';
import PropTypes from 'prop-types';
import { StyledPagination } from './index.styled';

const AppsPagination = ({ count, current, onChange, pageSize, className }) => {
  return (
    <StyledPagination
      component='div'
      total={count}
      pageSize={pageSize}
      className={className}
      current={current}
      backIconButtonProps={{ 'aria-label': 'Trang trước' }}
      nextIconButtonProps={{ 'aria-label': 'Trang tiếp theo' }}
      onChange={onChange}
      rowsPerPageOptions={[]}
    />
  );
};

export default AppsPagination;

AppsPagination.defaultProps = {
  className: '',
  pageSize: 15,
  count: 0,
};

AppsPagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  pageSize: PropTypes.number,
};
