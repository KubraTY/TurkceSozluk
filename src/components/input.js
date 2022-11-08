import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {compose, color, size, space, typography, shadow} from 'styled-system';

const Input = styled(TextInput)(
  compose(color, size, space, typography, shadow),
);
export default Input;
