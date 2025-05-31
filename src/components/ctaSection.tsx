const CtaSection = () => {
  return (
    <>
      <section className="cta-section py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-container">
                {/* <p className="fs-5 fw-semibold">Get in Touch</p> */}
                <h3 className="mb-4">Get in Touch</h3>
                <p className="mb-5 w-75 mx-auto">
                Ready to explore how Infinite Outsourcing Solutions can transform your business? Contact us
                today.
                </p>
                <button className="btn btn-primary px-5 py-3"><span>Contact Us</span></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
