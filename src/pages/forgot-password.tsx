import Auth from 'templates/Auth'
import Meta from 'components/MetaContent'
import ForgotPassword from 'components/ForgotPassword'

export default function ForgotPass() {
  return (
    <>
      <Meta
        title="Forgot Password | Ecommerce Next React Demo"
        seoDescription="Ecommerce Next React Demo"
        seoTitle="Ecommerce Next React Demo"
      />
      <Auth title="Forgot Password">
        <ForgotPassword />
      </Auth>
    </>
  )
}
