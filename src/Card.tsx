import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({key, title, author, image, year}) => {
  return (
    <div key={key} className="col">      
      <div className="card">
        <LazyLoadImage
          src={image} 
          className="img-card" 
          alt={title}
          effect="blur"
        />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
        </div>
        <div className="card-read-more">
          <small className="text-body-secondary">{year}</small>
        </div>
      </div>
    </div>  
  )
}

export default Card;