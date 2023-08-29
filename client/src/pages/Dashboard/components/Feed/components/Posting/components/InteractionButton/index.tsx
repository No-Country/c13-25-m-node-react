import { Button, Icon } from '@chakra-ui/react'

interface InteractionButtonProps {
  name: string
  icon: React.ElementType
  color?: string
  onClick?: () => void
}

export const InteractionButton = ({
  name,
  icon,
  color,
  onClick,
}: InteractionButtonProps) => {
  return (
    <Button
      fontSize={'0.8em'}
      bg={'transparent'}
      color={'#A5A5A5'}
      _focus={{ bg: 'transparent' }}
      _hover={{ bg: 'transparent' }}
      onClick={onClick}
    >
      <Icon as={icon} mr={2} color={color} fontSize={'1.6em'} />
      {name}
    </Button>
  )
}
