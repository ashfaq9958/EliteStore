import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Eye, EyeClosed, User, Github, Chrome, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Login = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof loginSchema>) => {
    try {
      setLoading(true);
      console.log(formData);
      await new Promise((res) => setTimeout(res, 1500)); // simulate request
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-md p-0 border-none bg-transparent shadow-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Sign In</DialogTitle>
        </DialogHeader>

        <div className="w-full px-4 sm:px-8 py-6 sm:py-8 relative z-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Sign in to continue your premium experience
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              className="space-y-5 sm:space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Identifier */}
              <FormField
                name="identifier"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <input
                          {...field}
                          placeholder="Username or Email"
                          className="h-11 sm:h-12 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:ring-purple-600 focus:outline-none transition-all"
                        />
                        <User className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400 mt-1" />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <input
                          {...field}
                          type={visible ? "text" : "password"}
                          placeholder="••••••••"
                          className="h-11 sm:h-12 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:ring-purple-600 focus:outline-none transition-all"
                        />
                        <button
                          type="button"
                          onClick={toggleVisibility}
                          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {visible ? (
                            <Eye className="w-4 sm:w-5 h-4 sm:h-5" />
                          ) : (
                            <EyeClosed className="w-4 sm:w-5 h-4 sm:h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400 mt-1" />
                  </FormItem>
                )}
              />

              {/* Forgot Password */}
              <div className="flex justify-end -mt-2 sm:-mt-3">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-400 hover:text-purple-400 hover:underline transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="ghost"
                disabled={loading}
                className="w-full h-11 sm:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm text-sm sm:text-base text-white font-semibold transition-all duration-200"
              >
                {loading ? (
                  <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-grow border-t border-white/10" />
                <span className="px-2 sm:px-4 text-xs sm:text-sm text-gray-400">
                  or continue with
                </span>
                <div className="flex-grow border-t border-white/10" />
              </div>
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 rounded-xl border-border bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Chrome className="w-5 h-5 text-muted-foreground group-hover:text-primary mr-2 transition-colors" />
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 rounded-xl border-border bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary mr-2 transition-colors" />
                  GitHub
                </Button>
              </div>
            </form>
          </Form>

          {/* Signup Redirect */}
          <p className="text-center text-xs sm:text-sm text-gray-400 mt-5 sm:mt-6">
            Don’t have an account?{" "}
            <a
              href="#"
              className="font-medium text-purple-400 hover:text-purple-300 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
