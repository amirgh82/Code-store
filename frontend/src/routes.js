import Index from './Pages/Index/Index'
import Category from './Pages/Category/Category';
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo';
import CourseInfos from './Pages/CourseInfo/CourseInfos';
import Courses from './Pages/Courses/Courses'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'

const routes = [
    { path: '/', element: <Index /> },
    { path: 'course-info/:courseName', element: <CourseInfos /> },
    { path: 'category-info/:categoryName', element: <Category /> },
    { path: 'article-info/:articleName', element: <ArticleInfo /> },
    { path: '/courses', element: <Courses /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
]

export default routes;