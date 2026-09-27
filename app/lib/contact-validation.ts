import * as Yup from "yup";
import { serviceTypeOptions } from "@/app/components/fsx-consulting/consulting-data";

export const contactValidationSchema = Yup.object({
  firstName: Yup.string().trim().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: Yup.string().trim().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  email: Yup.string().trim().email("Enter a valid email address").required("Email is required"),
  phone: Yup.string().trim().transform((value: string) => value.replace(/[\s()-]/g, "")).matches(/^\+?\d{10,15}$/, "Enter a valid phone number with 10–15 digits").required("Phone number is required"),
  serviceType: Yup.string().oneOf([...serviceTypeOptions], "Select a valid service").required("Select a service"),
  company: Yup.string().trim(),
  message: Yup.string().trim().min(20, "Message must be at least 20 characters").required("Message is required"),
});
