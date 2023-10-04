import { ComponentProps } from 'react'
import { TooltipContainer } from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  text?: string
  content?: string
}
export function Tooltip({ content, text }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <span>{content}</span>
        </TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContainer side="top">
            {text}
            <TooltipRadix.Arrow />
          </TooltipContainer>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
