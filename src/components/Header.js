import React,{Component, createFactory} from 'react';


function Header() {
    return (
        <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Doncoin</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav pull-right">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TOKENSALE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ROADMAP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Header
