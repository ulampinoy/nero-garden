import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form
            id="contact-us"
            name="contact"
            method="POST"
            data-netlify="true"
            className="p-8 mx-auto border-2 rounded-lg shadow-md md:p-12 bg-cyan-50 border-zinc-500 max-w-sectionBody"
        >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                    <label className="block mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md border-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="grow">
                        <label className="block mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-md border-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md border-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md border-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                </div>

                <div>
                    <button type="submit" className="sb-component-button-primary bg-primary text-light hover:bg-primary/90">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
