import { IoIosSettings } from 'react-icons/io';
import { MdHomeWork } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const routesConfig = [
  {
    id: 'feature',
    title: 'Chức năng',
    messageId: 'apps.feature',
    type: 'item',
    icon: <IoIosSettings />,
    path: '/feature',
  },
  {
    id: 'department',
    title: 'Phòng ban',
    messageId: 'apps.department',
    type: 'item',
    icon: <MdHomeWork />,
    path: '/department',
  },
  {
    id: 'users',
    title: 'Người dùng',
    messageId: 'apps.user',
    type: 'item',
    icon: <FaUser />,
    path: '/user',
  },
];

export default routesConfig;
