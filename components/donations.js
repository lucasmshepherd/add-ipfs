import Image from 'next/image'
//styles
import styles from '../styles/components/donations.module.sass'
// media
import Banner from '../public/assets/images/banner-donations.jpg'

export default function Donations(props) {
  return (
    <>
      <div className={styles.donatebg}><div className={styles.donatebgglitch}>&nbsp;</div></div>
      <div className={styles.donations}>
        <h2 className={styles.title}>DONATIONS</h2>
      </div>
      {/*<Image src={Banner} layout="responsive" priority="true" alt="Anarchist Computer Center" />*/}
      <div className={styles.content}>
        <h3>Some title goes here</h3>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
        <hr className={styles.divider} />
        <h3>Some title goes here</h3>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
        <hr className={styles.divider} />
        <h3>Some title goes here</h3>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>


        <blockquote>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
          <hr/>
          Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
        </blockquote>
      </div>
    </>
  )
}