declare namespace JSX {
  interface ExtendedInput
    extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {
    focused?: string;
  }

  interface IntrinsicElements {
    input: ExtendedInput;
  }
}

export type FormInputPropsTypes = {
  label: string;
  errorMessage: string;
  focused: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
