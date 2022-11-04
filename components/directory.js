import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'

import styles from '../styles/components/directory.module.sass'
import {  useWeb3React } from "@web3-react/core";

export default function Directory(props) {
  const {
    active
  } = useWeb3React();

  const dispatch = useDispatch()
  const connected = active
  const widgets = props.widgets

  const folder = (<svg className="icon-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><g><rect x="15" y="30" width="30" height="15"/><rect y="14.99" width="15" height="105.01"/><rect x="45" y="45" width="75" height="15"/><rect x="120" y="60" width="15" height="60"/><rect x="15" y="120" width="105" height="15"/></g><g><rect x="15" width="30" height="15"/><rect x="45" y="15" width="75" height="15"/><rect x="120" y="30" width="15" height="30"/></g></svg>)
  const arrow = (<svg className="icon-arrow" width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M5.21793 0.969727V2.83831L3.04271 4.12316H9.80615C9.80615 4.11741 9.80615 4.11486 9.80615 4.11486L9.81348 5.75824H3.04597L5.21467 7.04118V8.96973L0.129678 5.76654V4.11295L5.21793 0.969727Z" /></svg>)
  const exlink = (<svg className="icon-xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="120" width="15" height="15"/><rect x="15" y="105" width="15" height="15"/><rect x="30" y="90" width="15" height="15"/><rect x="45" y="75" width="15" height="15"/><rect x="60" y="60" width="15" height="15"/><rect x="75" y="45" width="15" height="15"/><rect x="90" y="30" width="15" height="15"/><polygon points="135 0 135 60 120 60 120 30 105 30 105 14.99 75 14.99 75 0 135 0"/></svg>)
  const barrow = (<svg className="icon-barrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><polygon points="0 120 0 135 135 135 135 0 119.94 0 119.94 120 60 120 60 75 45 75 45 90 30 90 30 105 15 105 15 120 0 120"/></svg>)
  const down = (<svg className="icon-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><polygon points="135 120 135 135 0 135 0 0 15.06 0 15.06 120 75 120 75 75 90 75 90 90 105 90 105 105 120 105 120 120 135 120"/></svg>)
  const wallet = (<svg className="icon-wallet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect x="120" y="30" width="15" height="90"/><polygon points="119.48 120 119.48 135 15 135 15 120 90 120 90 45 105 45 105 120 119.48 120"/><polygon points="90 30 90 45 15 45 15 120 0 120 0 30 15 30 15 15 30 15 30 30 90 30"/><rect x="30" width="75" height="15"/><rect x="105" y="15" width="15" height="15"/></svg>)
  const locked = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 135"><path d="M90,45.1V15h-15v30.1H30V15H15v30.1H0v89.9H105V45.1h-15Zm0,74.9H15V60H90v60Z"/><rect x="29.82" width="45.18" height="15"/><rect x="45" y="75" width="15" height="30"/></svg>)
  const unlocked = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="15" width="15" height="30"/><path d="M75,45.1V15h-15v30.1H30v89.9h105V45.1h-60Zm45,74.9H45V60H120v60Z"/><rect x="14.82" width="45.18" height="15"/><rect x="75" y="75" width="15" height="30"/></svg>)
  const num = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="30" width="15" height="75"/><rect x="30.62" width="74.38" height="15"/><rect x="120" y="30" width="15" height="75"/><rect x="30.34" y="120" width="74.66" height="15"/><rect x="105" y="105" width="15" height="15"/><rect x="105" y="15" width="15" height="15"/><rect x="15" y="15" width="15" height="15"/><rect x="15" y="105" width="15" height="15"/><rect x="45" y="45" width="15" height="45"/><rect x="75" y="45" width="15" height="45"/><rect x="60" y="75" width="15" height="15"/><rect x="60" y="45" width="15" height="15"/><rect x="30" y="45" width="15" height="15"/><rect x="45" y="30" width="15" height="15"/><rect x="75" y="30" width="15" height="15"/><rect x="90" y="45" width="15" height="15"/><rect x="90" y="75" width="15" height="15"/><rect x="75" y="90" width="15" height="15"/><rect x="45" y="90" width="15" height="15"/><rect x="30" y="75" width="15" height="15"/></svg>)

  if(widgets == 'freedom') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>
          <li data-current={ widgets == "home" ? 'true' : 'false' }>
            <Link className="anchor" href="/tv">
              <a><span>back</span>{arrow}</a>
            </Link>
          </li>
        </ul>
      </>
    )
  }

  else if (widgets == 'mint' || widgets == 'nfts') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="/welcome">
                <a><span>root</span>{arrow}</a>
            </Link>
          </li>
          
          <li data-connected={connected} data-current={ widgets == "mint" ? 'true' : 'false' }>
            <Link className="anchor" href="/mint">
              <a>{folder}<span>mint_nft</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "nfts" ? 'true' : 'false' }>
            <Link className="anchor" href="/my-list">
              <a>{down}<span>my_list</span>{arrow}</a>
            </Link>
          </li>

          {/*<li data-child="true" data-current={ widgets == "stake-nft" ? 'true' : 'false' }>
            <Link className="anchor" href="/stake-nft">
              <a>{down}<span>stake</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "loan" ? 'true' : 'false' }>
            <Link className="anchor" href="/loan">
              <a>{down}<span>loan</span>{arrow}</a>
            </Link>
    </li>*/}

        </ul>
      </>
    )
  }

  else if ( widgets == 'dapp' || widgets == 'stake' || widgets == 'deposit' || widgets == 'withdrawal' || widgets == 'claim') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-connected={connected} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="/dapp">
              <a><span>dashboard</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "stake" ? 'true' : 'false' }>
            <Link className="anchor" href="/deposit">
              <a>{folder}<span>stake_ADD</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "deposit" ? 'true' : 'false' }>
            <Link className="anchor" href="/deposit">
              <a>{down}<span>deposit</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "claim" ? 'true' : 'false' }>
            <Link className="anchor" href="/claim">
              <a>{down}<span>claim_reward</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "withdrawal" ? 'true' : 'false' }>
            <Link className="anchor" href="/withdrawal">
              <a>{down}<span>withdrawal</span>{arrow}</a>
            </Link>
          </li>

        </ul>
      </>
    )
  }

  else if (widgets == 'proposals' || widgets == 'delegate' || widgets == 'pending' || widgets == 'closed' || widgets == 'submit') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="/dapp">
                <a><span>back</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "proposals" ? 'true' : 'false' }>
            <Link className="anchor" href="/proposals">
              <a>{folder}<span>proposals</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "submit" ? 'true' : 'false' }>
            <Link className="anchor" href="/submit">
              <a>{down}<span>submit</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "pending" ? 'true' : 'false' }>
            <Link className="anchor" href="/pending">
              <a>{down}<span>pending</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "closed" ? 'true' : 'false' }>
            <Link className="anchor" href="/closed">
              <a>{down}<span>closed</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "delegate" ? 'true' : 'false' }>
            <Link className="anchor" href="/delegate">
              <a>{down}<span>delegate_votes</span>{arrow}</a>
            </Link>
          </li>

        </ul>
      </>
    )
  }

  else if (widgets == 'transition') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
                <a>{folder}<span>rXoaat</span>{arrow}</a>
            </Link>
          </li>

          <li data-connected={active} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{folder}<span>da-p1p%</span>{arrow}</a>
            </Link>
          </li>

          <li data-connected={active} data-current={ widgets == "mint" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{folder}<span>3min$t_nf-t!</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "manifesto" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{folder}<span>manF_if7es11to</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "tv" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{folder}<span>ana--rchiK#3st_tv</span>{arrow}</a>
            </Link>
          </li>

          <li>
            <a href="https://anarchistdevelopmentdao.gitbook.io/anarchist-development-dao/" rel="noreferrer" target="_blank">
              <span>fa*$q.gitas23~book</span>
            </a>
          </li>

        </ul>
      </>
    )
  }

  else {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li className={styles.title}>
            <span>anarchy dapp{active ? unlocked : locked}</span>
          </li>

          <li data-connected={connected} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="/transition">
              <a><span>stake_and_vote</span>{arrow}</a>
            </Link>
          </li>

          {/*<li data-connected={connected} data-current={ widgets == "mint" ? 'true' : 'false' }>
            <Link className="anchor" href="/mint">
              <a><span>_mint_nft{connected ? unlocked : locked}</span>{arrow}</a>
            </Link>
          </li>*/}

          {(() => {
            if ( widgets != "nfts" ) {
              return (
                <>
                  <li className={styles.title}>
                    <span>anarchist dao</span>
                  </li>

                  <li data-current="false">
                    <Link className="anchor" href="/donate">
                      <a target="_blank" rel="nofollower" href="assets/docs/ADD-Token-Mechanics-Anarchist-DAO.pdf"><span>token_mechanics</span>{arrow}</a>
                    </Link>
                  </li>

                  <li data-current={ widgets == "about" ? 'true' : 'false' }>
                    <Link className="anchor" href="/about">
                      <a><span>about_the_crew</span>{arrow}</a>
                    </Link>
                  </li>

                  <li data-current={ widgets == "donate" ? 'true' : 'false' }>
                    <Link className="anchor white-icon" href="/donate">
                      <a><span>further_the_cause</span>{arrow}</a>
                    </Link>
                  </li>

                  <li>
                    <Link className="anchor white-icon" href="/donate">
                      <a><span>faq.gitbook</span></a>
                    </Link>
                  </li>

                  <li className={styles.title}>
                    <span>anarchists</span>
                  </li>

                  <li className={styles.sitego} data-current={ widgets == "manifesto" ? 'true' : 'false' }>
                    <Link className="anchor" href="/manifesto">
                      <a><span>anarchist_manifesto</span>{arrow}</a>
                    </Link>
                  </li>

                  <li className={styles.sitego} data-current={ widgets == "tv" ? 'true' : 'false' }>
                    <Link className="anchor" href="/tv">
                      <a><span>anarchist_vision</span>{arrow}</a>
                    </Link>
                  </li>

                  <li className={styles.sitego} data-current={ widgets == "training" ? 'true' : 'false' }>
                    <Link className="anchor" href="/training">
                      <a><span>anarchist_university</span>{arrow}</a>
                    </Link>
                  </li>

                </>
              )
            }
          })()}

          <li id="purchase">
            <a href="#" rel="noreferrer" target="_blank">
              <span className="highlight">purchase_ADD</span>
            </a>
          </li>

        </ul>
      </>
    )
  }

}