"use client";

import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

import HeroSlider from "./HeroSlider";


const stats = [
  {
    value: "12K+",
    label: "Properties",
  },
  {
    value: "5K+",
    label: "Happy Buyers",
  },
  {
    value: "350+",
    label: "Verified Agents",
  },
];



export default function Hero() {


return (

<section
className="
relative
overflow-hidden
bg-gradient-to-br
from-[#F7F3EC]
via-[#FBF8F2]
to-white
"
>



{/* Background */}

<div
className="
absolute
-left-32
top-20
h-72
w-72
rounded-full
bg-[#C89B3C]/10
blur-3xl
"
/>



<div
className="
absolute
right-0
top-0
h-96
w-96
rounded-full
bg-[#1E3A5F]/10
blur-3xl
"
/>





<div
className="
mx-auto
max-w-7xl
px-4
pt-20
pb-10
sm:px-6
lg:px-8
"
>





<div
className="
grid
items-center
gap-10
lg:grid-cols-2
lg:min-h-[65vh]
"
>





{/* Left Content */}

<div>


<span
className="
inline-flex
rounded-full
border
border-[#C89B3C]/30
bg-[#C89B3C]/10
px-4
py-2
text-sm
font-medium
text-[#1E3A5F]
"
>

🇧🇩 Bangladesh's Trusted Property Platform

</span>





<h1
className="
mt-5
text-4xl
font-bold
leading-tight
text-[#172033]
sm:text-5xl
lg:text-6xl
"
>

Find Your


<span
className="
bg-gradient-to-r
from-[#1E3A5F]
to-[#C89B3C]
bg-clip-text
text-transparent
"
>

{" "}Dream Property

</span>


<br/>

With Confidence


</h1>





<p
className="
mt-5
max-w-xl
text-base
leading-7
text-slate-600
sm:text-lg
"
>

Discover premium apartments, luxury villas,
commercial spaces and land across Bangladesh.
Browse verified listings and connect with trusted
agents.

</p>







<div
className="
mt-7
flex
flex-col
gap-4
sm:flex-row
"
>



<Link
href="/properties"
className="
inline-flex
items-center
justify-center
rounded-xl
bg-gradient-to-r
from-[#1E3A5F]
to-[#C89B3C]
px-4
py-3
font-semibold
text-white
shadow-lg
transition
hover:-translate-y-1
"
>

Browse Properties

<ArrowRight
className="
ml-2
h-5
"
/>

</Link>





</div>







{/* Stats */}


<div
className="
mt-8
grid
grid-cols-3
rounded-2xl
border
border-[#E7DDCB]
bg-white
p-5
shadow-lg
"
>


{
stats.map((item)=>(


<div
key={item.label}
className="
text-center
"
>

<h3
className="
text-2xl
font-bold
text-[#1E3A5F]
sm:text-3xl
"
>

{item.value}

</h3>


<p
className="
mt-1
text-xs
text-slate-500
sm:text-sm
"
>

{item.label}

</p>


</div>


))
}


</div>




</div>







{/* Slider */}


<HeroSlider />





</div>





</div>


</section>


);

}