import Index from './Pages/Index/Index'
import Category from './Pages/Category/Category';
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo';
import CourseInfos from './Pages/CourseInfo/CourseInfos';


const routes = [
    { path: '/', element: <Index /> },
    { path: 'course-info/:courseName', element: <CourseInfos/> },
    { path: 'category-info/:categoryName', element: <Category /> },
    { path: 'article-info/:articleName', element: <ArticleInfo /> },

]

export default routes;