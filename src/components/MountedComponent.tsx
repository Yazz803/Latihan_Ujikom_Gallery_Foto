'use client'
import React, { useEffect, useState } from 'react'

export default function MountedComponent({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return <React.Fragment>{isMounted && <>{children}</>}</React.Fragment>
}
