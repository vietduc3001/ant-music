import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledSongListMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px;
  width: 100%;
  background-color: ${({ theme }) =>
    rgba(theme.palette.background.default, 0.6)};
`;
