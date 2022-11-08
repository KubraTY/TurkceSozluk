import React from 'react';
import {StatusBar, Text} from 'react-native';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import theme from '../utils/theme';

function Detail() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, []),
  );
  return (
    <Box
      as={SafeAreaView}
      flex={1}
      bg={theme.colors.softRed}
      alignItems="center"
      justifyContent="center">
      <Text>DETAY</Text>
    </Box>
  );
}

export default Detail;
