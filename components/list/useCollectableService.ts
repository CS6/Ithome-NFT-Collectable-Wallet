import { useState, useEffect } from 'react';

type Props = {
  apiMode: boolean;
  apiKey: string | null;
  owner: string | null | Props;
};
export function useCollectableService() {
  const [apiMode, setApiMode] = useState(false);
  const [apiKey, setKey] = useState<null | string>(null);
  const [owner, setOwner] = useState<null | string>(null);

  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    console.log(apiMode);
    setItems([]);
    setAllItemsLoaded(false);
  }, [apiMode]);

  useEffect(() => {
    console.log(apiMode, apiKey, owner);
    if (owner !== null) {
      loadItems();
    }
  }, [apiMode, apiKey, owner]);

  const _owner = '0x99581C954C77462899F6172075eAB08299B9f54D';
  function loadItems() {
    if (allItemsLoaded || owner === null) {
      return;
    }

    const MAIN_options = {
      method: 'GET',
      headers: { Accept: 'application/json', 'X-API-KEY': apiKey },
    };

    function fetchItemsFromTestNet() {
      return fetch(
        `https://testnets-api.opensea.io/api/v1/assets?owner=${owner}&order_direction=desc&offset=${items.length}&limit=20&include_orders=false`,
        { method: 'GET' }
      );
    }
    function fetchItems() {
      return fetch(
        `https://api.opensea.io/api/v1/assets?owner=${owner}&order_direction=desc&offset=${items.length}&limit=20&include_orders=false`,
        {
          method: 'GET',
          headers: { Accept: 'application/json', 'X-API-KEY': apiKey },
        }
      );
    }

    const whenGotResponse = apiMode ? fetchItems() : fetchItemsFromTestNet();

    whenGotResponse
      .then((response) => response.json())
      .then((data) =>
        data.assets.map((item: any) => ({
          id: item.id,
          name: item.name,
          imageUrl: item.image_preview_url,
          tokenId: item.token_id,
          contractSchema: item.asset_contract.schema_name,
          collectionName: item.collection.name,
          backgroundColor: item.background_color,
          contractAddress: item.asset_contract.address,
        }))
      )
      .then((newItems) => {
        console.log(items, newItems, newItems.length);
        setItems((items) => items.concat(newItems));
        setAllItemsLoaded(newItems.length < 20);
      })
      .catch((err) => console.error(err));
  }

  return {
    allItemsLoaded,
    items,
    loadItems,
    apiMode,
    setApiMode,
    apiKey,
    setKey,
    owner,
    setOwner,
  };
}
