import { useState } from 'react'
import styles from './App.module.css'
// import twitterLogo from "/twitter.svg"
// import MainContent from './components/MainContent'
// import TweetInput from './test_components/TweetInput'

// import { HashRouter as createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { createHashRouter , Outlet, RouterProvider } from 'react-router-dom'

import { lazy, Suspense } from 'react'

import Navbar from './components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import SideContent from './components/SideContent'
import MobilePostButton from './components/MobilePostButton'
import Post_popup from './components/popups/Post_popup'

// const Explore = lazy(() => import("./routes/Explore"))
const NotFound = lazy(() => import("./routes/NotFound"))
const MainContent = lazy(() => import("./components/MainContent"))
const Explore = lazy(() => import("./routes/Explore"))


import { Navigate } from 'react-router-dom'

const Layout = () => {

  const [showPostPopUp, setShowPostPopUp] = useState(false)

  // console.log('App: showPostPopUp', showPostPopUp);

  return (
    <>
      <Post_popup visibility={showPostPopUp} setVisibility={setShowPostPopUp} />
      <div className={styles.mobilePostButton}>
        <MobilePostButton showPostPopUp={showPostPopUp} setShowPostPopUp={setShowPostPopUp} />
      </div>
      <div className={styles.container}>
        <div className={styles.Navbar}>
          <Navbar showPostPopUp={showPostPopUp} setShowPostPopUp={setShowPostPopUp} />
        </div>
        <div className={styles.MobileNavbar}>
          <MobileNavbar />
        </div>
        <Outlet />
        <div className={styles.hideSideContent}>
          <SideContent />
        </div>
      </div>
      {/* <TweetInput /> */}
    </>
  )
}


function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />
        },
        {
          path: "/home",
          element: (
            <Suspense fallback={<div>Loading Home...</div>}>
              <MainContent />
            </Suspense>
          )
        },
        {
          path: "/explore",
          element: (
            <Suspense fallback={<div>Loading Explore...</div>}>
              <Explore />
            </Suspense>
          )
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<div>Loading NotFound...</div>}>
              <NotFound />
            </Suspense> 
          )
        },
      ]
    }
  ], 
  // { basename: "/x-ui-clone/" }
)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
