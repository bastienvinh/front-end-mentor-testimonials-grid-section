import Avatar from "./Avatar"
import "./Card.scss"

import { ReactComponent as SVGQuote } from "../images/bg-pattern-quotation.svg"

const Card = ({ image, name, message, testimonial, size, hasQuoteImage, color1, color2, bgColor }) => {
  return (
    <div className={`card card__size-${size} ${hasQuoteImage ? "card__quote" : ""}`} style={{ backgroundColor: bgColor }}>
      {hasQuoteImage && <SVGQuote className="card__quote" />}
      <Avatar color={color1} image={image} name={name} />
      
      <div className="testimonial-1" style={{ color: color1 }}>
        {message}
      </div>

      <div className="testimonial-2" style={{ color: color2 }}>
        {testimonial}
      </div>
    </div>
  )
}

export default Card