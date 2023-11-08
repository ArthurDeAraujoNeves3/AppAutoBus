import { InfoMain, SecaoInfo, TextoInfoLabel, SetaPreta , Div} from "./styled";
import { View, Text } from "react-native";

export default function infoUser() {
  return (
    <InfoMain>
      <SecaoInfo >
        <TextoInfoLabel>Nome</TextoInfoLabel>

        <Div>
          <Text>Arthur</Text>
          <SetaPreta source={require("../../../assets/icons/setaPreta.png")}  />
        </Div>
      </SecaoInfo>

      <SecaoInfo >
        <TextoInfoLabel>Nome</TextoInfoLabel>

        <Div>
          <Text>Arthur</Text>
          <SetaPreta source={require("../../../assets/icons/setaPreta.png")}  />
        </Div>
      </SecaoInfo>

      <SecaoInfo >
        <TextoInfoLabel>Nome</TextoInfoLabel>

        <Div>
          <Text>Arthur</Text>
          <SetaPreta source={require("../../../assets/icons/setaPreta.png")}  />
        </Div>
      </SecaoInfo>

      <SecaoInfo >
        <TextoInfoLabel>Nome</TextoInfoLabel>

        <Div>
          <Text>Arthur</Text>
          <SetaPreta source={require("../../../assets/icons/setaPreta.png")}  />
        </Div>
      </SecaoInfo>
      
    </InfoMain>
  );
}
