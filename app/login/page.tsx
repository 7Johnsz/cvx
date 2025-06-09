"use client"

import { 
  LoginLayout, 
  LoginSidebar, 
  LoginForm, 
  SocialLogin, 
  SharedFooter 
} from "./components";

export default function LoginPage() {
  return (
    <LoginLayout>
      <LoginSidebar />
      
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 space-y-6">
        <LoginForm />
        <SocialLogin />
        <SharedFooter />
      </div>
    </LoginLayout>
  );
}
