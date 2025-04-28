// import {}
import { Link, useParams } from 'react-router-dom'
import PageComponent from '../components/PageComponent'

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <PageComponent>
      <div>HomePageyes</div>
      <Link to={"/"}>Hi</Link>
    </PageComponent>
  )
}

export default CategoryPage