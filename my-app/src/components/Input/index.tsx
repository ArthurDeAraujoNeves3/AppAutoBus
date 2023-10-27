import { TextInput } from "react-native"
import { InputLogin, TituloInput, Container } from "./style";

type InputProps = {

    Title: string
    secure: boolean
}
export default function Input({ Title, secure }: InputProps) {

    return(

        <Container>

            <TituloInput>{Title}</TituloInput>
            <InputLogin keyboardType="default" secureTextEntry={secure}></InputLogin>
        
        </Container>
    );
}