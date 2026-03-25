import Image from "next/image";
import Link from "next/link";

const leaders = [
  {
    name: "Arman Abd Hamid",
    role: "Managing Director",
    image: "/team/arman-abd-hamid.png",
  },
  {
    name: "Shahrozad Johar",
    role: "Executive Director",
    image: "/team/shahrozad-johar.png",
  },
  {
    name: "Marzuky Yusuf",
    role: "Director (Operation)",
    image: "/team/marzuky-yusuf.png",
  },
];

export function AuthorCredibilityStrip() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand/5 via-white to-slate-50 p-6 sm:p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">Editorial leadership</h2>
          <p className="mt-3 text-slate-600">
            Deals Malaysia Daily is led by a Malaysian team with deep ICT, digital transformation, and
            enterprise experience — the same leadership guiding methodology, partnerships, and
            day-to-day reviews.
          </p>
          <Link
            href="/about/"
            className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
          >
            Meet the full team →
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-6 sm:justify-start lg:justify-end">
          {leaders.map((p) => (
            <li key={p.name} className="flex w-36 flex-col items-center text-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white shadow-md ring-1 ring-slate-200">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-slate-900">{p.name}</p>
              <p className="mt-0.5 text-xs font-medium text-brand-light">{p.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
