import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
        Hello, I&apos;m a full-stack developer based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rodolfo M Ribeiro
          </Heading>
          <p>Digital CyberPunk (Developer / Cloud Associate / Reader)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
