declare module 'types' {
  interface WorkExp {
    company: string;
    position: string;
    from: string;
    to: string;
    content: string;
  }
}

declare module '*.md' {
  const value: string;
  export default value;
}
