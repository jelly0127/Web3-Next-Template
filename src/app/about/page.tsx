'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Stack } from '@mui/material'
import Link from 'next/link'
import { decrement, increment } from '@/store/user'
import { useVibeThemes } from '@/themes'
const Page = () => {
  const count = useSelector((state: { user: { value: number } }) => state.user.value)
  const dispatch = useDispatch()
  const { mode, toggleThemeMode } = useVibeThemes()
  return (
    <Stack>
      <Link href={'/'}>Back to Home</Link>
      <br />
      <Button onClick={() => toggleThemeMode()}>chang mode</Button>
      {mode}
      <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <span>{count}</span>
      <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Stack>
  )
}

export default Page
