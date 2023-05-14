import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import  List  from './todolist/list'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <List />
    )
}
