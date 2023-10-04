/* eslint-disable react/no-unknown-property */
import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@alexhiraga-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    text: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story, context) => {
      const { args } = context
      return (
        <div>
          <Story {...args} />
        </div>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
