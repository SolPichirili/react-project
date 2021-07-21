import { Card } from "react-bootstrap";

const Item = ({ título, descripción, precio, url }) => {

  return (
    <div>
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
    </div>
  )
}

export default Item;