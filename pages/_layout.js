// components
import Header from '../components/header'
import Footer from '../components/footer'
//import Player from '../components/player'
// state
import { loginUser, logoutUser } from '../store/users/action'
import { playMusic, stopMusic } from '../store/music/action'
import { wrapper } from '../store/store'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/*<Player />*/}
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(loginUser())
  store.dispatch(logoutUser())
  store.dispatch(playMusic())
  store.dispatch(stopMusic())
})