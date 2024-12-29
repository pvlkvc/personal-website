import '../css/Navbar.css'

export default function Navbar() {
  const renderSection = (sectionName) => {

  }

  return (
    <>
      <div className="main-vertical side side-masked-border">
        <div className="column">
          <div className="side-name-container">
            <div className="side-name-textbox">
              <h1 className="side-name-text side-name-text-lower">A<span className="side-name-text-colored">P</span></h1>
            </div>
          </div>
          
          <ul>
            <li className="side-menu-item"><a onClick={}>home</a></li>
            <li className="side-menu-item"><a>about me</a></li>
            <li className="side-menu-item"><a>fun stuff</a></li>
          </ul>
          
          <p className='side-copyright'>© 2024 Anna Pawlukiewicz </p>
        </div>
      </div>
    </>
  )
}
