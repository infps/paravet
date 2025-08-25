import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authenticate",
  description: "Authenticate to paravet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen min-h-screen bg-prussian-blue flex items-center justify-center ">
      <div className="grid grid-cols-2 w-full gap-4 place-content-center max-w-[1440px] ">
        <div className="flex items-center h-screen justify-center">
          <div className="w-4/5 flex flex-col items-center space-y-6">
            <Image src={"/logo-login.svg"} width={120} height={80} alt="logo" />
            <p className="text-3xl text-white font-semibold">
              Welcome to Company Name
            </p>
          </div>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="bg-white w-4/5 p-8 rounded-md flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
