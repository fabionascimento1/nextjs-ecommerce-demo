import Auth from 'templates/Auth'
import Meta from 'components/MetaContent'
import FormSignUp from 'components/FormSignUp'

export default function SignIn() {
  return (
    <>
      <Meta
        title="Sign-Up | Ecommerce Next React Demo"
        seoDescription="Ecommerce Next React Demo"
        seoTitle="Ecommerce Next React Demo"
      />
      <Auth title="Sign Up">
        <FormSignUp />
      </Auth>
    </>
  )
}
