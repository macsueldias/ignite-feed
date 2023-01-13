import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return ( 
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/macsueldias.png"/>

                <strong>Macsuel Dias</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine weight="fill" size="20"/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}