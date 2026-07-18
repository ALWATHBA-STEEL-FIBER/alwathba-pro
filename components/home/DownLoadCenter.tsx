import Link from "next/link";

const downloads = [
{
title: "Company Profile",
description:
"Learn about AL WATHBA STEEL FIBER, our capabilities, experience, and solutions.",
type: "PDF",
href: "/downloads/company-profile",
},
{
title: "Product Catalogue",
description:
"Complete overview of our steel fiber products, specifications, and applications.",
type: "PDF",
href: "/downloads/product-catalogue",
},
{
title: "Technical Data Sheets",
description:
"Engineering specifications, dimensions, material properties, and performance data.",
type: "PDF",
href: "/downloads/technical-data-sheets",
},
{
title: "Certificates",
description:
"Quality certificates, compliance documents, and supporting technical files.",
type: "PDF",
href: "/downloads/certificates",
},
];

export default function DownloadCenter() {
return (
<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Download Center
</span>

<h2 className="mt-6 text-4xl font-extrabold text-slate-900">
Technical Resources
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
Access company documents, technical information, product literature,
and engineering resources in one place.
</p>
</div>

<div className="mt-16 grid gap-8 md:grid-cols-2">
{downloads.map((item) => (
<div
key={item.title}
className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
>
<div className="flex items-center justify-between">
<span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
{item.type}
</span>
</div>

<h3 className="mt-6 text-2xl font-bold text-slate-900">
{item.title}
</h3>

<p className="mt-4 leading-7 text-slate-600">
{item.description}
</p>

<Link
href={item.href}
className="mt-8 inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-orange-500"
>
Download
</Link>
</div>
))}
</div>
</div>
</section>
);
}