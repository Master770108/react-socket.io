import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { ws } from '../lib/index.mjs'
export default function Home() {
  const socket = useContext(ws)
  return (
    <div>
      <p>fasfas</p>
    </div>
  )
}
