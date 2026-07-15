import Link from "next/link";

import {
  ArrowRight,
  Home,
} from "lucide-react";


export default function CTASection() {


return (

<section
className="
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



<div
className="
relative
overflow-hidden
rounded-3xl
bg-gradient-to-r
from-[#1E3A5F]
to-[#C89B3C]
px-6
py-12
shadow-xl
sm:px-12
"
>



{/* Decorative Circle */}

<div
className="
absolute
-right-20
-top-20
h-72
w-72
rounded-full
bg-white/10
blur-3xl
"
/>



<div
className="
relative
grid
items-center
gap-8
lg:grid-cols-2
"
>




{/* Content */}

<div>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-white/20
text-white
"
>

<Home
className="
h-6
w-6
"
/>

</div>




<h2
className="
mt-5
text-3xl
font-bold
text-white
sm:text-4xl
"
>

Ready To Find Your Dream Property?

</h2>




<p
className="
mt-4
max-w-xl
leading-7
text-white/80
"
>

Explore thousands of verified properties or list
your own property and connect with trusted buyers
across Bangladesh.

</p>



</div>







{/* Buttons */}

<div
className="
flex
flex-col
gap-4
sm:flex-row
lg:justify-end
"
>



<Link
href="/properties"
className="
inline-flex
items-center
justify-center
rounded-xl
bg-white
px-5
py-3
font-semibold
text-[#1E3A5F]
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



</div>



</div>



</div>


</section>

);

}