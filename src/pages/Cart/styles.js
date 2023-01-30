import styled from 'styled-components/native';

export const CartContainer = styled.SafeAreaView`
    flex: 1;
    max-width: 100%;
    max-height: 100%;
    background-color: #F0F0F0;
    justify-content: center;
    align-items: center;
`;

export const CartTextTop = styled.Text`
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #006D2B;
`;

export const FinalOrder = styled.View`
    background-color: #EBEBEB;
    width: 100%;
    height: 100px;
    padding: 15px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const OrderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #383838;

`;

export const ButtonBack = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #FF584D;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #FFF;

`;

export const ButtonFinish = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #E63A2E;
    justify-content: center;
    align-items: center;
`;

export const EmptyView = styled.View`
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
`;

export const EmptyText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #121212;

`;