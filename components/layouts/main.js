import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr.js'
import VoxelDog from '../voxel.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="I am a Software Engineer skilled in full cycle development, cloud computing, and DevOps. Browse through my portfolio to see my projects and expertise."
        />
        <meta
          name="keywords"
          content="software engineer, full cycle development, cloud associate, DevOps, portfolio"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png"></link>
        <title>Rodolfo Marques - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
