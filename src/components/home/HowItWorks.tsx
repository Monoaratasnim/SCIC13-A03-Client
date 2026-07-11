import {
  Search,
  UserCheck,
  KeyRound,
} from "lucide-react";


const steps = [
  {
    number: "01",
    title: "Search Property",
    description:
      "Explore verified properties using location, category, and budget filters to find your perfect match.",
    icon: Search,
  },

  {
    number: "02",
    title: "Connect With Agent",
    description:
      "Contact trusted property agents and get expert guidance throughout your property journey.",
    icon: UserCheck,
  },

  {
    number: "03",
    title: "Get Your Dream Home",
    description:
      "Finalize your choice and complete your property purchase with confidence and security.",
    icon: KeyRound,
  },
];



export default function HowItWorks() {


return (

<section
className="
bg-[#FBF8F2]
py-16
"
>


<div
className="
mx-auto
max-w-7xl
px-4
sm:px-6
lg:px-8
"
>



{/* Heading */}

<div
className="
mx-auto
max-w-2xl
text-center
"
>


<p
className="
text-sm
font-semibold
uppercase
tracking-wider
text-[#C89B3C]
"
>

How It Works

</p>



<h2
className="
mt-3
text-3xl
font-bold
text-[#172033]
sm:text-4xl
"
>

Find Your Property In 3 Easy Steps

</h2>



<p
className="
mt-4
text-slate-600
"
>

Our simple process helps you discover, connect,
and secure your ideal property faster.

</p>


</div>







{/* Steps */}

<div
className="
relative
mt-12
grid
gap-8
md:grid-cols-3
"
>



{
steps.map((step)=>(


<div
key={step.number}
className="
relative
rounded-2xl
border
border-[#E7DDCB]
bg-white
p-6
text-center
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"
>



{/* Number */}

<div
className="
absolute
right-5
top-5
text-5xl
font-bold
text-[#C89B3C]/20
"
>

{step.number}

</div>





{/* Icon */}

<div
className="
mx-auto
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-[#1E3A5F]
text-white
"
>

<step.icon
className="
h-7
w-7
"
/>

</div>





<h3
className="
mt-6
text-xl
font-bold
text-[#172033]
"
>

{step.title}

</h3>




<p
className="
mt-3
text-sm
leading-6
text-slate-600
"
>

{step.description}

</p>



</div>


))
}



</div>



</div>


</section>

);

}