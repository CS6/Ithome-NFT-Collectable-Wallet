import React from 'react';
import { Flex } from '@chakra-ui/react';

export interface LayoutProps extends React.PropsWithChildren<{}> {}

export function Layout(props: LayoutProps) {
  return (
    <Flex
      flex="1"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100vw"
      bg="gray.800"
    >
      {props.children}
    </Flex>
  );
}
