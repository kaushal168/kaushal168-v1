"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We extract the props directly from the component to avoid broken import paths
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}