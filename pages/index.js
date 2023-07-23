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
import useTranslation from 'next-translate/useTranslation';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    [
      'width',
      'height',
      'src',
      'alt',
      'bordercolor',
      'borderwidth',
      'borderstyle'
    ].includes(prop)
})

const Page = () => {
  const { t } = useTranslation('common')

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
          {t('hello')}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t('name')}
            </Heading>
            <p>{t('title')}</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <ProfileImage
              src="/images/rodolfo.png"
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
            {t('work')}
          </Heading>
          <Paragraph>{t('work_description')}</Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {t('portfolio')}
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('bio')}
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            {t('born')}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t('education')}
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            {t('irroba')}
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            {t('q2bank')}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('hobbies')}
          </Heading>
          <Paragraph>{t('hobbies_description')}</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('web')}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/RodolfoMRibeiro" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  {t('github')}
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
                  {t('linkedin')}
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            {t('invite')}
          </Heading>
          <p>{t('invite_description')}</p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="mailto:rodolfomarqribeiro@gmail.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              {t('send_message')}
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
