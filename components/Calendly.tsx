"use client";

import { InlineWidget } from "react-calendly";

interface CalendlyProps {
  className?: string;
}

const Calendly = ({ className }: CalendlyProps) => {
  return (<InlineWidget styles={{ height: '100%', width: '100%' }} url="https://calendly.com/d/cv27-pvh-t8j/appel-decouverte-votre-devis-en-15-minutes" />);
};

export default Calendly;
