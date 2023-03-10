import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSongItemContainer,
  StyledSongItemTitle,
  StyledSongItemOthers,
  StyledSongItemAlbums,
  StyledSongItemThumbnail,
  StyledSongItemDetails,
  StyledSongItemWrapper,
  StyledSongItemInfo,
} from './index.styled';
import WaveForm from './WaveForm';
import {
  FaDownload,
  FaHeadphones,
  FaHeart,
  FaInfo,
  FaPlus,
} from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import { BsChatSquareText } from 'react-icons/bs';
import { Button, Tooltip } from 'antd';
// import SongDetail from '../SongsDetail';
// import SongsUpload from './SongsUpload';

const SongItem = ({ song = {}, idCurrentSong, handleChangeCurrentSong }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);

  const toggleModalUpload = () => {
    setIsModalUploadOpen(true);
  };

  const handleOkModalUpload = () => {
    setIsModalUploadOpen(false);
  };

  const handleCancelModalUpload = () => {
    setIsModalUploadOpen(false);
  };

  return (
    <StyledSongItemContainer className='song-item'>
      <StyledSongItemThumbnail
        src={song.thumbnail_url}
        style={{
          verticalAlign: 'middle',
        }}
        size={60}
      >
        {song.name[0]}
      </StyledSongItemThumbnail>
      <StyledSongItemDetails>
        <StyledSongItemTitle className='title'>
          {song.name}asdasdadsasdasdadsad
        </StyledSongItemTitle>
        <StyledSongItemTitle className='author'>
          {song.user}
        </StyledSongItemTitle>
      </StyledSongItemDetails>
      <StyledSongItemWrapper>
        <WaveForm
          className='wave-form'
          idCurrentSong={idCurrentSong}
          song={song}
          handleChangeCurrentSong={handleChangeCurrentSong}
        />

        <div className='song__other'>
          <StyledSongItemAlbums>
            {song?.genres?.map((genre, index) => (
              <span className='song__genre' key={genre.id}>
                {genre.name}
              </span>
            ))}
          </StyledSongItemAlbums>
          <StyledSongItemOthers>
            {/* <StyledSongItemInfo onClick={toggleModalUpload} icon={<FaPlus />} /> */}
            {/* <StyledSongItemInfo onClick={toggleModal} icon={<FaInfo />} /> */}
            <div>
              <Tooltip title={`Bình luận`}>
                <Button
                  shape='circle'
                  className='btn-action'
                  icon={<BsChatSquareText />}
                ></Button>
              </Tooltip>
              <Tooltip title={`Tải xuống. Lượt tải: ${song.count_download}`}>
                <Button
                  shape='circle'
                  className='btn-action'
                  icon={<HiArrowDown />}
                ></Button>
              </Tooltip>
              <Tooltip title={`Lượt nghe: ${song.count_view}`}>
                <Button
                  shape='circle'
                  className='btn-action'
                  icon={<FaHeadphones />}
                ></Button>
              </Tooltip>
              <Tooltip title={`Chi tiết`}>
                <Button
                  shape='circle'
                  className='btn-action'
                  icon={<FaInfo />}
                ></Button>
              </Tooltip>
              {/* <Tooltip title={`Lượ: ${song.count_download}`}>
              <Button icon={<FaHeart />}></Button>
            </Tooltip> */}
            </div>
          </StyledSongItemOthers>
        </div>
      </StyledSongItemWrapper>
      {/* <SongDetail
        isModalOpen={isModalOpen}
        onClose={handleCancel}
        onOk={handleOk}
        title={song.title}
      /> */}
      {/* <SongsUpload
        isModalOpen={isModalUploadOpen}
        onClose={handleCancelModalUpload}
        onOk={handleOkModalUpload}
        title={song.title}
      /> */}
    </StyledSongItemContainer>
  );
};

export default SongItem;

SongItem.propTypes = {
  song: PropTypes.object,
};
