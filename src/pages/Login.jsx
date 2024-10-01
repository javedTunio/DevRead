import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Define your Zod schema
  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });
  // Set up react-hook-form with Zod resolver
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // await signInWithEmailAndPassword(auth, data.email, data.password);
      await login(data.email, data.password);
      console.log("User logged in successfully");
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login failed:", error.message);

      // Handle specific Firebase authentication errors
      switch (error.code) {
        case "auth/user-not-found":
          form.setError("email", { message: "Email not registered" });
          break;
        case "auth/wrong-password":
          form.setError("password", { message: "Incorrect password" });
          break;
        case "auth/invalid-email":
          form.setError("email", { message: "Invalid email format" });
          break;
        case "auth/user-disabled":
          form.setError("root", { message: "This account has been disabled" });
          break;
        default:
          form.setError("root", {
            message: "Login failed. Please try again.",
          });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full px-6 h-svh relative">
      <Card className="w-full max-w-md mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-none md:shadow-sm border-0 md:border transition-all duration-500 ease-in-out">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl ">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Enter your email"
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600 text-center w-full">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="hover:underline font-medium text-primary">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
