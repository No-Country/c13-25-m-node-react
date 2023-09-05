import { DividerStats } from '@/components'
import { Flex, HStack, Box, Text, Image } from '@chakra-ui/react'
import rangeLogo from '@/assets/rangeLogo.svg'
import { Doughnut } from 'react-chartjs-2'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const Statistics = () => {
  const data = {
    labels: ['WinRate'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [1],
        backgroundColor: '#A5A5A5',
        borderColor: '#A5A5A5',
        borderWidth: 0,
        weight: 0.5,
        cutoutPercentage: 30,
      },
    ],
  }
  const options = { cutout: '80%' }

  const data2 = {
    labels: ['Partidas jugadas'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [1],
        backgroundColor: '#38D392',
        borderColor: '#38D392',
        borderWidth: 0,
        weight: 0.2,
      },
    ],
  }
  return (
    <Flex gap={20}>
      <HStack w="auto" spacing={20}>
        <Box textAlign="center">
          <Text color="#A5A5A5">Solo/Duo</Text>
          <Text color="#38D392">UNRANKED</Text>

          <Image src={rangeLogo} />

          <Text>{`0 LP`}</Text>
          <Text>{`0 V0D`}</Text>
        </Box>
        <Box>
          <DividerStats typeDivider="double" orientation="vertical" />
        </Box>
        <Box textAlign="center">
          <Text color="#A5A5A5">Flex</Text>
          <Text color="#38D392" fontWeight="bold">
            UNRANKED
          </Text>

          <Image src={rangeLogo} />

          <Text>{`0 LP`}</Text>
          <Text>{`0 V0D`}</Text>
        </Box>
      </HStack>
      <HStack>
        <DividerStats typeDivider="simple" orientation="vertical" />
        <Doughnut data={data} options={options} />
        <Doughnut data={data2} options={options} />
      </HStack>
    </Flex>
  )
}
