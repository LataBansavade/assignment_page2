import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.profileSection}>
                <p className={styles.profileName}>John Doe</p>
            </div>
            <Link href="#profile">Profile</Link>
            <Link href="#settings">Settings</Link>
            <Link href="#more">More</Link>
            <Link href="#about">About</Link>
            <Link href="#logout">Logout</Link>
        </div>
    );
}
