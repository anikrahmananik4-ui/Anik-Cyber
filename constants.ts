
import { ServiceItem, ServiceCategory } from './types';

export const PHONE_NUMBER = "01859334774";
export const WHATSAPP_LINK = `https://wa.me/8801859334774?text=${encodeURIComponent("Hello Anik Cyber.Dev, ami service nite chai.")}`;
export const EMAIL_ADDRESS = "anikrahmananik4@gmail.com";

export const SERVICES: ServiceItem[] = [
  // Government
  { id: "online-form", title: "Online Form Fill-up", category: ServiceCategory.GOVERNMENT },
  { id: "nid-correction", title: "NID Correction Apply", category: ServiceCategory.GOVERNMENT },
  { id: "birth-cert", title: "Birth Certificate Apply", category: ServiceCategory.GOVERNMENT },
  { id: "passport-app", title: "Passport Application", category: ServiceCategory.GOVERNMENT },
  { id: "job-app", title: "Job Application", category: ServiceCategory.GOVERNMENT },
  { id: "uni-admission", title: "University Admission Form", category: ServiceCategory.GOVERNMENT },
  { id: "result-check", title: "Result Check", category: ServiceCategory.GOVERNMENT },
  { id: "sim-reg", title: "SIM Registration Check", category: ServiceCategory.GOVERNMENT },
  
  // Document
  { id: "cv-making", title: "CV / Resume Making", category: ServiceCategory.DOCUMENT },
  { id: "cover-letter", title: "Cover Letter Writing", category: ServiceCategory.DOCUMENT },
  { id: "doc-scanning", title: "Document Scanning", category: ServiceCategory.DOCUMENT },
  { id: "photo-editing", title: "Photo Editing", category: ServiceCategory.DOCUMENT },
  { id: "pdf-convert", title: "PDF Convert / Merge / Split", category: ServiceCategory.DOCUMENT },
  { id: "typing", title: "Typing (Bangla / English)", category: ServiceCategory.DOCUMENT },
  { id: "data-entry", title: "Data Entry Work", category: ServiceCategory.DOCUMENT },

  // Digital
  { id: "email-id", title: "Email ID Create", category: ServiceCategory.DIGITAL },
  { id: "fb-id-page", title: "Facebook ID & Page Create", category: ServiceCategory.DIGITAL },
  { id: "yt-channel", title: "YouTube Channel & Management", category: ServiceCategory.DIGITAL },
  { id: "logo-design", title: "Logo Design (Basic)", category: ServiceCategory.DIGITAL },
  { id: "banner-design", title: "Poster / Banner Design", category: ServiceCategory.DIGITAL },

  // Payment
  { id: "payment-help", title: "Online Payment Help (Bkash/Nagad)", category: ServiceCategory.PAYMENT },
  { id: "bill-pay", title: "Utility Bill Pay (Elec/Water/Gas)", category: ServiceCategory.PAYMENT },
  { id: "train-bus-ticket", title: "Train / Bus / Air Ticket Booking", category: ServiceCategory.PAYMENT },
  { id: "shopping-order", title: "Online Shopping Order", category: ServiceCategory.PAYMENT },

  // Tech
  { id: "freelance-acc", title: "Freelancing Account & Gig", category: ServiceCategory.TECHNICAL },
  { id: "software-install", title: "Software & Windows Setup", category: ServiceCategory.TECHNICAL },
  { id: "tech-help", title: "Internet Browsing Help", category: ServiceCategory.TECHNICAL },
];
