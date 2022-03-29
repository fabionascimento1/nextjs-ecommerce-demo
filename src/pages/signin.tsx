import Auth from 'templates/Auth'
import Meta from 'components/MetaContent'
import FormSignIn from 'components/FormSignIn'

export default function SignIn() {
  return (
    <>
      <Meta
        title="Login | Ecommerce Next React Demo"
        seoDescription="Ecommerce Next React Demo"
        seoTitle="Ecommerce Next React Demo"
      />
      <Auth title="Sign In">
        <FormSignIn />
      </Auth>
    </>
  )
}
