import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import HomePage from './pages/Home/HomePage';
import TrendingPage from './pages/Trending/TrendingPage';
import ErrorPage from './pages/ErrorPage'
import MenuNav from './pages/menu/MenuNav';
import ExplorePage from './pages/Explore/ExplorePage';
import BookmarkPage from './pages/Bookmark/BookmarkPage';
import MonetisationPage from './pages/Monetisation/MonetisationPage';
import MessagePage from './pages/Message/MessagePage';
import ListsPage from './pages/Lists/ListsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuNav />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'trending', element: <TrendingPage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'bookmark', element: <BookmarkPage /> },
      { path: 'monetisation', element: <MonetisationPage /> },
      { path: 'message', element: <MessagePage /> },
      { path: 'lists', element: <ListsPage /> }
    ]
  }
])

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
