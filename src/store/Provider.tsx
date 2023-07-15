'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '.'
const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>
}

export default Providers
