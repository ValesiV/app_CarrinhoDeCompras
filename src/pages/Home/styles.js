import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F0F0F0;
    margin-top: 30px;
`;

export const TopText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #006D2B;
    margin-top: 15px;
`;

export const CartButton = styled.TouchableOpacity`
    left: 250px;
    bottom: 0px;
    position: absolute;
`;

export const DotView = styled.View`
    background-color: #FF584D;
    width: 20px;
    height: 20px;
    top: 35px;
    right: 8px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    z-index: 99;
`;

export const DotText = styled.Text`
    font-size: 14px;
    color: #FFF;


`;



