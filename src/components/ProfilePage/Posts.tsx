'use client'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input, Modal } from 'antd'
import { createStyles } from 'antd-style'
import Image from 'next/image'
import React, { useState } from 'react'

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: '#000',
    color: '#FFF',
    padding: 0,
  },
  'my-modal-mask': {
    // boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    background: '#000',
    color: '#FFF',
    border: '1px solid #333',
  },
}))

export default function Posts() {
  const [open, setOpen] = useState(false)
  const { styles } = useStyle()
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  }

  const modalStyles = {
    header: {
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      innerHeight: '70%',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      padding: 10,
      background: '#000',
      height: 600,
      border: '1px solid #262626',
      //   boxShadow: '0 0 30px #999',
    },
  }
  const dataPosts = [
    {
      id: 1,
      image: '/images/project1.png',
      caption: 'Caption 1',
    },
    {
      id: 2,
      image: '/images/project2.png',
      caption: 'Caption 2',
    },
    {
      id: 3,
      image: '/images/project3.png',
      caption: 'Caption 3',
    },
    {
      id: 4,
      image: '/images/project4.png',
      caption: 'Caption 4',
    },
    {
      id: 5,
      image: '/images/project5.png',
      caption: 'Caption 5',
    },
  ]
  return (
    <section>
      <div className="grid grid-cols-3 gap-2">
        <Modal
          title={null}
          centered
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
          width={1100}
          classNames={classNames}
          styles={modalStyles}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-7 border-r border-stone-800">
              <Image
                src="/images/project1.png"
                width={750}
                height={750}
                alt={'asd'}
                className="w-full h-[580px] object-contain bg-black rounded-md"
              />
            </div>

            <div className="col-span-5">
              <div className="border-b border-stone-800">
                <div className="p-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/PhotoProfile.jpg"
                      width={250}
                      height={250}
                      alt="PP User"
                      className="w-[35px] h-[35px] rounded-full object-cover"
                    />
                    <p className="font-semibold truncate">_akbyzd</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-stone-800 h-[330px] overflow-y-scroll">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/images/PhotoProfile.jpg"
                      width={250}
                      height={250}
                      alt="PP User"
                      className="w-[35px] h-[35px] rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold truncate">
                        _akbyzd{' '}
                        <span
                          className="font-normal text-wrap break-words"
                          style={{ wordBreak: 'break-word' }}
                        >
                          Ntar kalo ada yang mau connect ke database punya gua, dm aja, asal jangan
                          diutak atik aja database gua awokaowka
                        </span>
                      </p>
                      <p className="text-secondary text-xs mt-2">1 hari yg lalu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-stone-800">
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <FontAwesomeIcon icon={faHeart} className="text-2xl text-white" />
                      <FontAwesomeIcon icon={faComment} className="text-2xl text-white" />
                      <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-white" />
                    </div>
                    <FontAwesomeIcon icon={faBookmark} className="text-2xl text-white" />
                  </div>
                  <div className="mt-3">
                    <p>
                      Liked by <span className="font-semibold">yazidakbar</span> and{' '}
                      <span className="font-semibold">31 others</span>
                    </p>
                    <p className="text-secondary text-xs">December 16, 2023</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Input.TextArea
                  autoSize={{ minRows: 1, maxRows: 2 }}
                  className="bg-black hover:bg-black focus:bg-black border-none text-white placeholder:text-secondary"
                  placeholder="Add a comment..."
                />
                <p className="text-primary font-semibold cursor-pointer">Post</p>
              </div>
            </div>
          </div>
        </Modal>
        {dataPosts.map((post, i) => (
          <div key={i} className="relative" onClick={() => setOpen(true)}>
            <div className="flex justify-center items-center gap-4 absolute top-0 bottom-0 left-0 right-0 opacity-0 hover:opacity-100 hover:bg-black/30 cursor-pointer">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faHeart} className="text-xl text-white" />
                <p className="font-semibold">32</p>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faComment} className="text-xl text-white" />
                <p className="font-semibold">0</p>
              </div>
            </div>
            <Image
              src={post.image}
              width={750}
              height={750}
              alt={post.caption}
              className="w-full h-[250px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
