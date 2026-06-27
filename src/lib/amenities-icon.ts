import {
  IoSnow,
  IoTv,
  IoWater,
  IoWifi,
  IoBed,
  IoRestaurant,
} from "react-icons/io5";
import { FaSpa, FaCouch, FaSwimmingPool } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { LuBath, LuShowerHead } from "react-icons/lu";
import { PiHairDryer } from "react-icons/pi";
import { IconType } from "react-icons";

const amenitiesIcons: Record<string, IconType> = {
  "Air Conditioner": IoSnow,
  "Smart TV": IoTv,
  Television: IoTv,
  "Private Bathroom": LuBath,
  "Hot Shower": LuShowerHead,
  "Hair Dryer": PiHairDryer,
  Balcony: MdBalcony,
  Sofa: FaCouch,
  Breakfast: IoRestaurant,
  "Swimming Pool": FaSwimmingPool,
  SPA: FaSpa,
  WiFi: IoWifi,
};

export const getAmenityIcon = (name: string): IconType => {
  return amenitiesIcons[name] ?? IoBed;
};
