import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import Icon1 from '../public/assets/images/folder.svg'
import FThumb from '../public/assets/images/fr33d0m-thumb.jpg'

import styles from '../styles/components/widget.module.sass'

export default function Files() {
  const connected = useSelector((state) => state.users.connected);
  return (
    <>
      <div className={styles.files}>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/freedom">
            <div className={styles.fthumb} style={{ background: "url('/assets/images/fr33d0m-thumb.jpg') no-repeat 50% 50%" }}/>
          </Link>
          <div className={styles.flabel}>fr33d0m</div>
        </div>
        <div className={styles.folder} data-connected="true" data-video="live">
          <Image layout="responsive" src={Icon1} priority="true" alt="folder" />
          <Link className="anchor" href="/tv">
          <div className={styles.fthumb} style={{ background: "url('/assets/images/hoodie-guy-dark-bg.jpg') no-repeat 50% 50%" }}/>
          </Link>
          <div className={styles.flabel}>syst3m_404</div>
        </div>
      </div>
    </>
  )
}