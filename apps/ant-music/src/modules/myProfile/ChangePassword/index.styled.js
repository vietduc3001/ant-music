import { Form, Tabs } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledUserProfileForm = styled(Form)`
  position: relative;
`;

export const StyledUserProfileFormTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 16px;
  margin-top: 0;
`;

export const StyledUserProfileGroupBtn = styled(Form.Item)`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: end;

  & .ant-btn {
    & + .ant-btn {
      margin-left: 12px;

      [dir='rtl'] & {
        margin-left: 0;
        margin-right: 12px;
      }
    }
  }
`;
