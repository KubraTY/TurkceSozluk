import * as React from 'react';
import {ImageBackground} from 'react-native';

import Box from './box';
import mainbg from '../assets/mainbg.jpg';

function BackGround({children, ...props}) {
  return (
    <Box as={ImageBackground} source={mainbg} {...props}>
      {children}
    </Box>
  );
}

export default BackGround;
