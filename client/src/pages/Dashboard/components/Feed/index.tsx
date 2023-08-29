import { Center, Tab, TabList, Tabs, TabIndicator, Box } from '@chakra-ui/react'
import { TabPosting } from './components'

export const Feed = () => {
  return (
    <Center w={1450}>
      <Tabs w="100%" h="100vh" colorScheme="#319795" variant="unstyled">
        <TabList
          borderBottomRadius={8}
          borderTopRadius={5}
          borderBottom={1}
          borderStyle="solid"
          borderColor="#CCCCCC"
          bgColor="#282C37"
          h={14}
        >
          <Tab _selected={{ color: '#319795' }} w="50%">
            Para ti
          </Tab>
          <Tab _selected={{ color: '#319795' }} w="50%">
            Siguiendo
          </Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#319795"
          borderRadius="1px"
        />
        <Box>adsds</Box>
        <TabPosting />
      </Tabs>
    </Center>
  )
}
