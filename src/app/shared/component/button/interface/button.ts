export interface ButtonConfig {
  button?: {
    type?: string;
    cssClass?: string;
    isDisabled?: boolean;
    value?: string;
  };
  image?: {
    src: string;
    cssClass?: string;
  };
}
