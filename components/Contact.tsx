"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);

    // Format timestamp in a readable format
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    // Prepare data object - column names must match your Google Sheet EXACTLY
    const data = {
      Name: formData.get("name") as string,
      Email: formData.get("email") as string,
      Phone: formData.get("phone") as string,
      Service: formData.get("service") as string,
      Message: formData.get("message") as string,
      Timestamp: timestamp,
    };

    try {
      // Get Sheet.Best API URL from environment variable
      const SHEET_BEST_API = process.env.NEXT_PUBLIC_SHEET_BEST_API;

      // Check if Sheet.Best is configured
      if (!SHEET_BEST_API || SHEET_BEST_API === "" || SHEET_BEST_API.includes("YOUR_SHEET_ID")) {
        // Demo mode - simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Log the data that would be sent (for testing)
        console.log("📋 Form data (Demo Mode):", data);
        console.log("💡 To save to Google Sheets, set up NEXT_PUBLIC_SHEET_BEST_API in .env.local");

        setSubmitStatus({
          type: "success",
          message: "Thank you! We'll get back to you within 24 hours. (Demo mode - Check console to see form data)",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        // Real mode - send to Sheet.Best
        console.log("📤 Sending to Sheet.Best...");
        console.log("📋 Data being sent:", data);

        const response = await fetch(SHEET_BEST_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("✅ Successfully saved to Google Sheets!");
          setSubmitStatus({
            type: "success",
            message: "Thank you! We'll get back to you within 24 hours.",
          });
          (e.target as HTMLFormElement).reset();
        } else {
          const errorText = await response.text();
          console.error("❌ Sheet.Best error:", response.status, errorText);

          // Parse the error to provide helpful feedback
          let errorDetail = "";
          try {
            const errorJson = JSON.parse(errorText);
            errorDetail = errorJson.detail || errorJson.message || errorText;
          } catch {
            errorDetail = errorText;
          }

          console.error("💡 Troubleshooting tips:");
          console.error("1. Make sure your Google Sheet has these EXACT column names (case-sensitive):");
          console.error("   Name | Email | Phone | Service | Message | Timestamp");
          console.error("2. Check Sheet.Best dashboard for connection status");
          console.error("3. Verify the Sheet.Best URL is correct");
          console.error("4. Make sure there are no duplicate column names in your sheet");

          throw new Error(`Failed to submit form: ${response.status} - ${errorDetail}`);
        }
      }
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please call us directly at (312) 555-1234.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Fill out the form and we'll get back to you within 24 hours with a free quote.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <a
                    href="tel:+13125551234"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                  >
                    (312) 555-1234
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <a
                    href="mailto:info@chicagohandyman.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    info@chicagohandyman.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">Chicago & surrounding suburbs</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="(312) 555-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="General Repairs">General Repairs</option>
                    <option value="Painting & Finishing">Painting & Finishing</option>
                    <option value="Electrical Work">Electrical Work</option>
                    <option value="Plumbing Services">Plumbing Services</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Home Improvements">Home Improvements</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
