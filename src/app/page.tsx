'use client'
import { Web3Button } from '@web3modal/react'
import Header from '@/components/common/Header'
export default function Home() {
  return (
    <main>
      <Header />
      <br />
      <Web3Button />
    </main>
  )
}
