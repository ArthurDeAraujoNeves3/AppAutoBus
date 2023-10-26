import { Container } from "./style";  
import Input from "../../../components/Input";

export default function Login() {

    return(

        <Container>
            <Input Title="Email" Senha={false}/>
        </Container>
    );
}