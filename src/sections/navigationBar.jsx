import './navigationBar.css'

function NavigationBar()
{
    return(
    <>
        <div className='top-section'>
        <div className='logo'>
             Cloud Kitchen
        </div>

        <ul className="nav-items">
            <li>Menu</li>
            <li>Search</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
        </div>
    </>
    )
}

export default NavigationBar;