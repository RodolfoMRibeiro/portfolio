import { useRouter } from 'next/router'
import { HiOutlineTranslate } from 'react-icons/hi'
import {
  Box,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const TranslationButton = () => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const handleLanguageChange = locale => {
    router.push(router.pathname, router.asPath, { locale })
  }
  const languages = [
    { lang: 'fr', lable: t('lable_french') },
    { lang: 'en', lable: t('lable_english') },
    { lang: 'ru', lable: t('lable_russian') },
    { lang: 'ja', lable: t('lable_japanese') },
    { lang: 'pt', lable: t('lable_portuguese') },
  ]

  return (
    <Box mr={2} display={{ base: 'inline-block' }}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HiOutlineTranslate />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          {languages.map(language => (
            <MenuItem
              key={language.lable}
              onClick={() => handleLanguageChange(language.lang)}
            >
              {language.lable}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
    // <div>
    //   <button onClick={() => handleLanguageChange('en')}>English</button>
    //   <button onClick={() => handleLanguageChange('fr')}>Français</button>
    // </div>
  )
}

export default TranslationButton
