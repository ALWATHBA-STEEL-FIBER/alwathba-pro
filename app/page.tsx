"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
const [arabic, setArabic] = useState(false);
const text = arabic
? {
home: "الرئيسية",
about: "من نحن",
products: "المنتجات",
applications: "التطبيقات",
contact: "اتصل بنا",
quote: "اطلب عرض سعر",
label: "حلول متطورة لتسليح الخرسانة",
title1: "خرسانة أقوى.",
title2: "تسليح أكثر ذكاءً.",
intro:
"حلول متطورة من الألياف الفولاذية لزيادة قوة الخرسانة، والتحكم في التشققات، وتحسين المتانة وكفاءة التسليح.",
explore: "استكشف منتجاتنا",
discover: "تعرف على الوثبة",
aboutLabel: "عن الوثبة",
aboutTitle: "نُعزّز مستقبل البناء بالخرسانة",
aboutText:
"تقدم الوثبة ستيل فايبر منتجات وحلول تسليح هندسية متطورة، صُممت لتحسين أداء الخرسانة، وتقليل التشققات، وزيادة العمر التشغيلي للمشاريع.",
productsLabel: "منتجاتنا",
productsTitle: "حلول ألياف فولاذية للمشاريع المتطلبة",
applicationsLabel: "مجالات الاستخدام",
applicationsTitle: "مصممة لخدمة مشاريع البناء الحديثة",
contactLabel: "ابدأ مشروعك",
contactTitle: "هل تحتاج إلى حل موثوق للألياف الفولاذية؟",
contactText:
"تواصل مع فريقنا لمناقشة متطلبات مشروعك، والمواصفات الفنية، والجرعات المناسبة، وأهداف التسليح.",
emailLabel: "البريد الإلكتروني",
phoneLabel: "الهاتف",
emailButton: "تواصل معنا",
footer: "جميع الحقوق محفوظة لشركة الوثبة ستيل فايبر.",
}
: {
home: "Home",
about: "About",
products: "Products",
applications: "Applications",
contact: "Contact",
quote: "Request a Quote",
label: "Engineered Concrete Reinforcement",
title1: "Stronger concrete.",
title2: "Smarter reinforcement.",
intro:
"Advanced steel fiber solutions designed to enhance concrete strength, control cracking, improve durability, and optimize reinforcement efficiency.",
explore: "Explore Our Products",
discover: "Discover Al Wathba",
aboutLabel: "About Al Wathba",
aboutTitle: "Reinforcing the future of concrete construction",
aboutText:
"Al Wathba Steel Fiber provides advanced engineered reinforcement products designed to improve concrete performance, reduce cracking, and increase the service life of construction projects.",
productsLabel: "Our Products",
productsTitle: "Steel fiber solutions for demanding projects",
applicationsLabel: "Applications",
applicationsTitle: "Engineered for modern construction",
contactLabel: "Start Your Project",
contactTitle: "Need a reliable steel fiber solution?",
contactText:
"Contact our team to discuss project requirements, technical specifications, recommended dosage, and reinforcement objectives.",
emailLabel: "Email Address",
phoneLabel: "Phone Number",
emailButton: "Contact Us",
footer: "Al Wathba Steel Fiber. All rights reserved.",
};

const products = arabic
? [
{
title: "ألياف فولاذية بخطافات",
description:
"مناسبة للأرضيات الصناعية، والمستودعات، والساحات، والأساسات، والعناصر الخرسانية مسبقة الصب.",
},
{
title: "ألياف فولاذية مموجة",
description:
"توفر انتشارًا متجانسًا داخل الخرسانة وتساعد على تحسين التماسك والتحكم في التشققات.",
},
{
title: "حلول هندسية مخصصة",
description:
"حلول فنية وجرعات مقترحة يتم تطويرها وفق أحمال المشروع، وسماكة الأرضية، ومواصفات الخرسانة.",
},
]
: [
{
title: "Hooked-End Steel Fiber",
description:
"Suitable for industrial floors, warehouses, yards, foundations, and precast concrete elements.",
},
{
title: "Wavy Steel Fiber",
description:
"Designed for uniform concrete distribution, improved bonding, and enhanced crack control.",
},
{
title: "Customized Engineering Solutions",
description:
"Technical solutions and recommended dosages developed according to project loads, slab thickness, and concrete specifications.",
},
];

const applications = arabic
? [
"الأرضيات الصناعية",
"المستودعات والمصانع",
"الساحات ومواقف الشاحنات",
"الخرسانة مسبقة الصب",
"الطرق والجسور",
"البنية التحتية",
]
: [
"Industrial Flooring",
"Warehouses & Factories",
"Yards & Truck Parking",
"Precast Concrete",
"Roads & Bridges",
"Infrastructure",
];

const benefits = arabic
? ["قوة أعلى", "تحكم بالتشققات", "تنفيذ أسرع", "دعم فني"]
: [
"Higher Strength",
"Crack Control",
"Faster Installation",
"Technical Support",
];

