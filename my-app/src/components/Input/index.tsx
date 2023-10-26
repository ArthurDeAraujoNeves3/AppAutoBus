import { Text } from "react-native"
import { InputLogin, TituloInput, Container } from "./style";

type InputProps = {

    Title: string
    Senha: boolean
}

export default function Input({Title, Senha}: InputProps) {

    return(

        <Container>

            <TituloInput>{Title}</TituloInput>
            <InputLogin></InputLogin>
        
        </Container>
    );
}