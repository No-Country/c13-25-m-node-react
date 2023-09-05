import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  InputGroup,
  Input,
  Select,
  Button,
  ModalFooter,
  VStack,
  Text,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const ModalRegion = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody>
            <VStack spacing={7}>
              <Text color="#E3C488" fontSize={28}>
                Selecciona tu región
              </Text>
              <InputGroup>
                <Input
                  _placeholder={{ color: '#A0AEC0' }}
                  placeholder="Nombre de invocador"
                  bgColor="#FFF"
                />
              </InputGroup>
              <InputGroup>
                <Select
                  placeholder="¿En que region estas?"
                  bgColor="#FFF"
                  color="#000"
                  fontSize={14}
                >
                  <option value="LAS">LAS</option>
                </Select>
              </InputGroup>
              <Button
                variant="solid"
                bgColor="#319795"
                w="100%"
                onClick={onClose}
              >
                Continuar
              </Button>
              <Button variant="unstyled" onClick={onClose}>
                Ahora no
              </Button>
            </VStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
