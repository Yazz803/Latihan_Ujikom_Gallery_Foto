'use client'
import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { myConst } from '@/constants'

type TUserContext = {
  isLogin: boolean
  openModalEditProfile: boolean
  setOpenModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>
  user: any
}

export const UserContext = createContext<TUserContext | null>(null)

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [openModalEditProfile, setOpenModalEditProfile] = useState(false)
  function checkIsLogin() {
    if (Cookies.get(myConst.keyCookieLogin) && Cookies.get(myConst.tokenName) !== undefined) {
      return true
    }
    return false
  }
  return (
    <UserContext.Provider
      value={{
        isLogin: checkIsLogin(),
        openModalEditProfile,
        setOpenModalEditProfile,
        user: {},
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext<TUserContext | null>(UserContext)
  if (!context) throw new Error('useUserContext must be used within UserContextProvider')
  return context
}
