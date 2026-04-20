import styles from './Header.module.scss';

export default function Header(){
    return(
        <header>
            <h1 className={`font-pixel ${styles.logo}`}>
                <button type="button">*</button>
            </h1>
        </header>
    );
}