// import { User, Mail, Eye, EyeClosed, Image } from "lucide-react";
// // import google from "../../../assets/google.png";
// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { registerSchema } from "@/schemas/registerSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// // import { registerUser } from "../redux/authThunk";
// // import { useAppDispatch, useAppSelector } from "@/store/hooks";

// const RegisterForm = () => {
//   // -------------------- State --------------------
//   const [isVisible, setIsVisible] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   // -------------------- Dispatch --------------------
//   //   const dispatch = useAppDispatch();
//   //   const { isLoading, isAuthenticated } = useAppSelector((state) => state.auth);

//   // -------------------- Form Setup --------------------
//   const form = useForm<z.infer<typeof registerSchema>>({
//     resolver: zodResolver(registerSchema),
//     defaultValues: {
//       fullname: "",
//       username: "",
//       password: "",
//       email: "",
//       avatar: undefined,
//     },
//   });

//   // -------------------- Toggle Password Visibility --------------------
//   const toggleVisibility = () => setIsVisible((prev) => !prev);

//   // -------------------- Avatar Watcher --------------------
//   const watchAvatar = form.watch("avatar");
//   const { reset } = form;

//   useEffect(() => {
//     if (
//       watchAvatar &&
//       watchAvatar.length > 0 &&
//       watchAvatar[0] instanceof File
//     ) {
//       const file = watchAvatar[0];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setPreview(null);
//     }
//   }, [watchAvatar]);

//   const onSubmit = (data: z.infer<typeof registerSchema>) => {
//     const formData = new FormData();

//     formData.append("fullname", data.fullname);
//     formData.append("username", data.username);
//     formData.append("email", data.email);
//     formData.append("password", data.password);

//     if (data.avatar && data.avatar[0]) {
//       formData.append("avatar", data.avatar[0]);
//     }

//     // dispatch(registerUser(formData)).then((res: any) => {
//     //   if (res.meta.requestStatus === "fulfilled") {
//     //     reset(); // ✅ reset form values
//     //     setPreview(null); // ✅ clear preview
//     //   }
//     // });
//   };

//   return (
//     <div className="w-full max-w-md mx-auto px-4">
//       {preview && (
//         <div className="flex justify-center mb-1">
//           <img
//             src={preview}
//             alt="Avatar Preview"
//             className="w-14 h-14 object-cover rounded-full border border-gray-300 shadow-sm"
//           />
//         </div>
//       )}
//       <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
//         Step into Smarter Shopping
//       </h1>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           {/* Fullname */}
//           <FormField
//             name="fullname"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       {...field}
//                       placeholder="Full Name"
//                       className="h-11 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     />
//                     <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-start text-xs" />
//               </FormItem>
//             )}
//           />

//           {/* Username */}
//           <FormField
//             name="username"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       {...field}
//                       placeholder="Username"
//                       className="h-11 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     />
//                     <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-start text-xs" />
//               </FormItem>
//             )}
//           />

//           {/* Email */}
//           <FormField
//             name="email"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       autoComplete="email"
//                       {...field}
//                       placeholder="Email"
//                       className="h-11 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     />
//                     <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-start text-xs" />
//               </FormItem>
//             )}
//           />

//           {/* Password */}
//           <FormField
//             name="password"
//             control={form.control}
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       {...field}
//                       type={isVisible ? "text" : "password"}
//                       placeholder="••••••••"
//                       className="h-11 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     />
//                     <span
//                       onClick={toggleVisibility}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
//                     >
//                       {isVisible ? (
//                         <Eye className="w-5 h-5 text-gray-600" />
//                       ) : (
//                         <EyeClosed className="w-5 h-5 text-gray-600" />
//                       )}
//                     </span>
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs text-start" />
//               </FormItem>
//             )}
//           />

//           {/* Picture */}
//           <FormField
//             name="avatar"
//             control={form.control}
//             render={({ field: { onChange, ref, name } }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       type="file"
//                       accept="image/*"
//                       name={name}
//                       ref={ref}
//                       onChange={(e) => {
//                         const fileList = e.target.files;
//                         if (fileList && fileList.length > 0) {
//                           onChange(fileList); // 👈 Important: Pass FileList to RHF
//                           const reader = new FileReader();
//                           reader.onloadend = () => {
//                             setPreview(reader.result as string);
//                           };
//                           reader.readAsDataURL(fileList[0]);
//                         }
//                       }}
//                       className="h-11 border-none w-full py-3 pr-12 pl-5 bg-gray-100 rounded-lg text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                     />

//                     <Image className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-start text-xs" />
//               </FormItem>
//             )}
//           />

