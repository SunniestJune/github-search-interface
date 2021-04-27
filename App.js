import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import UserScreen from "./Screens/UserScreen";
import RepositoryScreen from "./Screens/RepositoryScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="User" component={UserScreen} />
              <Tab.Screen name="Repository" component={RepositoryScreen} />
              <Tab.Screen name="Favorites" component={FavoritesScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
