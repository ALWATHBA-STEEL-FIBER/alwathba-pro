import Link from "next/link";

const products = [
{
title: "Hooked End Steel Fiber",
image: "/images/products/hooked-end.jpg",
description:
"High-performance hooked-end steel fibers engineered to improve tensile strength, crack control, and structural durability.",
applications: [
"Industrial Floors",
"Warehouses",
"Roads",
"Precast",
],
href: "/products/hooked-end-steel-fiber",
},
{
title: "Micro Steel Fiber",
image: "/images/products/micro-steel-fiber.jpg",
description:
"Micro steel fibers designed for high-performance concrete requiring excellent crack resistance and toughness.",
applications: [
"Shotcrete",
"Tunnel Lining",
"Panels",
"UHPC",
],
href: "/products/micro-steel-fiber",
},
{
title: "Stainless Steel Fiber",
image: "/images/products/stainless-steel-fiber.jpg",
description:
"Premium stainless steel fibers for corrosive environments and demanding engineering applications.",
applications: [
"Marine",
"Chemical Plants",
"Infrastructure",
"Special Projects",
],
href: "/products/stainless-steel-fiber",
},
];

export default function Products() {
return (
<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Product Portfolio
</span>

<h2 className="mt-6 text-4xl font-extrabold text-slate-900">
Premium Steel Fiber Solutions
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
Engineered to enhance concrete performance across industrial,
commercial, and infrastructure projects.
</p>
</div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">
{products.map((product) => (
<article
key={product.title}
className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
<div className="overflow-hidden">
<img
src={product.image}
alt={product.title}
className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
/>
</div>

<div className="p-8">
<h3 className="text-2xl font-bold text-slate-900">
{product.title}
</h3>

<p className="mt-4 leading-7 text-slate-600">
{product.description}
</p>

<div className="mt-6 flex flex-wrap gap-2">
{product.applications.map((item) => (
<span
key={item}
className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
>
{item}
</span>
))}
</div>

<Link
href={product.href}
className="mt-8 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
>
Learn More
</Link>
</div>
</article>
))}
</div>

<div className="mt-14 text-center">
<Link
href="/products"
className="inline-flex items-center rounded-lg border-2 border-slate-900 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
>
View Complete Product Range
</Link>
</div>
</div>
</section>
);
}
