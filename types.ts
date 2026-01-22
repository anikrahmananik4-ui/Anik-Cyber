
export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
}

export enum ServiceCategory {
  GOVERNMENT = "Online & Government Services",
  DOCUMENT = "Document & Office Services",
  DIGITAL = "Digital & Social Media Services",
  PAYMENT = "Payment & Booking Services",
  TECHNICAL = "Freelancing & Technical Services"
}

export interface FormData {
  fullName: string;
  mobile: string;
  service: string;
  message: string;
}
