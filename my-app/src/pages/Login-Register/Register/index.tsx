import { Container, DivBtn, Btn, BtnTexto, Texto, DivInput, TituloPage, BtnEntrar, BtnEntrarTexto } from "./style";  
import Input from "../../../components/Input";

export default function Register({ navigation }: { navigation: any}) {

    return(

        <Container>

            <TituloPage>Registrar</TituloPage>

            <DivInput>

                <Input Title="Nome" secure={false} />
                <Input Title="Email" secure={false} />
                <Input Title="Senha" secure={true} />
                <Texto>Esqueceu a senha?</Texto>

                <BtnEntrar onPress={ () => { navigation.navigate("Login") } }>
                        
                    <BtnEntrarTexto>Registrar</BtnEntrarTexto>

                </BtnEntrar>

            </DivInput>

            <DivBtn>

                <Btn onPress={() => { navigation.navigate("Login") }}>
                    <BtnTexto>Login</BtnTexto>
                </Btn>

            </DivBtn>
        </Container>
    );
}