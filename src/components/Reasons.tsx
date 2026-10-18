import Image from "next/image";
import { insideSize, maker, photos } from "@/data/krate";

/** Why his instead of someone else's, in his three reasons: they look better, there's more room, he builds them. */
export function Reasons() {
  const shop = maker.photo ?? photos.lidDeck;
  return (
    <section id="why" className="stone scroll-mt-16">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-36">
        <h2 className="display max-w-[22ch] text-[clamp(30px,3.6vw,52px)] text-ink">
          You already know cold plunging is good for you. Here&apos;s why to get yours from me.
        </h2>
      </div>

      {/* 1. they look better */}
      <div className="mx-auto mt-16 grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:mt-24 lg:grid-cols-12 lg:items-end lg:gap-12 lg:px-12">
        <div className="relative aspect-[4/3] overflow-hidden lg:col-span-8">
          <Image src={photos.closed.src} alt={photos.closed.alt} width={photos.closed.w} height={photos.closed.h} sizes="(min-width: 1024px) 64vw, 100vw" className="h-full w-full object-cover" />
        </div>
        <div className="lg:col-span-4 lg:pb-2">
          <h3 className="display text-[clamp(28px,2.6vw,40px)] text-ink">They look better.</h3>
          <p className="mt-5 max-w-[40ch] text-[17.5px] leading-[1.65] text-slate">
            Most cold plunges are a steel box or a plastic barrel. Mine are California redwood, and the grain is different on every one,
            so no two look the same. It&apos;s something you&apos;ll actually want to see in your backyard.
          </p>
        </div>
      </div>

      {/* 2. more room inside */}
      <div className="mx-auto mt-24 grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:mt-36 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-12">
        <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-2">
          <h3 className="display text-[clamp(28px,2.6vw,40px)] text-ink">There&apos;s more room inside.</h3>
          <p className="mt-5 max-w-[40ch] text-[17.5px] leading-[1.65] text-slate">
            I build them bigger than most plunges on the market. You can sit down and stretch your legs out instead of folding yourself up
            to fit.
          </p>
          {insideSize ? (
            <p className="tnum mt-6 text-[16px] text-ink">Inside: {insideSize}</p>
          ) : (
            <a href="#quote" className="mt-6 inline-block text-[16px] text-ink underline decoration-slate/40 hover:decoration-ink">
              Ask me for the inside measurements
            </a>
          )}
        </div>
        <div className="relative order-1 aspect-[3/4] overflow-hidden lg:order-2 lg:col-span-5 lg:col-start-8">
          <Image src={photos.plunging.src} alt={photos.plunging.alt} width={photos.plunging.w} height={photos.plunging.h} sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* 3. he builds every one */}
      <div className="stone-dark mt-24 lg:mt-36">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-12 lg:py-28">
          <div className="relative aspect-[3/4] overflow-hidden lg:col-span-4">
            <Image src={shop.src} alt={shop.alt} width={shop.w} height={shop.h} sizes="(min-width: 1024px) 32vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div className="lg:col-span-6 lg:col-start-6">
            <h3 className="display text-[clamp(30px,3.2vw,48px)] text-foam">I make every one myself.</h3>
            <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.65] text-mist">
              Every Kold Krate is built by me, start to finish, right here in Santa Cruz. Each one gets my full attention, and I make it the
              best I can before it goes to your house.
            </p>
            {maker.name && <p className="font-display mt-8 text-[20px] text-foam">{maker.name}, Kold Krate</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
