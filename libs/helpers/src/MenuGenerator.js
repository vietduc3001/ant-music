import { useAuthUser } from '@ant-music/hooks/AuthHooks';

const RenderMenuItem = (pathname) => {
  const { dataMenuCurrentUser } = useAuthUser();
  const dataMenu = dataMenuCurrentUser.filter(
    (item) => item.pathname === pathname,
  );
  return (dataMenu?.length > 0 && dataMenu[0]) || {};
};

export default RenderMenuItem;
