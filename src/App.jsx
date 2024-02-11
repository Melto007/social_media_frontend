import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import HomePage from './pages/Home/HomePage';
import TrendingPage from './pages/Trending/TrendingPage';
import ErrorPage from './pages/ErrorPage'
import MenuNav from './pages/menu/MenuNav';
import NotificationPage from './pages/Notification/NotificationPage';
import BookmarkPage from './pages/Bookmark/BookmarkPage';
import MonetisationPage from './pages/Monetisation/MonetisationPage';
import MessagePage from './pages/Message/MessagePage';
import ListsPage from './pages/Lists/ListsPage';
import Profile from './pages/Profile/Profile';
import User from './pages/User/User';

import { Provider } from 'react-redux'
import store from './store/store'
import { checkAuthLoader } from './pages/User/auth'
import ForgotPassword from './pages/User/ForgotPassword';
import ResetPassword from './pages/User/ResetPassword';

const router = createBrowserRouter([
  {
    path: '',
    element: <User />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'forgotpassword',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: 'resetpassword',
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':pk',
        element: <ResetPassword />
      }
    ]
  },
  {
    path: 'home',
    element: <MenuNav />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: 'trending',
        element: <TrendingPage />,
        children: [
          { path: ':hashTags', element: <TrendingPage /> }
        ]
      },
      { path: 'notification', element: <NotificationPage /> },
      { path: 'bookmark', element: <BookmarkPage /> },
      { path: 'monetisation', element: <MonetisationPage /> },
      { path: 'message', element: <MessagePage /> },
      { path: 'lists', element: <ListsPage /> },
      { path: 'profile', element: <Profile /> },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </Provider>
  )
}

export default App
