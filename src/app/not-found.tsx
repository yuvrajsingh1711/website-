import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-premium py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 font-serif text-4xl font-bold">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
        The page you are looking for doesn&apos;t exist. Explore our tiles, marble &amp; granite collection instead.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/products" className="btn-outline">View Products</Link>
      </div>
    </main>
  );
}
