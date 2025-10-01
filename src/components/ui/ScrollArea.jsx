/**
 * ScrollArea Component (ShadCN UI style)
 * A custom scrollable container with styled scrollbars
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * ScrollArea Component
 * Provides a scrollable container with custom styling
 */
const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative overflow-auto scrollbar-thin', className)}
    {...props}
  >
    {children}
  </div>
))

ScrollArea.displayName = 'ScrollArea'

export { ScrollArea }
