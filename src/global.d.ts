declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
}
  
declare module '*.scss'; // No typings — just allow import
  