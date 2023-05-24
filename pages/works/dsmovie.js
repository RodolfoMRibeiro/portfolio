import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="DSMovie">
    <Container>
      <Title>
        Dev Superior Movie (DSMovie) <Badge>2022-2023</Badge>
      </Title>
      <P>
        A movie-classification web app to save users&apos; opnions, comments and
        classify movies according to then. Made with spring boot and react
        typescript.
      </P>
      <P>
        This site has been closed. Thank you for everybody that supported that!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java Spring Boot, React, Typescript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dsmovie.png" alt="Homepage" />
    </Container>
  </Layout>
)

export default Work
