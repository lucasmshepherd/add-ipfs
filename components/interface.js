import Link from 'next/link.js'
import Widget from './widget.js'
import Files from './files.js'
import TerminalStake from './terminal-stake.js'
import TerminalProposals from './terminal-proposals.js'
//import TerminalDelegate from './terminal-delegate.js'
import TerminalSubmit from './terminal-submit.js'
import TerminalPending from './terminal-pending.js'
import TerminalClosed from './terminal-closed.js'
import Terminal from './terminal.js'
import Directory from './directory.js'
import Admin from './admin.js'
import Report from './report.js'
import Social from './social.js'
import MintNft from './mint-nft.js'
import Announcements from './discord-announcements.js'
import Members from './discord-members.js'
import Feed from './feed.js'
import Manifesto from './manifesto.js'
import Roadmap from './upcoming.js'
//import Donations from './donations.js'
import About from './about.js'
import Donations2 from './donations2.js'
import Donater from './donater.js'
//import DonateId from './donate-id.js'
import Deposit, {StakeInfo} from './stake-deposit.js'
import Nfts from './nfts.js'
//import Nfts from './nft-list.js'
import Withdrawal from './stake-withdrawal.js'
import Claim from './stake-claim.js'
import Learn from './learn.js'
import UserInterface, { Pane, PaneRow, Sidebar } from './user-interface.js'

import styles from '../styles/components/interface.module.sass'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('./chart.js'), {
  ssr: false
})

