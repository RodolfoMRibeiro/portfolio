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
  <Layout title="Keylogger">
    <Container>
      <Title>
        KeySense <Badge>2023-2023</Badge>
      </Title>
      <P>
        A windows-based application that runs in stealth mode and get keystrokes
        from any keyboard.
      </P>
      <P>All the log information will be saved to a file in a given path.</P>
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
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, Windows API, DLL</span>
        </ListItem>
        <ListItem>
          <Meta>Git hub</Meta>
          <Link
            as={NextLink}
            target="_blank"
            href="https://github.com/RodolfoMRibeiro/KeySense"
          >
            Keylogger
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/keylogger.png" alt="Homepage" />
    </Container>
  </Layout>
)

export default Work
