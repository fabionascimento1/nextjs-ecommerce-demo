import Profile from 'templates/Profile'

import mockOrdersList from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

export default function ProfileOrders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockOrdersList
    }
  }
}
