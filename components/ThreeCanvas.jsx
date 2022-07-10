import styles from '../styles/ThreeCanvas.module.css';
import ThreeApp from "../three/ThreeApp";
import { useThree } from "../hooks/useThree";

const ThreeCanvas = () => {
    const canvas = useThree(ThreeApp);

    return (
        <div ref={canvas} className={styles.canvas}>
        </div>
    );
}

export default ThreeCanvas