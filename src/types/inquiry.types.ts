export interface InquiryUser {

  _id: string;

  name: string;

  email: string;

  phone?: string;

  avatar?: string;

}





export interface InquiryProperty {

  _id: string;

  title: string;

  location: string;

  price: number;

  images?: string[];

}





export interface Inquiry {


  _id: string;



  property:
    | string
    | InquiryProperty;



  sender:
    | string
    | InquiryUser;



  owner:
    | string
    | InquiryUser;



  message: string;



  phone: string;



  status:
    | "pending"
    | "contacted"
    | "closed";



  createdAt?: string;



  updatedAt?: string;

}