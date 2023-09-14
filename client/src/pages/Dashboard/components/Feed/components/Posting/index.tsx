import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  FormControl,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { LuHeart, LuMessageSquare, LuRepeat2, LuShare2 } from 'react-icons/lu'

import { IoMdSend } from 'react-icons/io'
import { useState } from 'react'
import { InteractionButton } from './components'

interface PostingProps {
  name: string
  user_icon: string
  range: string
  post: string
  imgpost?: string
}
export const Posting = ({
  name,
  range,
  post,
  imgpost,
  user_icon,
}: PostingProps) => {
  const [showCommentInput, setShowCommentInput] = useState(false)
  console.log(imgpost)
  const handleCommentButtonClick = () => {
    setShowCommentInput((prev) => !prev)
  }

  return (
    <Card bg={'#282C37'} mb={7}>
      <CardHeader>
        <HStack>
          <Image
            boxSize="46px"
            borderRadius="full"
            src={user_icon}
            alt="Poro Bigote"
          />
          <VStack align={'start'}>
            <Heading size="sm">{name}</Heading>
            <Text fontSize={'12px'} color={'#A5A5A5'}>
              {range}
            </Text>
          </VStack>
        </HStack>
      </CardHeader>

      <CardBody>
        <Text fontSize={'15px'} color={'#A5A5A5'}>
          {post}
        </Text>

        {imgpost != '' ? (
          <Image
            objectFit="cover"
            boxSize="100%"
            src={imgpost}
            borderRadius="lg"
          />
        ) : (
          <></>
        )}
      </CardBody>

      <HStack fontSize="1em" color={'#A5A5A5'} m={1} fontFamily={'roboto'}>
        <InteractionButton
          name={`${1} Reacciones`}
          icon={AiFillHeart}
          color={'#CF3E3E'}
        />
      </HStack>

      <Divider color={'#A5A5A5'} />

      <CardFooter>
        <HStack
          spacing={2}
          justifyContent={'space-evenly'}
          width={'100%'}
          position="absolute"
          bottom={showCommentInput ? 12 : 0}
          left={0}
          right={0}
        >
          {/* Botones de interaccion */}
          <InteractionButton name={'Reaccionar'} icon={LuHeart} />
          <InteractionButton
            name={'Comentar'}
            icon={LuMessageSquare}
            onClick={handleCommentButtonClick}
          />
          <InteractionButton name={'Repostear'} icon={LuRepeat2} />
          <InteractionButton name={'Compartir'} icon={LuShare2} />
        </HStack>
      </CardFooter>
      {/*formulario de comentario*/}
      {showCommentInput && (
        <FormControl mb={3}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Image
                src="https://i.pinimg.com/originals/20/62/f2/2062f2b8c7ca2988cb24824eb00b1221.jpg"
                alt="Imagen de teléfono"
                w={'46px'}
                borderRadius={'full'}
                p={1}
              />
            </InputLeftElement>

            <Input
              type="Text"
              placeholder="Tu comentario"
              backgroundColor={'#484B51'}
            />

            <InputRightElement>
              <IconButton
                aria-label="icon-button"
                bg={'transparent'}
                onClick={handleCommentButtonClick}
              >
                <Icon as={IoMdSend} fontSize={'36px'} color={'#319795'} p={1} />
              </IconButton>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}
    </Card>
  )
}
