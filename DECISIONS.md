# ui-ux-pro-max analysis and implementation decisions

## Discovered stack
The storefront is static HTML, CSS, and vanilla JavaScript with local JSON and local image assets. There is no storefront package.json, React, Next.js, Tailwind build, backend, database, auth, or external product service. The `telegram-bot.kee/package.json` belongs to an ancillary bot and is not the storefront stack.

## Product and market
The site sells educational files and teacher-oriented preparation/custom services for customers in Saudi Arabia. The current conversion path is direct WhatsApp, with Telegram and email as secondary contact paths. Product data contains names, categories, descriptions, prices, and image folders. There is no verified checkout, payment, shipping, account, review, or refund system in the current project; those facts must not be invented.

## Design system decision
The generated system identified premium commerce, dark primary surfaces, warm gold CTA, light neutral background, moderate visual variance, standard motion, and medium-low density. The generated Cormorant/Montserrat pairing is not used as the primary Arabic UI font because the current audience and content are Arabic-first; the existing Cairo family is retained and tokenized for legibility. The existing green identity is refined rather than replaced, and the gold accent is used sparingly.

## Implementation priorities
Preserve the static stack and local data. Improve the shared header/mobile navigation, one clear CTA per view, Saudi-specific pricing and WhatsApp wording, product discovery without overbuilding filters, product-detail answers (what it is, price, delivery, order, contact), accessibility semantics/focus, image dimensions and lazy loading, reduced motion, and SEO metadata/structured data without fabricating commercial claims.
