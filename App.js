import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./src/pages/home";
import mensagens from "./src/pages/mensagens";
import jogos from "./src/pages/jogos";
import perfil from "./src/pages/perfil";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: "home",
  },
  mensagens: {
    name: "md-chatbubbles",
  },
  jogos: {
    name: "game-controller",
  },
  perfil: {
    name: "person-circle",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(route) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#000",
          },
          activeBackgroundColor: "#FFF",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Mensagens" component={mensagens} />
        <Tab.Screen name="Jogos" component={jogos} />
        <Tab.Screen name="Perfil" component={perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
