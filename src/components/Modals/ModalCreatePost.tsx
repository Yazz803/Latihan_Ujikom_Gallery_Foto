/* eslint-disable @next/next/no-img-element */
'use client'

import { useCreatePostContext } from '@/contexts/CreatePostContext'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Modal, Input, Upload, message } from 'antd'
import { createStyles } from 'antd-style'
import Image from 'next/image'
import React from 'react'

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

export default function ModalCreatePost() {
  const {
    openModal,
    setOpenModal,
    loading,
    beforeUploadImage,
    caption,
    handleChangeImage,
    setCaption,
    imageUrl,
    setImageUrl,
  } = useCreatePostContext()

  const uploadButton = (
    <button className="w-full bg-white" style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  )

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
      height: 400,
      border: '1px solid #262626',
      //   boxShadow: '0 0 30px #999',
    },
  }

  const closeModal = () => {
    setOpenModal(false)
    setImageUrl(undefined)
    setCaption('')
  }

  const handleCreatePost = async () => {
    if (imageUrl === undefined) {
      return message.error('Please upload an image')
    }
    const data = {
      image: imageUrl,
      caption,
    }
    console.log(data)
  }

  return (
    <Modal
      title={null}
      centered
      open={openModal}
      onCancel={() => closeModal()}
      footer={null}
      width={700}
      classNames={classNames}
      styles={modalStyles}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-7 border-r border-stone-800">
          <Upload
            name="avatar"
            listType="picture-card"
            className="text-white !w-full !h-[380px]"
            showUploadList={false}
            action="http://localhost:3000/"
            beforeUpload={beforeUploadImage}
            onChange={handleChangeImage}
          >
            {imageUrl ? (
              <>
                {loading ? (
                  uploadButton
                ) : (
                  <img src={imageUrl} alt="Image Post" style={{ width: '100%' }} />
                )}
              </>
            ) : (
              uploadButton
            )}
          </Upload>
          {/* <Image
            src="/images/project1.png"
            width={750}
            height={750}
            alt={'asd'}
            className="w-full h-[380px] object-contain bg-black rounded-md"
          /> */}
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

          <div className="">
            <Input.TextArea
              autoSize={{ minRows: 1, maxRows: 6 }}
              className="bg-black hover:bg-black focus:bg-black border-none !text-white placeholder:text-secondary"
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={2200}
            />
            <p className="text-secondary flex justify-end text-xs mt-3">{caption.length}/2,200</p>
            <div className="mx-4">
              <button
                onClick={() => handleCreatePost()}
                className="w-full  mt-4 font-medium text-sm rounded-md bg-grey-0 hover:bg-grey-dark px-4 py-1"
              >
                Share your image
              </button>
              <button
                onClick={() => closeModal()}
                className="w-full text-red-500 mt-4 font-semibold text-sm rounded-md bg-grey-0 hover:bg-grey-dark px-4 py-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
