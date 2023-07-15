/* eslint-disable import/no-default-export */

declare interface Window {
  // ethereum?: {
  //   autoRefreshOnNetworkChange: boolean
  //   chainId: string
  //   providers: any
  //   request: ({ method: string, params: any }) => Promise
  //   on: (name: string, callback: function) => void
  // }
  ethereum?: any
  web3?: any
  bitkeep?: {
    ethereum?: any
  }
  martian?: any
  aptos?: any
  pontem?: any
  kucoin?: any
  okxwallet?: any
}

declare module '*.css' {
  const value: string
  export default value
}

declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>

  const src: string
  export default src
}

declare module 'react-cookies'
