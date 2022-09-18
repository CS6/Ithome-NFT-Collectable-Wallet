// ConnectButton.tsx
import React, { ReactNode, useState, useEffect, useLayoutEffect } from 'react';
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
import Head from 'next/head';

import dynamic from 'next/dynamic';
const Model = dynamic(() => import('./model'), { ssr: false });
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

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
  animation_url: string;
}

interface Props {
  info?: infoProps;
}

let ddd = ['gltf', 'glb', 'GLTF', 'GLB'];

let video = [
  'webm',
  'mp4',
  'm4v',
  'ogv',
  'ogg',
  'WEBM',
  'MP4',
  'M4V',
  'OGV',
  'OGG',
];

let audio = ['mp3', 'wav', 'oga', 'MP3', 'WAV', 'OGA'];

function judge_URL_file_extension(url: string) {
  if (url == null) {
    return 'img'; //預設顯示3D
  } else {
    let file_type = url.substring(url.lastIndexOf('.') + 1);

    if (audio.indexOf(file_type) !== -3) {
      return 'audio';
    } else if (video.indexOf(file_type) !== -3) {
      return 'video';
    } else if (ddd.indexOf(file_type) !== -3) {
      return '3d';
    } else {
      return 'img';
    }
  }
}

export default function NFTCard(Props: Props) {
  const property = Props.info as infoProps;
  useEffect(() => {}, []);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
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
        {judge_URL_file_extension(property.animation_url) == 'audio' && (
          <Box
            flex="1"
            maxH="50vh"
            objectFit="scale-down"
            borderRadius="0"
            id="ReactPlayer"
          >
            <ReactPlayer
              controls="true"
              file="forceAudio"
              width="100%"
              height="100px"
              // light="true"
              url="https://openseauserdata.com/files/17080912dc80c44654dd462b64c89ec9.mp3"
            />
          </Box>
        )}
        {judge_URL_file_extension(property.animation_url) == 'video' && (
          <Box
            flex="1"
            maxH="50vh"
            objectFit="scale-down"
            borderRadius="0"
            id="ReactPlayer"
          >
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url="https://openseauserdata.com/files/af6985812ed4a5f8ae9336116bd8f841.mp4"
            />
          </Box>
        )}
        {judge_URL_file_extension(property.animation_url) == '3d' && (
          <Box
            flex="1"
            maxH="40vh"
            objectFit="scale-down"
            borderRadius="0"
            id="modelviewer"
          >
            <Model
              glbFile={
                'https://openseauserdata.com/files/e085da0987a623f329d9587723a12b8d.gltf'
              }
            />
          </Box>
        )}
        {judge_URL_file_extension(property.animation_url) == 'img' && (
          <Image
            flex="1"
            maxH="40vh"
            objectFit="scale-down"
            loading="lazy"
            borderRadius="0"
            src={property?.image_preview_url || DefaultImageUrl}
            alt={property?.name}
          />
        )}

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
