/* eslint-disable react/no-unknown-property */
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@alexhiraga-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: 'Tooltip!',
    content: 'Hover me!',
  },
  decorators: [
    (Story, context) => {
      const { args } = context
      return (
        <Box css={{ width: 'max-content', marginTop: '$6' }}>
          <Text>{Story(args.content, args.text)}</Text>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
