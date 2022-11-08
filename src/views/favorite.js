import React from 'react';
import {StatusBar, Text} from 'react-native';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
function FavoriteView() {
  return (
    <Box as={SafeAreaView} flex={1} alignItems="center" justifyContent="center">
      <StatusBar barStyle="dark-content" />
      <Text>Favorite Page</Text>
    </Box>
  );
}

export default FavoriteView;
