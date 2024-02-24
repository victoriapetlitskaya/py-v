//Footer helper functions and data

import { Contact, Link } from "./Footer.types";

import LocationSVG from "../../../public/assets/icons/location.svg";
import MessageSVG from "../../../public/assets/icons/message.svg";
import CallSVG from "../../../public/assets/icons/call.svg";
import TimeSVG from "../../../public/assets/icons/time.svg";

export const contacts: Contact[] = [
  {
    icon: <LocationSVG />,
    label: "Address",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: <CallSVG />,
    label: "Tel",
    value: "+9229341037",
  },
  {
    icon: <TimeSVG />,
    value: "Response hours: 8 to 20",
  },
  {
    icon: <MessageSVG />,
    label: "Email",
    value: "info@vlearn.com",
  },
];

export const links: Link[] = [
  {
    title: "Categories",
    links: [
      "Counseling",
      "Health and fitness",
      "Individual development",
      "More",
    ],
  },
  {
    title: "Links",
    links: ["About Us", "Blog"],
  },
];
