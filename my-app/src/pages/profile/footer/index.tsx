import { BtnExcluir, BtnExcluirTexto } from "./styled";
import { View, TouchableOpacity, Text } from "react-native";

export default function footer() {
  return (
    <View>
      <BtnExcluir>
        
        <BtnExcluirTexto>Excluir minha conta</BtnExcluirTexto>
        
      </BtnExcluir>
    </View>
  );
}
