'use client'

import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'antd'
import Image from 'next/image'
import React from 'react'
import ModalEditProfile from '../Modals/ModalEditProfile'
import { useUserContext } from '@/contexts/UserContext'

export default function ProfileInfo() {
  const { setOpenModalEditProfile } = useUserContext()
  return (
    <div className="flex items-start">
      <Image
        src="/images/PhotoProfile.jpg"
        width={250}
        height={250}
        alt="PP User"
        className="mx-20 w-[150px] h-[150px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <p className="me-4 text-xl">_akbyzd</p>
          <ModalEditProfile />
          <button
            onClick={() => setOpenModalEditProfile(true)}
            className="font-medium text-sm rounded-md bg-grey-0 hover:bg-grey-dark px-4 py-1"
          >
            Edit Profile
          </button>
          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: <span className="text-red-600 font-semibold">Logout</span>,
                },
              ],
            }}
            trigger={['click']}
            placement="bottomLeft"
            arrow={{ pointAtCenter: true }}
          >
            <FontAwesomeIcon icon={faGear} className="text-2xl text-white cursor-pointer" />
          </Dropdown>
        </div>

        <div className="text-[15px] flex gap-5 items-center">
          <p className="">
            <strong>33</strong> posts
          </p>
          <p className="">
            <strong>187</strong> followers
          </p>
          <p className="">
            <strong>342</strong> following
          </p>
        </div>

        <div className="text-[15px] flex flex-col gap-1">
          <p className="font-semibold text-[13px]">Muhammad Yazid Akbar</p>
          <p className="text-[13px]">Bisa karena terbiasa</p>
        </div>
      </div>
    </div>
  )
}
