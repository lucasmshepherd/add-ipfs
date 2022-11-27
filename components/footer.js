import { useWeb3React } from "@web3-react/core";
// components
import Container from './container.js'
// style
import styles from '../styles/components/footer.module.sass'

export default function Footer() {
  const {
    active
  } = useWeb3React();
  return (
    <>
      <footer className={styles.footer} data-connected={ active && "true"}>
        <Container>
          <a href="https://etherscan.io/token/0x6542c8f90915a57314f4167b81851a3cd731c6e2" target="_blank" rel="noreferrer"><b>Token_Contract</b>0x6542c8f90915a57314f4167b81851a3cd731c6e2</a>
        </Container>
      </footer>
    </>
  )
}