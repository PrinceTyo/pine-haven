import { Suspense } from "react";
// import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

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
      {children}
      <Suspense fallback={<p>Loading ...</p>}>{/* <Footer/> */}</Suspense>
    </>
  );
}
