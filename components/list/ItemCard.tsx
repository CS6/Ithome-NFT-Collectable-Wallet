import React from 'react';
import NextLink from 'next/link';
import { Box, Image, Badge, Link } from '@chakra-ui/react';

const DefaultImageUrl =
  'https://testnets.opensea.io/static/images/placeholder.png';

export interface ItemCardProps {
  name?: string;
  imageUrl?: string;
  collectionName?: string;
  tokenId: string;
  backgroundColor?: string;
  contractSchema?: string;
  contractAddress: string;
}

export function ItemCard(props: ItemCardProps) {
  return (
    <NextLink
      href={`/detail?contract=${props.contractAddress}&token_id=${props.tokenId}`}
    >
      <Link>
        <Box
          color="gray.500"
          bg={`#${props?.backgroundColor || 'FFF'}`}
          maxW="sm"
          h="100%"
          borderWidth="0px"
          borderRadius="3xl"
          overflow="hidden"
          opacity="0.9"
          _hover={{ opacity: '10', boxShadow: 'xl' }}
          _focus={{ boxShadow: 'outline' }}
          display="flex"
          flexDirection="column"
        >
          <Image
            flex="1"
            h="100%"
            objectFit="cover"
            loading="lazy"
            borderRadius="0"
            src={props?.imageUrl || DefaultImageUrl}
            alt={props?.name}
          />
          <Box px="4" py="3">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              fontSize="sm"
            >
              [{props?.collectionName}]
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              {props?.name ? props?.name : ' __'}
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                #{props?.tokenId}
              </Box>
              <Badge
                colorScheme={props?.contractSchema == 'ERC721' ? 'teal' : 'red'}
                borderRadius="full"
                px="2"
              >
                {props?.contractSchema}
              </Badge>
            </Box>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
}
