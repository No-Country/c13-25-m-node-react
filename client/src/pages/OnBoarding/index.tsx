import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Container, Image, Heading, Text, Box, Button } from '@chakra-ui/react'
import Slider1 from '@/assets/ImgOnboarding/Slider1.jpg'
import Slider2 from '@/assets/ImgOnboarding/Slider2.jpg'
import Slider3 from '@/assets/ImgOnboarding/Slider3.jpg'
import Slider4 from '@/assets/ImgOnboarding/Slider4.jpg'
import { Link } from 'react-router-dom'

interface Slider {
  id: string
  title: string
  text: string
  [key: string]: string
}
const sliderData: Slider[] = [
  {
    id: '1',
    title: 'Bienvenido a HexZone',
    text: 'HexZone es un lugar en línea donde los jugadores apasionados por la tecnología Hextech se reúnen para compartir conocimientos, estrategias y experiencias relacionadas con el juego.',
  },
  {
    id: '2',
    title: 'Encuentra nuevos compañeros',
    text: 'Dentro de nuestra tecnología hemos creado una herramienta donde podrás encontrar invocadores dentro de tu mismo elo dispuestos a jugar contigo, armar equipos para participar en competiciones, o solo pasar el rato, eso lo decides tú.',
  },
  {
    id: '3',
    title: 'Conecta con otros invocadores',
    text: 'Comparte tus logros y postea imágenes, videos y comentarios para demostrar de que eres capaz.',
  },
  {
    id: '4',
    title: 'Mantente al tanto de los nuevos cambios',
    text: 'Descubre las últimas actualizaciones y novedades del parche de League of Legends.',
  },
]

const add = 'image'
const addImage = [Slider1, Slider2, Slider3, Slider4]
for (let i = 0; i < sliderData.length; i++) {
  sliderData[i][add] = addImage[i]
}
SwiperCore.use([Navigation, Pagination, Autoplay])
export const Onboarding = () => {
  return (
    <Container
      maxW="100vw"
      maxH="100vh"
      position="absolute"
      top="0"
      left="0"
      m={0}
      p={0}
    >
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderData.map((item, key) => (
          <SwiperSlide key={key}>
            <Image
              w="100vw"
              h="100vh"
              objectFit="cover"
              overflow="hidden"
              src={item.image}
              alt=""
            />
            <Box w={'45%'} pos={'absolute'} mt={'-32%'} paddingLeft={'70px'}>
              <Heading
                mb={'20px'}
                w={'70%'}
                color={'#E3C488'}
                fontSize={'40px'}
              >
                {item.title}
              </Heading>
              <Text w={'90%'} pos={'relative'} fontSize={'20px'}>
                {item.text}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        w={'45%'}
        pos={'absolute'}
        paddingLeft={'70px'}
        mt={'-11%'}
        zIndex={'3'}
      >
        <Link to="/signup">
          <Button
            mr={'20px'}
            w={'40%'}
            backgroundColor="#E3C488"
            variant="solid"
            color={'#1E2027'}
          >
            Registrarme
          </Button>
        </Link>
        <Link to="/login">
          <Button w={'40%'} variant="outline" color={'#E3C488'} border={'1px'}>
            Iniciar sesión
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
