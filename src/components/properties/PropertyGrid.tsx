"use client";

import Image from "next/image";
import Link from "next/link";


type Property = {
  _id: string;
  title: string;
  shortDescription: string;
  location: string;
  price: number;
  images: string[];
  category: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
};


type Pagination = {
  page: number;
  totalPages: number;
};


type PropertyGridProps = {
  properties: Property[];
  loading: boolean;
  pagination?: Pagination;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};



export default function PropertyGrid({
  properties,
  loading,
  pagination,
  setPage,
}: PropertyGridProps) {



if(loading){

return(
<div className="
grid
grid-cols-1
gap-5
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
">

{
Array.from({length:8}).map((_,i)=>(

<div
key={i}
className="
animate-pulse
rounded-3xl
bg-white
p-3
shadow-sm
"
>

<div className="
h-40
rounded-2xl
bg-gray-200
"/>

<div className="mt-4 space-y-3">

<div className="h-4 rounded bg-gray-200"/>
<div className="h-4 w-2/3 rounded bg-gray-200"/>
<div className="h-8 rounded bg-gray-200"/>

</div>

</div>

))
}

</div>
)

}



if(!properties.length){

return(
<div className="
rounded-3xl
bg-white
py-16
text-center
shadow-sm
">

<h2 className="
text-xl
font-bold
text-[#1E3A5F]
">
No Properties Found
</h2>

<p className="mt-2 text-gray-500">
Try changing your filters.
</p>

</div>
)

}



return(

<>


<div
className="
grid
grid-cols-1
gap-5
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
"
>


{
properties.map((property)=>(


<div
key={property._id}
className="
group
flex
h-full
flex-col
overflow-hidden
rounded-3xl
bg-white
shadow-[0_8px_30px_rgb(0,0,0,0.06)]
transition
duration-300
hover:-translate-y-1
hover:shadow-[0_15px_35px_rgb(0,0,0,0.12)]
"
>


{/* Image */}

<div className="
relative
h-40
overflow-hidden
">

<Image

src={
property.images?.[0] ||
"/images/property-placeholder.jpg"
}

alt={property.title}

fill

sizes="
(max-width:768px)100vw,
(max-width:1200px)50vw,
25vw
"

className="
object-cover
transition
duration-500
group-hover:scale-105
"

/>


<div
className="
absolute
left-3
top-3
rounded-full
bg-white/90
px-3
py-1
text-xs
font-semibold
text-[#1E3A5F]
backdrop-blur
"
>

{property.category}

</div>


</div>




{/* Content */}

<div className="
flex
flex-1
flex-col
p-4
">


<div className="
text-xs
font-semibold
uppercase
tracking-wide
text-[#C89B3C]
">

{property.propertyType}

</div>



<h2
className="
mt-2
line-clamp-1
text-base
font-bold
text-[#1E3A5F]
"
>

{property.title}

</h2>



<p
className="
mt-2
line-clamp-2
text-sm
text-gray-500
"
>

{property.shortDescription}

</p>



<p
className="
mt-2
line-clamp-1
text-sm
text-gray-500
"
>

📍 {property.location}

</p>





{/* Details */}

<div
className="
mt-3
grid
grid-cols-3
rounded-xl
bg-[#F8FAFC]
p-2
text-center
"
>


<div>

<p className="
text-sm
font-bold
text-[#1E3A5F]
">

{property.bedrooms ?? "-"}

</p>

<span className="text-[11px] text-gray-500">
Beds
</span>

</div>



<div>

<p className="
text-sm
font-bold
text-[#1E3A5F]
">

{property.bathrooms ?? "-"}

</p>

<span className="text-[11px] text-gray-500">
Baths
</span>

</div>




<div>

<p className="
text-sm
font-bold
text-[#1E3A5F]
">

{property.area ?? "-"}

</p>

<span className="text-[11px] text-gray-500">
Sqft
</span>

</div>


</div>





{/* Bottom */}

<div
className="
mt-auto
flex
items-center
justify-between
gap-2
pt-4
"
>


<span
className="
text-sm
font-bold
text-[#C89B3C]
"
>

৳ {property.price.toLocaleString()}

</span>




<Link

href={`/properties/${property._id}`}

className="
rounded-xl
bg-[#1E3A5F]
px-3
py-2
text-xs
font-semibold
text-white
transition
hover:bg-[#152b46]
"

>

View Details

</Link>


</div>


</div>


</div>


))
}


</div>





{/* Pagination */}

{
pagination &&
pagination.totalPages > 1 &&

<div
className="
mt-10
flex
flex-wrap
justify-center
gap-2
"
>


<button

disabled={pagination.page===1}

onClick={()=>setPage(pagination.page-1)}

className="
rounded-xl
px-4
py-2
text-sm
shadow-sm
bg-white
disabled:opacity-50
"

>

Prev

</button>




{
Array.from({
length:pagination.totalPages
}).map((_,i)=>(


<button

key={i}

onClick={()=>setPage(i+1)}

className={`
h-10
w-10
rounded-xl
text-sm
font-medium
${
pagination.page===i+1
?
"bg-[#1E3A5F] text-white"
:
"bg-white shadow-sm"
}
`}

>

{i+1}

</button>


))
}





<button

disabled={
pagination.page===pagination.totalPages
}

onClick={()=>setPage(pagination.page+1)}

className="
rounded-xl
bg-white
px-4
py-2
text-sm
shadow-sm
disabled:opacity-50
"

>

Next

</button>


</div>

}


</>

)

}