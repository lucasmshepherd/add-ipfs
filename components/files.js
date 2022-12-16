import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon1 from '../public/assets/images/folder.svg'
import FreedomThumb from '../public/assets/images/fr33d0m-thumb.jpg'
import SystemThumb from '../public/assets/video/system_failure_thumb.jpg'
import NeedThumb from '../public/assets/video/they_need_us_thumb.jpg'
import HowThumb from '../public/assets/images/thumb-how.png'

import styles from '../styles/components/widget.module.sass'

export default function Files() {
  return (
    <>
      <div className={styles.files}>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/howtobuy">
          <div className={styles.fthumb} style={{ background: "url(" + HowThumb.src + ") no-repeat 50% 0" }}/>
          </Link>
          <div className={styles.flabel}>h0w_2_buy</div>
        </div>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/need">
          <div className={styles.fthumb} style={{ background: "url(" + NeedThumb.src + ") no-repeat 50% 0" }}/>
          </Link>
          <div className={styles.flabel}>th3y_n33d_u5</div>
        </div>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/system">
          <div className={styles.fthumb} style={{ background: "url(" + SystemThumb.src + ") no-repeat 50% 50%" }}/>
          </Link>
          <div className={styles.flabel}>sy5t3m_f4ilur3</div>
        </div>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/freedom">
            <div className={styles.fthumb} style={{ background: "url(" + FreedomThumb.src + ") no-repeat 50% 50%" }}/>
          </Link>
          <div className={styles.flabel}>fr33d0m</div>
        </div>
      </div>
    </>
  )
}