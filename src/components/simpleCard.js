import React from 'react';
import Text from './text';
import TabButton from './tab_button';

export function SimpleCardContainer({children, ...props}) {
  return (
    <TabButton
      justifyContent="flex-start"
      backgroundColor="white"
      borderRadius="normal"
      p={16}
      {...props}>
      {children}
    </TabButton>
  );
}

export function SimpleCardTitle({children}) {
  return (
    <Text fontSize={18} fontWeight="700">
      {children}
    </Text>
  );
}
