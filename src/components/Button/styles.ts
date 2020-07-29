import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  width: 100%;
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 18px;
  text-align: center;
`;
