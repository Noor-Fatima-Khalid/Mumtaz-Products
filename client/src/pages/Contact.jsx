import { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully!")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen pt-[100px] px-5 bg-sage">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display text-green-dark mb-4">
            Get in Touch
          </h1>
          <p className="text-green-mid max-w-2xl mx-auto text-base md:text-lg">
            Have questions or need help? Contact Mumtaz Products anytime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT - Info */}
          <div className="bg-cream border border-green-light/40 rounded-card p-8 shadow-card">
            <h2 className="text-xl font-display text-green-dark mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-green-mid">

              <div>
                <h3 className="text-green-dark font-semibold mb-1">Company</h3>
                <p>Mumtaz Products</p>
              </div>

              <div>
                <h3 className="text-green-dark font-semibold mb-1">Phone</h3>
                <p>+92 3XX XXXXXXX</p>
              </div>

              <div>
                <h3 className="text-green-dark font-semibold mb-1">Email</h3>
                <p>mumtazproducts@gmail.com</p>
              </div>

              <div>
                <h3 className="text-green-dark font-semibold mb-1">Address</h3>
                <p>Your business address here</p>
              </div>

              <div>
                <h3 className="text-green-dark font-semibold mb-1">Business Hours</h3>
                <p>Mon – Sat: 10 AM – 7 PM</p>
                <p>Sunday: Closed</p>
              </div>

            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="bg-cream border border-green-light/40 rounded-card p-8 shadow-card">

            <h2 className="text-xl font-display text-green-dark mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-btn border border-green-light/50 focus:border-green-mid outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-btn border border-green-light/50 focus:border-green-mid outline-none"
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-btn border border-green-light/50 focus:border-green-mid outline-none resize-none"
              />

              <button
                type="submit"
                className="bg-green-dark text-white py-3 rounded-btn font-semibold hover:bg-green-mid transition"
              >
                Send Message
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-green-mid">
              We usually respond within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact