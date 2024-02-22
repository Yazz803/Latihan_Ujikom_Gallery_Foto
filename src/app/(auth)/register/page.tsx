'use client'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (
    <section className="max-w-[500px] mx-auto px-4 mt-10 border border-grey-0 rounded-lg p-10">
      <h3 className="text-3xl font-semibold text-center mt-4 mb-4">Instagram Clone</h3>
      <p className="font-semibold text-center mb-8">
        Sign up to see photos and videos from your friends.
      </p>
      <Form layout="vertical" className="w-[80%] mx-auto">
        <Form.Item label={null}>
          <Input
            className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
            placeholder="Masukan email"
          />
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
          <Input
            type="password"
            className="bg-grey-0 placeholder:text-white focus:bg-grey-0  hover:bg-grey-0 border-none text-white mb-3 w-full"
            placeholder="Masukan password"
          />
        </Form.Item>
        <Button type="primary" block className="border border-grey-0">
          Sign Up
        </Button>
      </Form>

      <div className="border-t border-grey-0 my-10"></div>

      <p className="text-center">
        Sudah punya akun?{' '}
        <Link href="/#" className="text-primary cursor-pointer">
          Login
        </Link>
      </p>
    </section>
  )
}
