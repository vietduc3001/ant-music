import React, { useState } from 'react';
import AppInfoView from '@ant-music/components/AppInfoView';
import PropTypes from 'prop-types';
import AppSidebar from './AppSidebar';
import clsx from 'clsx';
import { MenuOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { useLayoutContext } from '@ant-music/context/LayoutContextProvider';
import {
  StyledAppContainer,
  StyledAppWrap,
  StyledAppWrapHeader,
  StyledMainContent,
  StyledMainContentCard,
  StyledMenuBtn,
} from './index.styled';

const AppsContainer = (props) => {
  const [isAppDrawerOpen, setAppDrawerOpen] = useState(false);
  const { footer, navStyle } = useLayoutContext();
  const {
    title,
    noContentAnimation,
    sidebarContent,
    fullView,
    children,
    actionContent,
  } = props;
  console.log(actionContent);

  return (
    <StyledAppWrap>
      <StyledAppWrapHeader
        className={clsx({
          appsWrapHeaderFull: fullView,
        })}
        style={{
          display: actionContent ? 'flex' : 'block',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {fullView ? null : (
          <StyledMenuBtn onClick={() => setAppDrawerOpen(!isAppDrawerOpen)}>
            <MenuOutlined className='menu-btn-icon' />
          </StyledMenuBtn>
        )}
        <QueueAnim
          style={{
            zIndex: 3,
            overflow: 'hidden',
          }}
          type='scale'
        >
          <h2 className='text-truncate' key='title'>
            {title}
          </h2>
          {/* {sidebarContent} */}
        </QueueAnim>
        {actionContent}
      </StyledAppWrapHeader>

      <StyledAppContainer>
        {sidebarContent ? (
          <QueueAnim
            style={{ zIndex: 3, marginRight: '30px' }}
            type={props.type ? props.type : 'left'}
          >
            <AppSidebar
              isAppDrawerOpen={isAppDrawerOpen}
              setAppDrawerOpen={setAppDrawerOpen}
              footer={footer}
              fullView={fullView}
              navStyle={navStyle}
              title={title}
              sidebarContent={sidebarContent}
              key='sidebar'
            />
          </QueueAnim>
        ) : null}
        <StyledMainContent
          className={clsx({
            appsMainContentFull: fullView,
          })}
        >
          {noContentAnimation ? (
            <StyledMainContentCard
              bordered={false}
              key='content'
              style={{
                ...props.cardStyle,
                borderRadius: 16,
              }}
            >
              {children}
            </StyledMainContentCard>
          ) : (
            <QueueAnim
              type={props.type ? props.type : 'right'}
              style={{ minHeight: '100%' }}
            >
              <StyledMainContentCard
                bordered={false}
                key='content'
                style={{
                  ...props.cardStyle,
                  borderRadius: 16,
                }}
              >
                {children}
              </StyledMainContentCard>
            </QueueAnim>
          )}

          <AppInfoView />
        </StyledMainContent>
      </StyledAppContainer>
    </StyledAppWrap>
  );
};

export default AppsContainer;

AppsContainer.defaultProps = {
  title: '',
  noContentAnimation: false,
};

AppsContainer.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cardStyle: PropTypes.object,
  noContentAnimation: PropTypes.bool,
  sidebarContent: PropTypes.node,
  fullView: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.any,
};
