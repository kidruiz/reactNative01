import Main from "./screen/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

console.disableYellowBox = true;

export default function App() {
    return (
      <NavigationContainer>
          <Main />
      </NavigationContainer>
    );
}


