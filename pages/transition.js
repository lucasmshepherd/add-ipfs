import { useRouter } from 'next/router'
// components
import Source from '../components/source.js'
import Interface from '../components/interface.js'
import Delay from '../components/delay.js'
import Widget from '../components/widget.js'
//state
import { useSelector } from 'react-redux'



const Index = (props) => {
  const connected = useSelector((state) => state.users.connected)
  const router = useRouter()
  return (
    <>
      <canvas id="canvas" className="canvas2"></canvas>
      <Interface page="transition" />
      { connected == "true" &&
        <Delay waitBeforeShow={2000}>
          <Source />
        </Delay>
      }
      <Delay waitBeforeShow={3000}>
        { connected == "true" ?
          <div className="granted" onClick={() => router.push('/deposit')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Granted">Access Granted</span>
              <b>Freedom Awaits You.  Click Here.</b>
            </Widget>
          </div>
        :
          <div className="granted" onClick={() => router.push('/welcome')}>
            <Widget type="granted" title="access_verify_" icon="globe" scroll="true">
              <span className="glitchme" data-text="Access Denied"><i>Access Denied</i></span>
              <b>Please connect a wallet.</b>
            </Widget>
          </div>
        }
      </Delay>
    </>
  )
}

export default Index