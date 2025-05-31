import { ComputerIcon, HandIcon, ServerIcon } from "lucide-react";

const NewWhyChooseUs = () => {
  return (
    <>
      <section className="new-why-chooseUs">
        <div className="container">
          <div className="row g-3" style={{ alignItems: "stretch" }}>
            <div className="col-md-4">
              <div className="choose-us-title-container">
                <div className="choose-us-title-inner chooseUs-flip-card-1">
                  <HandIcon />
                  <h3 className="mt-3">Why Choose Us</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet Lorem, ipsum. Lorem ipsum dolor.
                  </p>
                  <button className="btn btn-primary px-5 py-2">
                    <span>Explore</span>
                  </button>
                </div>
                <div className="choose-us-title-inner chooseUs-flip-card-2">
                  <ServerIcon />
                  <h3 className="mt-3">Why Choose Us</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
                    sit amet Lorem, ipsum. Lorem ipsum dolor. Lorem, ipsum. Lorem ipsum dolor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row g-2">
                {[...Array(4)].map((index) => (
                  <div key={index} className="col-md-6">
                    <div className="choose-us-card h-100">
                      <ComputerIcon />
                      <h3 className="mt-3">Lorem, ipsum.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Consequatur, excepturi.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewWhyChooseUs;
