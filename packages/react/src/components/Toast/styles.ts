import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 32px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 32px))',
  },
})

export const ToastContainer = styled(Toast.Root, {
  fontFamily: '$default',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  padding: '$8',
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 0,
  listStyle: 'none',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: 'bold',
  fontSize: '$5',
  lineHeight: '160%',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: 14,
  lineHeight: '160%',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  backgroundColor: 'none',
  cursor: 'pointer',
  color: '$gray200',
})

export const ToastHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$1',
  gap: '$1',
})
