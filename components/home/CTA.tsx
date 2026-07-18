import Link from "next/link";

export default function CTA() {
return (
<section className="relative overflow-hidden bg-slate-950 py-24">
{/* Background */}
<div className="absolute inset-0">
<img
src="/images/hero/cta-background.jpg"
alt="Concrete Reinforcement"
className="h-full w-full object-cover opacity-20"
/>
<div className="absolute inset-0 bg-slate-950/80" />
</div>

<div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
<span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
Ready To Start?
</span>

<h2 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
Let's Build Stronger Concrete
<span className="block text-orange-500">
Together
</span>
</h2>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
Whether you're planning an industrial floor, warehouse,
infrastructure project, precast facility, or tunnel,
our engineering team is ready to recommend the most
suitable steel fiber solution for your project.
</p>

<div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
<Link
href="/quotation"
className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
>
Request a Quotation
</Link>

<Link
href="/contact"
className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur transition hover:bg-white/10"
>
Contact Engineering Team
</Link>
</div>

<div className="mt-16 grid gap-6 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<h3 className="text-3xl font-extrabold text-orange-500">
24h
</h3>

<p className="mt-2 text-slate-300">
Average quotation response time
</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<h3 className="text-3xl font-extrabold text-orange-500">
Engineering
</h3>

<p className="mt-2 text-slate-300">
Technical consultation and project support
</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<h3 className="text-3xl font-extrabold text-orange-500">
GCC
</h3>

<p className="mt-2 text-slate-300">
Supply across the Gulf and Middle East
</p>
</div>
</div>
</div>
</section>
);
}
