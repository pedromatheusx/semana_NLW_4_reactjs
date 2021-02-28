import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const {level} = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/9163417?s=300&u=2f53f8145950a5294a8af1c875cb66bd799d944e&v=4" alt="Pedro Matheus"/>
            <div>
                <strong>Pedro Matheus</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}