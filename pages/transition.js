import { useRouter } from 'next/router'
// components
import Source from '../components/source.js'
import Interface from '../components/interface.js'
import Delay from '../components/delay.js'
import Widget from '../components/widget.js'
// dApp
import {  useWeb3React } from "@web3-react/core"

const Index = (props) => {
  const {
    active
  } = useWeb3React();

  const router = useRouter()
  return (
    <>
      <canvas id="canvas" className="canvas2"></canvas>
      <Interface page="transition" />
      { active &&
        <Delay waitBeforeShow={2000}>
          <Source />
        </Delay>
      }
      <Delay waitBeforeShow={3000}>
        { active ?
          <div className="granted" onClick={() => router.push('/dapp')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Granted">Access Granted</span>
              <b>Freedom awaits you...</b>
              <div className="button-mono">Enter</div>
            </Widget>
          </div>
        :
          <div className="granted" onClick={() => router.push('/welcome')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Denied"><i>Access Denied</i></span>
              <b>Please connect a wallet...</b>
              <div className="button-mono btn-warning">Go Back</div>
            </Widget>
          </div>
        }
      </Delay>
    </>
  )
}

export default Index