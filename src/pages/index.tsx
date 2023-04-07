import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'



const Model = dynamic(
  () => import('../components/Model'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
    <Model />
    </>
  )
}
