import Link from "next/link";

export default function Hero() {
return (
<section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
{/* Background image */}
<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
"url('/images/hero/steel-fiber-hero.jpg')",
}}
/>

{/* Dark overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

{/* Decorative light */}
<div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

<div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
<div className="max-w-4xl">
<span className="mb-6 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-orange-400">
PREMIUM STEEL FIBER SOLUTIONS
</span>

<h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
Engineering the Future of{" "}
<span className="text-orange-500">
Concrete Reinforcement
</span>
</h1>

<p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
High-performance steel fiber solutions engineered to improve
concrete strength, durability, crack resistance, and long-term
performance across industrial and infrastructure projects.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<Link
href="/quotation"
className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-4 text-base font-bold text-white transition hover:bg-orange-600"
>
Request a Quotation
</Link>

<Link
href="/products"
className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
>
Explore Products
</Link>

<Link
href="/downloads"
className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-7 py-4 text-base font-bold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
>
Download Company Profile
</Link>
</div>

<div className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
{[
"Premium Quality",
"Technical Support",
"Reliable Delivery",
"Custom Solutions",
].map((item) => (
<div
key={item}
className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-slate-200 backdrop-blur-md"
>
{item}
</div>
))}
</div>
</div>
</div>
</section>
);
}