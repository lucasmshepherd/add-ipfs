import { loginUser } from '../store/users/action'
import { wrapper } from '../store/store'
import Interface from '../components/interface.js'

const Index = (props) => {
  return <Interface page="need" />
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
})

export default Index