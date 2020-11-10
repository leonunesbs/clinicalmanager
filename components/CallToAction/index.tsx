/* eslint-disable no-use-before-define */
import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import CustomButton from '../CustomButton'
import { useRouter } from 'next/dist/client/router'

const CallToAction: React.FC = () => {
  const router = useRouter()
  return (
    <Flex
      flexDir="column"
      flexGrow={1}
      h="500px"
      background="url(/images/cta-bg.jpg?webp)"
      justify="center"
      overflow="hidden"
    >
      <Flex
        flexDir="column"
        w={['100%', '40%']}
        p={['0px 5% 0px 5%', '0px 0px 0px 130px']}
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
        <CustomButton
          mt={6}
          isBlock
          onClick={() => router.push('/agendamento')}
        >
          Agende sua consulta
        </CustomButton>
      </Flex>
    </Flex>
  )
}

export default CallToAction
