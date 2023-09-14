import { Button, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'

// const Polygon1 = {
//   content: "''",
//   boxSizing: 'border-box',
//   position: 'absolute',
//   width: '30px',
//   height: '30px',
//   top: '35%',
//   right: '-10px',
//   background: '#1E2027',
//   transform: 'rotate(-315deg)',
//   borderTop: '1px solid transparent',
//   borderRight: '1px solid transparent',
//   borderBottom: '1px solid #E3C488',
//   borderLeft: '1px solid #E3C488',
// }

// const Polygon2 = {
//   ...Polygon1,
//   top: '43%',
//   right: '-6px',
//   width: '20px',
//   height: '20px',
// }

const background = {
  background:
    'linear-gradient(270deg, rgba(1, 1, 1, 0) 1.04%, rgba(1, 1, 1, 0.2) 74.48%, rgba(1, 1, 1, 0) 85.42%)',
}

interface SidebarLinkProps {
  icon: React.ElementType
  label?: string
  isSelected: boolean
  to?: string
  onClick: () => void
}

export const SidebarLink = ({
  icon: IconComponent,
  // label,
  isSelected,
  onClick,
  to,
}: SidebarLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const buttonStyles = {
    color: isSelected || isHovered ? '#E3C488' : '#8C8C8C',
    fontSize: 'xl',
    fontFamily: 'Inter',
    w: '100%',
    h: '100%',
    _hover: background,
    _focus: {
      ...background,
      // '&::after': isSelected || isHovered ? Polygon2 : {},
      // '&::before': isSelected || isHovered ? Polygon1 : {},
    },
  }
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  return (
    <Button
      as={RouterLink}
      to={to}
      leftIcon={<Icon as={IconComponent} boxSize={8} />}
      variant="ghost"
      {...buttonStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* {label} */}
    </Button>
  )
}

export default SidebarLink
