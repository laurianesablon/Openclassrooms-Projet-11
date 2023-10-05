import Layout from "../components/layout";
import iconChat from "../assets/icons/icon-chat.png";
import iconMoney from "../assets/icons/icon-money.png";
import iconSecurity from "../assets/icons/icon-security.png";
import FeatureItem from "../components/feature-item";
function Home() {
  const featureItems = [
    {
      featureTitle: "You are our #1 priority",
      featureDescription:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      icon: iconChat,
    },
    {
      featureTitle: "More savings means higher rates",
      featureDescription:
        "The more you save with us, the higher your interest rate will be!",
      icon: iconMoney,
    },
    {
      featureTitle: "Security you can trust",
      featureDescription:
        "We use top of the line encryption to make sure your data and money is always safe.",
      icon: iconSecurity,
    },
  ];

  return (
    <Layout>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featureItems.map((item, index) => (
            <FeatureItem
              key={index}
              featureTitle={item.featureTitle}
              featureDescription={item.featureDescription}
              icon={item.icon}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}
export default Home;
