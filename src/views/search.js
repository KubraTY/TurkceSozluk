import React, {useRef, useEffect} from 'react';
import {StatusBar, Animated, FlatList} from 'react-native';
import Box from '../components/box';
import Text from '../components/text';
import BackGround from '../components/mainbackground';
import {CardTitle, CardSummary, CardContainer} from '../components/Card';
import {SimpleCardContainer, SimpleCardTitle} from '../components/simpleCard';
import {Logo} from '../components/icons';
import theme from '../utils/theme';

import Search from '../components/search';
import {useFocusEffect} from '@react-navigation/native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bir Deyim',
    subtitle: 'on para',
    sum: 'çok az (para).',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bir Deyim - Atasözü',
    subtitle: 'siyem siyem ağlamak',
    sum: 'hafif hafif, ince ince,  drumadan gözyaşı dökmek.',
  },
];
const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'kalem',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'feyz',
  },
];
function SearchView({navigation}) {
  const heroHeight = useRef(new Animated.Value(285)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isSearchFocus, setSearchFocus] = React.useState(false);
  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 90,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [heroHeight, isSearchFocus]);

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  }, [fadeAnim, isSearchFocus]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
    }, []),
  );

  return (
    <Box flex={1} width="100%" bg="softRed">
      {isSearchFocus && <StatusBar barStyle="dark-content" />}
      <Box width="100%" zIndex={4}>
        <Box as={Animated.View} opacity={fadeAnim}>
          <BackGround>
            <Box
              justifyContent="center"
              alignItems="center"
              paddingTop={150}
              paddingBottom={80}>
              <Logo color="white" backgroundColor="transparent" />
            </Box>
            {/* <Button color="white" title="Go to Details" onPress={() => navigation.navigate('Detail')} /> */}
          </BackGround>
        </Box>
        <Box
          as={Animated.View}
          position="absolute"
          top={heroHeight}
          width="100%">
          <Search onChangeFocus={status => setSearchFocus(status)} />
          <Box paddingTop={40} flex={1}>
            {isSearchFocus ? (
              <Box mx={12}>
                <FlatList
                  data={DATA2}
                  renderItem={({item}) => (
                    <Box my={7}>
                      <SimpleCardContainer>
                        <SimpleCardTitle>{item.title}</SimpleCardTitle>
                      </SimpleCardContainer>
                    </Box>
                  )}
                  keyExtractor={item => item.id}
                  ListHeaderComponent={
                    <Text
                      color={theme.colors.textLight}
                      fontWeight="500"
                      fontSize={16}>
                      Son Aramalar
                    </Text>
                  }
                />
              </Box>
            ) : (
              <Box mx={12}>
                <FlatList
                  data={DATA}
                  renderItem={({item}) => (
                    <Box my={10}>
                      <Text color="textLight">{item.title}</Text>
                      <CardContainer
                        my={5}
                        onPress={() =>
                          navigation.navigate('Detail', {title: item.subtitle})
                        }>
                        <CardTitle>{item.subtitle} </CardTitle>
                        <CardSummary>{item.sum} </CardSummary>
                      </CardContainer>
                    </Box>
                  )}
                  keyExtractor={item => item.id}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default SearchView;
