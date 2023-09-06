import Logo from './Logo.png'

export default function Navbar() {
  return (
    <nav>
        <img src={Logo} className='nav-logo'/>
        <div className="nav-right-side">
            <button>Main</button>
            <button>About Us</button>
            <button>Products</button>
            <button>🇬🇧</button>
        </div>
    </nav>
  )
}
