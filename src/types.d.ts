declare module "types" {
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
    content: string;
  }

  interface ImageType {
    alt: string;
    src: string;
  }
}
