import { IoIosSettings } from 'react-icons/io';
import { MdHomeWork, MdQueueMusic } from 'react-icons/md';
import { FaUser, FaMusic } from 'react-icons/fa';
import { GiMusicalKeyboard, GiMusicSpell } from 'react-icons/gi';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { ImFileMusic } from 'react-icons/im';

const routesConfig = [
  {
    id: 'management',
    title: 'Management',
    messageId: 'sidebar.management',
    type: 'group',
    children: [
      {
        id: 'feature',
        title: 'Chức năng',
        messageId: 'sidebar.management.feature',
        type: 'item',
        icon: <IoIosSettings />,
        path: '/feature',
      },
      {
        id: 'department',
        title: 'Phòng ban',
        messageId: 'sidebar.management.department',
        type: 'item',
        icon: <MdHomeWork />,
        path: '/department',
      },
      {
        id: 'users',
        title: 'Người dùng',
        messageId: 'sidebar.management.user',
        type: 'item',
        icon: <FaUser />,
        path: '/user',
      },
    ],
  },
  {
    id: 'categories',
    title: 'Categories',
    messageId: 'sidebar.categories',
    type: 'group',
    children: [
      {
        id: 'genre',
        title: 'Genre',
        messageId: 'sidebar.categories.genre',
        icon: <ImFileMusic />,
        path: '/genre',
      },
      {
        id: 'theme',
        title: 'Themes',
        messageId: 'sidebar.categories.theme',
        icon: <MdQueueMusic />,
        path: '/theme',
      },
      {
        id: 'mood',
        title: 'Moods',
        messageId: 'sidebar.categories.mood',
        icon: <GiMusicSpell />,
        path: '/mood',
      },
      {
        id: 'effect',
        title: 'Effect',
        messageId: 'sidebar.categories.effect',
        icon: <BsMusicPlayerFill />,
        path: '/effect',
      },
      {
        id: 'instrument',
        title: 'Instrument',
        messageId: 'sidebar.categories.instrument',
        icon: <GiMusicalKeyboard />,
        path: '/instrument',
      },
    ],
  },
  {
    id: 'contents',
    title: 'Contents',
    messageId: 'sidebar.contents',
    type: 'group',
    children: [
      {
        id: 'songs',
        title: 'Songs',
        messageId: 'sidebar.contents.songs',
        icon: <FaMusic />,
        path: '/songs',
      },
    ],
  },
];

export default routesConfig;
