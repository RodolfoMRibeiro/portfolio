import {
  Container,
  Badge,
  List,
  ListItem,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Blockquote from '../../components/blockquote'
import NextLink from 'next/link'

const Work = () => (
  <Layout title="DDoS">
    <Container>
      <Title>
        Distributed Denial of Service (DDoS) <Badge>2023-2023</Badge>
      </Title>
      <P>
        A command-line interface application to perform DDoS (Distributed Denial
        of Service) given a web page and the number of concurrent threads.
      </P>
      <Blockquote style={{ color: useColorModeValue('#444', '#888') }}>
        <p>
          &quot;I wholeheartedly embrace the ethos of open source code and the
          spirit of knowledge sharing, with the sincere hope that it is wielded
          for good and never misused&quot; - Rodolfo Marques
        </p>
      </Blockquote>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux,Windows,Macintosh</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Golang</span>
        </ListItem>
        <ListItem>
          <Meta>Git hub</Meta>
          <Link
            as={NextLink}
            target="_blank"
            href="https://github.com/RodolfoMRibeiro/DDOS-FLOOD"
          >
            DDoS-Flood
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ddos.png" alt="Homepage" />
    </Container>
  </Layout>
)

export default Work
