import {
  ShieldCheck,
  Users,
  BadgeCheck,
  Headphones,
} from "lucide-react";


const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is carefully verified to ensure genuine listings and reliable information.",
  },

  {
    icon: Users,
    title: "Trusted Agents",
    description:
      "Connect with experienced and verified real estate agents across Bangladesh.",
  },

  {
    icon: BadgeCheck,
    title: "Secure Transactions",
    description:
      "Enjoy safe and transparent property dealings with confidence.",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support team is always ready to help you find the right property.",
  },
];



export default function WhyChooseUs() {


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
Why Choose Us
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

A Better Way To Find Your Property

</h2>



<p
className="
mt-4
text-slate-600
"
>

We make property searching simple, secure, and
stress-free with verified listings and expert support.

</p>


</div>






{/* Cards */}

<div
className="
mt-12
grid
gap-6
sm:grid-cols-2
lg:grid-cols-4
"
>


{
features.map((feature)=>{


const Icon = feature.icon;


return (

<div
key={feature.title}
className="
group
rounded-2xl
border
border-[#E7DDCB]
bg-white
p-6
shadow-sm
transition-all
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-[#C89B3C]/10
text-[#C89B3C]
transition
group-hover:bg-[#1E3A5F]
group-hover:text-white
"
>

<Icon
className="
h-6
w-6
"
/>

</div>





<h3
className="
mt-5
text-xl
font-bold
text-[#172033]
"
>

{feature.title}

</h3>




<p
className="
mt-3
text-sm
leading-6
text-slate-600
"
>

{feature.description}

</p>



</div>


);


})
}



</div>



</div>


</section>

);

}