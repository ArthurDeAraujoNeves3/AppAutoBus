import { TouchableHighlight, Text } from "react-native"
import { Container, Btn, Texto } from "./style";  
import Input from "../../../components/Input";

export default function Login({ navigation }: { navigation: any}) {

    return(

        <Container>
            <Input Title="Email"/>

            <Btn onPress={() => { navigation.navigate("Registrar") }}>
                <Texto>Click</Texto>
            </Btn>
        </Container>
    );
}