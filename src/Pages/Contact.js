import Data from "../Components/Data";
import ContactDetail from "../Components/ContactDetail";
import Socials from "../Components/Socials";

const Contact = () => {
  return (
    <main>
      <section className="contact">
        <div className="contact__body">
          <h1>Contact Me</h1>
          {Data[0].contact.map((item) => {
            return (
              <ContactDetail
                key={item.id}
                type={item.type}
                detail={item.detail}
                classN={item.classN}
              />
            );
          })}
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

export default Contact;
