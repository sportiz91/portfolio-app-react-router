import Data from "../Components/Data";
import Socials from "../Components/Socials";

const Home = () => {
  return (
    <main>
      <section className="home">
        <div className="name">
          <h2>Hi! My Name Is</h2>
          <h1 className="name__mike">
            Mike <span className="secondary-text">Smith</span>
          </h1>
          <h2 className="name__profession">
            Web Developer, Designer & Programmer
          </h2>
        </div>

        <div className="end-wrapper">
          <div className="end-wrapper__social-icons">
            {Data[0].socials.map((item) => {
              return <Socials classN={item.class} key={item.id} />;
            })}
          </div>

          <footer>© Copyright 2019</footer>
        </div>
      </section>
    </main>
  );
};

export default Home;
