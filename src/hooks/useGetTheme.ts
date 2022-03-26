import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme } from '../theme';

const useGetTheme = () => {
  const deviceTheme = useColorScheme();

  return deviceTheme === 'dark' ? darkTheme : lightTheme;
};

export default useGetTheme;
