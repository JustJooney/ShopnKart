import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import headerBG from '../img/headerBG.jpg';



function Header(){
	return(
		<>
			<Container fluid='lg' className='px-0 mt-5 mb-3'>
				<Row noGutters={true} >
					<Col md={6} >
						<a href="/"><Image src={headerBG} alt="Shopn'Kart" style={{width: "100%"}}/></a>
					</Col>
					<Col md={6}>
						<h1 className='text-justify text-center'>Your Local, Family Owned, Community Grocery Store</h1>
					</Col>
				</Row>
			</Container>
		</>
	)
}


export default Header;