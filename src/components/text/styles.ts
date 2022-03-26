import { Text } from 'react-native-ui-lib';
import styled, { css } from 'styled-components/native';

export const CustomText = styled(Text)`
  ${({ theme: { palette } }) => css`
    color: ${palette.primaryText};
  `}
`;

export const CustomColor = () => '';
