/* eslint-disable @next/next/no-img-element */
'use client'

import { useAuthContext } from '@/contexts/AuthContext'
import { Button, Form, Input, Modal } from 'antd'
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

export default function ModalLogin() {
  const { openModalLogin, setOpenModalLogin } = useAuthContext()

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
    setOpenModalLogin(false)
  }

  return (
    <Modal
      title={null}
      centered
      open={openModalLogin}
      onCancel={() => closeModal()}
      footer={null}
      width={400}
      classNames={classNames}
      styles={modalStyles}
    >
      <div>
        <h3 className="text-3xl font-semibold text-center mt-4 mb-8">Instagram Clone</h3>
        <Form layout="vertical" className="w-[80%] mx-auto">
          <Form.Item label={null}>
            <Input
              className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
              placeholder="Masukan email"
            />
          </Form.Item>
          <Form.Item label={null}>
            <Input
              type="password"
              className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
              placeholder="Masukan password"
            />
          </Form.Item>
          <Button type="primary" block className="border border-white">
            Login
          </Button>
        </Form>

        <div className="border-t border-white my-10"></div>

        <p className="text-center">
          Belum punya akun?{' '}
          <Link href="/register" className="text-primary cursor-pointer">
            Register
          </Link>
        </p>
      </div>
    </Modal>
  )
}
