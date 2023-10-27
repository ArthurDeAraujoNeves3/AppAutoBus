import { StatusBar } from "react-native";
const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 0 : StatusBar.currentHeight + 64;
import styled from "styled-components/native";

//Screen
export const Container = styled.View`

    padding: 10px;
    height: 100%;
    background-color: #121212;
`;
//Titulo da pagina
export const TituloPage = styled.Text`

    margin-top: ${StatusBarHeight + 60}px;
    font-size: 30px;
    color: white;
    text-align: center;
`;
//Titulo do input
export const Texto = styled.Text`


    font-size: 20px;
    color: white;
`
//Botao
export const Btn = styled.TouchableHighlight`

    background-color: blue;
`;
export const BtnEntrar = styled.TouchableOpacity`

    background-color: #FF5D29;
`;