import { useState } from 'react';
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
           return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/macsueldias.png" 
                alt="" 
                onClick={() => alert('Hello')}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Macsuel Dias</strong>
                            <time title="1 de Dezembro às 23:00h" dateTime="2023-01-07 12:00:00">Cerca de uma hora atrás 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24}/>
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}