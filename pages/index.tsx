import React, { useState, useEffect } from 'react';
import { DAppProvider, useEthers } from '@usedapp/core';
import {
  ChakraProvider,
  Badge,
  Flex,
  Stack,
  Switch,
  useDisclosure,
  Text,
  CircularProgress,
} from '@chakra-ui/react';

import { Layout } from '../components/Layout';
import { AccountModal } from '../components/list/AccountModal';
import { ConnectButton } from '../components/list/ConnectButton';
import { ItemCard, ItemCardProps } from '../components/list/ItemCard';
import { ItemCardGroup } from '../components/list/ItemCardGroup';
import { useCollectableService } from '../components/list/useCollectableService';
import { withBottomDetection } from '../components/list/withBottomDetection';
import { NextPage } from 'next/types';

// import { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';

// // new ModelViewerElement(window);

// // Ideal import statement
// // import ModelViewer from "@google/model-viewer";

// declare namespace JSX {
//   interface IntrinsicElements {
//     'Model-viewer': ModelViewerElement;
//   }
// }

const BottomDetectableItemCardGroup = withBottomDetection(ItemCardGroup);
export default function ListPage(): NextPage {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [net, setNet] = useState(false);
  const [X_API_KEY, setApiKey] = useState(null); //X_API_KEY
  const [account, setAccount] = useState(
    '0x000000000000000000000000000000000000dEaD'
  );
  // const [account, setAccount] = useState(null);

  //[YU-GI-OH] 0x5eECf513518EfB76d35Cab1A6c32f4558F415D16
  //0x08f762718391f39a62cb0d7e5fb940f477537254
  //0x000000000000000000000000000000000000dEaD

  const { items, loadItems, setApiMode, setKey, setOwner } =
    useCollectableService();

  useEffect(() => {
    setApiMode(net);
    setKey(X_API_KEY);
    setOwner('0x000000000000000000000000000000000000dEaD');
    //  setOwner(account);
    // in test 0x99581C954C77462899F6172075eAB08299B9f54D
  }, [account, net, X_API_KEY]);

  useEffect(() => {
    if (net && X_API_KEY === null) {
      alert('not X_API_KEY , Please edit line 27');
      setNet(false);
    }
  }, [net]);

  const cards = items.map((item) => (
    <ItemCard key={item.id} {...(item as ItemCardProps)} />
  ));

  return (
    <DAppProvider config={{}}>
      <ChakraProvider>
        <div className="flex bg-gray-800 min-h-screen flex-col items-center justify-center py-2">
          <Layout>
            <Flex
              w="95vw"
              py="4"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack mx="4" align="center" direction="row">
                <Switch
                  isChecked={net}
                  size="lg"
                  value={net ? 1 : 0}
                  onChange={() => setNet(!net)}
                />

                {net ? (
                  <Badge ml="1" fontSize="0.8em" colorScheme="red">
                    Main Net
                  </Badge>
                ) : (
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    Test Net
                  </Badge>
                )}
              </Stack>

              <Flex mx="4">
                <ConnectButton
                  handleOpenModal={onOpen}
                  handleUser={setAccount}
                />
                <AccountModal isOpen={isOpen} onClose={onClose} />
              </Flex>
            </Flex>
            {!account && (
              <Stack
                mx="4"
                align="center"
                direction="column"
                flex="1"
                mt="40vh"
              >
                <Text color="white" fontSize="32" fontWeight="medium" mr="2">
                  Please connect wallet
                </Text>
                <Text color="white" fontSize="2xl" fontWeight="medium" mr="2">
                  Metamask needs to be installed
                </Text>
              </Stack>
            )}
            {account && items.length <= 0 && (
              <CircularProgress mt="40vh" isIndeterminate color="green.300" />
            )}
            <BottomDetectableItemCardGroup onNearBottom={loadItems}>
              {cards}
            </BottomDetectableItemCardGroup>
          </Layout>
        </div>
      </ChakraProvider>
    </DAppProvider>
  );
}
