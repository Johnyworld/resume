declare module 'types' {
  interface Description {
    title: string;
    desc: string;
    href?: string;
  }

  interface Introduce {
    title?: string;
    desc: string;
  }

  interface WorkExp {
    company: string;
    position: string;
    from: string;
    to: string;
    projects: Project[];
  }

  interface Project {
    name: string;
    link?: string;
    skills?: string[];
    descriptions?: Description[];
    images?: ImageType[];
    explanations?: string[];
    dids?: string[];
  }

  interface ImageType {
    alt: string;
    src: string;
  }
}
