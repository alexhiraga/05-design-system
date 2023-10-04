import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Content, {
  fontFamily: '$default',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: 5,
  //   position: 'relative',
  color: '$gray100',
  //   marginBottom: '$2',
  //   maxWidth: 300,
  //   width: 'max-content',
  textAlign: 'center',
})

export const ArrowDown = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '$3',
  width: 0,
  height: 0,
  borderLeft: '8px solid transparent',
  borderRight: '8px solid transparent',
  borderTop: '8px solid $colors$gray900',
})
