export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="relative flex min-h-full flex-1 items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat dark:bg-auth-dark">
      <div
        className="absolute inset-0 bg-black/35 dark:bg-black/55"
        aria-hidden
      />
      <div className="relative z-10 flex w-full justify-center p-4">
        {children}
      </div>
    </main>
  );
}
