import Main from "./screen/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

console.disableYellowBox = true;

export default function App() {
    return (
      <Provider store={store}>
          <NavigationContainer>
              <Main />
          </NavigationContainer>
      </Provider>
    );
}


