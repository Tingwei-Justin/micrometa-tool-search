import MarketplaceConfigInterface from '../lib/MarketplaceConfigInterface';
import NetworkConfigInterface from '../lib/NetworkConfigInterface';

interface SaleConfig {
  price: number,
  maxMintAmountPerTx: number,
};

export default interface CollectionConfigInterface {
  testnet: NetworkConfigInterface,
  mainnet: NetworkConfigInterface,
  contractName: string,
  tokenName: string,
  tokenSymbol: string,
  maxSupply: number,
  // rewardsAmount: number,
  publicSale: SaleConfig,
  contractAddress: string | null,
  marketplaceIdentifier: string,
  marketplaceConfig: MarketplaceConfigInterface,
}