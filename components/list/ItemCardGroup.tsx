import React from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';

export interface ItemCardGroupProps extends React.PropsWithChildren<{}> {}

export function ItemCardGroup(props: ItemCardGroupProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      flex="10"
      h="90%"
      w="100vw"
      bg="gray.800"
    >
      <SimpleGrid padding="20px" columns={2} spacingX="20px" spacingY="20px">
        {props.children}
      </SimpleGrid>
    </Flex>
  );
}
