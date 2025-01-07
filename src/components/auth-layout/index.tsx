import type { PropsWithChildren } from "react";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full lg:w-2/5">
        <div className="w-full px-16 md:px-48 lg:px-8 xl:px-32">{children}</div>
      </div>

      <div className="p-2 grow h-full hidden lg:block">
        <img
          className="size-full object-cover rounded-md"
          src="/bg-login-2.jpg"
          alt="Login background"
        />
      </div>
    </div>
  );
};
