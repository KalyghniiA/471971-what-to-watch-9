type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
};

export type FormStateProps = {
  [key: string]: FieldProps;
};

export type formErrorProps = {
  text: string;
};
