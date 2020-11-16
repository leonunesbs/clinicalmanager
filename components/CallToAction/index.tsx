/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import CTAButotn from '../CTAButton'
import { useRouter } from 'next/dist/client/router'

const CallToAction: React.FC = () => {
  const router = useRouter()
  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      h="500px"
      backgroundImage={`url("${require('../../public/images/ctaBackground.jpg?webp')}")`}
      backgroundSize="cover"
      justify="center"
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        w={['100%', '40%']}
        pl={['8%', '5%', '130px']}
        pr={['8%', '0']}
        align="center"
      >
        <Heading
          fontWeight="bold"
          color="blue.100"
          fontSize={['3xl', '5xl']}
          alignSelf={['center', 'flex-start']}
        >
          Compromisso em provomer saúde e bem estar.
        </Heading>
        <CTAButotn mt={6} isBlock onClick={() => router.push('/agendamento')}>
          Agende sua consulta
        </CTAButotn>
      </Flex>
    </Flex>
  )
}

export default CallToAction
