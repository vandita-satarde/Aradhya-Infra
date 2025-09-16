// frontend/src/utils/iconMap.js
import { MdElevator } from "react-icons/md"; // Material Design icon
import {
  FaDumbbell,
  FaWifi,
  FaCar,
  FaSwimmer,
  FaChild,
  FaShieldAlt,
  FaStar,
  FaRegBuilding,
  FaRegCheckCircle,
  FaRoad,
  FaTint,
  FaBolt,
  FaToolbox,
  FaTree,
  FaEllipsisH,
  FaUtensils,
  FaCouch,
  FaHome,
} from "react-icons/fa";

export const facilityIcons = {
  Gym: <FaDumbbell />,
  WiFi: <FaWifi />,
  Parking: <FaCar />,
  "Swimming Pool": <FaSwimmer />,
  Elevator: <MdElevator />,
  "Children & Senior Citizen Zones": <FaChild />,
  "Safety & Conveniences": <FaShieldAlt />,
  "Cement Road": <FaRoad />,
  "Water line with water": <FaTint />,
  "Underground Electrification": <FaBolt />,
  "Sewage/Drainage Line": <FaToolbox />,
  Garden: <FaTree />,
  Other: <FaEllipsisH />,
};

export const standardIcons = {
  "Standard A": <FaStar />,
  "Standard B": <FaRegBuilding />,
  "Standard C": <FaRegCheckCircle />,
  kitchen: <FaUtensils />,
  furnished: <FaCouch />,
  balcony: <FaHome />,
  Other: <FaEllipsisH />,
};
