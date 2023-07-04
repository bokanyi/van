import { BehaviorSubject } from "rxjs";


type Content = {
  structure: {
    main: string;
    about: string;
    artists: string;
    events: string;
    contact: string;
  };
 
};

const hungarian: Content = {
    structure: {
      main: "Főoldal",
        about: "Rólunk",
        artists: "Művészek",
        events: "Események",
        contact: "Kapcsolat",
      },
  
}

export const $content = new BehaviorSubject<Content>(hungarian)