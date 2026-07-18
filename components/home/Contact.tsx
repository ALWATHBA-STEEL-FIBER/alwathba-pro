import Link from "next/link";
import {
ArrowRight,
Facebook,
Globe2,
Instagram,
Mail,
MessageCircle,
} from "lucide-react";

const contactItems = [
{
icon: Globe2,
title: "Website",
value: "alwathbasteelfiber.com",
href: "https://alwathbasteelfiber.com",
color: "text-orange-600",
background: "bg-orange-100",
},
{
icon: Mail,
title: "Email",
value: "info@alwathbasteelfiber.com",
href: "mailto:info@alwathbasteelfiber.com",
color: "text-slate-700",
background: "bg-slate-100",
},
{
icon: MessageCircle,
title: "WhatsApp",
value: "+962 79 996 6672",
href: "https://wa.me/962799966672",
color: "text-green-600",
background: "bg-green-100",
},
{
icon: Facebook,
title: "Facebook",
value: "AL WATHBA STEEL FIBER",
href: "https://www.facebook.com/share/1D46SKjYwq/?mibextid=wwXIfr",
color: "text-blue-600",
background: "bg-blue-100",
},
{
icon: Instagram,
title: "Instagram",
value: "@alwathba_steelfiber",
href: "https://www.instagram.com/alwathba_steelfiber?utm_source=qr&wa_status_inline=true",
color: "text-pink-600",
background: "bg-pink-100",
},
];

export default function Contact() {
return (
<section className="relative overflow-hidden bg-slate-100 py-24">
<div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />

<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
{/* Contact information */}
<div>
<span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Contact Us
</span>

<h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
Discuss your next project with our{" "}
<span className="text-orange-500">engineering team</span>
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
Share your project requirements with us, and our team will help
identify the most suitable steel fiber solution for your concrete
application.
</p>

<div className="mt-10 grid gap-5 sm:grid-cols-2">
{contactItems.map((item) => {
const Icon = item.icon;

return (
<a
key={item.title}
href={item.href}
target={
item.href.startsWith("http") ? "_blank" : undefined
}
rel={
item.href.startsWith("http")
? "noopener noreferrer"
: undefined
}
className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
>
<div
className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.background} ${item.color}`}
>
<Icon size={24} strokeWidth={2} />
</div>

<h3 className="mt-5 font-bold text-slate-950">
{item.title}
</h3>

<p className="mt-2 break-words text-sm leading-6 text-slate-600 transition group-hover:text-orange-600">
{item.value}
</p>
</a>
);
})}
</div>

<Link
href="/contact"
className="mt-10 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-orange-500"
>
View Contact Page
<ArrowRight size={18} />
</Link>
</div>

{/* Contact form */}
<div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-10">
<h3 className="text-2xl font-bold text-slate-950">
Send a Project Enquiry
</h3>

<p className="mt-3 leading-7 text-slate-600">
Complete the form below and provide a brief description of your
project requirements.
</p>

<form className="mt-8 space-y-5">
<div className="grid gap-5 sm:grid-cols-2">
<div>
<label
htmlFor="name"
className="mb-2 block text-sm font-bold text-slate-700"
>
Full Name
</label>

<input
id="name"
name="name"
type="text"
required
placeholder="Your full name"
className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
/>
</div>

<div>
<label
htmlFor="company"
className="mb-2 block text-sm font-bold text-slate-700"
>
Company
</label>

<input
id="company"
name="company"
type="text"
placeholder="Company name"
className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
/>
</div>
</div>

<div className="grid gap-5 sm:grid-cols-2">
<div>
<label
htmlFor="email"
className="mb-2 block text-sm font-bold text-slate-700"
>
Email Address
</label>

<input
id="email"
name="email"
type="email"
required
placeholder="name@company.com"
className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
/>
</div>

<div>
<label
htmlFor="phone"
className="mb-2 block text-sm font-bold text-slate-700"
>
Phone Number
</label>

<input
id="phone"
name="phone"
type="tel"
placeholder="+000 000 000 000"
className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
/>
</div>
</div>

<div>
<label
htmlFor="projectType"
className="mb-2 block text-sm font-bold text-slate-700"
>
Project Type
</label>

<select
id="projectType"
name="projectType"
className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
>
<option value="">Select project type</option>
<option value="industrial-floor">Industrial Floor</option>
<option value="warehouse">Warehouse</option>
<option value="road-bridge">Road or Bridge</option>
<option value="tunnel">Tunnel or Shotcrete</option>
<option value="precast">Precast Concrete</option>
<option value="other">Other Application</option>
</select>
</div>

<div>
<label
htmlFor="message"
className="mb-2 block text-sm font-bold text-slate-700"
>
Project Details
</label>

<textarea
id="message"
name="message"
required
rows={5}
placeholder="Tell us about the project, location, concrete volume, application, and required delivery date."
className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
/>
</div>

<button
type="submit"
className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
>
Submit Enquiry
<ArrowRight size={18} />
</button>

<p className="text-center text-xs leading-5 text-slate-500">
The form submission service will be connected during the final
development stage.
</p>
</form>
</div>
</div>
</div>
</section>
);
}