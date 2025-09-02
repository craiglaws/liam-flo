export const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your submit logic here
    console.log('Form submitted!');
  };
  return (
    <form onSubmit={handleSubmit} className="form-box">
      <div id="top-left" className="corner"></div>
      <div id="top-right" className="corner"></div>
      <div id="bottom-right" className="corner"></div>
      <div id="bottom-left" className="corner"></div>
      <h2>Get in touch</h2>
      <div className="input-container">
        <input placeholder="Name" className="input-field" type="text" />
        <label htmlFor="Name" className="input-label">
          Name*
        </label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        <input placeholder="Email" className="input-field" type="email" />
        <label htmlFor="Email" className="input-label">
          Email*
        </label>
        <span className="input-highlight"></span>
      </div>
      <div className="input-container">
        {/* <input placeholder="Message" className="input-field" type="message" /> */}
        <textarea
          name="Message"
          rows={3}
          placeholder="Message"
          className="input-field"
        />
        <label htmlFor="Message" className="input-label">
          Message*
        </label>
        <span className="input-highlight"></span>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
