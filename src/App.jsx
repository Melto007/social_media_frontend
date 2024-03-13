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
import { GoogleOAuthProvider } from '@react-oauth/google';
import DetailsProfile from './pages/Profile/DetailsProfile'
import CommandSection from './pages/Home/CommandSection';
import SingleMessage from './pages/Message/SingleMessage';
import FindFollowers from './pages/FindFollowers/FindFollowers';

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
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'command/:pk',
        element: <CommandSection />
      },
      {
        path: 'trending',
        element: <TrendingPage />,
        children: [
          { path: ':hashTags', element: <TrendingPage /> }
        ]
      },
      {
        path: 'notification',
        element: <NotificationPage />,
        children: [
          {
            path: ':pk',
            element: <NotificationPage />
          }
        ]
      },
      { path: 'bookmark', element: <BookmarkPage /> },
      { path: 'monetisation', element: <MonetisationPage /> },
      { path: 'message', element: <MessagePage /> },
      {
        path: 'message/:pk',
        element: <SingleMessage />
      },
      { path: 'lists', element: <ListsPage /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          {
            path: ':pk',
            element: <Profile />
          }
        ]
      },
      {
        path: 'profileDetails',
        element: <DetailsProfile />,
        children: [
          {
            path: ':pk',
            element: <DetailsProfile />
          }
        ]
      },
      {
        path: 'followers',
        element: <FindFollowers />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <GoogleOAuthProvider clientId="219396061932-smes23eoqdho0ci5com3ropeanvcb1vb.apps.googleusercontent.com">
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </NextUIProvider>
    </Provider>
  )
}

export default App
