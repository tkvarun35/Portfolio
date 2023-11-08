import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputForm } from "./LoginForm";

// interface LoginProps{
//     cardHeading:
// }

function LoginCard() {
  return (
    <div className="flex justify-center ">
      <Card className="  md:w-4/12 md:h-4/5 rounded-2xl">
        <CardHeader>
          <CardTitle className="flex justify-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <InputForm />
        </CardContent>
        <CardFooter className="space-x-2"></CardFooter>
      </Card>
    </div>
  );
}

export default LoginCard;
