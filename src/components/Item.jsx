const Item = ({ título, descripción, precio, url }) => {

  return (
    <div className="card col-3">
      <img className="card-img-top img-fluid" src={url} alt="tapa-de-comics" />
      <div className="card-body">
        <h5>{título}</h5>
        <p className="card-text">
          {descripción}
        </p>
        <p className="card-text">
          {precio}
        </p>
      </div>
    </div>
  )
}

export default Item;