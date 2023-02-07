import "./Photo.scss"

const Photo = ({ source }) => {
  return (
    <img src={source} className="photo photo__rounded"  />
  )
}

export default Photo