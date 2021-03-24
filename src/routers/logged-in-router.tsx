import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  const {} = useForm;

  return (
    <div>
      <h1>Logged In</h1>
      <button onClick={() => isLoggedInVar(false)}>Log Out</button>
    </div>
  );
};
