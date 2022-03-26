/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RNBootSplash from 'react-native-bootsplash';
import type { FC } from 'react';

import { auth0 } from './services';

const App: FC = () => {
  const [accessToken, setaccessToken] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const init = async () => {
      setTimeout(() => {
        // …do multiple sync or async tasks
      }, 1000);
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View>
          <Text>OLAx</Text>
        </View>

        <TouchableOpacity onPress={login}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <Text>{accessToken}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
