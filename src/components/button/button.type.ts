import { type W } from 'windstitch'

import { type ButtonVariants } from './button.component'

export type ButtonProps = React.ComponentProps<'button'> &
  ButtonVariantsProps & {
    label?: string
  }

export type ButtonVariantsProps = W.Infer<typeof ButtonVariants>
