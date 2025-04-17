// import {}
import { Link } from 'react-router-dom'
import PageComponent from '../components/PageComponent'

const NewPage = () => {
  return (
    <PageComponent>
      <div>HomePageyes</div>
      <Link to={"/ForumPage"}>Hi</Link>
    </PageComponent>
  )
}

export default NewPage