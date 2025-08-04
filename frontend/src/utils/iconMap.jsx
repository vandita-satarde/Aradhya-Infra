// frontend/src/utils/iconMap.js
import { MdElevator } from 'react-icons/md'; // Material Design icon
import {
  FaDumbbell,
  FaWifi,
  FaCar,
  FaSwimmer,
  FaChild,
  FaShieldAlt,
  FaStar,
  FaRegBuilding,
  FaRegCheckCircle
} from 'react-icons/fa';

export const facilityIcons = {
  Gym: <FaDumbbell />,
  WiFi: <FaWifi />,
  Parking: <FaCar />,
  "Swimming Pool": <FaSwimmer />,
  Elevator: <MdElevator />,
  "Children & Senior Citizen Zones": <FaChild />,
  "Safety & Conveniences": <FaShieldAlt />,
};

export const standardIcons = {
  "Standard A": <FaStar />,
  "Standard B": <FaRegBuilding />,
  "Standard C": <FaRegCheckCircle />,
};
