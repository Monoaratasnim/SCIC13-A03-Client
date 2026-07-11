"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];


export default function HeroSlider(){

const [currentSlide,setCurrentSlide]=useState(0);



useEffect(()=>{

const timer=setInterval(()=>{

setCurrentSlide((prev)=>
prev === heroImages.length-1
? 0
: prev+1
);

},5000);


return ()=>clearInterval(timer);


},[]);



const nextSlide=()=>{

setCurrentSlide((prev)=>
prev===heroImages.length-1
?0
:prev+1
);

};



const previousSlide=()=>{

setCurrentSlide((prev)=>
prev===0
?heroImages.length-1
:prev-1
);

};



return (

<div
className="
relative
mx-auto
w-full
max-w-xl
"
>


<div
className="
relative
aspect-[4/3]
overflow-hidden
rounded-[28px]
shadow-2xl
"
>


{
heroImages.map((image,index)=>(


<Image

key={image}

src={image}

alt={`Property ${index+1}`}

fill

priority={index===0}

sizes="
(max-width:768px)100vw,
(max-width:1200px)50vw,
600px
"

className={`
object-cover
transition-all
duration-700
${
currentSlide===index
?
"scale-100 opacity-100"
:
"scale-110 opacity-0"
}
`}

/>


))

}




<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/30
via-transparent
to-transparent
"
/>





{/* Badge */}

<div
className="
absolute
left-5
top-5
rounded-full
bg-white/90
px-4
py-2
text-sm
font-semibold
text-[#1E3A5F]
shadow-lg
"
>

⭐ Premium Listing

</div>





{/* Previous */}

<button

onClick={previousSlide}

aria-label="Previous slide"

className="
absolute
left-4
top-1/2
-translate-y-1/2
rounded-full
bg-white/90
p-2.5
shadow-lg
transition
hover:scale-110
"

>

<ChevronLeft
className="
h-5
w-5
text-[#1E3A5F]
"
/>


</button>





{/* Next */}

<button

onClick={nextSlide}

aria-label="Next slide"

className="
absolute
right-4
top-1/2
-translate-y-1/2
rounded-full
bg-white/90
p-2.5
shadow-lg
transition
hover:scale-110
"

>


<ChevronRight
className="
h-5
w-5
text-[#1E3A5F]
"
/>


</button>





{/* Indicators */}

<div
className="
absolute
bottom-5
left-1/2
flex
-translate-x-1/2
gap-2
"
>

{
heroImages.map((_,index)=>(

<button

key={index}

onClick={()=>setCurrentSlide(index)}

aria-label={`Go to slide ${index+1}`}

className={`
h-3
rounded-full
transition-all
duration-300
${
currentSlide===index
?
"w-8 bg-[#C89B3C]"
:
"w-3 bg-white/70"
}
`}

/>

))

}


</div>


</div>





{/* Floating Card */}

<div
className="
absolute
-hidden
lg:block
-bottom-6
left-1/2
w-[85%]
-translate-x-1/2
rounded-2xl
bg-white
p-5
shadow-xl
"
>


<div
className="
flex
items-center
justify-between
"
>


<div>

<p
className="
text-sm
text-slate-500
"
>
Featured Property
</p>


<h3
className="
mt-1
font-bold
text-[#1E3A5F]
"
>
Luxury Apartment
</h3>


<p
className="
text-sm
text-slate-500
"
>
Gulshan, Dhaka
</p>


</div>



<div
className="text-right"
>


<p
className="
text-sm
text-slate-500
"
>
Starting From
</p>


<h3
className="
text-2xl
font-bold
text-[#C89B3C]
"
>
৳ 85L
</h3>


</div>


</div>


</div>



</div>

);

}