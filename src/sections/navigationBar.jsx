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
            <li><a href=""> Menu</a></li>
            <li><a href=""> Search</a></li>
            <li><a href=""> Contact</a></li>
            <li><a href=""> About Us</a></li>
        </ul>
        </div>
    </>
    )
}

export default NavigationBar;