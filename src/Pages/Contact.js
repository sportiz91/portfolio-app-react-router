const Contact = () => {
  return (
    <main>
      <section class="contact">
        <div class="contact__body">
          <h1>Contact Me</h1>

          <div class="contact__body__contact">
            <p>
              <i class="fas fa-envelope"></i> Email
            </p>
            <p class="secondary-text">email@email.com</p>
          </div>
          <div class="contact__body__contact">
            <p>
              <i class="fas fa-mobile-alt"></i> Phone
            </p>
            <p class="secondary-text">+1 (555) 555-5555</p>
          </div>
          <div class="contact__body__contact">
            <p>
              <i class="fas fa-home"></i> Address
            </p>
            <p class="secondary-text">123 First St. Houston, TX</p>
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

export default Contact;
