import { TabPanel, TabPanels, Text, Box } from '@chakra-ui/react'

export const TabPosting = () => {
  const postings = [
    {
      text: 'saddadsaad',
      type: 'foryou',
    },
    {
      text: 'sddsadsadasdas',
      type: 'foryou',
    },
    {
      text: 'asddsadasdsa',
      type: 'foryou',
    },
    {
      text: 'xxxxxxxxxx',
      type: 'following',
    },
    {
      text: 'xxxxxxxxxx',
      type: 'following',
    },
  ]

  const postingFilter = postings.filter((post) => {
    return post.type === 'following'
  })

  console.log(postingFilter)
  console.log(postings)
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
