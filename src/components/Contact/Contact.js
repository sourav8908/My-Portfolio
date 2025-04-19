// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// //import Footer from "../Footer"; // Assuming you have a Footer component
// //import "../../App.css"; // Import your global CSS
// import "../../style.css";

// function Contact() {
//   const [form, setForm] = useState({ 
//     Name: "", Email: "", Message: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${form.name}! Your message has been received.`);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="wrapper">
//       <div className="content">
//         <Container fluid className="contact-section" id="contact">
//           <Particle />
//           <Container style={{ padding: "80px 0" }}>
//             <h1 className="section-heading">
//               Get in <span className="purple">Touch</span>
//             </h1>
//             <Form className="contact-form" onSubmit={handleSubmit}>
//               <Row>
//                 <Col md={6} className="form-col">
//                   <Form.Group controlId="contactForm.Name">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6} className="form-col">
//                   <Form.Group controlId="contactForm.Email">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Form.Group controlId="contactForm.Message">
//                 <Form.Label>Message</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   name="message"
//                   placeholder="Your message"
//                   value={form.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>
//               <Button className="submit-btn" variant="primary" type="submit">
//                 Send Message
//               </Button>
//             </Form>
//           </Container>
//         </Container>
//       </div>

      
//     </div>
//   );
// }

// export default Contact;


// import React, { useState } from "react";

// function ContactForm() {
//   const [form, setForm] = useState({
//     Name: "",
//     Email: "",
//     Phone: "",
//     Message: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const sheetDB_API = "https://sheetdb.io/api/v1/2z2vdibyg4c5a";
//     const data = { data: form };

//     try {
//       const response = await fetch(sheetDB_API, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setForm({ Name: "", Email: "", Phone: "", Message: "" });
//       } else {
//         alert("Failed to send. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error sending message.");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
//       <h2>Contact Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             name="Name"
//             value={form.Name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label><br />
//           <input
//             type="email"
//             name="Email"
//             value={form.Email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label><br />
//           <input
//             type="tel"
//             name="Phone"
//             value={form.Phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Message:</label><br />
//           <textarea
//             name="Message"
//             value={form.Message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <br />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
import React, { useState } from "react";
import "../../style.css"; // Import the global styles

function ContactForm() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetDB_API = "https://sheetdb.io/api/v1/2z2vdibyg4c5a";
    const data = { data: form };

    try {
      const response = await fetch(sheetDB_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ Name: "", Email: "", Phone: "", Message: "" });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="contact-section">
          <h2 className="section-heading">Contact Form</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-col">
              <label>Name:</label>
              <input
                type="text"
                name="Name"
                value={form.Name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-col">
              <label>Email:</label>
              <input
                type="email"
                name="Email"
                value={form.Email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-col">
              <label>Phone:</label>
              <input
                type="tel"
                name="Phone"
                value={form.Phone}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-col">
              <label>Message:</label>
              <textarea
                name="Message"
                value={form.Message}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
