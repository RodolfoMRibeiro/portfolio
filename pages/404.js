import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const NotFound = () => {
  const { t } = useTranslation('common')
  return (
    <Container>
      <Heading as="h1">{t('not_found')}</Heading>
      <Text>{t('not_found_description')}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t('return_home')}
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
