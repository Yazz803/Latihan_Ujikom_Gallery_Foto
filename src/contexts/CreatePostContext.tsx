'use client'
import { message } from 'antd'
import { GetProp, UploadProps } from 'antd/lib'
import React, { createContext, useContext, useState } from 'react'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

type TCreatePostContext = {
  openModal: boolean
  setOpenModal: (value: boolean) => void
  caption: string
  setCaption: (value: string) => void
  imageUrl?: string
  setImageUrl: (value: string | undefined) => void
  loading: boolean
  setLoading: (value: boolean) => void
  handleChangeImage: UploadProps['onChange']
  beforeUploadImage: UploadProps['beforeUpload']
}

export const CreatePostContext = createContext<TCreatePostContext | null>(null)

export default function CreatePostContextProvider({ children }: { children: React.ReactNode }) {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [caption, setCaption] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  const beforeUploadImage = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChangeImage: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  return (
    <CreatePostContext.Provider
      value={{
        openModal,
        setOpenModal,
        caption,
        setCaption,
        imageUrl,
        setImageUrl,
        loading,
        setLoading,
        handleChangeImage,
        beforeUploadImage,
      }}
    >
      {children}
    </CreatePostContext.Provider>
  )
}

export function useCreatePostContext() {
  const context = useContext<TCreatePostContext | null>(CreatePostContext)
  if (!context)
    throw new Error('useCreatePostContext must be used within CreatePostContextProvider')
  return context
}
