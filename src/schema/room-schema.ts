import { coerce, object, string, array } from "zod";

export const RoomSchema = object({
  name: string().trim().min(6, "Name must be at least 6 characters"),
  description: string().min(50, "Description must be at least 50 characters"),
  capacity: coerce
    .number({
      message: "Capacity must be a number",
    })
    .gt(0, "Capacity must be greater than 0"),
  price: coerce
    .number({
      message: "Price must be a number",
    })
    .gt(0, "Price must be greater than 0"),
  amenities: array(string()).nonempty("Please select at least one amenity"),
});
