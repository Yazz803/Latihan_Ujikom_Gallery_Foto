'use client'
import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { myConst } from '@/constants'
import api from '@/config/api'

type TAuthContext = {
  attemptLogin: (values: any) => void
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  openModalLogin: boolean
  setOpenModalLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<TAuthContext | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [openModalLogin, setOpenModalLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const attemptLogin = async (values: any) => {
    setLoading(true)
    const res = await api.postRequest('/auth/login', {
      email: values.username,
      password: values.password,
    })
    if (res.success) {
      Cookies.remove(myConst.keyCookieLogin)
      Cookies.remove(myConst.keyCookieAdmin)

      // Cookie User Loggedin
      Cookies.set(myConst.keyCookieLogin, myConst.keyCookieLogin)
      Cookies.set(myConst.tokenName, res.token)

      localStorage.setItem(myConst.userWebName, JSON.stringify(res.data))
      localStorage.setItem(myConst.tokenName, res.token)
      window.location.href = '/'
    }
    setLoading(false)
  }
  return (
    <AuthContext.Provider
      value={{
        attemptLogin,
        loading,
        setLoading,
        openModalLogin,
        setOpenModalLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext<TAuthContext | null>(AuthContext)
  if (!context) throw new Error('useAuthContext must be used within AuthContextProvider')
  return context
}
