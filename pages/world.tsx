import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'twin.macro'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Container = tw.div`flex flex-col min-h-screen w-screen bg-bg-primary text-white`
const Title = tw.div`text-6xl`
const SubTitle = tw.div`text-2xl`
const Button = tw.a`w-1/2 text-xl text-center rounded-md py-2 px-4 bg-gray-500 text-yellow-50 hover:(cursor-pointer shadow-2xl bg-gray-700)`
const DisableButton = tw.a`w-1/2 text-xl text-center rounded-md py-2 px-4 bg-gray-500 text-yellow-50 cursor-not-allowed`
const Section = tw.div`flex flex-col min-h-screen w-screen relative pb-16`
export const SectionHeaderContainer = tw.div`relative z-10 w-full max-w-5xl mx-auto`

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>10000 Years</title>
        <meta name="description" content="10000 Years" />
      </Head>

      <Container>
        <div tw="fixed w-full top-0 z-30 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
          <Header />
        </div>

        <div tw="flex-grow text-white mt-16 bg-bg-primary">
          <Section id="club" tw="flex flex-col items-center relative">
            <Image
              tw="z-0 pointer-events-none"
              src="/world.png"
              alt="furry-club-world-background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div tw="absolute top-0 left-0 w-screen h-full bg-bg-primary opacity-60" />
            <div tw="font-bold relative z-10 max-w-5xl mx-auto flex flex-col tracking-widest justify-center mt-48 items-center text-3xl lg:text-8xl">
              <Image
                alt="commingsoon"
                src="/commingsoon.png"
                layout="intrinsic"
                width={800}
                height={300}
              />
            </div>
          </Section>
        </div>


        <div tw="flex justify-center py-4">
          <Footer />
        </div>
      </Container>
    </div >
  )
}
export default Home
