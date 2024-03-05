import React from "react";
import "./features.css";
import { Col, Row } from "react-bootstrap";
import FeatureCard from "./featureCard";
import recImg from "../images/Recommendation.png";
import walletImg from "../images/wallet.png";
import historyImg from "../images/History.png";
import insightImg from "../images/Insights.png";
import aiImg from "../images/Ai.png";

function Features() {
  return (
    <div className="features" id="features">
      <Row id="features-container">
        <Col className="features-head">
          <div className="features-title ">
            <h1 className="f-tahoma  mb-4">Features</h1>
            <p className="fs-5">Explore Our Wide Range Of Features.</p>
          </div>
        </Col>
        <FeatureCard
          img={recImg}
          title="Recommendation"
          des="Recommend the best suitable credit card among yours for every transaction ."
        />
        <FeatureCard
          img={walletImg}
          title="Wallet"
          des="Learn about all your credit cards in one place for not missing payments as well as less interest charge ."
        />
        <FeatureCard
          img={historyImg}
          title="History"
          des="Review all transactions with all credit cards in one place."
        />
        <FeatureCard
          img={insightImg}
          title="Insights"
          des="Learn best about your monthly expenses for saving more with the best lifestyle ."
        />
        <FeatureCard
          img={aiImg}
          title="Ai"
          des="Recommendation the best suitable credit card among yours for every transaction ."
        />
      </Row>
    </div>
  );
}

export default Features;
