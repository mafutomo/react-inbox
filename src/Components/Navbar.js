import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Inbox Styleguide</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/">Components</a></li>
            <li><a href="/example">Example</a></li>
            <li><a href="/css">CSS</a></li>
              <li><a href="/seeds">Seeds</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
