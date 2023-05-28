import { BehaviorSubject } from "rxjs";


type Reference = {
    name: string;
    description: string;
    details: string;
    link: string;
  };

type Content = {
  structure: {
    about: string;
    references: string;
    contact: string;
    prices: string;
  };
  name: string;
  position: string;
  about: string;
  resume: string;
  reference: Reference[];
};

const hungarian: Content = {
    structure: {
        about: "Rólunk",
        references: "Referenciák",
        contact: "Kapcsolat",
        prices: "Áraink'",
      },
      name: "Vizi Gábor",
      position: "Közlekedésépítő mérnök, Felelős műszaki vezető",
      about: "string",
      resume: "string",
      reference: [{
        name: "string",
        description: "string",
        details: "string",
        link: "string",
      }],
}

export const $content = new BehaviorSubject<Content>(hungarian)