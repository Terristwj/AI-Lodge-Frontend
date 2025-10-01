/**
 * Button Component (ShadCN UI style)
 * A reusable button component with multiple variants and sizes
 * This follows the ShadCN UI pattern for maximum flexibility
 */

import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// Define button variants using class-variance-authority
// This allows us to easily create different button styles
const buttonVariants = cva(
  // Base styles applied to all buttons
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // Different visual styles
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      // Different sizes
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    // Default values if not specified
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

/**
 * Button Component
 * @param {string} variant - The visual style of the button
 * @param {string} size - The size of the button
 * @param {string} className - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref for the button element
 */
const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
