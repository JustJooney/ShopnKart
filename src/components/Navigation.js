//bootstrap
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
//styled
import styled from 'styled-components';



function Navigation(){
	return(
		<Container fluid='lg' className="p-2 bg-danger " >
			<StyledNav justify style={{fontSize: "1.5rem"}} >
				<Nav.Item >
					<Nav.Link href='/' title="home" id="hover" className='text-light'>Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/giving-back" id="hover" title="Giving Back" className='text-light'>Giving Back</Nav.Link>
				</Nav.Item>
				<StyledNavDropdown title='Coupon Savings' id="nav-dropdown" >
					<NavDropdown.Item id="navItems" href="https://www.retailmenot.com/everyday" target="_blank" active={false} >
						RedPlum
					</NavDropdown.Item>
					<NavDropdown.Item id="navItems" href="http://www.everydaysaver.com/" target="_blank" active={false} >
						Everyday Saver
					</NavDropdown.Item>
					<NavDropdown.Item id="navItems" href="http://www.smartsource.com/smartsource2/static_content/app/start.html#/?Link=MKRU3JAAR6CCY" target="_blank" active={false}>
						Smart Source
					</NavDropdown.Item>
				</StyledNavDropdown>
				<Nav.Item>
					<Nav.Link href='/recipes' id="hover" className='text-light'>Recipes</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/employment' id="hover" className='text-light'>Employment</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/contact' id="hover" className='text-light'>Contact Us</Nav.Link>
				</Nav.Item>
			</StyledNav>
		</Container>
	)
}

const StyledNavDropdown = styled(NavDropdown)`
	#nav-dropdown{
		color: white;
		&:hover{
			text-decoration: underline;
		}
	}

	#navItems{
		font-size: 1.3rem;
		&:hover{
			background: lightgray;

		}
	}

`

const StyledNav = styled(Nav)`
	#hover{
		color: white;
		&:hover{
			text-decoration: underline;
			color: white!important;

		}

	}
`

export default Navigation;