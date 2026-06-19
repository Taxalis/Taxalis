import Link from "next/link";
import { Nav, Footer } from "@/app/components/Nav";
import Icon from "@/app/components/Icon";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[80vh] items-center justify-center bg-white px-6 text-center">
        <div className="max-w-md">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <Icon name="alert-doc" size={36} strokeWidth={1.5} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Fehler 404</span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Seite nicht gefunden
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Diese Seite existiert leider nicht. Vielleicht haben Sie sich vertippt oder der Link ist veraltet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              <Icon name="arrow-left" size={16} />
              Zur Startseite
            </Link>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-200 hover:text-emerald-600"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
