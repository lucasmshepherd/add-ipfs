import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../store/users/action'
import Link from 'next/link'
import parse from 'html-react-parser'

import styles from '../styles/components/directory.module.sass'

export default function Directory(props) {
  var folder, arrow, lock, exlink, barrow, down
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.users.connected);
  const widgets = props.widgets

  function loginUserNow() {
    dispatch(loginUser());
  };

  folder = parse('<svg class="icon-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><g><rect x="15" y="30" width="30" height="15"/><rect y="14.99" width="15" height="105.01"/><rect x="45" y="45" width="75" height="15"/><rect x="120" y="60" width="15" height="60"/><rect x="15" y="120" width="105" height="15"/></g><g><rect x="15" width="30" height="15"/><rect x="45" y="15" width="75" height="15"/><rect x="120" y="30" width="15" height="30"/></g></svg>')
  arrow = parse('<svg class="icon-arrow" width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M5.21793 0.969727V2.83831L3.04271 4.12316H9.80615C9.80615 4.11741 9.80615 4.11486 9.80615 4.11486L9.81348 5.75824H3.04597L5.21467 7.04118V8.96973L0.129678 5.76654V4.11295L5.21793 0.969727Z" /></svg>')
  exlink = parse('<svg class="icon-xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><rect y="120" width="15" height="15"/><rect x="15" y="105" width="15" height="15"/><rect x="30" y="90" width="15" height="15"/><rect x="45" y="75" width="15" height="15"/><rect x="60" y="60" width="15" height="15"/><rect x="75" y="45" width="15" height="15"/><rect x="90" y="30" width="15" height="15"/><polygon points="135 0 135 60 120 60 120 30 105 30 105 14.99 75 14.99 75 0 135 0"/></svg>')
  barrow = parse('<svg class="icon-barrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><polygon points="0 120 0 135 135 135 135 0 119.94 0 119.94 120 60 120 60 75 45 75 45 90 30 90 30 105 15 105 15 120 0 120"/></svg>')
  down = parse('<svg class="icon-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135"><polygon points="135 120 135 135 0 135 0 0 15.06 0 15.06 120 75 120 75 75 90 75 90 90 105 90 105 105 120 105 120 120 135 120"/></svg>')
  

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

  else if (widgets == 'dapp') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="/welcome">
                <a><span>root</span>{arrow}</a>
            </Link>
          </li>
          
          <li data-connected={connected} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="/dapp">
              <a>{folder}<span>dapp</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "stake" ? 'true' : 'false' }>
            <Link className="anchor" href="/stake">
              <a>{down}<span>stake_add</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "proposals" ? 'true' : 'false' }>
            <Link className="anchor" href="/proposals">
              <a>{down}<span>proposals</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true">
            <a href="#" rel="noreferrer" target="_blank">{exlink}
              <span>purchase_add_on_uniswap</span>
            </a>
          </li>

          <li data-child="true">
            <a href="#" rel="noreferrer" target="_blank">{exlink}
              <span>donate</span>
            </a>
          </li>

        </ul>
      </>
    )
  }

  else if (widgets == 'stake') {
    return (
      <> 
        <ul id="menu" className={styles.menu}>

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="/dapp">
                <a><span>back</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "stake" ? 'true' : 'false' }>
            <Link className="anchor" href="/stake">
              <a>{folder}<span>stake_add</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "deposit" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{down}<span>deposit</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "withdrawal" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{down}<span>withdrawal</span>{arrow}</a>
            </Link>
          </li>

          <li data-child="true" data-current={ widgets == "claim" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{down}<span>claim</span>{arrow}</a>
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

          <li data-connected={connected} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="#">
              <a>{folder}<span>da-p1p%</span>{arrow}</a>
            </Link>
          </li>

          <li data-connected={connected} data-current={ widgets == "mint" ? 'true' : 'false' }>
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

          <li data-current={ widgets == "welcome" ? 'true' : 'false' }>
            <Link className="anchor" href="/welcome">
                <a><span>root</span>{arrow}</a>
            </Link>
          </li>
          
          <li data-connected={connected} data-current={ widgets == "dapp" ? 'true' : 'false' }>
            <Link className="anchor" href="/transition">
              <a>{folder}<span>dapp</span>{arrow}</a>
            </Link>
          </li>
          
          <li data-connected={connected} data-current={ widgets == "mint" ? 'true' : 'false' }>
            <Link className="anchor" href="/mint">
              <a>{folder}<span>mint_nft</span>{arrow}</a>
            </Link>
          </li>
          
          <li data-current={ widgets == "manifesto" ? 'true' : 'false' }>
            <Link className="anchor" href="/manifesto">
              <a>{folder}<span>manifesto</span>{arrow}</a>
            </Link>
          </li>

          <li data-current={ widgets == "tv" ? 'true' : 'false' }>
            <Link className="anchor" href="/tv">
              <a>{folder}<span>anarchist_tv</span>{arrow}</a>
            </Link>
          </li>

          <li>
            <a href="https://anarchistdevelopmentdao.gitbook.io/anarchist-development-dao/" rel="noreferrer" target="_blank">
              <span>faq.gitbook</span>
            </a>
          </li>

        </ul>
      </>
    )
  }

}