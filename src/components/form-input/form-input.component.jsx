import { FormInputLabel, Group, Input } from "./form-input.styles";

const FormInput = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} />
      {label && (
        <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
