import { Flex, Image, Text, VStack } from '@chakra-ui/react'
import maybeEmote from '@/assets/maybeNextTimeEmote.png'

export const MyPosting = () => {
  return (
    <Flex justifyContent="center" align="center" gap={5}>
      <Image src={maybeEmote} />
      <VStack>
        <Text fontSize={30}>
          Tu perfil está vacío, pero no por mucho tiempo.
        </Text>
        <Text fontSize={22}>
          ¿Estas listo para llenar este espacio con tus aventuras?
        </Text>
      </VStack>
    </Flex>
  )
}
