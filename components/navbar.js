import Logo from './logo'

import NextLink from 'next/link'

import * as S from '@chakra-ui/react'

// import { HumburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = S.useColorModeValue('gray.200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <S.Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </S.Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <S.Box
      position="fixed"
      as="nav"
      w="100%"
      bg={S.useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <S.Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <S.Flex align="center" mr={5}>
          <S.Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </S.Heading>
        </S.Flex>

        <S.Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </S.Stack>
      </S.Container>
    </S.Box>
  )
}

export default Navbar
