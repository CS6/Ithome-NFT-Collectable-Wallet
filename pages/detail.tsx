import React, { ReactNode, useState, useEffect } from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { DAppProvider } from '@usedapp/core';
import {
  ChakraProvider,
  useDisclosure,
  Stack,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Layout } from '../components/Layout';
import InfoCard from '../components/detail/InfoCard';

interface assetProps {
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

export default function DetailPage(props: any) {
  const router = useRouter();

  const [data, setData] = useState<object>({});
  const [isAPILoading, setAPILoading] = useState(false);

  useEffect(() => {
    console.log(router.query.contract);
    console.log(router.query.token_id);
  }, [router.query]);

  useEffect(() => {
    const options = { method: 'GET' };

    fetch(
      // `https://testnets-api.opensea.io/api/v1/asset/0x10cacffbf3cdcfb365fddc4795079417768baa74/1337/`,
      `https://testnets-api.opensea.io/api/v1/asset/${router.query.contract}/${router.query.token_id}/`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        let items = {
          id: data.id,
          schema_name: data.asset_contract?.schema_name,
          name: data.name,
          description: data.description,
          image: data.image_url,
          image_preview_url: data.image_preview_url,
          permalink: data.permalink,
          collection: data.collection.name,
          owner: data.top_ownerships[0].owner.address,
          owner_img: data.top_ownerships[0].owner.profile_img_url,
          creator: data.creator.address,
          creator_img: data.creator.profile_img_url,
        };
        setData(items);
        setAPILoading(true);
        console.log(items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      {/* <Header /> */}
      <ChakraProvider>
        <Flex w="100vw" py="6" direction="row" px="6" bg="gray.800">
          <Button
            colorScheme="blue"
            variant="solid"
            onClick={() => router.push('/')}
          >
            {`< Back`}
          </Button>
          <Box
            flex="1"
            px="15"
            mt="1"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            noOfLines={1}
            fontSize="xl"
          >
            <Text fontSize="xl" color="#FFF" fontWeight="bold" align="start">
              {data?.collection}
            </Text>
          </Box>
        </Flex>
        {/* <button type="button" onClick={() => router.push('/')}>
          Click here to go back
        </button> */}
        <Layout>
          <Flex
            flex="1"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            h="100vh"
            w="100vw"
            bg="gray.800"
          >
            {isAPILoading && <InfoCard info={data} />}
          </Flex>
        </Layout>
      </ChakraProvider>
    </div>
  );
}

let DB = {
  id: 48874609,
  schema_name: 'ERC721',
  name: 'Doodle #1078',
  description:
    'A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury. Burnt Toast is the working alias for Scott Martin, a Canadian–based illustrator, designer, animator and muralist.',
  image:
    'https://lh3.googleusercontent.com/C87HL0wSqUyV6zhA3CikGKOf0nKWAF5uhlcEVf7HvGBb5kvq0_ImXGXvEFEKbieXcC9GdPO_sQivN55uqQmPa9yB7I_HXNvs6XuGHQ',
  image_preview_url:
    'https://lh3.googleusercontent.com/C87HL0wSqUyV6zhA3CikGKOf0nKWAF5uhlcEVf7HvGBb5kvq0_ImXGXvEFEKbieXcC9GdPO_sQivN55uqQmPa9yB7I_HXNvs6XuGHQ=s250',
  permalink:
    'https://testnets.opensea.io/assets/rinkeby/0x10cacffbf3cdcfb365fddc4795079417768baa74/1078',
  collection: 'Bend Mock DOODLE V2',
  owner: '0xc305b869f94a4380aaa8682796074fd03526d809',
  owner_img:
    'https://storage.googleapis.com/opensea-static/opensea-profile/8.png',
  creator: '0xaff5c36642385b6c7aaf7585ec785ab2316b5db6',
  creator_img:
    'https://storage.googleapis.com/opensea-static/opensea-profile/13.png',
};
