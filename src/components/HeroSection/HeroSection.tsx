import Button from "../Common/Button/Button";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <main className={styles.container}>
      <img src="./assets/blocks.png" alt="" className={styles.bgBlocksImg} />

      <section className={styles.headingTextContainer}>
        <h4>Success stories</h4>
        <h1>Every success journey we've encountered.</h1>
      </section>

      <section className={styles.content}>
        <figure className={styles.heroImageContainer}>
          <img src="./assets/hero.png" alt="hero image" />

          <div className={styles.percentageBox}>
            <img src="./assets/sparkle.svg" alt="" />
            <h2>40%</h2>
            <p>
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>

          <div className={styles.deploymentBox}>
            <img src="./assets/rocket.svg" alt="" />
            <div className={styles.deploymentTextContent}>
              <h4>10 DAYS</h4>
              <p>Staff Deployment</p>
            </div>
          </div>

          <div className={styles.savingsBox}>
            <div className={styles.savingsHeader}>
              <h2>$0.5</h2>
              <p>MILLION</p>
            </div>
            <p>
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </figure>

        <div className={styles.heroCtaContainer}>
          <h3>
            Enhance fortune 50 company’s insights teams research capabilities
          </h3>
          <div className={styles.carouselIndicators}>
            <span className={styles.active}></span>
            <span></span>
            <span></span>
          </div>
          <Button
            variant="primary"
            className={styles.ctaButton}
            icon={<img src="./assets/right-arrow.svg" />}
          >
            Explore More
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
