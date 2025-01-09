"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode, ComponentProps } from "react"

// Infer props from NextThemesProvider
type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>

interface CustomThemeProviderProps extends ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children, ...props }: CustomThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
