import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  color: #f4ede8;
  margin-top: 24px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
  text-align: center;
`;

export const OkButton = styled(RectButton)`
  padding: 12px 32px;
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #312e38;
`;
