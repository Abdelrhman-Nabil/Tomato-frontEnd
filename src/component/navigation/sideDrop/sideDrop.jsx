import Navlink from '../nav-links/nav-link';
import './sideDrop.css'
const SideDrawer = props => {
    return (
        <aside className='side-drawer' onClick={props.onClick}>
            <div className='side-drawer-item' >
            <Navlink />
          </div>
        </aside>
    )
}

export default SideDrawer