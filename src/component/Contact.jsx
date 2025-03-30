import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append("access_key", "7dcd3ce1-7de4-49dd-960a-9214f55b7d95");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsLoading(false);

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-4xl font-bold mb-6">
        Contact{" "}
        <span className="underline decoration-wavy decoration-indigo-500">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Ready to make a move? Let's build your future together.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-wrap gap-4 mb-6">
          <input
            className="w-full md:w-1/2 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:border-indigo-500"
            type="text"
            name="Name"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full md:w-1/2 border border-gray-300 rounded py-3 px-4 focus:outline-none focus:border-indigo-500"
            type="email"
            name="Email"
            placeholder="Your Email"
            required
          />
        </div>
        <textarea
          className="w-full border border-gray-300 rounded py-3 px-4 mb-6 focus:outline-none focus:border-indigo-500 h-48 resize-none"
          name="Message"
          placeholder="Your Message"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg shadow-lg"
          type="submit"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </motion.button>

        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-green-500 mt-6"
          >
            {result}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default Contact;
