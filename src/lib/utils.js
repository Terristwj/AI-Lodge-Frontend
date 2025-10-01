/**
 * Utility function to merge Tailwind CSS classes
 * This helps avoid conflicts when combining multiple class names
 * Uses clsx to conditionally apply classes and tailwind-merge to merge conflicting classes
 */

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
