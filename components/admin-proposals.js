import Image from 'next/image'
// components
//import Banner from '../public/assets/images/banner-donations.jpg'
import Donater from './donater.js'
//styles
import styles from '../styles/components/admin.module.sass'
// media

export default function Donations(props) {
  return (
    <>
      <div className={styles.sidebyside}>
        <div className={styles.content}>
          <label>Anarchist Proposal # <a href="#" style={{float: "right"}}>view</a></label>
          <input type="text" name="propnumber" placeholder="0000000" value="000001" disabled />
          <div className={styles.stats}>
            <p><span>Yes</span><b id="voteyes">30</b></p>
            <p><span>No</span><b id="voteno">10</b></p>
          </div>
          <div className={styles.buttons}>
            <p><a className="button-mono disabled" href="#">Approve</a></p>
            <p><a className="button-mono btn-warning" href="#">Deny</a></p>
          </div>
        </div>
      </div>
    </>
  )
}