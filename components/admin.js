import Image from 'next/image'
// components
//import Banner from '../public/assets/images/banner-donations.jpg'
import Donater from './donater.js'
//styles
import styles from '../styles/components/admin.module.sass'
// media

export default function Donations(props) {

  let favor, oppose
  let totalVoters = 852
  let voteYes = 72
  let voteNo = 213
  let yesPercentage = (voteYes/totalVoters*100).toFixed(2) + "%"
  let noPercentage = (voteNo/totalVoters*100).toFixed(2) + "%"
  if(voteYes > voteNo) {
    favor = true
  } else {
    oppose = true
  }

  if(props.page == "admin") {
    return (
      <>
        <div className={styles.sidebyside}>
          <div className={styles.content}>
            <form>
              <div className="formrow">
                <select name="propnumber">
                  <option value="1">prop_1 :: DAO Marketing Proposal :: ✓8.45% ✗25.00% :: 33.45%</option>
                </select>
                <button type="submit" className="button-mono btn-inline">Go</button>
              </div>
            </form>
            <h2>Admin </h2>
            <div className={styles.stats}>
              <p className={favor && styles.outline}><span>Favor Anarchy</span><b id="voteyes">{yesPercentage}</b><i>{voteYes}</i></p>
              <p className={oppose && styles.outline}><span>Oppose Anarchy</span><b id="voteno">{noPercentage}</b><i>{voteNo}</i></p>
            </div>
            <div className={styles.buttons}>
              <p><a className="button-mono" href="#">👀 View</a></p>
              <p><a className="button-mono btn-outline disabled" href="#">✓ Approve</a></p>
              <p><a className="button-mono btn-outline btn-outline-warning" href="#">✗ Reject</a></p>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.sidebyside}>
          <div className={styles.content}>
            <label><h2>DAO Proposals</h2></label>
            
            <input type="text" name="propnumber" placeholder="0000000" value="000001" disabled />
            <div className={styles.stats}>
              <p><span>Yes</span><b id="voteyes">72</b></p>
              <p><span>No</span><b id="voteno">213</b></p>
            </div>
            <div className={styles.buttons}>
              <p><a className="button-mono disabled" href="#">Approve</a></p>
            </div>
            <div className={styles.buttons}>
              <p><a className="button-mono btn-warning" href="#">Veto</a></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}