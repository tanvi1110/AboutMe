"use client"

import Head from 'next/head'
import './globals.css'
import Sidebar from "@/components/Sidebar/Sidebar"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'





export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const containerRef = useRef(null)
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </Head>
      <body className="flex mx-auto w-full">
        <div>
          <Sidebar />
        </div>

        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main className="w-full" data-scroll-container ref={containerRef}>
            {children}
          </main>
        </LocomotiveScrollProvider>
      </body>
    </html>
  )
}
