// import Image from 'next/image';
import Head from 'next/head'

import PageContent from 'components/PageContent';
import { Box, Heading, Link, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitor Pereira | Profile</title>
      </Head>

      <PageContent>
        <Box 
          flex='1'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignContent='center'
        >
          
          <Image 
            src="/profile.jpg"
            alt="profile"
            width={400}
            height={400}
            borderRadius='50%'
            margin='0 auto'
          />

          <Heading as='h1' fontSize='8xl' textAlign='center' margin='20px 0'>Vitor Pereira</Heading>

          <Box display='flex' justifyContent='space-around' width='40%' margin='0 auto 0 auto'>
            <Link color="gray.600" target='_blank' href='https://github.com/Redfox'>Github</Link>
            <Link color="gray.600" target='_blank' href='https://www.linkedin.com/in/vitor-pereira-abreu'>Linkedin</Link>
            <Link color="gray.600" target='_blank' href='https://www.instagram.com/vitor.git/'>Instagram</Link>
          </Box>
        </Box>
      </PageContent>
    </>
  )
}
