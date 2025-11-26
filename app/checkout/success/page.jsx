import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl font-bold mb-3">Order Successful 🎉</h1>
      <p className="text-slate-300 mb-6">
        This is a demo checkout flow for your frontend portfolio.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-500"
      >
        Back to Home
      </Link>
    </div>
  );
}
