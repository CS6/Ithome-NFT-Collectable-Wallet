// ConnectButton.tsx
import React, { ReactNode, useState, useEffect } from 'react';
import {
  Flex,
  Button,
  Link,
  Box,
  Text,
  Image,
  Badge,
  Avatar,
  Stack,
} from '@chakra-ui/react';

const DefaultImageUrl =
  'https://testnets.opensea.io/static/images/placeholder.png';

interface infoProps {
  id: number;
  schema_name: string;
  name: string;
  description: string;
  image: string;
  image_preview_url: string;
  permalink: string;
  collection: string;
  owner: string;
  owner_img: string;
  creator: string;
  creator_img: string;
}

interface Props {
  info?: infoProps;
}

export default function NFTCard(Props: Props) {
  const property = Props.info;
  return (
    <>
      <Box
        // onClick={() => alert('button clicked')}
        color="gray.500"
        bg={`#FFF`}
        maxW="500px"
        maxH="100%"
        h="90%"
        w="90%"
        borderWidth="0px"
        borderRadius="3xl"
        overflow="hidden"
        opacity="1"
        display="flex"
        flexDirection="column"
        pb="0"
      >
        <Image
          flex="1"
          objectFit="cover"
          loading="lazy"
          borderRadius="0"
          src={property?.image_preview_url || DefaultImageUrl}
          alt={property?.name}
        />
        <Box px="4" py="3">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Box
              mt="1"
              fontWeight="semibold"
              as="h2"
              lineHeight="tight"
              noOfLines={1}
              fontSize="xl"
            >
              {property?.collection}
            </Box>
            <Badge
              colorScheme={property?.schema_name == 'ERC721' ? 'teal' : 'red'}
              borderRadius="full"
              px="2"
              fontSize="xl"
            >
              {property?.schema_name}
            </Badge>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={2}
            fontSize="5xl"
          >
            {property?.name}
          </Box>
          <Box
            mt="2"
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            w="90%"
          >
            <Flex flex="1">
              <Avatar size="lg" src={property?.creator_img} />
              <Box ml="3">
                <Text fontSize="xl" fontWeight="bold">
                  Creator By
                </Text>
                <Text fontSize="xl" noOfLines={1}>
                  {property?.creator.slice(0, 10)}...
                </Text>
              </Box>
            </Flex>
            <Flex flex="1">
              <Avatar size="lg" src={property?.owner_img} />
              <Box ml="3">
                <Text fontSize="xl" fontWeight="bold">
                  Owner By
                </Text>
                <Text fontSize="xl" noOfLines={1}>
                  {property?.owner.slice(0, 10)}...
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Flex
          px="4"
          py="3"
          flex="1"
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={30}
          fontSize="2xl"
          maxHeight="100%"
          overflow="auto"
        >
          {property?.description}
          {!property?.description && (
            <Text fontSize="xl" align="center">
              .... there is no description ....
            </Text>
          )}
        </Flex>
      </Box>
      <Box w="20" flexGrow="1" />
      <Button
        m="3%"
        height="48px"
        width="90%"
        maxW="500px"
        border="2px"
        borderRadius="3xl"
        borderColor="#1D9BF0"
        bg="#1D9BF0"
      >
        <Link
          color="#FFF"
          fontSize="2xl"
          size="md"
          href={property?.permalink}
          isExternal
        >
          Open in OpenSea
        </Link>
      </Button>
    </>
  );
}
