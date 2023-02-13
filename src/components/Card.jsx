import "./Card.scss"

import { ReactComponent as SVGQuote } from "../images/bg-pattern-quotation.svg"

const Card = ({ image, name, message, testimonial, hasQuoteImage, color1, color2, bgColor }) => {
  return (
    <figure
      className="card"
      style={{ backgroundColor: bgColor }}
    >
      <img src={image} alt={name} />
      <figcaption>
        <span className="name" style={{ color: color1 }}>{name}</span>
        <span className="title">Verified Graduate</span>
      </figcaption>
      <blockquote style={{ color: color1 }}>
        {message}
      </blockquote>
      <p style={{ color: color2 }}>
        {testimonial}
      </p>

      {hasQuoteImage && <SVGQuote className="card__quote" />}
    </figure>
  )
}

export default Card