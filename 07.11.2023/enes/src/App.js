
  import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">

<nav className='top-navbar'>
<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Container>
                <Row>
                    <Col>
                    <Image style={{width:"50px" , height:"50px"}} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" roundedCircle />
                    </Col>
                </Row>
            </Container>
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</nav>
<br/>
<main className='categories'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={2}>
        <h2>Categories</h2>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Bestseller Products
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Popular Products
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Favorite Products
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Most Viewed Products
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
            Promotional Products
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
            Promotional Products
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
        <h2>Products</h2>
            <Row>
                <Col sm={4}>      
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Washing Machine</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                        <Card.Text>
                        The new washing machine model boasts advanced features and energy-efficient technology to make laundry a breeze
                        </Card.Text>
                        <Card.Link href="#">Add to Basket</Card.Link>
                        <Card.Link href="#">Similar Products</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>

                <Col  sm={4}>       
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Dishwasher</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                    <Card.Text>
                    This high-capacity dishwasher offers efficient cleaning and a range of convenient options, making it the perfect addition to any modern kitchen
                    </Card.Text>
                    <Card.Link href="#">Add to Basket</Card.Link>
                    <Card.Link href="#">Similar Products</Card.Link>
                </Card.Body>
                </Card>
                </Col>

                <Col  sm={4}>       
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Freezer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                    <Card.Text>
                    Our spacious freezer provides ample storage for all your frozen goods, with a sleek design and frost-free technology for hassle-free maintenance
                    </Card.Text>
                    <Card.Link href="#">Add to Basket</Card.Link>
                    <Card.Link href="#">Similar Products</Card.Link>
                </Card.Body>
                </Card>
                </Col>

            </Row>
            <br></br>
            <Row>
                <Col sm={4}>      
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Toast Machine</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                        <Card.Text>
                        This versatile toast machine allows you to enjoy perfectly toasted bread and a variety of breakfast treats, with adjustable settings to customize your morning toast just the way you like it.
                        </Card.Text>
                        <Card.Link href="#">Add to Basket</Card.Link>
                        <Card.Link href="#">Similar Products</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>

                <Col  sm={4}>       
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Coffe Machine</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                    <Card.Text>
                    Our coffee machine delivers barista-quality coffee at the touch of a button, with a built-in grinder and customizable brewing options to ensure you savor the perfect cup every morning.
                    </Card.Text>
                    <Card.Link href="#">Add to Basket</Card.Link>
                    <Card.Link href="#">Similar Products</Card.Link>
                </Card.Body>
                </Card>
                </Col>

                <Col  sm={4}>       
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Microwave</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Bestseller</Card.Subtitle>
                    <Card.Text>
                    Experience quick and efficient cooking with our state-of-the-art microwave, featuring multiple power levels and a spacious interior to heat or cook your favorite dishes in no time.
                    </Card.Text>
                    <Card.Link href="#">Add to Basket</Card.Link>
                    <Card.Link href="#">Similar Products</Card.Link>
                </Card.Body>
                </Card>
                </Col>

            </Row>
        </Col>
        
      </Row>
      
    </Tab.Container>

</main>


    </div>
  );
}

export default App;
