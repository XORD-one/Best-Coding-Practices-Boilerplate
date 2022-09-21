import { SupportedChainId } from './chains'

export const RPC_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.MAINNET]: [
    'https://mainnet.infura.io/v3/80ba3747876843469bf0c36d0a355f71',
  ],
  [SupportedChainId.RINKEBY]: [
    'https://rinkeby.infura.io/v3/80ba3747876843469bf0c36d0a355f71',
  ],
  [SupportedChainId.GOERLI]: [
    'https://goerli.infura.io/v3/80ba3747876843469bf0c36d0a355f71',
  ],
  [SupportedChainId.KOVAN]: [
    'https://kovan.infura.io/v3/80ba3747876843469bf0c36d0a355f71',
  ],
  [SupportedChainId.ROPSTEN]: [
    'https://ropsten.infura.io/v3/80ba3747876843469bf0c36d0a355f71',
  ],
}
