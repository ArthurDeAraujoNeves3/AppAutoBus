import { Container } from "./styled";
import Header from "./header/header";
import InfoUser from "./infos/infos";
import Footer from "./footer";

export default function Profile() {

    return(

        <Container>

            <Header/>
            <InfoUser/>
            <Footer/>
            
        </Container>
    );
};