import React from 'react';
// import { notification } from '@crema/fakedb/data';
import { Dropdown } from 'antd';

import IntlMessages from '@ant-music/helpers/IntlMessages';
import NotificationItem from './NotificationItem';
import { IoIosNotificationsOutline } from 'react-icons/io';
import {
  StyledDrowdownWrapper,
  StyledNotifyButtonAll,
  StyledNotifyIcon,
  StyledNotifyLink,
  StyledNotifyList,
  StyledNotifyScrollSubmenu,
  StyledNotifyText,
} from './index.styled';

const notification = [];

const items = [
  {
    key: 1,
    label: (
      <span className='header'>
        <IntlMessages id='common.notifications' />({notification.length})
      </span>
    ),
  },
  {
    key: 2,
    label: (
      <StyledNotifyScrollSubmenu>
        <StyledNotifyList
          dataSource={notification}
          renderItem={(item) => {
            return <NotificationItem key={item.id} item={item} />;
          }}
        />
      </StyledNotifyScrollSubmenu>
    ),
  },
  {
    key: 3,
    label: (
      <StyledNotifyButtonAll type='primary'>
        <IntlMessages id='common.viewAll' />
      </StyledNotifyButtonAll>
    ),
  },
];
const AppNotifications = () => {
  return (
    <StyledDrowdownWrapper>
      <Dropdown
        menu={{ items }}
        className='dropdown'
        overlayClassName='header-notify-messages'
        getPopupContainer={(triggerNode) => triggerNode}
        trigger={['click']}
      >
        <StyledNotifyLink onClick={(e) => e.preventDefault()}>
          <StyledNotifyIcon>
            <IoIosNotificationsOutline />
          </StyledNotifyIcon>
          <StyledNotifyText>
            <IntlMessages id='common.notifications' />
          </StyledNotifyText>
        </StyledNotifyLink>
      </Dropdown>
    </StyledDrowdownWrapper>
  );
};

export default AppNotifications;
