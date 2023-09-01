import { TabPanel, TabPanels, Text, Box } from '@chakra-ui/react'

export const TabPosting = () => {
  const postings = [
    {
      text: '',
      type: 'foryou',
    },
    {
      text: '',
      type: 'foryou',
    },
    {
      text: '',
      type: 'foryou',
    },
    {
      text: '',
      type: 'following',
    },
    {
      text: '',
      type: 'following',
    },
  ]

  const postingFilter = postings.filter((post) => {
    return post.type === 'following'
  })

  return (
    <TabPanels>
      <TabPanel>
        {postings.map((post, index) => {
          return (
            <Box key={index}>
              <Text> {post.text}</Text>
            </Box>
          )
        })}
      </TabPanel>
      <TabPanel>
        {postingFilter.map((post, index) => {
          return (
            <Box key={index}>
              <Text> {post.text}</Text>
            </Box>
          )
        })}
      </TabPanel>
    </TabPanels>
  )
}
