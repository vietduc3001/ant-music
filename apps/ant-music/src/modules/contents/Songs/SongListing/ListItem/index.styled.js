import styled from 'styled-components';
import { Avatar, Button, Modal, Space, Tag } from 'antd';
import { rgba } from 'polished';

export const StyledSongItemContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: ${({ theme }) => {
    console.log(theme);
    return '15px';
  }};
  align-items: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
  border-radius: ${({ theme }) => theme.cardRadius}px;
  transition: translate 0.18s, box-shadow 0.18s;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 25px rgb(0 0 0 / 10%);
    top: -1px;
  }
`;

export const StyledSongItemWrapper = styled.div`
  /* width: 500px; */
  flex-grow: 1;
  display: flex;
  & .song__other {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export const StyledSongItemTitle = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 150px;

  &.title {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }

  &.author {
    color: ${({ theme }) => theme.palette.gray[500]};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
`;

export const StyledSongItemArtist = styled.span``;

export const StyledSongItemAlbums = styled(Space)`
  /* margin-top: 5px; */
  margin-right: 20px;

  & .song__genre {
    background-color: ${({ theme }) => theme.palette.gray[200]};
    color: ${({ theme }) => theme.palette.gray[700]};
    padding: 2px 6px;
    border-radius: 6px;
    font-size: 12px;
    cursor: default;
  }
`;

export const StyledSongItemThumbnail = styled(Avatar)`
  /* width: 50px;
  height: 50px; */
`;

export const StyledSongItemDuration = styled.span`
  text-align: center;
`;

export const StyledSongItemPlayback = styled(Button)`
  background-color: tomato;
  color: white;
  border-radius: 50%;
  border: none !important;
  &:hover {
    background-color: tomato !important;
    color: white !important;
  }
`;

export const StyledSongItemWaveForm = styled.div`
  flex: 1;
`;

export const StyledSongItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSongItemOthers = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.palette.gray[700]};
  & div {
    display: flex;
    gap: 4px;
    align-items: center;
    margin-right: 15px;
  }

  & .btn-action {
    outline: none;
    border: none;

    &:hover {
      background-color: ${({ theme }) => rgba(theme.palette.blue[7], 0.2)};
    }
  }
`;

export const StyledSongItemInfo = styled(Button)`
  border-radius: 50%;
  /* margin-right: 15px; */
  border: none;
`;

export const StyledSongUrlGroup = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  & li {
    & div {
      display: inline-block;
      min-width: 110px;
    }

    & .ant-tag span {
      margin-left: 5px;
    }

    & button {
      margin-left: 15px;
      border: none;
      padding: 2px;
      font-size: 16px;
      border-radius: ${({ theme }) => theme.sizes.borderRadius.circle}px;
      width: 50px;
      height: 50px;

      &.spotify {
        background-color: ${rgba('#00D25C', 0.2)};
      }

      &.apple-music {
        background-color: ${rgba('#F32239', 0.2)};
      }

      &.soundcloud {
        background-color: ${rgba('#F76721', 0.2)};
      }

      &.youtube {
        background-color: ${rgba('#F60000', 0.2)};
      }

      & img {
        width: 45%;
      }
    }
  }

  &.ver-2 {
    justify-content: space-between;
    & button {
      margin-left: 0px;
      border: none;
      padding: 8px 10px;
      font-size: 14px;
      border-radius: ${({ theme }) => theme.cardRadius}px;
      border-radius: 10px;
      width: auto;
      height: unset;
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${({ theme }) => theme.palette.background.paper};
      &:hover {
        color: ${({ theme }) => theme.palette.background.paper};
      }

      &.spotify {
        background-color: #00d25c;
      }

      &.apple-music {
        background-color: #f32239;
      }

      &.soundcloud {
        background-color: #f76721;
      }

      &.youtube {
        background-color: #f60000;
      }

      & img {
        width: 20px;
        filter: brightness(0) invert(1);
      }
    }
  }
`;
