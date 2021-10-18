export interface Category{
  id: string;
  title: string;
  description: string;
  url: string;
}
export interface Order{
  id: number;
  type: String;
  amount: number;
  nameClient: string;
  surnameClient: string;
  address: string;
  mobileNumber: string;
  createdDate: Date;
}
