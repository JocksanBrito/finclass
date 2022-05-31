import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.primary.main};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.backdrop.main};
  font-size: 40px;
`;
