import { TouchableHighlight, Text } from "react-native"
import { Container, Btn, Texto, TituloPage, BtnEntrar } from "./style";  
import Input from "../../../components/Input";

export default function Login({ navigation }: { navigation: any}) {

    return(

        <Container>

            <TituloPage>Login</TituloPage>

            <Input Title="Email" secure={false} />
            <Input Title="Senha" secure={true} />
            <Texto>Esqueceu a senha?</Texto>

            <BtnEntrar>
                
                <Texto>Entrar</Texto>

            </BtnEntrar>

            <Btn onPress={() => { navigation.navigate("Registrar") }}>
                <Texto>Click</Texto>
            </Btn>
        </Container>
    );
}