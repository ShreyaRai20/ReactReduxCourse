import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './routes/App.jsx'
import CreatePost, { submitPost } from './components/CreatePost.jsx'
import PostList, { dataLoader } from './components/PostList.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <PostList/>, loader: dataLoader},
      {path: '/create-post',element: <CreatePost/>, action: submitPost}
    ]
  },
  //   {
  //   path: '/create-post',
  //   element: <CreatePost/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)


/*
Reacr Router =>
1. Installation: Use pm install react-router-dom.
2. We are going to use the latest version which is 6+
3. RouterProvider: Wraps the app for routing capabilities.
4. createBrowserRouter: helps creating the mapping for router provider.
5. Declarative Routing: Easily define application routes.
6. Routes are React components.

*/