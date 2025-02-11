import { Button } from "@mui/material";
import { PasswordContainer, StyledForm } from "./RegisterForm.styles";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import { registerFormSchema, RegisterSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = () => {
    console.log("Form can only be submitted without errors!");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("username")}
        label="Username"
        placeholder="Enter your username"
        type="text"
        variant="filled"
        name="username"
        error={errors.username}
        helperText={errors.username?.message}
      />
      <PasswordContainer>
        <Input
          {...register("password")}
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="filled"
          name="password"
          className="password-field"
          error={errors.password}
          helperText={errors.password?.message}
        />

        <Input
          {...register("confirmPassword")}
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          variant="filled"
          name="confirmPassword"
          className="password-field"
          error={errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </PasswordContainer>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </StyledForm>
  );
};

export default RegisterForm;
