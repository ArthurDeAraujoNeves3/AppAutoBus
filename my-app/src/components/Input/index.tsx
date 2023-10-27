import { TextInput } from "react-native"
import { InputLogin, TituloInput, Container } from "./style";

type InputProps = {

    Title: string
}
export default function Input({Title}: InputProps) {

    return(

        <Container>

            <TituloInput>{Title}</TituloInput>
            <InputLogin keyboardType="numeric"></InputLogin>
        
        </Container>
    );
}