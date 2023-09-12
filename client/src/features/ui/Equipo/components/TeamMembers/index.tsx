import avatar from '@/assets/ProfileImg/Avatar.png'
import avatar1 from '@/assets/ProfileImg/Avatar-1.png'
import avatar3 from '@/assets/ProfileImg/Avatar-3.png'
import avatar2 from '@/assets/ProfileImg/Avatar-2.png'
import avatar5 from '@/assets/ProfileImg/Avatar-5.png'
import midrole from '@/assets/roles/1.png'
import adcrole from '@/assets/roles/3.png'
import toprole from '@/assets/roles/4.png'
import jgrole from '@/assets/roles/5.png'
import bronce from '@/assets/elo/bronce.png'
import hierro from '@/assets/elo/iron.png'
import silver from '@/assets/elo/silver.png'
import { Members } from './components/members'
const integrantes = [
  {
    name: 'M3rlin',
    user_icon: avatar,
    role_icon: toprole,
    winrate: '55%',
    solo_icon: hierro,
    flex_icon: bronce,
  },
  {
    name: 'Punch Of Glory',
    user_icon: avatar3,
    role_icon: jgrole,
    winrate: '45%',
    solo_icon: hierro,
    flex_icon: bronce,
  },
  {
    name: 'Teemo Golpeado',
    user_icon: avatar2,
    role_icon: adcrole,
    winrate: '65%',
    solo_icon: silver,
    flex_icon: hierro,
  },
  {
    name: 'Lenny Krablitz',
    user_icon: avatar1,
    role_icon: midrole,
    winrate: '28%',
    solo_icon: bronce,
    flex_icon: bronce,
  },
  {
    name: 'SinDeditos',
    user_icon: avatar5,
    role_icon: midrole,
    winrate: '37%',
    solo_icon: silver,
    flex_icon: bronce,
  },
  {
    name: 'Yuchun',
    user_icon: avatar,
    role_icon: midrole,
    winrate: '39%',
    solo_icon: silver,
    flex_icon: bronce,
  },
  {
    name: 'OTPZiggs',
    user_icon: avatar2,
    role_icon: midrole,
    winrate: '42%',
    solo_icon: silver,
    flex_icon: bronce,
  },
]

export const TeamMember = () => {
  return integrantes.map((i) => (
    <Members
      name={i.name}
      key={i.name}
      user_icon={i.user_icon}
      role_icon={i.role_icon}
      winrate={i.winrate}
      solo_icon={i.solo_icon}
      flex_icon={i.flex_icon}
    />
  ))
}
