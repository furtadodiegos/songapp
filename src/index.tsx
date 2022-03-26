/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import type { FC } from 'react';

import { AppText } from './components';
import { useIsMountedRef } from './hooks';
import { auth0 } from './services';
import { darkTheme, lightTheme, palette } from './theme';

const App: FC = () => {
  const [accessToken, setaccessToken] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
  const isReady = useIsMountedRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? palette.black : palette.white,
  };

  useEffect(() => {
    if (isReady) RNBootSplash.hide({ fade: true });
  }, [isReady]);

  const login = useCallback(() => {
    auth0.webAuth
      .authorize({ scope: 'openid profile email' })
      .then((credentials) =>
        // Successfully authenticated
        // Store the accessToken
        setaccessToken(credentials.accessToken),
      )
      .catch((error) => console.log(error));
  }, []);

  const logout = useCallback(() => {
    auth0.webAuth
      .clearSession({} as never)
      .then(() => {
        Alert.alert('Logged out!');
        setaccessToken('');
      })
      .catch((error) => {
        console.log('Log out cancelled', error);
      });
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          <AppText>OLAx</AppText>

          <TouchableOpacity onPress={login}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity>

          <Text>{accessToken}</Text>
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
