import { Card, Row, Col } from "react-bootstrap";

const Item = ({ título, descripción, precio, url }) => {

  return (
    <div>
        <Row>
          <Col>
            <Card className="tarjetaDeProd">
              <Card.Img variant="top" src={url} />
              <Card.Body>
                <Card.Title>{título}</Card.Title>
                <Card.Text>
                  {descripción}
                </Card.Text>
                <Card.Text>
                  {precio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default Item;