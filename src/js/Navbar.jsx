import '../css/Navbar.css'

export default function Navbar() {

  return (
    <>
      <div className="main-vertical side side-masked-border">
        <div className="column">

          <div className="side-logo-container">
            <div className="side-logo-textbox">
              <h1 className="side-logo-text">A<span className="text-highlighted">P</span></h1>
            </div>
          </div>
          
          <ul>
            <li className="side-menu-item"><a onClick={() => navigate('/')}>home</a></li>
            <li className="side-menu-item"><a>about me</a></li>
            <li className="side-menu-item"><a onClick={() => navigate('/portfolio')}>fun stuff</a></li>
          </ul>
          
          <p className='side-copyright'>© 2024 Anna Pawlukiewicz </p>
        </div>
      </div>
    </>
  )
}
