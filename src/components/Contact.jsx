import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Check, Copy } from "lucide-react";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); 

  const contactInfo = [
    {
      type: "Email",
      value: "sayedmojumder2003@gmail.com",
      icon: <Mail size={22} />,
      action: "mailto:sayedmojumder2003@gmail.com",
      color: "text-purple-400 group-hover:bg-purple-500/10",
    },
    {
      type: "Phone",
      value: "+880 1840 787148",
      icon: <Phone size={22} />,
      action: "tel:+8801840787148",
      color: "text-cyan-400 group-hover:bg-cyan-500/10",
    },
    {
      type: "WhatsApp",
      value: "+880 1840 787148",
      icon: <MessageSquare size={22} />,
      action: "https://wa.me/8801840787148",
      color: "text-emerald-400 group-hover:bg-emerald-500/10",
    },
  ];

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.message) return;

  setIsSending(true);

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSubmitted(true);
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    })
    .catch((error) => {
      console.error("Error:", error);
      setIsSending(false);
      alert("Please try again later. Something went wrong.");
    });
};

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Let's Collaborate &{" "}
            <span className="text-gradient-purple-cyan">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-gray-400 mt-4 text-sm sm:text-base font-light">
            Have a project in mind, want to discuss software development
            opportunities, or just want to say hi? Write to me directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between reveal-left">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm font-light leading-relaxed">
                Click any communication method below to start a direct
                connection, or click the copy icon to copy details to your
                clipboard.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.type}
                    className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center justify-between group hover:border-slate-350 dark:hover:border-white/10 transition-colors"
                  >
                    <a
                      href={info.action}
                      target={info.type === "WhatsApp" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1 cursor-pointer"
                    >
                      <div
                        className={`p-3 rounded-xl bg-slate-100 dark:bg-white/2.5 transition-colors ${info.color}`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-gray-400 font-medium">
                          {info.type}
                        </div>
                        <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopy(info.value, info.type)}
                      className="p-2.5 rounded-xl bg-transparent hover:bg-slate-200 dark:hover:bg-white/5 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
                      title={`Copy ${info.type}`}
                    >
                      {copiedType === info.type ? (
                        <Check
                          size={16}
                          className="text-emerald-500 dark:text-emerald-400"
                        />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-slate-200 dark:border-white/5 flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400 font-light mt-6 lg:mt-0">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>
                Standard response time: Typically responds within 3 hours.
              </span>
            </div>
          </div>

          {/* Right: Modern Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col justify-between reveal-right">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/2.5 border border-slate-200 dark:border-white/5 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:bg-slate-200 dark:focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/2.5 border border-slate-200 dark:border-white/5 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:bg-slate-200 dark:focus:bg-white/5 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your project, ideas, or questions here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/2.5 border border-slate-200 dark:border-white/5 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:bg-slate-200 dark:focus:bg-white/5 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {submitted ? (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5">
                    <Check size={18} />
                    Message sent successfully!
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white transition-all duration-300 shadow-md shadow-purple-500/20"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    {!isSending && <Send size={14} className="mt-0.5" />}
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
