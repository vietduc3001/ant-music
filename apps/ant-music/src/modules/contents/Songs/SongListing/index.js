import React, { useState } from 'react';
import AppList from '@ant-music/components/AppList';
import { StyledSongListMainContent } from './index.styled';
import ListEmptyResult from '@ant-music/components/AppList/ListEmptyResult';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const SongListing = ({ songsList, loading }) => {
  const [idCurrentSong, setIdCurrentSong] = useState(null);

  const handleChangeCurrentSong = (song) => {
    setIdCurrentSong(song);
  };

  return (
    <StyledSongListMainContent>
      <AppList
        delay={200}
        type='alpha'
        data={songsList}
        renderItem={(item) => (
          <ListItem
            idCurrentSong={idCurrentSong}
            handleChangeCurrentSong={handleChangeCurrentSong}
            song={item}
            key={item.id}
          />
        )}
        ListEmptyComponent={
          <ListEmptyResult content='Không có bài hát' loading={loading} />
        }
      />
    </StyledSongListMainContent>
  );
};

export default SongListing;

SongListing.defaultProps = {
  songsList: [],
};

SongListing.propTypes = {
  ecommerceList: PropTypes.array,
  loading: PropTypes.bool,
};
