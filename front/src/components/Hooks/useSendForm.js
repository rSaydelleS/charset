import { useForm } from "react-hook-form";

export function UseSendForm() {
  const { register, handleSubmit } = useForm();
  const SendSubmit = (data) => {
    console.log(data);
  };
  return {
    register,
    handleSubmit,
    SendSubmit,
  };
}
