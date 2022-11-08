import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const TabButton = styled(TouchableOpacity)(
  compose(flexbox, space, color, size, layout, borderRadius),
);

TabButton.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};
export default TabButton;