//           {/* Sign Up Button */}
//           {/* <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full h-12 rounded-lg text-white font-semibold transition-all shadow-md mb-3
//     bg-gradient-to-r from-gray-700 to-gray-900 hover:from-black hover:to-black
//     ${isLoading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
//   `}
//           >
//             {isLoading ? "Signing you up..." : "Sign Up"}
//           </button> */}

//           {/* Social Divider */}
//           {/* <p className="text-sm text-gray-500 text-center my-4">
//             or register with social platforms
//           </p> */}

//           {/* Google Button */}
//           {/* <div className="flex justify-center">
//             <button
//               type="button"
//               className="flex items-center justify-center gap-3 w-full  py-3 px-5 border border-gray-300 rounded-lg shadow-sm bg-white hover:border-black hover:bg-gray-50 transition-all"
//             >
//               <img src={google} alt="Google" className="w-4 h-4" />
//               <span className="text-gray-700 font-medium">
//                 Continue with Google
//               </span>
//             </button>
//           </div> */}
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default RegisterForm;

import { registerSchema } from "@/schemas/registerSchema";
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
import {
  Eye,
  EyeClosed,
  User,
  Mail,
  Lock,
  Github,
  Chrome,
  Loader2,
  LogIn,
  Image,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const RegisterForm = ({
  openRegister,
  onOpenRegisterChange,
}: {
  openRegister: boolean;
  onOpenRegisterChange: (open: boolean) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      avatar: undefined,
    },
  });

  const watchAvatar = form.watch("avatar");
  const { reset } = form;

  useEffect(() => {
    if (
      watchAvatar &&
      watchAvatar.length > 0 &&
      watchAvatar[0] instanceof File
    ) {
      const file = watchAvatar[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
    }
  }, [watchAvatar]);

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const formData = new FormData();

    formData.append("fullname", data.fullname);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("email", data.email);

    if (data.avatar && data.avatar[0]) {
      formData.append("avatar", data.avatar[0]);
    }
  };

  const openModal = () => {
    onOpenRegisterChange(false);
  };

  return (
    <>
      <Dialog open={openRegister} onOpenChange={onOpenRegisterChange}>
        <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-md p-0 border-none bg-transparent shadow-none">
          <DialogHeader>
            <DialogTitle className="sr-only">Sign Up</DialogTitle>
          </DialogHeader>

          <div className="w-full px-4 sm:px-8 py-6 sm:py-4 relative z-10 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                Join us and start your premium journey
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                className="space-y-5 sm:space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* Fullname */}
                <FormField
                  name="fullname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <input
                            {...field}
                            placeholder="Fullname"
                            className="h-10 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:outline-none transition-all"
                          />
                          <User className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                {/* Username */}
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <input
                            {...field}
                            placeholder="Username"
                            className="h-10 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:outline-none transition-all"
                          />
                          <User className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-red-400 mt-1" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <input
                            {...field}
                            placeholder="Email"
                            type="email"
                            className="h-10 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:outline-none transition-all"
                          />
                          <Mail className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
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
                            className="h-10 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:outline-none transition-all"
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

                <FormField
                  name="avatar"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="file"
                            accept="image/*"
                            // name={name}
                            // ref={ref}
                            // onChange={(e) => {
                            //                         const fileList = e.target.files;
                            //                         if (fileList && fileList.length > 0) {
                            //                           onChange(fileList); // 👈 Important: Pass FileList to RHF
                            //                           const reader = new FileReader();
                            //                           reader.onloadend = () => {
                            //                             setPreview(reader.result as string);
                            //                           };
                            //                           reader.readAsDataURL(fileList[0]);
                            //                         }
                            //                       }}
                            className="h-10 w-full pr-10 sm:pr-12 pl-4 sm:pl-5 text-sm sm:text-base text-gray-200 bg-gray-900/70 border border-gray-700 rounded-sm shadow-inner focus:border-purple-500 focus:ring-0 focus:outline-none transition-all"
                          />
                          <Image className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
                        </div>
                      </FormControl>
                      <FormMessage className="text-start text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  variant="ghost"
                  disabled={loading}
                  className="w-full h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-sm text-sm sm:text-base text-white font-semibold transition-all duration-200"
                >
                  {loading ? (
                    <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="flex-grow border-t border-white/10" />
                  <span className="px-2 sm:px-4 text-xs sm:text-sm text-gray-400">
                    or sign up with
                  </span>
                  <div className="flex-grow border-t border-white/10" />
                </div>

                {/* Social Signup */}
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

            {/* Login Redirect */}
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-5 sm:mt-6">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-purple-400 hover:text-purple-300 hover:underline"
                onClick={openModal}
              >
                Sign in
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterForm;
