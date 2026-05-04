// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Send, Linkedin, Twitter, Youtube } from "lucide-react";

// ── Contact form ─────────────────────────────────────────────────────────────
// function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     industry: "",
//     budget: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const inputStyle = {
//     background: "rgba(255,255,255,0.04)",
//     border: "1px solid rgba(255,255,255,0.08)",
//     borderRadius: "10px",
//     padding: "0.7rem 1rem",
//     color: "#fff",
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "0.875rem",
//     outline: "none",
//     width: "100%",
//     transition: "border-color 0.2s",
//   };

//   const labelStyle = {
//     fontSize: "0.7rem",
//     color: "rgba(255,255,255,0.4)",
//     letterSpacing: "0.05em",
//     display: "block",
//     marginBottom: "0.35rem",
//     fontFamily: "'Sora', sans-serif",
//   };

//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex flex-col items-center justify-center py-16 text-center"
//       >
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-2xl"
//           style={{
//             background: "rgba(139,92,246,0.15)",
//             border: "1px solid rgba(139,92,246,0.3)",
//           }}
//         >
//           🚀
//         </div>
//         <h3 className="font-sora font-bold text-xl text-white mb-2">
//           You're on the list!
//         </h3>
//         <p className="text-white/50 text-sm max-w-xs leading-relaxed">
//           We'll review your brief and reach out within 24 hours with a tailored
//           growth strategy.
//         </p>
//       </motion.div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label style={labelStyle}>Full Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Rahul Sharma"
//             style={inputStyle}
//             required
//             onFocus={(e) =>
//               (e.target.style.borderColor = "rgba(139,92,246,0.5)")
//             }
//             onBlur={(e) =>
//               (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//             }
//           />
//         </div>
//         <div>
//           <label style={labelStyle}>Email Address</label>
//           <input
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="rahul@brand.com"
//             style={inputStyle}
//             required
//             onFocus={(e) =>
//               (e.target.style.borderColor = "rgba(139,92,246,0.5)")
//             }
//             onBlur={(e) =>
//               (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//             }
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div>
//           <label style={labelStyle}>Phone / WhatsApp</label>
//           <input
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="+91 98765 43210"
//             style={inputStyle}
//             onFocus={(e) =>
//               (e.target.style.borderColor = "rgba(139,92,246,0.5)")
//             }
//             onBlur={(e) =>
//               (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//             }
//           />
//         </div>
//         <div>
//           <label style={labelStyle}>Industry</label>
//           <select
//             name="industry"
//             value={form.industry}
//             onChange={handleChange}
//             style={{ ...inputStyle, cursor: "pointer" }}
//             onFocus={(e) =>
//               (e.target.style.borderColor = "rgba(139,92,246,0.5)")
//             }
//             onBlur={(e) =>
//               (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//             }
//           >
//             <option value="" style={{ background: "#0a0a10" }}>
//               Select your industry
//             </option>
//             {[
//               "E-commerce / D2C",
//               "Ed-Tech",
//               "Real Estate",
//               "Healthcare",
//               "B2B SaaS",
//               "Other",
//             ].map((v) => (
//               <option key={v} value={v} style={{ background: "#0a0a10" }}>
//                 {v}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div>
//         <label style={labelStyle}>Monthly Ad Budget</label>
//         <select
//           name="budget"
//           value={form.budget}
//           onChange={handleChange}
//           style={{ ...inputStyle, cursor: "pointer" }}
//           onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
//           onBlur={(e) =>
//             (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//           }
//         >
//           <option value="" style={{ background: "#0a0a10" }}>
//             Select budget range
//           </option>
//           {["Under ₹50K", "₹50K – ₹2L", "₹2L – ₹10L", "₹10L+"].map((v) => (
//             <option key={v} value={v} style={{ background: "#0a0a10" }}>
//               {v}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label style={labelStyle}>Biggest challenge right now</label>
//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="e.g. High CAC, scaling plateaus, no brand awareness..."
//           rows={3}
//           style={{ ...inputStyle, resize: "vertical" }}
//           onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
//           onBlur={(e) =>
//             (e.target.style.borderColor = "rgba(255,255,255,0.08)")
//           }
//         />
//       </div>

//       <motion.button
//         type="submit"
//         whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(139,92,246,0.5)" }}
//         whileTap={{ scale: 0.97 }}
//         className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl
//                    text-sm font-medium text-white border-none cursor-pointer mt-1"
//         style={{
//           background: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
//           boxShadow: "0 0 28px rgba(139,92,246,0.3)",
//         }}
//       >
//         Book Strategy Call <Send size={14} />
//       </motion.button>
//     </form>
//   );
// }

// ── Footer links data ─────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    heading: "Services",
    links: [
      "Performance Ads",
      "Branding",
      "SEO",
      "Web Experience",
      "Content Strategy",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Portfolio"],
  },
  {
    heading: "Contact",
    links: ["vipprowdigital@gmail.com", "+91 96699 32121", "Jabalpur, India"],
  },
];

// const SOCIALS = [
//   { icon: Linkedin, label: "LinkedIn" },
//   { icon: Twitter, label: "Twitter" },
//   // { icon: Instagram, label: "Instagram" },
//   { icon: Youtube, label: "YouTube" },
// ];

// ── Main footer ───────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <>
      {/* Contact section */}
      {/* <section id="contact" className="relative z-10 py-24 px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="section-label mb-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in touch
          </motion.p>

          <motion.h2
            className="font-sora text-3xl md:text-5xl font-bold tracking-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Ready to{' '}
            <span style={{ color: '#8B5CF6' }}>Dominate?</span>
          </motion.h2>

          <motion.p
            className="text-white/45 text-sm mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            Share your brief and we'll craft a tailored growth strategy within 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 text-left"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer
        className="relative z-10 px-6 md:px-10 pt-12 pb-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="font-sora text-xl font-extrabold tracking-widest gradient-text mb-2">
                VIPPROW
              </div>
              <p className="text-white/35 text-sm italic">
                Build. Scale. Dominate.
              </p>
            </div>

            {/* Link columns */}
            <div className="flex flex-wrap gap-10">
              {FOOTER_COLS.map((col) => (
                <div key={col.heading}>
                  <h4 className="font-sora text-[0.65rem] tracking-widest uppercase text-white/30 mb-4">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="/"
                          className="text-[0.78rem] text-white/50 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-white/25 text-xs">
              © {new Date().getFullYear()} VIPPROW. All rights reserved.
            </p>

            {/* <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "rgba(139,92,246,0.5)",
                  }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.45)" />
                </motion.a>
              ))}
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
