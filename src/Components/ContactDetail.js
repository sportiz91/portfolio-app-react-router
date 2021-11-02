const ContactDetail = ({ type, detail, classN }) => {
  return (
    <div className="contact__body__contact">
      <p>
        <i className={classN}></i> {type}
      </p>
      <p className="secondary-text">{detail}</p>
    </div>
  );
};

export default ContactDetail;
