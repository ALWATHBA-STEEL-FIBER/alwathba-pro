import {
ShieldCheck,
Truck,
BadgeCheck,
Settings,
Headphones,
BarChart3,
} from "lucide-react";

const features = [
{
icon: ShieldCheck,
title: "Premium Quality",
description:
"Manufactured to deliver exceptional concrete reinforcement, durability, and long-term structural performance.",
},
{
icon: BadgeCheck,
title: "International Standards",
description:
"Products developed in accordance with internationally recognized engineering and quality standards.",
},
{
icon: Settings,
title: "Engineering Solutions",
description:
"Technical assistance to help specify the right steel fiber solution for every application.",
},
{
icon: Truck,
title: "Reliable Delivery",
description:
"Efficient logistics and dependable supply to keep your projects on schedule.",
},
{
icon: Headphones,
title: "Dedicated Support",
description:
"Responsive customer service before, during, and after project execution.",
},
{
icon: BarChart3,
title: "Cost Efficiency",
description:
"Optimized reinforcement solutions that improve performance while reducing overall project costs.",
},
];

export default function WhyChoose() {
return (
<section className="bg-slate-100 py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-orange-600">
Why AL WATHBA
</span>

<h2 className="mt-6 text-4xl font-extrabold text-slate-900">
Trusted Partner for Concrete Reinforcement
</h2>

<p className="mt-6 text-lg leading-8 text-slate-600">
We combine engineering expertise, premium steel fiber products,
and dependable service to deliver solutions that meet the highest
expectations across industrial and infrastructure projects.
</p>
</div>

<div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
{features.map((feature) => {
const Icon = feature.icon;

return (
<div
key={feature.title}
className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
<Icon size={30} />
</div>

<h3 className="mt-6 text-2xl font-bold text-slate-900">
{feature.title}
</h3>

<p className="mt-4 leading-7 text-slate-600">
{feature.description}
</p>

<div className="mt-6 h-1 w-16 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-28" />
</div>
);
})}
</div>
</div>
</section>
);
}