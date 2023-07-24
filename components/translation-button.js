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

const TranslationButton = () => {
  const router = useRouter()

  const handleLanguageChange = locale => {
    router.push(router.pathname, router.asPath, { locale })
  }
  // const languages = [{lang: 'en', lable: t('lable_english')}, {lang: 'ru', lable: t('lable_russian')}]

  return (
    <Box mr={2} display={{ base: 'inline-block'}}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HiOutlineTranslate />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem onClick={() => handleLanguageChange('pt')}>
            portugues
          </MenuItem>
          <MenuItem onClick={() => handleLanguageChange('ru')}>
            russo
          </MenuItem>
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
