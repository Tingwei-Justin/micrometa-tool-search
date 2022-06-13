import CollectionConfigInterface from './CollectionConfigInterface';
import { openSea } from './Marketplaces';
import { ethereumMainnet, ethereumTestnet } from './Networks';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'TheZOOOSmartContract',
  tokenName: 'The ZOOO',
  tokenSymbol: 'The ZOOO',
  publicSale: {
    price: 0,
  },
  contractAddress: '0x2669fEf70F49F012C3509D5fD14715d450421C73',
  marketplaceIdentifier: 'The ZOOO',
  marketplaceConfig: openSea,
  // rewardsAmount: 2000,
  maxSupply: 10000,
};

export default CollectionConfig;
