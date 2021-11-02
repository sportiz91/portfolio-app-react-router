import Data from "../Components/Data";
import Socials from "../Components/Socials";
import Job from "../Components/Job";

const About = () => {
  return (
    <main>
      <section className="about">
        <div className="about__bio">
          <h2 className="secondary-text">BIO</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            voluptates exercitationem eos iusto, temporibus obcaecati quasi
            eaque reprehenderit veniam id itaque mollitia doloremque?
          </p>
        </div>

        <div className="about__jobs">
          {Data[0].job.map((item) => {
            return (
              <Job
                year={item.year}
                company={item.company}
                position={item.position}
                para={item.para}
                key={item.id}
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

export default About;
