import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="">
    <Container>
      <Title>
        Distributed Denial of Service (DDoS) <Badge>2023-2023</Badge>
      </Title>
      <P>
        A command-line interface application to perform DDoS (Distributed Denial
        of Service) given a web page and the number of concurrent threads.
      </P>
      <P>. Thank you for everybody that supported that!</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux,Windows,Macintosh</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Golang</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ddos.png" alt="Homepage" />
    </Container>
  </Layout>
)

export default Work
