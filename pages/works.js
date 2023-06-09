import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKeylogger from '../public/images/works/keylogger.png'
import thumbDDOS from '../public/images/works/ddos.png'
import thumbDSMovie from '../public/images/works/dsmovie.png'
import thumbAngolist from '../public/images/works/angolist.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="dsmovie" title="DSMovie" thumbnail={thumbDSMovie}>
              A movie-classification web app to save users&apos; opnions,
              comments and classify movies according to then.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="keylogger"
              title="Keylogger"
              thumbnail={thumbKeylogger}
            >
              A windows-based application that runs in stealth mode and get
              keystrokes from any keyboard
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="angolist"
              title="Angolist"
              thumbnail={thumbAngolist}
            >
              A mobile application designed to assist UI/UX designers in
              evaluating their work based on Nielsen&apos;s heuristic
              principles.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="ddos" title="DDOS FLOOD" thumbnail={thumbDDOS}>
              A command-line interface application to perform Distributed Denial
              of Service (DDos) given a web page and the number of concurrent
              threads.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mt={3} />
      </Container>
    </Layout>
  )
}

export default Works
