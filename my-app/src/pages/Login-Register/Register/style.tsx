import { StatusBar } from "react-native";
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : StatusBar.currentHeight + 64;
import styled from "styled-components/native";

//Screen
export const Container = styled.View`

    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
    gap: 10px;
    background-color: #121212;
`;
//Titulo da pagina
export const TituloPage = styled.Text`

    margin-Top: ${StatusBarHeight}px;
    padding-bottom: 20px;
    font-size: 30px;
    color: white;
    text-align: center;
`;
//Titulo do input
export const Texto = styled.Text`


    font-size: 20px;
    color: white;
`;
export const DivInput = styled.View`
    gap: 10px;
`;
//Botao
export const DivBtn = styled.View`

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Btn = styled.TouchableHighlight`

    align-items: center;
    background-color: #FF5D29;
    border-radius: 8px;
    width: 230px;
`;
export const BtnTexto = styled.Text`

    color: white;
    font-size: 20px;
    text-align: center;
    padding: 5px 0px;
`;
export const BtnEntrar = styled.TouchableOpacity`

    background-color: #FF5D29;
    border-radius: 8px;
`;
export const BtnEntrarTexto = styled.Text`

    color: white;
    font-size: 20px;
    text-align: center;
    padding: 10px 0px;
`;
