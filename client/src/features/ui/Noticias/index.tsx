import ImageNew1 from '@/assets/images/NewsImg/ImageNew1.png'
import ImageNew2 from '@/assets/images/NewsImg/ImageNew2.png'
import ImageNew3 from '@/assets/images/NewsImg/ImageNew3.png'
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react'
interface NewsData {
  title: string
  text: string
  category: string
  since: string
  id: string
  [key: string]: string
}
const newsData: NewsData[] = [
  {
    id: '1',
    category: 'ACTUALIZACIONES DEL JUEGO',
    title: 'Resumen de habilidades de briar',
    text: 'Descubre quién es amigo y quién es comida con Briar en la versión 13.18',
    since: 'Hace 8 días',
  },
  {
    id: '2',
    category: 'ACTUALIZACIONES DEL JUEGO',
    title: 'Notas de la versión 13.17',
    text: '¡La versión 13.17 llega brillando como una Bel Veth Matriarca Cósmica!',
    since: 'Hace 9 días',
  },
  {
    id: '3',
    category: 'ACTUALIZACIONES DEL JUEGO',
    title: '¡Ofertas que vuelven a la vida!',
    text: 'Encuentra a Rey Viego, Sion Escarcha Negra, LeBlanc Aquelarre, PROYECTO: Zed, Annie Supergaláctica y muchos más, y descubre junto a ellos que después de la vida ¡hay más vida!',
    since: 'Hace 9 días',
  },
]

const add = 'image'
const addImage = [ImageNew1, ImageNew2, ImageNew3]
for (let i = 0; i < newsData.length; i++) {
  newsData[i][add] = addImage[i]
}
export const Noticias = () => {
  return (
    <Box display="block" boxSizing="border-box">
      <Heading textAlign={'center'} fontSize={16} mb={8}>
        Ultimas noticias
      </Heading>
      {newsData.map((item, key) => (
        <Flex key={key} w="100%" borderRadius={8} mb={3} bgColor="#282C37">
          <Image src={item.image} alt="" w={'50%'} borderRadius={8} />
          <Flex
            p={10}
            boxSizing="border-box"
            flexDir={'column'}
            justifyContent={'space-between'}
          >
            <Heading fontSize={20} color={'#38D392'} mb={2}>
              {item.category}
            </Heading>
            <Text fontSize={16} mb={2}>
              {item.title}
            </Text>
            <Text fontSize={12} mb={3}>
              {item.text}
            </Text>
            <Text fontSize={10}>{item.since}</Text>
          </Flex>
        </Flex>
      ))}
    </Box>
  )
}
