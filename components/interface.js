import Widget from './widget.js'
import Files from './files.js'
import TerminalStake from './terminal-stake.js'
import TerminalProposals from './terminal-proposals.js'
import TerminalDelegate from './terminal-delegate.js'
import TerminalSubmit from './terminal-submit.js'
import TerminalPending from './terminal-pending.js'
import TerminalClosed from './terminal-closed.js'
import Terminal from './terminal.js'
import Directory from './directory.js'
import Report from './report.js'
import Social from './social.js'
import Visualizer from './visualizer.js'
import MintNft from './mint-nft.js'
import News from './news.js'
import Online from './online.js'
import Page from './page.js'
import Learn from './learn.js'
import UserInterface, { Pane, PaneRow, Sidebar } from './user-interface.js'

//import styles from '../styles/components/interface.module.sass'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('./chart.js'), {
  ssr: false
});

export default function Interface(props) {
  let page = props.page
  
  if (page == "welcome") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type="terminal" title="terminal_" icon="globe">
                <Terminal />
              </Widget>
            </PaneRow>
            <PaneRow name="secondary">
              <Widget type="terminal" title="discord?_" icon="arc">
                <i>connect to discord API<br/>BSaaz73pJD</i>
              </Widget>
              <Widget type="files" title="dir_" icon="arc">
                <Files />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <span className="close-menu">close</span>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="triangles">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="social" title="social_" icon="triangles">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "tv") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type="files" title="files_" icon="triangles">
                <Files />
              </Widget>
            </PaneRow>

          </Pane>
          <Sidebar>
            <PaneRow name="fill">
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "freedom") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type="video" title="welcome_" icon="triangles">
              <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                <source src="/assets/video/freedom.mp4" type="video/mp4"/>
                <source src="/assets/video/freedom.webm" type="video/webm"/>
                <source src="/assets/video/freedom.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
              </video>
              </Widget>
            </PaneRow>

          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="files" title="files_" icon="triangles">
                <Files />
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "manifesto") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="manifesto_" icon="triangles">
                <Page />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow name="fill">
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "training") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="training_" icon="triangles">
                <Learn />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow name="fill">
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="social" title="social_" icon="globe">
                <Social />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "mint") {
    return (
      <> 
        <audio id="mech-glitch" preload="auto">
          <source src="/assets/audio/gizmo-glitch.ogg" type="audio/ogg"/>
          <source src="/assets/audio/gizmo-glitch.aac" type="audio/aac"/>
          <source src="/assets/audio/gizmo-glitch.mp3" type="audio/mpeg"/>
          <source src="/assets/audio/gizmo-glitch.m4a" type="audio/mp4"/>
          Your browser does not support the audio tag.
        </audio>
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="anarchy_nft_t_1_" icon="triangles">
                <MintNft tier="1" />
              </Widget>
              <Widget type={page} title="anarchy_nft_t_2_" icon="triangles">
                <MintNft tier="2" />
              </Widget>
              <Widget type={page} title="anarchy_nft_t_3_" icon="triangles">
                <MintNft tier="3" />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "dapp") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <Chart data="add price" />
              </Widget>
            </PaneRow>
            <PaneRow name="secondary">
              <Widget type="discord" title="recent_news_" icon="triangles">
                <News />
              </Widget>
              <Widget type="discord" title="online_mem_" icon="triangles">
                <Online />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "stake") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalStake page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "proposals") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalProposals page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "delegate") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalDelegate page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "submit") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalSubmit page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "pending") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalPending page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "closed") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type={page} title="dapp_" icon="triangles">
                <TerminalClosed page={page} />
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

  else if (page == "transition") {
    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            <PaneRow name="primary">
              <Widget type="video" title="welcome_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} autoPlay muted preload="auto">
                  <source src="/assets/video/extrastatic.mp4" type="video/mp4"/>
                  <source src="/assets/video/extrastatic.webm" type="video/webm"/>
                  Your browser does not support the video tag.
                </video>
              </Widget>
            </PaneRow>
          </Pane>
          <Sidebar>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report />
              </Widget>
            </PaneRow>
          </Sidebar>
        </UserInterface>
      </>
    )
  }

}