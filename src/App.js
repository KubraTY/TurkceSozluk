import React from 'react';
//import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import TabBar from './components/tab_bar';
import Box from './components/box';
import HistoryView from './views/history';
import SearchView from './views/search';
import FavoriteView from './views/favorite';
import DetailView from './views/detail';
import theme from './utils/theme';
import More from './components/icons/More';
import Left from './components/icons/Left';
import TabButton from './components/tab_button';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            headerMode: 'none',
            header: () => {},
          };
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => {
          return {
            title: (route.params && route.params.title) || 'Bos',
            headerTransparent: true,
            headerTitleStyle: {color: theme.colors.textDark},
            headerLeft: () => (
              <TabButton onPress={() => navigation.navigate('Search')}>
                <Left
                  backgroundColor={theme.colors.red}
                  color={theme.colors.textDark}
                  py={20}
                />
              </TabButton>
            ),
            headerRight: () => (
              <TabButton onPress={() => navigation.navigate('Search')}>
                <More color={theme.colors.textDark} />
              </TabButton>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Search"
              tabBar={props => <TabBar {...props} />}>
              <Tab.Screen name="History" component={HistoryView} />
              <Tab.Screen
                name="Search"
                component={SearchStack}
                options={{headerShown: false}}
              />
              <Tab.Screen name="Favorite" component={FavoriteView} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
