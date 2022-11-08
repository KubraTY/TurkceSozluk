import {Text as T} from 'react-native';
import styled from 'styled-components/native';
import {compose, color, size, space, typography} from 'styled-system';

const Text = styled(T)(compose(color, size, space, typography));
export default Text;
