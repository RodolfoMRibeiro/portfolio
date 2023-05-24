import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/dsmovie.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="dsmovie" title="dsmovie" thumbnail={thumbInkdrop}>
              A movie-classification web app to save users&apos; opnions,
              comments and classify movies according to then.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbInkdrop}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>

          <Section delay={0.2}>
            <Divider my={6} />

            <Heading as="h3" fontSize={20} mb={4}>
              Collaborations
            </Heading>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
