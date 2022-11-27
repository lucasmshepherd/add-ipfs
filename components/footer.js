// components
import Container from './container.js'
// style
import styles from '../styles/components/footer.module.sass'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <a href="https://etherscan.io/token/0x6542c8f90915a57314f4167b81851a3cd731c6e2" target="_blank" rel="noreferrer"><b>Token Contract</b>0x6542c8f90915a57314f4167b81851a3cd731c6e2</a>
        </Container>
      </footer>
    </>
  )
}