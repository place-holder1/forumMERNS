// import {}
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div>HomePage</div>
    <Link to={"/ForumPage"}>Hi</Link>
    </>
  )
}

export default HomePage