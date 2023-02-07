import "./Avatar.scss"
import Photo from "./Photo"

const Avatar = ({ image, name, color }) => {
  return (
    <div className="avatar">
      <Photo source={image} />
      <div className="name-wrapper">
        <div className="name" style={{ color: color }}>{name}</div>
        <div className="graduated">Verified Graduate</div>
      </div>
    </div>
  )
}

export default Avatar