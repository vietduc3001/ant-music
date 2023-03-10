import mock from '../MockConfig';
import songList from '../../fakedb/contents/Songs/songsList';

mock
  .onGet('/api/songs/list')
  .reply(200, { songList, totalRecord: songList.length });
