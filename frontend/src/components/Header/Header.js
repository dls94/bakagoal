import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container,  NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import { logout } from '../../actions/userActions'
import './Header.css'

function Header1() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Navbar className='navbar' variant='dark' expand='lg'>
            <Container className='justify-content-start'  fluid>
            <LinkContainer to='/' className='nav-brand-container'>
                <Navbar.Brand >
                    <img
                        src="https://bakagoal.s3.eu-west-3.amazonaws.com/images/CAV.png"
                        width="50"
                        height="50"
                        className='img-brand'
                        alt="CAV logo"
                    />{' '}
                    <span className='nav-brand'>CA Vitry</span>
                </Navbar.Brand>
            </LinkContainer>
            <Nav className='nav-items'>
                
                <LinkContainer to='/equipe'>
                    <Nav.Link>Equipe</Nav.Link>
                </LinkContainer>
                {/*<LinkContainer to='/cavtv'>
                    <Nav.Link>CAV TV</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/photo'>
                    <Nav.Link>PHOTO</Nav.Link>
                </LinkContainer>
                </LinkContainer>*/}
                <LinkContainer to='/boutique'>
                    <Nav.Link>Boutique</Nav.Link>
                </LinkContainer>
                
            </Nav>
            
            

            <Nav className='icon'>
                        {userInfo ? (
                            <NavDropdown key='start' title={userInfo.name} id='username' className='icon-user me-2'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : <LinkContainer to='/login' className='me-2'> 
                                <Nav.Link><i class="fa fa-user"></i></Nav.Link>
                            </LinkContainer>
                        }

                        

                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown align='end' key='start' title={<GrIcons.GrUserAdmin style= {{color : 'rgba(255,255,255,.55)'}}/>} id='adminmenu' className='icon-admin me-2'>
                            <LinkContainer to='/admin/userlist' >
                                <NavDropdown.Item >Utilisateurs</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/productlist'>
                                <NavDropdown.Item>Produits</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/orderlist'>
                                <NavDropdown.Item>Commandes</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/playerlist'>
                                <NavDropdown.Item>Joueurs</NavDropdown.Item>
                            </LinkContainer>

                            <LinkContainer to='/admin/articlelist'>
                                <NavDropdown.Item>Articles</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                        )}

                        <LinkContainer to='/cart' className='item-cart me-4'>
                            <Nav.Link><i class="fa fa-cart-plus"></i></Nav.Link>
                        </LinkContainer>
                    </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={showSidebar}  />
            </Container>
        </Navbar>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars' onClick={showSidebar}>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName} onClick={showSidebar}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className='ms-4'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Header1
