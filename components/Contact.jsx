import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import FooterDivider from './FooterDivider';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContent}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          deserunt, sed ullam iure ratione maxime delectus dignissimos ipsum
          earum voluptate in sequi dolorum aliquam ipsam iusto sapiente? Hic,
          repudiandae fugit?
        </p>
        <p><a href='ander:card@example.com' className={styles.btn}>Email me</a></p>
      </div>
      <FooterDivider />
    </div>
  );
};

export default Contact;
