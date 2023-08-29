import { Button, Icon } from '@chakra-ui/react'

interface SideButtonProps {
  icon: React.ElementType
  name: string
}

const styles = {
  outline: 'none',
  borderLeftWidth: 0,
  borderRightWidth: '5px',
  borderRightRadius: 0,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  bgColor: '#363945',
  borderStyle: 'solid',
  borderColor: '#A5A5A5',
  color: '#A5A5A5',
}
export const SideButton = ({ icon, name }: SideButtonProps) => {
  return (
    <Button
      justifyContent="flex-start"
      w={'100%'}
      _hover={styles}
      _focus={{
        ...styles,
        borderColor: '#319795',
        color: '#319795',
      }}
      variant={'ghost'}
      color="#A5A5A5"
    >
      <Icon as={icon} fontSize={'1.6em'} m={3} />
      {name}
    </Button>
  )
}
