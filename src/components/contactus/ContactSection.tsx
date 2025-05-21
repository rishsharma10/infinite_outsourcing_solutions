import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import contactvector from "@/assets/contactusvector.jpg"
import contactusBg from "@/assets/bgcontactus.jpg"
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: "Email Us",
      details: "contact@infiniteos.com",
      link: "mailto:contact@infiniteos.com",
    },
    {
      icon: <Phone className="contact-icon" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Visit Us",
      details: " 3040 Post Oak blvd, Floor 18",
      link: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 11, 11, 0.86), rgba(226, 122, 53, 0.58)), url('https://img.freepik.com/free-photo/closeup-hand-writing-note-while-phone_53876-14460.jpg?ga=GA1.1.1619646831.1747818223&semt=ais_hybrid&w=740')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-primary mb-4">Contact Us</h2>
        <hr />
      </motion.div>
      <div className="row mt-4">
        <div className="col-lg-4">
        <h3 className="text-white">Ready to explore how Infinite Outsourcing Solutions can transform your business? Contact us
        today.</h3>
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              className="card mb-3 border-0 p-3 shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="d-flex align-items-center mb-2">
                {item.icon}
                <h5 className="ms-2 mb-0">{item.title}</h5>
              </div>
              <a href={item.link} className="text-decoration-none text-muted">
                {item.details}
              </a>
            </motion.div>
          ))}
          {/* <motion.img
            src={contactvector.src}
            height={200}
            alt="Contact Animation"
            className="img-fluid rounded mt-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          /> */}
        </div>

        <div className="col-lg-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="card p-4 shadow-sm"
          >
            <div className="card p-4 border-0 shadow">
              <h4 className="mb-4">Send us a message</h4>
              <AnimatePresence>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="alert alert-success"
                  >
                    <strong>Thank you!</strong> We'll get back to you shortly.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          className={`form-control ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Name"
                          {...register("name")}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">
                            {errors.name.message as string}
                          </div>
                        )}
                      </div>
                      <div className="col">
                        <input
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message as string}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className={`form-control ${
                          errors.subject ? "is-invalid" : ""
                        }`}
                        placeholder="Subject"
                        {...register("subject")}
                      />
                      {errors.subject && (
                        <div className="invalid-feedback">
                          {errors.subject.message as string}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Message"
                        rows={5}
                        {...register("message")}
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">
                          {errors.message.message as string}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="me-2" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
