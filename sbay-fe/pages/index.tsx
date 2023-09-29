import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import ManageEditor from "./components/admin-management/manage-editor";
// import { UserProvider } from "./components/user-information/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/*<UserProvider>*/}
        <ManageEditor />
      {/*</UserProvider>*/}
    </>
  );
}
