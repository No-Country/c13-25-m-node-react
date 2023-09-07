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

export function ModalEditRegion() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae, delectus! Iste sequi quod itaque blanditiis, corporis
              aliquid dolor a provident laborum ipsa ex eos, dolores,
              repellendus mollitia iure officia esse?
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">guardar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
