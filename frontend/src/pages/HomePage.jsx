// import {}
import { Link } from 'react-router-dom'
import MainComponent from '../components/FrontPageContent/MainComponent'

const HomePage = () => {
  return (
    <MainComponent>
      <div>HomePageyes</div>
      <Link to={"/ForumPage"}>Hi</Link>
    </MainComponent>
  )
}

export default HomePage