import React from 'react';
import IntlMessages from '@ant-music/helpers/IntlMessages';
import {
  StyledUserProfileContainer,
  StyledUserProfileTabs,
} from './index.styled';
import AppAnimate from '@ant-music/components/AppAnimate';
import { FaLock, FaUser, FaMusic } from 'react-icons/fa';
import ChangePassword from './ChangePassword';
import PersonalInfo from './PersonalInfo';
import Song from './Song';
import Social from './Social';

const items = [
  {
    label: (
      <span className='user-profile-icon'>
        <FaUser className='icon' />
        <span>
          <IntlMessages id='userProfile.personalInfo' />
        </span>
      </span>
    ),
    key: '01',
    children: <PersonalInfo />,
  }, // remember to pass the key prop
  {
    label: (
      <span className='user-profile-icon'>
        <FaLock className='icon' />
        <span>
          <IntlMessages id='userProfile.changePassword' />
        </span>
      </span>
    ),
    key: '02',
    children: <ChangePassword />,
  },
  {
    label: (
      <span className='user-profile-icon'>
        <FaMusic className='icon' />
        <span>
          <IntlMessages id='userProfile.song' />
        </span>
      </span>
    ),
    key: '03',
    children: <Song />,
  },
];

const UserProfile = () => {
  return (
    <StyledUserProfileContainer>
      <AppAnimate animation='transition.slideUpIn' delay={200}>
        <StyledUserProfileTabs
          key='1'
          defaultActiveKey='01'
          // tabPosition='left'
          items={items}
        />
      </AppAnimate>
    </StyledUserProfileContainer>
  );
};

export default UserProfile;
