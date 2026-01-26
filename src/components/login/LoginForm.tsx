import { useLoginForm } from "@/hooks/login/useLoginForm";
import UserLogin from "./UserLogin";
import DefaultLogin from "./DefaultLogin";

export default function LoginForm() {
  const {
    userData,
    loginFormData,
    handleSubmit,
    handleChange,
    isLoading,
    error,
  } = useLoginForm();

  return (
    <>
      {/* renderizar login dependiendo de si hay o no usuario */}
      {userData !== null ? (
        <UserLogin
          loginFormData={loginFormData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isLoading={isLoading}
          error={error}
          username={userData.username}
        />
      ) : (
        <DefaultLogin
          loginFormData={loginFormData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isLoading={isLoading}
          error={error}
        />
      )}
    </>
  );
}
