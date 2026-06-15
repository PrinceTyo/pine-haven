import { object, string } from "zod";

export const ReserveSchema = object({
  name: string().min(1),
  phone: string().min(10),
});
