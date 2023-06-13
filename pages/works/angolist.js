import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="Angolist">
    <Container>
      <Title>
        Angolist <Badge>IN DEVELOPMENT</Badge>
      </Title>
      <P>
        A mobile application designed to assist UI/UX designers in evaluating
        their work based on Nielsen&apos;s heuristic principles.
      </P>
      <P>
        This application is still under development. You might need to wait a
        little bit...
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Typescript, Node.js, Prisma</span>
        </ListItem>
        <ListItem>
          <Meta>Git hub</Meta>
          <Link
            as={NextLink}
            target="_blank"
            href="https://github.com/RodolfoMRibeiro/angolist-backend"
          >
            Angolist
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/angolist.png" alt="Homepage" />
    </Container>
  </Layout>
)

export default Work
