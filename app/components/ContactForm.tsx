'use client'
import { useState } from 'react';
import Button from "@/app/components/ui/Button";

interface FormData {
   name: string;
   email: string;
   subject: string;
   message: string;
}

const ContactForm = ({title}: {title: string}) => {

   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      subject: '',
      message: '',
   });
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');
   const [success, setSuccess] = useState<boolean>(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      setSuccess(false);

      try {
         const response = await fetch('https://stage.jerka.ca/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error('Failed to send message');
         }

         setSuccess(true);
         // Reset form
         setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
         });
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
         setLoading(false);
      }
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [id]: value,
      }));
   };

   return (
      <div className="space-y-6">
         <p className="text-lg text-white/80 font-bold">
         {title}
         </p>
         <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
               <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70"
               >
                  Name
               </label>
               <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
               />
            </div>

            <div>
               <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/70"
               >
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
               />
            </div>

            <div>
               <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/70"
               >
                  Subject
               </label>
               <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
               />
            </div>

            <div>
               <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70"
               >
                  Message
               </label>
               <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-3 bg-white/10 backdrop-blur-lg block w-full rounded-lg text-white focus:outline-none"
               ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && (
               <p className="text-green-500 text-sm">
                  Message sent successfully!
               </p>
            )}

            <Button
               variant="primary"
               size="lg"
               className="lg:w-auto min-w-40"
               disabled={loading}
            >
               {loading ? 'Sending...' : 'Send Message'}
            </Button>
         </form>
      </div>

   )
}

export default ContactForm;