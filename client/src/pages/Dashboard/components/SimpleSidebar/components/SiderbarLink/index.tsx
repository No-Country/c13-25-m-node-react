import { Button, Icon } from '@chakra-ui/react'

const styles = {
  background:
    ' linear-gradient(270deg, rgba(1, 1, 1, 0) 1.04%, rgba(1, 1, 1, 0.2) 74.48%, rgba(1, 1, 1, 0) 85.42%)',
  borderColor: '#E3C488',
  color: '#E3C488',
}

/* Polygon 1 */
const Polygon1 = {
  content: "''",
  boxSizing: 'border-box',
  position: 'absolute',
  width: '30px',
  height: '30px',
  top: '35%',
  right: '-10px',
  background: '#1E2027',
  transform: 'rotate(-315deg)',
  borderTop: '1px solid transparent',
  borderRight: '1px solid transparent',
  borderBottom: '1px solid #E3C488',
  borderLeft: '1px solid #E3C488',
}
/* Polygon 2 */
const Polygon2 = {
  ...Polygon1,
  top: '43%',
  right: '-6px',
  width: '20px',
  height: '20px',
}

interface SidebarLinkProps {
  icon: React.ElementType
  label: string
}

export const SidebarLink = ({
  icon: IconComponent,
  label,
}: SidebarLinkProps) => {
  return (
    <Button
      color={'#8C8C8C'}
      fontFamily={'Inter'}
      justifyContent={'flex-start'}
      w={'100%'}
      h={'58px'}
      ml={'40px'}
      fontSize="xl"
      variant="ghost"
      leftIcon={<Icon as={IconComponent} boxSize={8} mr={4} />}
      _hover={{ ...styles }}
      _focus={{
        ...styles,

        '&::after': Polygon2,
        '&::before': Polygon1,
      }}
    >
      {label}
    </Button>
  )
}
