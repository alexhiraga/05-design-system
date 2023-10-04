import { ComponentProps, useEffect, useState } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
  ToastViewport,
} from './styles'
import * as ToastRadix from '@radix-ui/react-toast'
import { Button } from '../Button'
import { Box } from '../Box'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title?: string
  text?: string
}

export function Toast({ title, text }: ToastProps) {
  const [toastOpen, setToastOpen] = useState<boolean>(false)
  return (
    <ToastRadix.Provider duration={5000}>
      <Button onClick={() => setToastOpen(true)}>Open toast</Button>
      <ToastContainer open={toastOpen} onOpenChange={setToastOpen}>
        <Box>
          <ToastHeader>
            <ToastTitle>{title}</ToastTitle>
            <ToastClose>
              <X size={20} />
            </ToastClose>
          </ToastHeader>
          <ToastDescription>{text}</ToastDescription>
        </Box>
      </ToastContainer>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
