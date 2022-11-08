import React from 'react';
import Text from './text';
import TabButton from './tab_button';
import Box from './box';

export function CardContainer({children, ...props}) {
  return (
    <TabButton
      backgroundColor="white"
      borderRadius="normal"
      py={16}
      px={12}
      {...props}>
      <Box
        flex={1}
        borderLeftWidth={3}
        borderLeftColor="lightGray"
        paddingLeft={12}>
        {children}
      </Box>
    </TabButton>
  );
}

export function CardTitle({children}) {
  return (
    <Text fontSize={18} fontWeight="700">
      {children}
    </Text>
  );
}
export function CardSummary({children}) {
  return (
    <Text fontSize={18} fontWeight="300">
      {children}
    </Text>
  );
}
