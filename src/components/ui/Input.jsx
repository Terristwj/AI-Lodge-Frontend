/**
 * Input Component (ShadCN UI style)
 * A styled text input component with consistent styling
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input Component
 * @param {string} type - Input type (text, password, email, etc.)
 * @param {string} className - Additional CSS classes
 * @param {React.Ref} ref - Forwarded ref for the input element
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        // Base input styling with focus states
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export { Input }
