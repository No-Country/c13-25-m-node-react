import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://www.lavanguardia.com/uploads/2020/12/08/5fcf67908e5db.jpeg',
  'https://th.bing.com/th/id/R.e18dae18196742520656688085177f2f?rik=HgicgPO0JW01fQ&riu=http%3a%2f%2fkumundra.com%2fwp-content%2fuploads%2f2022%2f01%2f1641562328_League-of-Legends-VGU-2023-Champions-sondages-et-plus.jpg&ehk=Xw0HiCWx7frc4V3BDqoQrk7KEtifBSBm6Ywdgl9pK0g%3d&risl=&pid=ImgRaw&r=0',
  'https://cdn1.dotesports.com/wp-content/uploads/2021/10/27062749/102221_QuickGameplayThoughts_Banner_v2-800x450.jpg',
  'https://esportsmaxx.com/wp-content/uploads/2022/08/lolpreseason2023ft-1.jpg',
  'https://cdn.esports.gg/wp-content/uploads/2022/08/12153932/Syndra_6-968x544.jpg',
]

const Onboarding = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000) // Cambiar de imagen cada 5 segundos

    return () => {
      clearInterval(interval)
    }
  }, [currentImage])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="#282c37"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Onboarding Slide ${currentImage + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AnimatePresence>
    </Box>
  )
}

export default Onboarding
