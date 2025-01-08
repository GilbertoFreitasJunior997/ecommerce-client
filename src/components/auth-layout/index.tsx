import { Link } from "@tanstack/react-router";
import { ChevronLeftIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-tr from-violet-950 to-violet-800 md:px-40 md:py-24">
      <div className="bg-background flex rounded-2xl h-full">
        <div className="flex flex-col items-center w-full xl:w-fit min-w-[500px]">
          <div className="w-full px-16 flex h-full flex-col">
            <div className="flex flex-col justify-center grow pt-16">
              {children}
            </div>

            <div className="pb-16">
              <Link
                to="/app"
                className="flex items-center text-sm group hover:text-primary w-fit"
              >
                <div className="relative size-5">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <ChevronLeftIcon className="size-5 mt-[2px] group-hover:mr-2 transition-all" />
                  </div>
                </div>

                <span>Go Back</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 grow h-full hidden xl:block">
          <img
            className="size-full object-cover rounded-2xl"
            src="/bg-login.jpg"
            alt="Login background"
          />
        </div>
      </div>
    </div>
  );
};