return (
<main
dir={arabic ? "rtl" : "ltr"}
className="min-h-screen scroll-smooth bg-slate-950 text-white"
>
{/* Header */}
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
<a
href="#home"
aria-label="Al Wathba Steel Fiber"
className="flex min-w-0 items-center gap-3"
>
<Image
src="/logo.png"
alt="Al Wathba Steel Fiber Logo"
width={48}
height={48}
priority
className="h-10 w-auto shrink-0 object-contain"
/>

<div className="hidden sm:block">
<p className="whitespace-nowrap text-lg font-black tracking-wider">
AL WATHBA
</p>

<p className="whitespace-nowrap text-[10px] font-bold tracking-[0.3em] text-orange-500">
STEEL FIBER
</p>
</div>
</a>

<nav
aria-label="Main navigation"
className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex"
>
<a
href="#home"
className="transition duration-300 hover:text-orange-500"
>
{text.home}
</a>

<a
href="#about"
className="transition duration-300 hover:text-orange-500"
>
{text.about}
</a>

<a
href="#products"
className="transition duration-300 hover:text-orange-500"
>
{text.products}
</a>

<a
href="#applications"
className="transition duration-300 hover:text-orange-500"
>
{text.applications}
</a>

<a
href="#contact"
className="transition duration-300 hover:text-orange-500"
>
{text.contact}
</a>
</nav>

<div className="flex items-center gap-2">
<button
type="button"
onClick={() => setArabic((current) => !current)}
className="whitespace-nowrap border border-white/20 px-3 py-3 text-sm font-bold transition duration-300 hover:border-orange-500 hover:text-orange-500 sm:px-4"
aria-label={
arabic ? "Switch to English" : "التبديل إلى اللغة العربية"
}
>
{arabic ? "English" : "العربية"}
</button>

<a
href="#contact"
className="hidden whitespace-nowrap bg-orange-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-orange-600 md:block"
>
{text.quote}
</a>
</div>
</div>
</header>

{/* Hero Section */}
<section
id="home"
className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-5 pt-28"
>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#1e3a5f_0%,#020617_52%)]" />

<div className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

<div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">
<div>
<p className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
{text.label}
</p>

<h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
{text.title1}

<span className="block text-orange-500">{text.title2}</span>
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
{text.intro}
</p>

<div className="mt-10 flex flex-wrap gap-4">
<a
href="#products"
className="bg-orange-500 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
>
{text.explore}
</a>

<a
href="#about"
className="border border-white/25 px-7 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500"
>
{text.discover}
</a>
</div>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
{benefits.map((item, index) => (
<article
key={item}
className="border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-white/10"
>
<p className="text-sm font-black text-orange-500">
{String(index + 1).padStart(2, "0")}
</p>

<h2 className="mt-10 text-xl font-bold">{item}</h2>
</article>
))}
</div>
</div>
</section>

{/* About Section */}
<section
id="about"
className="scroll-mt-24 bg-white px-5 py-24 text-slate-900"
>
<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
<div>
<p className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">
{text.aboutLabel}
</p>

<h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
{text.aboutTitle}
</h2>
</div>

<div className="lg:pt-10">
<p className="text-lg leading-8 text-slate-600">
{text.aboutText}
</p>

<div className="mt-8 h-1 w-24 bg-orange-500" />
</div>
</div>
</section>

{/* Products Section */}
<section
id="products"
className="scroll-mt-24 bg-slate-100 px-5 py-24 text-slate-900"
>
<div className="mx-auto max-w-7xl">
<p className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">
{text.productsLabel}
</p>

<h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
{text.productsTitle}
</h2>

<div className="mt-14 grid gap-6 md:grid-cols-3">
{products.map((product, index) => (
<article
key={product.title}
className="group bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
>
<p className="font-black text-orange-500">
{String(index + 1).padStart(2, "0")}
</p>

<h3 className="mt-10 text-2xl font-black transition duration-300 group-hover:text-orange-500">
{product.title}
</h3>

<p className="mt-5 leading-7 text-slate-600">
{product.description}
</p>
</article>
))}
</div>
</div>
</section>

{/* Applications Section */}
<section
id="applications"
className="scroll-mt-24 bg-slate-900 px-5 py-24"
>
<div className="mx-auto max-w-7xl">
<p className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">
{text.applicationsLabel}
</p>

<h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
{text.applicationsTitle}
</h2>

<div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
{applications.map((item, index) => (
<article
key={item}
className="group bg-slate-900 p-8 transition duration-300 hover:bg-slate-800"
>
<p className="text-xs font-bold text-orange-500">
{String(index + 1).padStart(2, "0")}
</p>

<h3 className="mt-8 text-xl font-bold transition duration-300 group-hover:text-orange-500">
{item}
</h3>
</article>
))}
</div>
</div>
</section>

{/* Contact Section */}
<section
id="contact"
className="scroll-mt-24 bg-orange-500 px-5 py-24 text-slate-950"
>
<div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
<div>
<p className="text-xs font-black uppercase tracking-[0.3em]">
{text.contactLabel}
</p>

<h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
{text.contactTitle}
</h2>

<p className="mt-6 max-w-2xl text-lg leading-8">
{text.contactText}
</p>
</div>

<div className="bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
<div>
<p className="text-sm font-semibold text-slate-400">
{text.emailLabel}
</p>

<a
href="mailto:info@alwathbasteelfiber.com"
className="mt-3 block break-all text-lg font-bold transition duration-300 hover:text-orange-500 sm:text-xl"
>
info@alwathbasteelfiber.com
</a>
</div>

<div className="mt-8 border-t border-white/10 pt-8">
<p className="text-sm font-semibold text-slate-400">
{text.phoneLabel}
</p>

<a
href="tel:+962799996660"
dir="ltr"
className="mt-3 block text-xl font-bold transition hover:text-orange-500"
>
+962 79 999 6660
</a>

<a
href="tel:+962799996668"
dir="ltr"
className="mt-2 block text-xl font-bold transition hover:text-orange-500"
>
+962 79 999 6668
</a>
</div>

<a
href="mailto:info@alwathbasteelfiber.com"
className="mt-9 inline-block bg-orange-500 px-7 py-4 font-bold text-white transition duration-300 hover:bg-orange-600"
>
{text.emailButton}
</a>
</div>
</div>
</section>

{/* Footer */}
<footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-sm text-slate-500">
© 2026 {text.footer}
</footer>
</main>
);
}