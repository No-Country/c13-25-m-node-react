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
  VStack,
  Text,
  Center,
  Image,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'

import addCoverProfile from '@/assets/addCoverProfile.svg'
import { ChangeEvent, useRef } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  handleImageSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const ModalRegion = ({ isOpen, onClose, handleImageSelect }: Props) => {
  const {
    isOpen: isOpenRegion,
    onClose: onCloseRegion,
    onOpen: onOpenRegion,
  } = useDisclosure()

  const options = [
    {
      value: '0',
      label: 'Ninguno',
    },
    {
      value: '1',
      label: 'Top Laners',
    },
    {
      value: '2',
      label: 'Jungler',
    },
    {
      value: '3',
      label: 'Mid line',
    },
    {
      value: '4',
      label: 'Bot Laners',
    },
    {
      value: '5',
      label: 'Support',
    },
  ]
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    return files
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent bgColor={'#282C37'}>
          <Modal isOpen={isOpenRegion} onClose={onCloseRegion} isCentered>
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack spacing={5}>
                  <Text color="#E3C488" fontSize={28}>
                    Selecciona tu región
                  </Text>
                  <InputGroup>
                    <Input
                      placeholder="Nombre de Invocador"
                      bgColor="#FFF"
                      color="#000"
                      fontSize={14}
                    ></Input>
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
                    onClick={onCloseRegion}
                  >
                    Continuar
                  </Button>
                  <Button variant="unstyled" onClick={onCloseRegion}>
                    Ahora no
                  </Button>
                </VStack>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <ModalCloseButton />
          <ModalHeader>Editar perfil</ModalHeader>
          <ModalBody>
            <VStack spacing={7}>
              <Center
                w="100%"
                h={250}
                bgColor="#282C37"
                bgGradient="linear(rgba(0, 0, 0, 0.00) 72.93%, #0E0E0E 100%), linear-gradient(180deg, #010101 0%, rgba(0, 0, 0, 0.00) 44.42%)"
              >
                <Button onClick={handleButtonClick} variant="unstyled">
                  <Image src={addCoverProfile} />
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                  />
                </Button>
              </Center>
              <Text color="#E3C488" fontSize={28}>
                Selecciona tu región
              </Text>
              <Button
                variant="outline"
                borderColor="#319795"
                color="#319795"
                borderWidth={3}
                w="100%"
                onClick={onOpenRegion}
              >
                Agregar mi nombre de invocador
              </Button>
              <InputGroup>
                <Input
                  color="#000"
                  _placeholder={{ color: '#A0AEC0' }}
                  placeholder="@Leo123"
                  bgColor="#FFF"
                  isDisabled={true}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  color="#000"
                  _placeholder={{ color: '#A0AEC0' }}
                  placeholder="Descripción"
                  bgColor="#FFF"
                />
              </InputGroup>
              <InputGroup>
                <Select
                  placeholder="Elige tu rol principal"
                  bgColor="#FFF"
                  color="#000"
                  onChange={handleImageSelect}
                  fontSize={14}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
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
        </ModalContent>
      </Modal>
    </>
  )
}
