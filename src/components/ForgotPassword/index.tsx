import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FormLink, FormWrapper, FormLoading, FormError } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const ForgotPassword = () => {
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
        <Link href="/signin" passHref>
          <S.ForgotPassword>sign in</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth>
          forgot password
        </Button>
      </form>
    </FormWrapper>
  )
}

export default ForgotPassword
