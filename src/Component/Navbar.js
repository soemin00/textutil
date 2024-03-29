import React from 'react'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
    </div>
    {/*<form className="d-flex" role="search">
        <input className="form-control me-12 mx-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-2" type="submit">Search</button>
    </form>*/}
      <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" class="custom-control-input" id="customSwitches" onClick={props.toggleMode}/>
        <label className="custom-control-label" htmlFor="customSwitches">{props.text}</label>
      </div>
  </div>
</nav>
  )
}