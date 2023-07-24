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
import useTranslation from 'next-translate/useTranslation'

import Paragraph from '../components/paragraph'

const JobExperience = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Container>
        <Section delay={0.2}>
          <Heading as="h3" fontSize={20} mb={4}>
            {t('job_experience')}
          </Heading>
          <BioSection ml={-4}>
            <BioYear ml={5}>
              <Link href="https://quero2pay.com.br/" target="_blank">
                Q2Bank
              </Link>{' '}
              - {t('q2bank_experience')}
            </BioYear>
            <Paragraph>{t('q2bank_accomplishments')}</Paragraph>
            <OpeningTitle>{t('q2bank_accomplishment_1')}</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('q2bank_accomplishment_1')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('q2bank_accomplishment_2')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('q2bank_accomplishment_3')}
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
              - {t('irroba_experience')}
            </BioYear>
            <Paragraph>{t('irroba_accomplishments')}</Paragraph>
            <OpeningTitle>{t('irroba_accomplishment_1')}</OpeningTitle>
            <List spacing={3} ml={50}>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('irroba_accomplishment_1')}
              </ListItem>
              <ListItem textAlign="justify">
                <ListIcon as={MdCheckCircle} color="green.500" />
                {t('irroba_accomplishment_2')}
              </ListItem>
            </List>
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default JobExperience
