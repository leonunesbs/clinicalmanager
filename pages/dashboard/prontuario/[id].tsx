// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea
} from '@chakra-ui/react'
import DarkButton from '../../../components/DarkButton'

const Manager: React.FC = () => {
  return (
    <Flex h="100vh" w="100vw" backgroundColor="blue.700" overflow="hidden">
      <Flex
        backgroundColor="blue.500"
        h="20px"
        w="100%"
        px={4}
        position="absolute"
        justify="flex-end"
        align="center"
        top="0px"
        zIndex={10}
      >
        <Text color="blue.100" fontSize="xs">
          Segunda, 18 de janeiro de 2021, 19:56:01
        </Text>
      </Flex>
      <Flex
        d={['none', 'flex']}
        zIndex={50}
        backgroundColor="blue.800"
        flexDir="column"
        shadow="lg"
        w="180px"
        h="100%"
        borderRight="2px solid rgba(228, 242, 241, 0.45)"
        borderRadius="0px 6px 6px 0px"
      >
        <Flex
          mt={10}
          flexDir="column"
          align="center"
          textAlign="center"
          textColor="blue.100"
          fontSize="xs"
        >
          <Text fontWeight="bold" mb={2}>
            HOSPITAL ALBERTO NETO / DIRCEU II
          </Text>
          <Text fontWeight="thin">MÉDICO: LEONARDO NUNES</Text>
        </Flex>
        <Flex flexDir="column">Teste</Flex>
      </Flex>
      <Flex flexDir="column" mt={10} px={[2, 4]} flexGrow={1}>
        <Flex align="flex-end">
          <Heading size="lg" color="blue.100" as="h1" lineHeight={1.4}>
            LEONARDO NUNES BEZERRA SOUZA
          </Heading>
          <Text color="blue.100" ml={4} fontWeight="light" lineHeight={2.1}>
            22 anos
          </Text>
        </Flex>
        <Stack
          flexDir="column"
          shadow="lg"
          w="100%"
          border="2px solid rgba(228, 242, 241, 0.45)"
          borderRadius="md"
          backgroundColor="blue.800"
          overflow="auto"
          p={2}
          mb={4}
        >
          <Flex
            flexDir="column"
            backgroundColor="blue.700"
            shadow="lg"
            borderRadius="sm"
            textColor="blue.100"
            p={2}
          >
            <Text>CPF: 068.008.773-79</Text>
            <Text>Data de admissão: 16/01/2021</Text>
            <Text>Data de nascimento: 12/02/1998</Text>
          </Flex>
          <Tabs
            size="sm"
            borderRadius="sm"
            backgroundColor="blue.700"
            shadow="lg"
            isFitted
            variant="enclosed"
            textColor="blue.100"
          >
            <TabList mb="1em">
              <Tab
                _selected={{
                  backgroundColor: 'blue.500',
                  textColor: 'blue.100'
                }}
              >
                Dados clínicos
              </Tab>
              <Tab
                _selected={{
                  backgroundColor: 'blue.500',
                  textColor: 'blue.100'
                }}
              >
                Exames/procedimentos
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel d="flex" flexDir="column" p={2}>
                <Heading as="h4" size="sm" mb={2}>
                  Consulta
                </Heading>
                <Textarea
                  shadow="lg"
                  backgroundColor="blue.800"
                  placeholder="Descreva os dados clínicos do paciente..."
                  mb={4}
                  minH="120px"
                />
                <Flex justify="flex-end" mb={4}>
                  <DarkButton>Guardar</DarkButton>
                </Flex>
                <Heading as="h4" size="sm" mb={2}>
                  Histórico clínico
                </Heading>
                <Stack
                  direction="column"
                  shadow="lg"
                  h="100%"
                  maxH="550px"
                  border="2px solid rgba(228, 242, 241, 0.45)"
                  borderRadius="md"
                  backgroundColor="blue.800"
                  p={2}
                >
                  <Button
                    backgroundColor="blue.700"
                    shadow="lg"
                    h="35px"
                    borderRadius="sm"
                    p={2}
                    _active={{ backgroundColor: 'blue.500' }}
                    _hover={{ backgroundColor: 'blue.800' }}
                  >
                    <Flex w="100%" justify="space-between" wrap="wrap">
                      <Text
                        color="blue.100"
                        textAlign="center"
                        fontWeight="thin"
                        fontSize="sm"
                      >
                        16/01/2021
                      </Text>
                      <Text
                        color="blue.100"
                        textAlign="center"
                        fontWeight="thin"
                        fontSize="sm"
                      >
                        MÉDICO: LEONARDO NUNES
                      </Text>
                      <Text
                        color="blue.100"
                        textAlign="center"
                        fontWeight="thin"
                        fontSize="sm"
                      >
                        ENFERMARIA
                      </Text>
                    </Flex>
                  </Button>
                </Stack>
              </TabPanel>
              <TabPanel d="flex" flexDir="column" p={2}>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default Manager
