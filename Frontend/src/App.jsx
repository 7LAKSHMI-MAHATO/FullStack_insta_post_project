import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Signup from './Signup'
import Login from './Login'
import Profile from './pages/Profile'
import Search from './pages/Search'

const App = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <Router>

      <div>

        {/* NAVBAR */}

        <nav>

          {user ? (
            <>
              <span>Welcome, {user.username} 👋</span>

              <Link to="/">Feed</Link>
              {" | "}

              <Link to="/create-post">Create Post</Link>
              {" | "}

              
              

<Link to="/profile">Profile</Link>

{"|"}
<Link to="/search">Search</Link>
{" \u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}

              <button
                onClick={() => {
                  localStorage.removeItem("user")
                  window.location.href = "/login"
                }}
              >
                
                    Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              {" | "}
              <Link to="/signup">Signup</Link>
            </>
          )}

        </nav>

        <Routes>

          <Route
            path="/create-post"
            element={<CreatePost />}
          />

          <Route
            path="/"
            element={<Feed />}
          />

          <Route
            path="/feed"
            element={<Feed />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
<Route
  path="/search"
  element={<Search />}
/>


          <Route
    path="/profile"
    element={<Profile />}
/>

        </Routes>

      </div>

    </Router>
  )
}

export default App