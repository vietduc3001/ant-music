import styled from 'styled-components';

export const StyledSidebar = styled.div`
  padding: 24px;
  position: relative;
`;

export const StyledSidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const StyledSidebarItem = styled.div`
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const StyledSidebarItemTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  text-transform: uppercase;
`;

export const StyledSideCheckedCell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & .ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-right: 16px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-checkbox {
    display: block;
    top: 0;
  }
`;
