import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import useTranslation from 'next-translate/useTranslation';

import thumbKeylogger from '../public/images/works/keylogger.png'
import thumbDDOS from '../public/images/works/ddos.png'
import thumbDSMovie from '../public/images/works/dsmovie.png'
import thumbAngolist from '../public/images/works/angolist.png'

const Works = () => {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t('works')}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="dsmovie" title="DSMovie" thumbnail={thumbDSMovie}>
              {t('dsmovie_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="keylogger"
              title="KeySense"
              thumbnail={thumbKeylogger}
            >
              {t('keysense_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="angolist"
              title="Angolist"
              thumbnail={thumbAngolist}
            >
              {t('angolist_description')}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="ddos" title="DDOS FLOOD" thumbnail={thumbDDOS}>
              {t('ddos_flood_description')}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mt={3} />
      </Container>
    </Layout>
  )
}

export default Works
