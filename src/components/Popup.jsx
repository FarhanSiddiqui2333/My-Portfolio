import React, { useState } from "react";

const Popup = ({ onClose }) => {
  // Function to handle clicks on the overlay
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  // State variables for form inputs
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data to Formspree
      const clientDetail = await fetch("https://formspree.io/f/mdkgrqrj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, message }),
      });

      // Check if the response is ok
      if (clientDetail.ok && email && phone && message) {
        // Here you can handle the form data, e.g., send it to an API or log it
        setEmail("");
        setPhone("");
        setMessage("");
        onClose(); // Close the popup after submission
      } else {
        console.error("Error submitting form");
      }
      // Handle any errors that occur during the fetch
    } catch (error) {
      console.error("Error handling Client Deatil:", error);
    }
  };

  return (
    <div
      className="popup-overlay"
      onClick={(event) => {
        handleOverlayClick(event);
      }}
    >
      <div
        className="popup"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="200"
      >
        <form
          className="popup-content"
          onSubmit={(event) => handleFormSubmit(event)}
        >
          <h2>CONTACT ME</h2>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="number"
              name="phone"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <textarea
              name="message"
              className="message"
              placeholder="Message To fahansiddiqui@gmail.com..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button>
              SEND <i className="fa-solid fa-arrow-right"></i>
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Popup;
