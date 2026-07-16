const statistics = [
{
value: "15+",
label: "Years of Experience",
description: "Industry knowledge and project-focused expertise.",
},
{
value: "500+",
label: "Projects Supplied",
description: "Supporting concrete applications across multiple sectors.",
},
{
value: "100+",
label: "Trusted Clients",
description: "Contractors, consultants, developers, and concrete specialists.",
},
{
value: "GCC",
label: "Regional Coverage",
description: "Reliable service across the Gulf and Middle East markets.",
},
];

export default function Statistics() {
return (
<section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
{/* Background decorations */}
<div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
<div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-orange-400">
Our Impact
</span>

<h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
Built on experience, reliability, and measurable performance
</h2>

<p className="mt-5 text-lg leading-8 text-slate-400">
We combine technical expertise, dependable supply, and
project-focused service to support stronger concrete solutions.
</p>
</div>

<div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{statistics.map((item) => (
<div
key={item.label}
className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/10"
>
<div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition group-hover:bg-orange-500/20" />

<p className="relative text-4xl font-extrabold text-orange-500 sm:text-5xl">
{item.value}
</p>

<h3 className="relative mt-4 text-lg font-bold text-white">
{item.label}
</h3>

<p className="relative mt-3 text-sm leading-6 text-slate-400">
{item.description}
</p>

<div className="relative mt-6 h-1 w-14 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />
</div>
))}
</div>
</div>
</section>
);
}
