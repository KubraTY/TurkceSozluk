import React from 'react';
import {Text} from 'react-native';
import TabButton from '../components/tab_button';

import Box from '../components/box';
import Search from './icons/Search';
import Bookmark from './icons/Bookmark';
import Clock from './icons/Clock';
import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  return (
    <Box
      shadowColor="#000"
      shadowOpacity={0.1}
      shadowRadius={24}
      flexDirection="row"
      paddingBottom={15}
      backgroundColor="white">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return label === 'Search' ? (
          <Box
            key={label}
            padding={15}
            marginTop={-15}
            backgroundColor="white"
            borderRadius="full">
            <TabButton
              alignItems="center"
              justifyContent="center"
              backgroundColor="red"
              borderRadius="full"
              size={56}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}>
              <Text>
                <Search stroke="white" />
              </Text>
            </TabButton>
          </Box>
        ) : (
          <TabButton
            key={label}
            paddingTop={6}
            flexDirection="column"
            height={56}
            flex={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}>
            {label === 'History' && (
              <Clock
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'Favorite' && (
              <Bookmark
                stroke={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={3}
              backgroundColor={isFocused ? 'red' : 'transparent'}
              marginTop={6}
              borderRadius="full"
            />
          </TabButton>
        );
      })}
    </Box>
  );
}
export default TabBar;
