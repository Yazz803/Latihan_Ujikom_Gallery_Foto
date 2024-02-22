'use client'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from 'antd'
import Image from 'next/image'
import React from 'react'
import ModalCreatePost from './Modals/ModalCreatePost'
import { useCreatePostContext } from '@/contexts/CreatePostContext'
import { useUserContext } from '@/contexts/UserContext'
import { useAuthContext } from '@/contexts/AuthContext'
import ModalLogin from './Modals/ModalLogin'
import Link from 'next/link'

export default function Sidebar() {
  const data = [
    {
      name: 'User 1',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Yazid Akbar',
      img: '/images/icon-user.png',
    },
    {
      name: 'Sutaro Putra',
      img: '/images/icon-user.png',
    },
    {
      name: 'Khairul Rasyid',
      img: '/images/icon-user.png',
    },
    {
      name: 'Mulki Hafiz',
      img: '/images/icon-user.png',
    },
    {
      name: 'Djalu Galang',
      img: '/images/icon-user.png',
    },
    {
      name: 'Siapa yah',
      img: '/images/icon-user.png',
    },
  ]

  const { setOpenModal } = useCreatePostContext()
  const { setOpenModalLogin } = useAuthContext()
  const { isLogin } = useUserContext()

  return (
    <section className="px-5 py-8 fixed top-0 bottom-0 border-r-[0.5px] border-stone-700 w-60">
      <Link href="/" className="font-semibold mb-10 block">
        IG Ceritanya
      </Link>

      <div className="h-[60%] overflow-y-scroll">
        <Input
          className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
          placeholder="Search user..."
        />
        {data.map((item, i) => (
          <Link
            href="/_akbyzd"
            key={i}
            className="flex gap-3 mb-3 hover:bg-white/10 rounded-md py-2 px-1 cursor-pointer"
          >
            <Image
              src={item.img}
              width={250}
              height={250}
              alt={item.name}
              className="w-[25px] h-[25px] border rounded-full object-cover"
            />
            <p className="font-light truncate">{item.name}</p>
          </Link>
        ))}
      </div>

      {isLogin && (
        <React.Fragment>
          <ModalCreatePost />
          <div
            className="flex items-center gap-3 py-1 rounded-md mt-8 px-1 hover:bg-white/10 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <FontAwesomeIcon icon={faSquarePlus} className="ms-1 text-2xl text-white" />
            <p className="font-light truncate">Create</p>
          </div>
          <div className="flex gap-3 mt-8 px-1">
            <Image
              src="/images/PhotoProfile.jpg"
              width={250}
              height={250}
              alt="PP User"
              className="w-[25px] h-[25px] border rounded-full object-cover"
            />
            <p className="font-semibold truncate">Profile</p>
          </div>
        </React.Fragment>
      )}

      {!isLogin && (
        <React.Fragment>
          <ModalLogin />
          <div
            className="flex items-center gap-3 py-1 rounded-md mt-8 px-1 hover:bg-white/10 cursor-pointer"
            onClick={() => setOpenModalLogin(true)}
          >
            <p className="font-light truncate">Login</p>
          </div>
        </React.Fragment>
      )}
    </section>
  )
}
