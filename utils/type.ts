export interface ContractInfo {
    maxSupply: number,
    totalSupply: number,
    isPaused: boolean,
    isLoading: boolean,
}
export const defaultContractInfo: ContractInfo = {
    maxSupply: 0,
    totalSupply: 0,
    isPaused: true,
    isLoading: true,
}

export const defaultUserInfo: ContractInfo = {
    publicMintBalance: 0,
    isPaused: true,
    isLoading: true,
}