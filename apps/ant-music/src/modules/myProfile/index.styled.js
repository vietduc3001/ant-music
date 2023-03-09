import { Form, Tabs } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledUserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const StyledUserProfileTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: row;
  } */

  &.ant-tabs-left
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane,
  &.ant-tabs-left
    > div
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane {
    padding-left: 0;
  }

  & .ant-tabs-nav {
    min-width: 200px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    padding: 6px;

    &::before {
      border-bottom: unset !important;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      min-width: 280px;
    }

    & .ant-tabs-tab {
      color: ${({ theme }) => theme.palette.text.primary};
      display: flex;
      align-items: center;
      padding: 6px 12px;
      /* margin-right: 20px !important; */
      /* border-radius: ${({ theme }) => theme.cardRadius}px; */
      border-radius: 12px;

      &:hover,
      &:focus {
        background-color: transparent;
        color: ${({ theme }) => theme.palette.primary.main};
      }

      [dir='rtl'] & {
        margin-right: 0 !important;
        margin-left: 20px !important;
        border-radius: 30px 0 0 30px;
      }

      & + .ant-tabs-tab {
        margin-top: 1px;
      }
    }

    & .ant-tabs-tab-active {
      color: ${({ theme }) => theme.palette.primary.main};
      background-color: ${({ theme }) => rgba(theme.palette.primary.main, 0.1)};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.palette.primary.main};
        background-color: ${({ theme }) =>
          rgba(theme.palette.primary.main, 0.1)};
      }
    }

    & .ant-tabs-ink-bar {
      display: none;
    }
  }

  & .user-profile-icon {
    display: flex;
    align-items: center;

    & .icon {
      font-size: ${({ theme }) => theme.font.size.lg};
      margin-right: 16px;

      [dir='rtl'] & {
        margin-right: 0;
        margin-left: 16px;
      }
    }
  }

  & .ant-tabs-content-holder {
    padding-top: 20px;

    [dir='rtl'] & {
      order: 2;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
      /* padding-left: 20px; */
      padding-top: 0;

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 20px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
      /* padding-left: 32px; */

      [dir='rtl'] & {
        padding-left: 0;
        padding-right: 32px;
      }
    }
  }

  & .ant-tabs-content {
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: ${({ theme }) => theme.cardRadius}px;
    height: 100%;
    padding: 20px;

    & .ant-form-item {
      margin-bottom: 16px;
    }

    & .user-profile-group-btn {
      margin-bottom: 0;
    }
  }
`;

export const StyledUserProfileGroupBtn = styled(Form.Item)`
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

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
