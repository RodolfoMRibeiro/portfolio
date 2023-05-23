import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInk from './/../public/images/github_logo.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              width={300}
              id="inkdrop"
              title="Inkdrop"
              thumbnail={thumbInk}
            >
              A markdown note-taking app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
