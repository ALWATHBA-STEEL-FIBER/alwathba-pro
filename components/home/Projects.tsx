import Link from "next/link";

const projects = [
{
title: "Industrial Warehouse Flooring",
location: "Saudi Arabia",
image: "/images/projects/project-1.jpg",
category: "Industrial Floors",
description:
"Heavy-duty concrete flooring reinforced with premium steel fibers for maximum durability and reduced maintenance.",
},
{
title: "Infrastructure Highway Project",
location: "United Arab Emirates",
image: "/images/projects/project-2.jpg",
category: "Roads & Bridges",
description:
"Steel fiber reinforced concrete designed to improve crack resistance and long-term structural performance.",
},
{
title: "Precast Manufacturing Facility",
location: "Jordan",
image: "/images/projects/project-3.jpg",
category: "Precast Concrete",
description:
"Reliable reinforcement solutions supporting high-quality precast concrete production.",
},
];

export default function Projects() {
return (
<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Featured Projects
</span>

<h2 className="mt-6 text-4xl font-extrabold text-slate-900">
Proven Performance Across Multiple Industries
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
Discover how AL WATHBA STEEL FIBER contributes to stronger,
safer, and longer-lasting concrete structures.
</p>
</div>

<div className="mt-16 grid gap-8 lg:grid-cols-3">
{projects.map((project) => (
<article
key={project.title}
className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
<div className="overflow-hidden">
<img
src={project.image}
alt={project.title}
className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
/>
</div>

<div className="p-8">
<span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
{project.category}
</span>

<h3 className="mt-5 text-2xl font-bold text-slate-900">
{project.title}
</h3>

<p className="mt-2 text-sm font-semibold text-slate-500">
{project.location}
</p>

<p className="mt-5 leading-7 text-slate-600">
{project.description}
</p>

<Link
href="/projects"
className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-orange-500"
>
View Project
</Link>
</div>
</article>
))}
</div>

<div className="mt-16 text-center">
<Link
href="/projects"
className="inline-flex rounded-lg border-2 border-slate-900 px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-900 hover:text-white"
>
View All Projects
</Link>
</div>
</div>
</section>
);
}