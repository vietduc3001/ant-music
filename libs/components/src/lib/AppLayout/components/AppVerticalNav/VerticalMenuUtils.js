import { Link } from 'react-router-dom';
import React from 'react';
import { useIntl } from 'react-intl';
import { allowMultiLanguage } from '@ant-music/constants';

// const renderMenuItemChildren = (item) => {
//   const { icon, messageId, path } = item;
//   const { messages } = useIntl();

//   if (path && path.includes('/')) {
//     return {
//       key: item.id,
//       icon:
//         icon &&
//         (React.isValidElement(icon) ? (
//           <span className='ant-menu-item-icon'>{icon}</span>
//         ) : (
//           <icon className='ant-menu-item-icon' />
//         )),
//       label: (
//         <Link to={path}>
//           <span data-testid={messageId.toLowerCase + '-nav'}>
//             {allowMultiLanguage ? messages[messageId] : item.title}
//           </span>
//         </Link>
//       ),
//     };
//   } else {
//     return {
//       key: item.id,
//       icon:
//         icon &&
//         (React.isValidElement(icon) ? (
//           <span className='ant-menu-item-icon'>{icon}</span>
//         ) : (
//           <icon className='ant-menu-item-icon' />
//         )),
//       label: (
//         <span data-testid={messageId.toLowerCase + '-nav'}>
//           {allowMultiLanguage ? messages[messageId] : item.title}
//         </span>
//       ),
//     };
//   }
// };

// const renderMenuItem = (item) => {
//   return item.type === 'collapse'
//     ? {
//         key: item.id,
//         ...renderMenuItemChildren(item),
//         children: item.children.map((item) => renderMenuItem(item)),
//         type: 'collapse',
//       }
//     : {
//         key: item.id,
//         ...renderMenuItemChildren(item),
//       };
// };

// const renderMenu = (item) => {
//   return item.type === 'group'
//     ? {
//         key: item.path ? item.path : item.id,
//         ...renderMenuItemChildren(item),
//         children: item.children.map((item) => renderMenuItem(item)),
//         type: 'group',
//       }
//     : {
//         key: item.id,
//         exact: item.exact,
//         ...renderMenuItemChildren(item),
//       };
// };

// export const getRouteMenus = (routesConfig) => {
//   return routesConfig.map((route) => renderMenu(route));
// };

export const getRouteMenus = (dataMenuCurrentUser) => {
  return dataMenuCurrentUser.map((menu) => {
    return {
      key: menu.id,
      icon: (menu?.icon && (
        <span
          className='ant-menu-item-icon'
          dangerouslySetInnerHTML={{ __html: menu?.icon }}
        ></span>
      )) || <span className='ant-menu-item-icon' />,
      label: (
        <Link to={menu.pathname}>
          {/* <span data-testid={messageId.toLowerCase + '-nav'}>
                {allowMultiLanguage ? messages[messageId] : item.title}
              </span> */}
          <span>{menu.name}</span>
        </Link>
      ),
    };
  });
};
