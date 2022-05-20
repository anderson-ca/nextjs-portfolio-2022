import styles from '../styles/Contact.module.css';
import FooterDivider from './FooterDivider';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, deserunt, sed ullam iure ratione maxime delectus dignissimos ipsum earum voluptate in sequi dolorum aliquam ipsam iusto sapiente? Hic, repudiandae fugit?</p>
        <FooterDivider />
    </div>
  )
}

export default Contact