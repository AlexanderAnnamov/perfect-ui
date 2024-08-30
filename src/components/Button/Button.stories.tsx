import React from 'react'
import type { Meta, Story } from '@storybook/react'
import { Button, type ButtonProps } from './Button'

export default {
  title: 'components/Button',
  component: Button,
  args: {
    children: 'Content'
  },
  parameters: {
    controls: {
    //   exclude: ['innerControl', 'onToggle', 'isOpen']
    }
  }
} as Meta<ButtonProps>

// type AccordionStoryProps = Pick<AccordionProps, 'title' | 'children'>

export const AccordionStoryTemplate: Story<ButtonProps> = ({ ...args }) => (
  <Button {...args}/>
)

AccordionStoryTemplate.storyName = 'Button'
