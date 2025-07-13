import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'nehav2634@gmail.com',
      link: 'mailto:nehav2634@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+91 9870491330',
      link: 'tel:+919870491330',
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'New Delhi, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="absolute inset-0 -z-10 opacity-10 blur-2xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>

      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project, a question, or just want to say hello? Drop me a message — I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info & Social */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
              <p className="text-muted-foreground mb-4">
                Connect with me and stay up-to-date with my latest work and thoughts.
              </p>
              <div className="flex space-x-3">
                {[
                  { label: 'GitHub', href: 'https://github.com/nehaverma875' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/nehaverma18' },
                 
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg text-sm bg-primary/10 text-primary font-medium hover:bg-primary/20 transition"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
