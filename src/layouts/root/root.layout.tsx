import React from 'react'
import { Outlet } from 'react-router-dom'

import { cn } from '~/lib/styles'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { Main } from '../components/main'

export function RootLayout() {
  return (
    <div
      className={cn(
        `flex justify-center w-screen h-screen align-middle  content-center sm:content-start  flex-col pt-10`,
      )}
    >
      <Header />
      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  )
}
