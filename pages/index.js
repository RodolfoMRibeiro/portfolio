import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    [
      'width',
      'height',
      'src',
      'alt',
      'borderColor',
      'borderWidth',
      'borderStyle'
    ].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb={6}
          p={3}
          align="center"
        >
          Hello, I&apos;m a full-cycle developer based in Brazil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodolfo M. Ribeiro
            </Heading>
            <p>Software Enginner | Cloud Associated</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <ProfileImage
              src="/images/rodolfo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Rodolfo is a full-cycle software engineer and cloud associate based
            in Brazil, with a passion for building scalable and reliable
            systems. He possesses a strong background in developing,
            maintaining, and deploying payment systems and programs. When
            he&apos;s not online, he enjoys reading a wide range of books, from
            captivating RPGs to informative technical literature. Currently, his
            focus lies in exploring cloud solutions and their practical
            applications in solving real-life problems.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Ituverava, Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started a formal education as a software enginner at the University
            of Franca (Uni-FACEF).
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started working as a PHP software engineer intern at a prestigious
            E-commerce company called{' '}
            <Link href="https://www.irroba.com.br" target="_blank">
              Irroba
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Started working as a Golang Software Engineer at{' '}
            <Link href="https://quero2pay.com.br/" target="_blank">
              Q2Bank
            </Link>
            , where I developed a a deep passion for cloud solutions and DevOps
            emerged.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Read, Play Games (RPG in special) and Music</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/RodolfoMRibeiro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @RodolfoMRibeiro
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/rodolfomr"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @RodolfoMRibeiro
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            Best Part
          </Heading>
          <p>
            Join me on a behind-the-scenes coding journey. Weekly updates on
            projects, tutorials, and videos
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://rodolfomarqribeiro@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Send me a message
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
