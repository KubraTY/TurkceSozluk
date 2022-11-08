import styled from 'styled-components/native';
import Box from './box';

const BoxCenter = styled(Box)({});
BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export default BoxCenter;
