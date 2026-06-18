import { Suspense } from "react";
// import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar/navbar";
import "@/styles/globals.css";
import Footer from "@/components/layout/footer/footer";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <Navbar />
      </Suspense>
      <main>{children}</main>
      <Suspense fallback={<p>Loading ...</p>}>
        <Footer />
      </Suspense>
    </>
  );
}
