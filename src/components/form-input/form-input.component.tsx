import { FC, InputHTMLAttributes } from "react";

import { FormInputLabel, Group, Input } from "./form-input.styles";

export type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            props.value && typeof props.value === "string" && props.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
