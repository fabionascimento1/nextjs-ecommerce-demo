import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from '@styled-icons/material-outlined'

import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignUp = () => {
  return (
    <FormWrapper>
      <form>
        <TextField
          name="name"
          placeholder="Name"
          type="text"
          error=""
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error=""
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error=""
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          error=""
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth>
          sign up now
        </Button>

        <FormLink>
          Você já possui uma conta?{' '}
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
