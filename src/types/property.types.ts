export interface PropertyOwner {

  _id: string;

  name: string;

  email: string;

  phone?: string;

  avatar?: string;

}



export type PropertyStatus =
  | "available"
  | "sold";





export interface Property {


  _id: string;


  title: string;


  shortDescription: string;


  description: string;


  location: string;


  price: number;


  images: string[];



  category: string;


  propertyType: string;



  bedrooms?: number;


  bathrooms?: number;


  area?: number;



  rating?: number;



  status?: PropertyStatus;



  /*
  |
  | Populated from backend:
  | .populate("owner","name email")
  |
  */

  owner?: PropertyOwner;



  createdAt?: string;


  updatedAt?: string;


}