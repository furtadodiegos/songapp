import React from 'react';
import type { FC } from 'react';
import type { TextProps } from 'react-native-ui-lib';

import { CustomText } from './styles';

const AppText: FC<TextProps> = ({ children, ...props }) => {
  return <CustomText {...props}>{children}</CustomText>;
};

export default AppText;
