import {
  Star,
  Quote,
} from "lucide-react";


const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Property Buyer",
    image: "/images/user1.jpg",
    review:
      "I found my dream apartment through this platform. The verified listings made the entire process simple and trustworthy.",
    rating: 5,
  },

  {
    name: "Nusrat Jahan",
    role: "Home Owner",
    image: "/images/user2.jpg",
    review:
      "Listing my property was very easy. The support team helped me connect with genuine buyers quickly.",
    rating: 5,
  },

  {
    name: "Tanvir Hasan",
    role: "Real Estate Investor",
    image: "/images/user3.jpg",
    review:
      "The platform provides accurate information and saves a lot of time while searching for investment opportunities.",
    rating: 5,
  },
];



export default function Testimonials() {


return (

<section
className="
bg-white
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

Testimonials

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

What Our Customers Say

</h2>



<p
className="
mt-4
text-slate-600
"
>

Thousands of customers trust us to find their
perfect property.

</p>


</div>






{/* Cards */}

<div
className="
mt-12
grid
gap-6
md:grid-cols-3
"
>


{
testimonials.map((item)=>(


<div
key={item.name}
className="
relative
rounded-2xl
border
border-[#E7DDCB]
bg-[#FBF8F2]
p-6
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"
>



<Quote
className="
absolute
right-5
top-5
h-10
w-10
text-[#C89B3C]/20
"
/>





{/* Rating */}

<div
className="
flex
gap-1
"
>

{
Array.from({
length:item.rating
}).map((_,index)=>(

<Star
key={index}
className="
h-5
w-5
fill-[#C89B3C]
text-[#C89B3C]
"
/>

))
}

</div>





<p
className="
mt-5
text-sm
leading-7
text-slate-600
"
>

"{item.review}"

</p>






<div
className="
mt-6
flex
items-center
gap-4
"
>


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-full
bg-[#1E3A5F]
font-bold
text-white
"
>

{
item.name
.charAt(0)
}

</div>



<div>

<h3
className="
font-semibold
text-[#172033]
"
>

{item.name}

</h3>



<p
className="
text-sm
text-slate-500
"
>

{item.role}

</p>


</div>


</div>



</div>


))
}



</div>



</div>


</section>

);

}