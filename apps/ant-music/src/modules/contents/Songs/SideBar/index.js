import React from 'react';
import AppList from '@ant-music/components/AppList';
import AppScrollbar from '@ant-music/components/AppScrollbar';
import {
  StyledSidebar,
  StyledSidebarItem,
  StyledSidebarItemTitle,
  StyledSidebarTitle,
  StyledScrollbar,
} from './index.styled';
import CheckedCell from './CheckedCell';
import { genres, themes, moods, instruments, effects } from '../../../../data';

const SideBar = () => {
  return (
    <AppScrollbar>
      <StyledSidebar>
        <StyledSidebarTitle>Tìm kiếm theo</StyledSidebarTitle>

        <StyledSidebarItem>
          <StyledSidebarItemTitle>Thể loại</StyledSidebarItemTitle>
          <AppList
            data={genres}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                // onChange={onSelectBrand}
                // selected={selectedBrand}
              />
            )}
          />
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarItemTitle>Chủ đề</StyledSidebarItemTitle>
          <AppList
            data={themes}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                // onChange={onSelectBrand}
                // selected={selectedBrand}
              />
            )}
          />
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarItemTitle>Cảm xúc</StyledSidebarItemTitle>
          <AppList
            data={moods}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                // onChange={onSelectBrand}
                // selected={selectedBrand}
              />
            )}
          />
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarItemTitle>Nhạc cụ</StyledSidebarItemTitle>
          <AppList
            data={instruments}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                // onChange={onSelectBrand}
                // selected={selectedBrand}
              />
            )}
          />
        </StyledSidebarItem>
        <StyledSidebarItem>
          <StyledSidebarItemTitle>Hiệu ứng</StyledSidebarItemTitle>
          <AppList
            data={effects}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                // onChange={onSelectBrand}
                // selected={selectedBrand}
              />
            )}
          />
        </StyledSidebarItem>
      </StyledSidebar>
    </AppScrollbar>
  );
};

export default SideBar;
