import { Image, Center } from '@chakra-ui/react'
import dividerDouble from '@/assets/dividerDouble.svg'
import dividerSimple from '@/assets/dividerSimple.png'
interface Props {
  typeDivider: 'simple' | 'double'
  orientation: 'horizontal' | 'vertical'
}

export const DividerStats = ({ orientation, typeDivider }: Props) => {
  const styles = {
    container: {
      transform:
        orientation === 'horizontal' ? 'rotate(90deg)' : 'rotate(0deg)',
      height: orientation === 'horizontal' ? '100%' : 'auto',
      width: orientation === 'vertical' ? '100%' : 'auto',
    },
  }
  return (
    <Center style={styles.container}>
      <Image
        src={typeDivider === 'simple' ? dividerSimple : dividerDouble}
        alt="divider"
      />
    </Center>
  )
}
