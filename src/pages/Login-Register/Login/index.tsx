import { Container, DivBtn, Btn, BtnTexto, Texto, DivInput, TituloPage, BtnEntrar, BtnEntrarTexto } from "./style";  
import Input from "../../../components/Input";

export default function Login({ navigation }: { navigation: any}) {

    return(

        <Container>

            <TituloPage>Login</TituloPage>

            <DivInput>

                <Input Title="Email" secure={false} />
                <Input Title="Senha" secure={true} />
                <Texto>Esqueceu a senha?</Texto>

                <BtnEntrar onPress={ () => { navigation.navigate("Home") } }>
                        
                    <BtnEntrarTexto>Entrar</BtnEntrarTexto>

                </BtnEntrar>

            </DivInput>

            <DivBtn>

                <Btn onPress={() => { navigation.navigate("Registrar") }}>
                    <BtnTexto>Registrar</BtnTexto>
                </Btn>

            </DivBtn>
        </Container>
    );
}