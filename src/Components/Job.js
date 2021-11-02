const Job = ({ year, company, position, para }) => {
  return (
    <div className="about__jobs__job">
      <h2 className="secondary-text">{year}</h2>
      <h3>{company}</h3>
      <h6>{position}</h6>
      <p>{para}</p>
    </div>
  );
};

export default Job;
