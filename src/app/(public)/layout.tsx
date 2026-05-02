import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-[80px] sm:pt-[90px] lg:pt-[142px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
