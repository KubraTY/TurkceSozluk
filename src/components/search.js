import React from 'react';
import Box from './box';
import Input from './input';
import theme from '../utils/theme';
import {Search, X} from './icons';
import TabButton from './tab_button';
import Text from './text';
import {Keyboard} from 'react-native';

function SearchBox({onChangeFocus}) {
  const [value, setValue] = React.useState('');
  const [isFocused, setFocused] = React.useState(false);

  React.useEffect(() => {
    onChangeFocus(isFocused);
  }, [isFocused, onChangeFocus]);

  const onCancel = () => {
    setFocused(false);
    Keyboard.dismiss();
    setValue('');
  };
  const onClear = () => {
    setValue('');
  };
  return (
    <Box flexDirection="row" marginBottom={-10} mx={8}>
      <Box
        shadowColor="#000"
        shadowOpacity={0.1}
        shadowRadius={24}
        flex={1}
        flexDirection="row"
        alignItems="center"
        backgroundColor="white"
        borderWidth={1}
        borderColor={isFocused ? '#D1D1D1' : 'transparent'}
        borderRadius={theme.radii.normal}>
        <TabButton>
          <Search
            backgroundColor="transparent"
            color={theme.colors.textMedium}
            paddingRight={35}
            marginLeft={20}
            onPress={() => setFocused(true)}
          />
        </TabButton>

        <Input
          py={16}
          flex={1}
          width="100%"
          color={theme.colors.textDark}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor={theme.colors.textMedium}
          value={value}
          onFocus={() => setFocused(true)}
          onChangeText={text => setValue(text)}
        />
        {value.length > 0 && (
          <TabButton onPress={onClear} height="100%" paddingRight={10}>
            <X
              color={theme.colors.textDark}
              onPress={onClear}
              pointerEvents="none"
            />
          </TabButton>
        )}
      </Box>
      {isFocused && (
        <TabButton onPress={onCancel}>
          <Text padding={10}>Vazgeç</Text>
        </TabButton>
      )}
    </Box>
  );
}
export default SearchBox;
