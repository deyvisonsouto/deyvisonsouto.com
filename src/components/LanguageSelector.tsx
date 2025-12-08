"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <select
                defaultValue={locale}
                onChange={onChange}
                disabled={isPending}
                className="bg-black/60 backdrop-blur-xl border border-white/10 text-secondary text-xs rounded-lg px-2 py-1 outline-none hover:border-accent/50 focus:border-accent transition-colors"
            >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="pt">PT</option>
            </select>
        </div>
    );
}
