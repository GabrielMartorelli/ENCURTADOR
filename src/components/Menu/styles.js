import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const ButtonMenu = styled.TouchableOpacity`
  top: ${Platform.OS === "ios"
    ? StatusBar.currentHeight + 60 + "px"
    : 10 + "px"};
  position: absolute;
  margin: 0 20px;
  justify-content: space-around;
`;
