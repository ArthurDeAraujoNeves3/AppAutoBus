import { Container, Nome, Btn, DivImg, ImgSeta, Img } from "./styled";

export default function Header() {
  return (
    <Container>
      <Btn>
        <ImgSeta source={require("../../../assets/icons/seta.png")} />
      </Btn>
      <DivImg>
        <Img source={require("../../../assets/img/profile/Pfp.png")}/>
      </DivImg>
      <Nome>Arthur de Araujo Neves</Nome>
    </Container>
  );
}
