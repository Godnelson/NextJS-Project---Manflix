import ListMovie from '../components/ListMovies'
import RegisterMovie from '../components/RegisterMovie'
import RegisterUser from '../components/RegisterUser'
import RegisteFavorites from '../components/RegisterFavorites'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ListMovie/>
    </div>
  )
}
