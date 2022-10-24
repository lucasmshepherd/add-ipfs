import { useRouter } from 'next/router'
import Source from '../components/source.js'
import Interface from '../components/interface.js'
import Delay from '../components/delay.js'

const Index = (props) => {
  const router = useRouter()
  return (
    <>
      <canvas id="canvas" className="canvas2"></canvas>
      <Interface page="transition" />
      <Delay waitBeforeShow={2000}>
        <Source />
      </Delay>
      <Delay waitBeforeShow={4000}>
        <div className="granted" onClick={() => router.push('/deposit')}>
          <span className="glitchme" data-text="Access Granted">Access Granted</span>
          <b>Freedom Awaits You.  Click Here.</b>
        </div>
      </Delay>
    </>
  )
}

export default Index