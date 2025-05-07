import ContactHeader from "../components/Contact/ContactHeader";
import ContactLocation from "../components/Contact/ContactLocation";
import Contactmail from "../components/Contact/Contactmail";
import ContactSub from "../components/Contact/ContactSub";
import MapSec from "../components/Contact/MapSec";

export default function ContactPage () {
  return (
    <>
    <ContactHeader />
    <ContactLocation />
    <Contactmail />
    <MapSec/>
    <ContactSub />
    </>
  );
}

