import {
  Container,
  Heading,
  Divider,
  Link,
  ListItem,
  ListIcon,
  List
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear, OpeningTitle } from '../components/bio'
import { MdCheckCircle } from 'react-icons/md'

import Paragraph from '../components/paragraph'

const JobExperience = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={20} mb={4}>
            Job Experience
          </Heading>
          <BioSection ml={-4}>
            <BioYear ml={5}>
              <Link href="https://quero2pay.com.br/" target="_blank">
                Q2Bank
              </Link>{' '}
              - Software Engineer
            </BioYear>
            <Paragraph>
              As a sofware enginner, Rodolfo had the privilege of making
              significant contributions to the upkeep and improvement of various
              payment microservices, providing valuable insights and expertise.
            </Paragraph>
            <OpeningTitle>NOTABLE ACOMPLISHMENTS</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Developed scalable payment microservices in Go for handling
                large transaction volumes, processing over R$4 million per
                month.
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Designed and implemented an internal library to standardize and
                centralize dependencies for new projects, ensuring consistency
                and efficiency.
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Utilized pg_cron in Amazon RDS for implementing automated
                procedures.
              </ListItem>
            </List>
          </BioSection>
        </Section>

        <Divider my={6} />

        <Section delay={0.4}>
          <BioSection ml={-5}>
            <BioYear ml={5}>
              <Link href="https://www.irroba.com.br/" target="_blank">
                Irroba
              </Link>{' '}
              - Software Engineer Intern
            </BioYear>
            <Paragraph>
              That marked my initial hands-on with the programming field,
              wherein I acquired significant expertise in conducting tests and
              ensuring high-quality standards. Within my role, I verified the
              proper functionality of the software application&apos;s
              server-side components and ensured their compliance
            </Paragraph>
            <OpeningTitle>NOTABLE ACOMPLISHMENTS</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                cultivated the ability to discern between errors and business
                rules when confronted with a wide range of options within a
                major e-commerce player.
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Through reorganizing and streamlining delivery methods on the
                platform, I deepened my understanding of the key elements that
                truly add value to the company.
              </ListItem>
            </List>
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default JobExperience
