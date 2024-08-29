import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-start justify-center p-4 xs:p-6 md:p-8 lg:p-12 xl:p-[100px]">
      <section className="w-full max-w-md bg-white p-4 xs:p-6">
        <div className="mb-6 flex items-center justify-center xs:mb-8 sm:mb-10">
          <Image
            src="/logo-wide.svg"
            alt="Logo"
            width={200}
            height={50}
            className="w-40 xs:w-48 sm:w-52 md:w-60 lg:w-64 xl:w-[200px]"
          />
        </div>
        {children}
      </section>
    </main>
  );
}
