import Link from "next/link";

const certifications = [
{
title: "Quality Management",
code: "ISO",
description:
"Documented quality procedures supporting consistent products, reliable service, and continuous improvement.",
},
{
title: "Product Compliance",
code: "TESTED",
description:
"Technical documentation and laboratory test reports available for approved steel fiber products.",
},
{
title: "Technical Data",
code: "TDS",
description:
"Clear product specifications, performance information, and recommended applications for engineering review.",
},
{
title: "Material Traceability",
code: "QA/QC",
description:
"Quality-control records designed to support material identification and project documentation.",
},
];

export default function Certifications() {
return (
<section className="relative overflow-hidden bg-slate-100 py-24">
<div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />

<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
<div>
<span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Quality & Compliance
</span>

<h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
Quality documentation that builds{" "}
<span className="text-orange-500">project confidence</span>
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
Our quality approach focuses on consistent product performance,
technical transparency, and the documentation required by
contractors, consultants, and project stakeholders.
</p>

<p className="mt-5 leading-8 text-slate-600">
Product data sheets, test reports, compliance documents, and
approved certificates can be organized in one accessible
download center.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<Link
href="/downloads"
className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-orange-500"
>
View Documents
</Link>

<Link
href="/contact"
className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 transition hover:border-orange-500 hover:text-orange-600"
>
Request Technical File
</Link>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-2">
{certifications.map((item) => (
<article
key={item.title}
className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
>
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-sm font-extrabold tracking-wide text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
{item.code}
</div>

<h3 className="mt-6 text-xl font-bold text-slate-950">
{item.title}
</h3>

<p className="mt-4 leading-7 text-slate-600">
{item.description}
</p>

<div className="mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />
</article>
))}
</div>
</div>

<div className="mt-14 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-5 text-sm leading-7 text-slate-700">
Replace the displayed certification names with the company’s verified
certificates and approved test documents before publishing.
</div>
</div>
</section>
);
}
