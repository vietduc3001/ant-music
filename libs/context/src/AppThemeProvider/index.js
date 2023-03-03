import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { useLayoutContext } from '../AppContextProvider/LayoutContextProvider';
// import { useLocaleContext } from '../AppContextProvider/LocaleContextProvider';
import { useThemeContext } from '../AppContextProvider/ThemeContextProvider';
// import AppLocale from '@crema/services/localization';
import { getAntTheme } from '@ant-music/helpers';
import defaultConfig, {
  defaultTheme,
} from '@ant-music/constants/defaultConfig';

const AppThemeProvider = (props) => {
  const { direction } = useLayoutContext();
  // const { locale } = useLocaleContext();
  const { theme } = useThemeContext();

  // const { antLocale } = AppLocale[locale.locale];

  // useEffect(() => {
  //   document.body.setAttribute('dir', direction);
  // }, [direction]);
  const abc = useThemeContext();
  console.log(
    '🚀 ~ file: index.js:27 ~ AppThemeProvider ~ useThemeContext:',
    abc,
  );

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider
        direction={direction}
        // locale={antLocale}
        // theme={{
        //   token: getAntTheme(theme),
        // }}
      >
        {props.children}
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default React.memo(AppThemeProvider);

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
