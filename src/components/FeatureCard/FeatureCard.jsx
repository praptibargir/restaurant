import "./FetureCard.css"

function FeatureCard({title,img}) {
  return (
    <div className="featurecard">
        <img src={img} alt={title} className="feature-image"/>
        <p className="feature-title">{title}</p>
    </div>
  )
}

export default FeatureCard