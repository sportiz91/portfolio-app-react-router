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
            <a href="#!" className="social-icons--emoji">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="social-icons--emoji">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#!" className="social-icons--emoji">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="social-icons--emoji">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <footer>© Copyright 2019</footer>
        </div>
      </section>
    </main>
  );
};

export default Home;
