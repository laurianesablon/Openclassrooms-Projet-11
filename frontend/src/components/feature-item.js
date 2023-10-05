export default function FeatureItem({ featureTitle, featureDescription, icon }) {
  return (
    <>
      <div className="feature-item">
        <img src={icon} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{featureTitle}</h3>
        <p>{featureDescription}</p>
      </div>
    </>
  );
}
