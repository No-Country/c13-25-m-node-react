/* eslint-disable react/no-unescaped-entities */
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import React from 'react'
import { ModalEditRegion } from '..'

export function ModalEditProfile({ handleClose }: { handleClose: () => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const closeHandle = () => {
    handleClose()
    onClose()
  }

  return (
    <>
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              deserunt!
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeHandle}>
              Guardar
            </Button>
            <ModalEditRegion />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
