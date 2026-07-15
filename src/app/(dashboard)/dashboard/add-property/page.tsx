"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { addProperty } from "@/lib/propertyApi";

export default function AddPropertyPage() {

  const [loading, setLoading] =
    useState(false);

  const [images, setImages] =
    useState<FileList | null>(null);

  const [previewImages, setPreviewImages] =
    useState<string[]>([]);


  const [formData, setFormData] = useState({

    title: "",

    location: "",

    price: "",

    category: "",

    propertyType: "",

    bedrooms: "",

    bathrooms: "",

    area: "",

    shortDescription: "",

    description: "",

  });



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    const {
      name,
      value,
    } = e.target;


    setFormData({

      ...formData,

      [name]: value,

    });

  };



  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    const files =
      e.target.files;


    setImages(files);


    if (!files) return;



    const previews =
      Array.from(files).map(
        (file) =>
          URL.createObjectURL(file)
      );


    setPreviewImages(previews);

  };




  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();


    try {


      setLoading(true);



      const data =
        new FormData();



      Object.entries(formData).forEach(
        ([key,value])=>{

          data.append(
            key,
            value
          );

        }
      );



      if(images){

        Array.from(images).forEach(
          (image)=>{

            data.append(
              "images",
              image
            );

          }
        );

      }




      await addProperty(data);



      toast.success(
        "Property added successfully"
      );



      setFormData({

        title:"",
        location:"",
        price:"",
        category:"",
        propertyType:"",
        bedrooms:"",
        bathrooms:"",
        area:"",
        shortDescription:"",
        description:"",

      });



      setImages(null);

      setPreviewImages([]);



    } catch(error:any){


      console.log(error);


      toast.error(
        error.message ||
        "Failed to add property"
      );


    } finally {


      setLoading(false);


    }


  };



  return (

    <div className="
      mx-auto
      max-w-6xl
      space-y-8
    ">


      <section className="
        rounded-3xl
        bg-white
        p-8
        shadow
      ">

        <h1 className="
          text-3xl
          font-bold
          text-[#1E3A5F]
        ">
          Add New Property
        </h1>


        <p className="
          mt-2
          text-slate-600
        ">
          Fill in the details below to publish your property listing.
        </p>


      </section>



      <form
        onSubmit={handleSubmit}
        className="
          space-y-8
          rounded-3xl
          bg-white
          p-8
          shadow
        "
      >


        <div className="
          grid
          gap-6
          md:grid-cols-2
        ">


          {[
            [
              "title",
              "Property Title",
              "Luxury Villa in Gulshan"
            ],

            [
              "location",
              "Location",
              "Gulshan, Dhaka"
            ],

            [
              "price",
              "Price",
              "85000000"
            ],

            [
              "bedrooms",
              "Bedrooms",
              "6"
            ],

            [
              "bathrooms",
              "Bathrooms",
              "5"
            ],

            [
              "area",
              "Area (sqft)",
              "3600"
            ],


          ].map(
            ([name,label,placeholder])=>(
              
              <div key={name}>


                <label className="
                  mb-2
                  block
                  font-medium
                ">
                  {label}
                </label>


                <input

                  name={name}

                  value={
                    formData[
                      name as keyof typeof formData
                    ]
                  }

                  onChange={handleChange}

                  placeholder={placeholder}

                  type={
                    [
                      "price",
                      "bedrooms",
                      "bathrooms",
                      "area"
                    ].includes(name)
                    ?
                    "number"
                    :
                    "text"
                  }


                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    outline-none
                    focus:border-[#1E3A5F]
                  "

                />

              </div>

            )
          )}
        {/* Category */}

        <div>

          <label className="
            mb-2
            block
            font-medium
          ">
            Category
          </label>


          <select

            name="category"

            value={formData.category}

            onChange={handleChange}

            required

            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              outline-none
              focus:border-[#1E3A5F]
            "

          >

            <option value="">
              Select Category
            </option>


            <option value="Residential">
              Residential
            </option>


            <option value="Commercial">
              Commercial
            </option>


          </select>


        </div>





        {/* Property Type */}


        <div>


          <label className="
            mb-2
            block
            font-medium
          ">
            Property Type
          </label>



    <select
  name="propertyType"
  value={formData.propertyType}
  onChange={handleChange}
  className="
    h-12
    w-full
    rounded-xl
    border
    border-slate-300
    px-4
    outline-none
    focus:border-[#1E3A5F]
  "
  required
>

  <option value="">
    Select Type
  </option>

  <option value="Apartment">
    Apartment
  </option>

  <option value="Villa">
    Villa
  </option>

  <option value="Duplex">
    Duplex
  </option>

  <option value="Office">
    Office
  </option>

  <option value="Shop">
    Shop
  </option>

</select>


        </div>



        </div>





        {/* Images */}


        <div>


          <label className="
            mb-2
            block
            font-medium
          ">

            Property Images

          </label>



          <input

            type="file"

            multiple

            accept="image/*"

            onChange={handleImageChange}


            className="
              w-full
              rounded-xl
              border
              border-slate-300
              p-3

              file:mr-4
              file:rounded-lg
              file:border-0
              file:bg-[#1E3A5F]
              file:px-4
              file:py-2
              file:text-white
              file:cursor-pointer
            "

          />



          <p className="
            mt-2
            text-xs
            text-slate-500
          ">

            Upload one or more property images.

          </p>




          {
            previewImages.length > 0 && (

              <div className="
                mt-5
                grid
                grid-cols-2
                gap-4
                md:grid-cols-4
              ">


                {
                  previewImages.map(
                    (image,index)=>(


                      <img

                        key={index}

                        src={image}

                        alt={`Preview ${index+1}`}

                        className="
                          h-32
                          w-full
                          rounded-xl
                          object-cover
                          shadow
                        "

                      />


                    )
                  )
                }


              </div>

            )
          }



        </div>






        {/* Short Description */}


        <div>


          <label className="
            mb-2
            block
            font-medium
          ">

            Short Description

          </label>



          <textarea


            name="shortDescription"


            value={
              formData.shortDescription
            }


            onChange={handleChange}


            rows={3}


            placeholder="
              Modern premium villa with city view.
            "


            required


            className="
              w-full
              rounded-xl
              border
              border-slate-300
              p-4
              outline-none
              focus:border-[#1E3A5F]
            "


          />


        </div>





        {/* Property Description */}

        


      
        {/* Description */}

        <div>

          <label className="
            mb-2
            block
            font-medium
          ">
            Property Overview
          </label>


          <textarea

            name="description"

            value={formData.description}

            onChange={handleChange}

            rows={6}

            placeholder="
            Beautiful luxury property with modern facilities,
            parking, premium interiors and excellent location.
            "

            className="
              w-full
              rounded-xl
              border
              border-slate-300
              p-4
              outline-none
              focus:border-[#1E3A5F]
            "

            required

          />


        </div>




        {/* Submit Button */}

        <div className="
          flex
          justify-end
        ">


          <button

            type="submit"

            disabled={loading}

            className="
              rounded-xl
              bg-[#1E3A5F]
              px-10
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#16304f]
              disabled:opacity-60
            "

          >

            {
              loading
              ?
              "Adding Property..."
              :
              "Add Property"
            }


          </button>


        </div>


      </form>


    </div>


  );

}