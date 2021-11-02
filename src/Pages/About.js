const About = () => {
  return (
    <main>
      <section class="about">
        <div class="about__bio">
          <h2 class="secondary-text">BIO</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            voluptates exercitationem eos iusto, temporibus obcaecati quasi
            eaque reprehenderit veniam id itaque mollitia doloremque?
          </p>
        </div>

        <div class="about__jobs">
          <div class="about__jobs__job">
            <h2 class="secondary-text">2017 - Current</h2>
            <h3>Google</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              eos?
            </p>
          </div>
          <div class="about__jobs__job">
            <h2 class="secondary-text">2015 - 2017</h2>
            <h3>Microsoft</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              eos?
            </p>
          </div>
          <div class="about__jobs__job">
            <h2 class="secondary-text">2012 - 2015</h2>
            <h3>Web Design Co.</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              eos?
            </p>
          </div>
        </div>

        <div class="end-wrapper">
          <div class="end-wrapper__social-icons">
            <a href="#!" class="social-icons--emoji">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="social-icons--emoji">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#!" class="social-icons--emoji">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#!" class="social-icons--emoji">
              <i class="fab fa-github"></i>
            </a>
          </div>

          <footer>© Copyright 2019</footer>
        </div>
      </section>
    </main>
  );
};

export default About;
