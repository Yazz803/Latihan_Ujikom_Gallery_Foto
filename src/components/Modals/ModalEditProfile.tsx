/* eslint-disable @next/next/no-img-element */
'use client'

import { useAuthContext } from '@/contexts/AuthContext'
import { useUserContext } from '@/contexts/UserContext'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal, Upload, UploadProps, message } from 'antd'
import { createStyles } from 'antd-style'
import Link from 'next/link'
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

export default function ModalEditProfile() {
  const { openModalEditProfile, setOpenModalEditProfile } = useUserContext()

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

  const closeModal = () => {
    setOpenModalEditProfile(false)
  }

  const props: UploadProps = {
    listType: 'picture',
    maxCount: 1,
  }
  return (
    <Modal
      title={null}
      centered
      open={openModalEditProfile}
      onCancel={() => closeModal()}
      footer={null}
      width={400}
      classNames={classNames}
      styles={modalStyles}
    >
      <div>
        <h3 className="text-3xl font-semibold text-center mt-4 mb-8">Edit Profile</h3>
        <Form layout="vertical" className="w-[80%] mx-auto">
          <Form.Item label={null} name="img">
            <Upload
              {...props}
              className="block w-full"
              //   defaultFileList={[
              //     {
              //       uid: dataTeams[field.name].img,
              //       name: dataTeams[field.name].img,
              //       status: 'done',
              //       url: showImage(dataTeams[field.name].img),
              //     },
              //   ]}
              accept="image/*"
              onRemove={(file) => {
                console.log(file)
                message.warning('Image tidak bisa dihapus')
                return false
              }}
              onChange={(info) => {
                console.log(info)
              }}
              customRequest={async ({ file, onSuccess, onError }: any) => {
                // console.log(fileList.length)
                // console.log(maxCount)
                // const formData: any = new FormData()
                // formData.append('img[]', file)
                // const res = await apiUpload.putRequest(
                //   `${ApiEndPoints.teamsUpdateImg}/${dataTeams[field.name].id}`,
                //   formData,
                // )
                // // console.log(res)
                // if (res.success) {
                //   message.success(res.message ?? 'Berhasil Upload Gambar')
                //   onSuccess(res, file)
                // } else {
                //   onError(res)
                //   message.error(res.message ?? 'Gagal upload gambar')
                // }
              }}
            >
              <Button className="w-full" icon={<UploadOutlined />}>
                Upload Image
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label={null}>
            <Input
              className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
              placeholder="Masukan nama"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Input
              className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
              placeholder="Masukan username"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Input.TextArea
              className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
              placeholder="Masukan deskripsi"
            />
          </Form.Item>
          <Button type="primary" block className="border border-white">
            Edit Profile
          </Button>
        </Form>
      </div>
    </Modal>
  )
}
