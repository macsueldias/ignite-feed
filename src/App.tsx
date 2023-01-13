import { Post, PostProps } from './components/Post'
import { Header }  from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';

interface Post extends PostProps {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/macsueldias.png',
      name: 'Macsuel Dias',
      role: 'Developer Front-end'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nomedo projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publisheAt: new Date('2023-01-04 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/macsueldias.png',
      name: 'Macsuel Dias',
      role: 'Developer Full Stack'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nomedo projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'},
      {type: 'link', content: ' #novoprojeto'},
      {type: 'link', content: ' #nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publisheAt: new Date('2023-01-04 22:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>
    </div>
   
  )
}
export default App
