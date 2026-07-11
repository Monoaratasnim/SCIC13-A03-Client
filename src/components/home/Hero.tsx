"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

import {
  ArrowRight,
  Search,
  MapPin,
  Building2,
  BadgeDollarSign,
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


const locations = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Khulna",
  "Rajshahi",
];


const propertyTypes = [
  "Apartment",
  "Villa",
  "Duplex",
  "Commercial",
];


const budgets = [
  "20 Lakh",
  "50 Lakh",
  "1 Crore",
  "2 Crore+",
];



export default function Hero() {


  const router = useRouter();


  const [location,setLocation] = useState("");

  const [propertyType,setPropertyType] = useState("");

  const [budget,setBudget] = useState("");



  const handleSearch = () => {


    const params = new URLSearchParams();


    if(location)
      params.set("location",location);


    if(propertyType)
      params.set("type",propertyType);


    if(budget)
      params.set("budget",budget);



    router.push(
      `/properties?${params.toString()}`
    );


  };



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




{/* Hero Main */}

<div
className="
grid
items-center
gap-10
lg:grid-cols-2
lg:min-h-[65vh]
"
>



{/* Left */}

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
px-7
py-3
font-semibold
text-white
shadow-lg
transition
hover:-translate-y-1
"
>

Browse Properties

<ArrowRight className="ml-2 h-5"/>

</Link>




<Link
href="/register"
className="
rounded-xl
border
border-[#C89B3C]
bg-white
px-7
py-3
text-center
font-semibold
text-[#1E3A5F]
"
>

List Property

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
className="text-center"
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







{/* Search */}

<div
className="
mt-8
rounded-3xl
border
border-[#E7DDCB]
bg-white
p-5
shadow-xl
"
>


<div
className="
grid
gap-4
md:grid-cols-2
lg:grid-cols-4
lg:items-end
"
>



<SearchSelect
icon={<MapPin/>}
title="Location"
value={location}
setValue={setLocation}
options={locations}
/>




<SearchSelect
icon={<Building2/>}
title="Property Type"
value={propertyType}
setValue={setPropertyType}
options={propertyTypes}
/>




<SearchSelect
icon={<BadgeDollarSign/>}
title="Budget"
value={budget}
setValue={setBudget}
options={budgets}
/>




<button
onClick={handleSearch}
className="
flex
h-[50px]
w-full
items-center
justify-center
rounded-xl
bg-gradient-to-r
from-[#1E3A5F]
to-[#C89B3C]
px-5
text-sm
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
"
>

<Search className="mr-2 h-5 w-5"/>

Search Properties

</button>



</div>


</div>





</div>


</section>


);

}






type SearchSelectProps = {

icon:React.ReactNode;

title:string;

value:string;

setValue:(value:string)=>void;

options:string[];

};





function SearchSelect({

icon,

title,

value,

setValue,

options,


}:SearchSelectProps){



return (

<div>


<label
className="
mb-2
block
text-sm
font-medium
text-slate-500
"
>

{title}

</label>




<div
className="
flex
h-[50px]
items-center
rounded-xl
border
border-slate-200
px-3
transition
focus-within:border-[#C89B3C]
"
>


<span
className="
mr-2
text-[#C89B3C]
"
>

{icon}

</span>



<select
value={value}
onChange={(e)=>setValue(e.target.value)}
className="
w-full
bg-transparent
text-sm
outline-none
"
>


<option value="">
All
</option>



{
options.map((item)=>(

<option
key={item}
value={item}
>

{item}

</option>

))
}



</select>



</div>


</div>

);

}