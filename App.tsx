import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ViewScreen from './screens/ViewScreen';
import TextScreen from './screens/TextScreen';
import TextInputScreen from './screens/TextInputScreen';
import ImageScreen from './screens/ImageScreen';
import ButtonScreen from './screens/ButtonScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';
import FlatListScreen from './screens/FlatListScreen';
import UseStateScreen from './screens/UseStateScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (loggedIn) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="View" component={ViewScreen} />
          <Tab.Screen name="Text" component={TextScreen} />
          <Tab.Screen name="TextInput" component={TextInputScreen} />
          <Tab.Screen name="Image" component={ImageScreen} />
          <Tab.Screen name="Button" component={ButtonScreen} />
          <Tab.Screen name="ScrollView" component={ScrollViewScreen} />
          <Tab.Screen name="FlatList" component={FlatListScreen} />
          <Tab.Screen name="UseState" component={UseStateScreen} />
        </Tab.Navigator>
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
