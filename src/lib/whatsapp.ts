import { business } from "@/config/business";

/**
 * Build a WhatsApp enquiry link.
 * TODO: REPLACE WITH REAL WHATSAPP NUMBER in src/config/business.ts
 */
export function whatsappLink(message: string): string {
  // REPLACE WITH REAL WHATSAPP NUMBER — set in src/config/business.ts
  const number = business.whatsappNumber; // placeholder: 919999999999
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string): string {
  return `Hello Baba Hariharnath Tiles & Marble House, I am interested in ${productName}. Please share price and availability.`;
}

export function quoteEnquiryMessage(input: {
  name: string;
  category: string;
  productName?: string;
  quantity?: string;
  message?: string;
}): string {
  return `Hello Baba Hariharnath Tiles & Marble House, I am ${input.name}. I want a quote for Category: ${input.category}, Product: ${input.productName || "-"}, Quantity: ${input.quantity || "-"}, Message: ${input.message || "-"}`;
}
