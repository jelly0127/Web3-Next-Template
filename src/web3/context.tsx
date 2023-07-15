'use client'
import React, { useEffect, useState } from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bscTestnet, bsc } from 'wagmi/chains'

export type IWeb3ContextProps = {
  children: React.ReactNode
}
const chains = [bscTestnet, bsc]
const projectId = 'c6e712ccd44c4b9feea158d4783116e0'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export const Web3Context: React.FC<IWeb3ContextProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <WagmiConfig config={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default Web3Context
