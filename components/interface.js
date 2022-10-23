import { useState, useEffect } from 'react'
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
import Announcements from './discord-announcements.js'
import Members from './discord-members.js'
import Feed from './feed.js'
import Manifesto from './manifesto.js'
import Donations from './donations.js'
import Donater from './donater.js'
import Deposit from './stake-deposit.js'
import Withdrawal from './stake-withdrawal.js'
import Claim from './stake-claim.js'
import Learn from './learn.js'
import UserInterface, { Pane, PaneRow, Sidebar } from './user-interface.js'
// state
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, logoutUser } from '../store/users/action'

//import styles from '../styles/components/discord.module.sass'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('./chart.js'), {
  ssr: false
});

export default function Interface(props) {
  const dispatch = useDispatch()
  const connected = useSelector((state) => state.users.connected)
  let page = props.page
  let id = "0x42881D5F526406032A537A51EC9A1513BAD9A5E5"
  
  //if (page == "welcome") {
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
                        { connected == "true" ?
                            <ul className="clean-list">
                              <li><span>staked_add:</span><span>2,000,000<sup>.00</sup></span></li>
                              <hr />
                              <li><span>current_cycle:</span><span>+1,452<sup>.12</sup></span></li>
                              <li><span>claimable_add:</span><span>11,092<sup>.54</sup></span></li>
                            </ul>
                          :
                          <div>ERROR: No wallet found</div>
                        }
                      </Widget>
                    </PaneRow>
                  </>
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
                  <Donations />
                </Widget>
              </PaneRow>
            } {/* manifesto */} { 
            page == "manifesto" &&
              <PaneRow name="primary">
                <Widget type={page} title="manifesto_" icon="triangles" page="true">
                  <Manifesto />
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
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} autoPlay muted preload="auto">
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
                <Widget type="video" title="welcome_" icon="triangles">
                <video style={{ width: '100%', height: '100%', position: 'absolute' }} controls autoPlay preload="auto">
                  <source src="/assets/video/freedom.mp4" type="video/mp4"/>
                  <source src="/assets/video/freedom.webm" type="video/webm"/>
                  <source src="/assets/video/freedom.ogg" type="video/ogg"/>
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
              if ( page == "donate" ) { // Donations
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
              } else if ( page == "freedom" ) { // Media Files
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
              if ( page == "welcome" || page == "training" || page == "tv" || page == "manifesto" || page == "stake" || page == "deposit" || page == "withdrawal" || page == "claim" ) {
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

  if (page == "mint") {
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
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

  if (page == "stake") {
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
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
                <Visualizer />
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
                <Visualizer />
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
                <Visualizer />
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
            <PaneRow name="small">
              <Widget type="audio" title="freq_v_" icon="arc">
                <Visualizer />
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

}