export default function Interface(props) {
  let page = props.page
  

    return (
      <> 
        <UserInterface layout={page}>
          <Pane>
            {/* welcome */} { 
            page == "welcome" &&
              <>
                <PaneRow name="primary">
                  <Widget type="discord" title="anarchy_news_" icon="globe" scroll="true">
                    <Announcements />
                  </Widget> 
                </PaneRow>
                <PaneRow name="secondary">
                  <Widget type="terminal" title="terminal_" icon="triangles">
                    <Terminal />
                  </Widget>
                </PaneRow>
              </>
            } {/* dapp */}
            {(() => {
              if ( page == "stake" || page == "deposit" || page == "withdrawal" || page == "claim" ) {
                return (
                  <>
                    <PaneRow>
                      <Widget type="purchase" icon="triangles">
                        <StakeInfo />
                      </Widget>
                    </PaneRow>
                  </>
                )
              }
            })()}
            {(() => {
              if ( page == "mint" ) {
                return (
                  <>
                    <center className={styles.backlink}><Link href="/my-list">My NFTs</Link></center>
                    <PaneRow name="primary">
                      <Widget type={page} title="nft_tier_1_" icon="triangles">
                        <MintNft tier="1" />
                      </Widget>
                      <Widget type={page} title="nft_tier_2_" icon="triangles">
                        <MintNft tier="2" />
                      </Widget>
                      <Widget type={page} title="nft_tier_3_" icon="triangles">
                        <MintNft tier="3" />
                      </Widget>
                    </PaneRow>
                  </>
                )
              }
            })()}
            {(() => {
              if ( page == "admin" || page == "adprops" ) {
                return (
                  <PaneRow name="primary">
                    <Widget type="report" title="admin_" icon="triangles"  scroll="true">
                      <Admin page={page} />
                    </Widget>
                  </PaneRow>
                )
              }
            })()}
            {(() => {
              if ( page == "nfts" ) {
                return (
                  <PaneRow name="primary">
                    <Widget type={page} title="my_nft_list_" icon="triangles">
                      <Nfts />
                    </Widget>
                  </PaneRow>
                )
              }
            })()}
            {(() => {
              if ( page == "loan" ) {
                return (
                  <PaneRow name="primary">
                    <Widget type={page} title="my_nft_list_" icon="triangles">
                      <Nfts />
                    </Widget>
                  </PaneRow>
                )
              }
            })()}
            {(() => {
              if ( page == "stake" ) {
                return (
                  <>
                    <PaneRow name="primary">
                      <Widget type="terminal" title="staking_" icon="triangles">
                        <TerminalStake page={page} />
                      </Widget>
                    </PaneRow>
                  </>
                )
              } else if ( page == "deposit" ) {
                return (
                  <>
                    <PaneRow name="primary">
                      <Widget type={page} title="staking_" icon="triangles">
                        <Deposit />
                      </Widget>
                    </PaneRow>
                  </>
                )
              } else if ( page == "withdrawal" ) {
                return (
                  <>
                    <PaneRow name="primary">
                      <Widget type={page} title="staking_" icon="triangles">
                        <Withdrawal />
                      </Widget>
                    </PaneRow>
                  </>
                )
              } else if ( page == "claim" ) {
                return (
                  <>
                    <PaneRow name="primary">
                      <Widget type={page} title="staking_" icon="triangles">
                        <Claim />
                      </Widget>
                    </PaneRow>
                  </>
                )
              }
            })()}
            {/* donations */} { 
            page == "donate" &&
              <PaneRow name="primary">
                <Widget type={page} title="donations_" icon="globe" scroll="true" page="true">
                  <Donations2 />
                </Widget>
              </PaneRow>
            } {/* about */} { 
            page == "about" &&
              <PaneRow name="primary">
                <Widget type={page} title="about_" icon="globe" scroll="true" page="true">
                  <About />
                </Widget>
              </PaneRow>
            } {/* manifesto */} { 
            page == "manifesto" &&
              <PaneRow name="primary">
                <Widget type={page} title="manifesto_" icon="triangles" page="true" scroll="true">
                  <Manifesto />
                </Widget>
              </PaneRow>
            } {/* roadmap */} { 
            page == "roadmap" &&
              <PaneRow name="primary">
                <Widget type={page} title="roadmap_" icon="triangles" page="true" scroll="true">
                  <Roadmap />
                </Widget>
              </PaneRow>
            } {/* tv */} { 
            page == "tv" &&
              <PaneRow name="primary">
                <Widget type="files" title="files_" icon="triangles">
                  <Files />
                </Widget>
              </PaneRow>
            } {/* training */} { 
            page == "training" &&
              <PaneRow name="primary">
                <Widget type={page} title="training_" icon="triangles" scroll="true">
                  <Learn />
                </Widget>
              </PaneRow>
            } {/* transition */} { 
            page == "transition" &&
            <PaneRow name="primary">
              <Widget type="video" title="welcome_" icon="triangles">
                <video className={styles.fullscreen} autoPlay muted loop preload="auto">
                  <source src="/assets/video/extrastatic.mp4" type="video/mp4"/>
                  <source src="/assets/video/extrastatic.webm" type="video/webm"/>
                  Your browser does not support the video tag.
                </video>
              </Widget>
            </PaneRow>
            } {/* dapp */} { 
            page == "dapp" &&
              <>
                <PaneRow name="primary">
                  <Widget type={page} title="dapp_" icon="triangles">
                    <Chart data="add price" />
                  </Widget>
                </PaneRow>
                <PaneRow name="secondary">
                  <Widget type="rss" title="rss_feeds_" icon="triangles">
                    <Feed />
                  </Widget>
                </PaneRow>
              </>
            } {/* freedom */} { 
            page == "freedom" &&
              <PaneRow name="primary">
                <Widget type="video" title="freedom_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                  <source src="/assets/video/freedom.mp4" type="video/mp4"/>
                  <source src="/assets/video/freedom.webm" type="video/webm"/>
                  <source src="/assets/video/freedom.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video>
                </Widget>
              </PaneRow>
            } {/* howtobuy */} { 
            page == "howtobuy" &&
              <PaneRow name="primary">
                <Widget type="video" title="howtobuy_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                  <source src="/assets/video/howtobuadd.mp4" type="video/mp4"/>
                  <source src="/assets/video/howtobuyadd.webm" type="video/webm"/>
                  <source src="/assets/video/howtobuyadd.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video>
                </Widget>
              </PaneRow>
            } {/* system */} { 
            page == "system" &&
              <PaneRow name="primary">
                <Widget type="video" title="system_failure_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                  <source src="/assets/video/system_failure.mp4" type="video/mp4"/>
                  <source src="/assets/video/system_failure.webm" type="video/webm"/>
                  <source src="/assets/video/system_failure.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video>
                </Widget>
              </PaneRow>
            } {/* need */} { 
            page == "need" &&
              <PaneRow name="primary">
                <Widget type="video" title="they_need_us_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                  <source src="/assets/video/They-Need-Us.mp4" type="video/mp4"/>
                  <source src="/assets/video/They-Need-Us.webm" type="video/webm"/>
                  <source src="/assets/video/They-Need-Us.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video>
                </Widget>
              </PaneRow>
            }
          </Pane>
          <Sidebar>
            {/* directory */}
            <PaneRow>
              <span className="close-menu">close</span>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            {/* balances */}
            {(() => {
              if ( page == "donateeeee" ) { // Donations
                return (
                  <PaneRow>
                    <Widget type="donations" title="donate_" icon="globe">
                      <Donater />
                    </Widget>
                  </PaneRow>
                )
              } else if ( page == "dapp" ) { // Reporting
                return (
                  <PaneRow name="fill">
                    <Widget type="report" title="report_num_" icon="triangles" page="true" scroll="true">
                      <Report page={page} />
                    </Widget>
                  </PaneRow>
                )
              } else if ( page == "stake" || page == "deposit" || page == "withdrawal" || page == "claim" ) { // Reporting
                return (
                  <PaneRow name="fill">
                    <Widget type="report" title="report_num_" icon="triangles" page="true" scroll="true">
                      <Report page={page} />
                    </Widget>
                  </PaneRow>
                )
              } else if ( page == "freedom" || page == "system" || page == "need" || page == "howtobuy" ) { // Media Files
                return (
                  <PaneRow name="fill">
                    <Widget type="files" title="files_" icon="triangles">
                      <Files />
                    </Widget>
                  </PaneRow>
                )
              } else if ( page == "welcome" ) { 
                return (
                  <PaneRow name="fill"> 
                    {/* Members */}
                    <Widget type="members" title="discord_mem_" icon="triangles" scroll="true">
                      <Members />
                    </Widget>
                  </PaneRow>
                )
              }
            })()}
            {/* Social */}
            {(() => {
              if ( page == "welcome" || page == "training" || page == "nfts" || page == "mint" || page == "tv" || page == "manifesto" || page == "stake" || page == "dapp" || page == "deposit" || page == "withdrawal" || page == "claim" || page == "donate" || page == "about" ) {
                return (
                  <PaneRow>
                    <Widget type="social" title="social_" icon="triangles">
                      <Social />
                    </Widget>
                  </PaneRow>
                )
              }
            })()}
          </Sidebar>
        </UserInterface>
      </>
    )


  if (page == "proposals") {
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">

              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report  page={page} />
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">

              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">

              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
              </Widget>
            </PaneRow>
            <PaneRow name="fill">
              <Widget type="report" title="num_rep_" icon="triangles">
                <Report  page={page} />
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
   
              </Widget>
            </PaneRow>
            <PaneRow>
              <Widget type="menu" title="dir_nav_" icon="triangles">
                <Directory widgets={page} />
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