import styled from 'styled-components/native';

export const ItemsView = styled.View`
    background-color: #EBEBEB;
    width: 350px;
    height: 100px;
    margin-top: 8px;
    border-radius: 8px;
    padding: 8px;
`;

export const NameText = styled.Text`
    font-size: 19px;
    font-weight: bold;
    margin-top: 4px;
    margin-bottom: 4px;
    color: #383838;
`;

export const PriceText = styled.Text`
    font-size: 18px;
    margin-top: 15px;
    color: #383838;
`;

export const AmountView = styled.View`
    left: 260px;
    bottom: 25px;
    flex-direction: row;
    width: 70px;
    height: 30px;
    justify-content: center;
    align-items: center;
`;

export const AmountButton = styled.TouchableOpacity`

`;