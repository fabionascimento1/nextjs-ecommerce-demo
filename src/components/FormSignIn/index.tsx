import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => {
  return (
    <FormWrapper>
      <form>
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
        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth>
          sign in now
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/signup" passHref>
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
