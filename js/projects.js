/* ==========================================================
   Project data — edit this file to update the case studies.
   Fields:
     slug      → used in the URL: project.html?p=<slug>
     cat       → landing | shop | portfolio
     color     → c1..c6 (thumbnail colour, see style.css)
     live/code → real links (leave "" to hide the button)
     cover     → optional image used as the project thumbnail
   shots     → screenshots, e.g. ["assets/img/startup-1.webp", ...]
                 (leave [] to show styled placeholders)
   All text below is EXAMPLE content — replace with your own.
   ========================================================== */
window.PROJECTS = [
  {
    slug: 'wayfarer-travel', cat: 'landing', color: 'c1', icon: 'bi-compass',
    cover: 'assets/img/wayfarer-santorini.webp',
    tag: 'Landing page', title: 'Wayfarer — Travel & Tours',
    summary: 'A cinematic travel booking website with a destination-driven hero slider, trip search, packages, a membership club and an in-app itinerary section.',
    role: 'Design & Front-End Development', year: '2026', duration: '5 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A boutique tour company needed a website that makes visitors dream about the destination first, then guides them to search, compare and book a trip with confidence.',
    approach: [
      'Built a full-screen hero slider where each slide changes the destination image, headline, call to action and a featured tour card with rating, group type and nights.',
      'Added popular destination chips and a floating glass navigation so visitors can jump straight to Bali, Santorini, Dubai, Tokyo or the Maldives.',
      'Designed a long conversion-focused page: destination cards, a trip finder, limited-time deals, trust statistics, package comparison, a membership club, traveller reviews, FAQs and a newsletter sign-up.',
      'Used a warm cream, deep navy and gold palette with elegant serif headings to feel premium, and kept every section responsive.'
    ],
    results: ['A hero that makes visitors want to travel', 'A clear path from inspiration to package', 'Trust built with stats, reviews and FAQs'],
    live: '', code: '',
    shots: ['assets/img/wayfarer-santorini.webp', 'assets/img/wayfarer-maldives.webp', 'assets/img/wayfarer-bali.webp', 'assets/img/wayfarer-lapland.webp', 'assets/img/wayfarer-full.webp']
  },
  {
    slug: 'form-and-wood', cat: 'shop', color: 'c3', icon: 'bi-lamp',
    cover: 'assets/img/formwood-hero.webp',
    tag: 'E-commerce', title: 'Form & Wood — Furniture Atelier',
    summary: 'A bold, editorial online store for a furniture workshop, with oversized typography, product colour options, a lookbook and bundle shopping.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A furniture atelier needed an online store that feels as crafted as its pieces: confident and editorial, yet easy to browse by department, preview in a real room and buy.',
    approach: [
      'Opened with a huge wordmark headline and a hero chair with interactive hotspots and wood-finish swatches (Oiled Teak, Smoked Walnut, White Oak) so shoppers can explore the product at once.',
      'Organised the shop into departments (lounge, dining, lowboards and lighting) with image cards, tags and a clear explore button, plus a dark curated-drop slider with colour options and add to bag.',
      'Built a lookbook that shows pieces in real homes, with tabs for each space, a featured specimen card and an index card of details.',
      'Added a complete-the-room bundle selector, a philosophy section about craft, and an owner reviews slider, with saved and bag counters in a pill navigation.'
    ],
    results: ['A distinctive, editorial brand identity', 'Products shown in context, not just on white', 'Bundle and slider features that encourage browsing'],
    live: '', code: '',
    shots: ['assets/img/formwood-hero.webp', 'assets/img/formwood-departments.webp', 'assets/img/formwood-drop.webp', 'assets/img/formwood-lookbook.webp', 'assets/img/formwood-bundle.webp', 'assets/img/formwood-philosophy.webp', 'assets/img/formwood-reviews.webp', 'assets/img/formwood-mockup.webp']
  },
  {
    slug: 'florista-weddings', cat: 'landing', color: 'c2', icon: 'bi-flower1',
    cover: 'assets/img/florista-hero1.webp',
    tag: 'Landing page', title: 'Florista — Weddings & Floral Design',
    summary: 'A romantic, editorial website for a wedding planner and florist, with an arched hero slider, services, portfolio, décor gallery and an interactive booking letter.',
    role: 'Design & Front-End Development', year: '2026', duration: '5 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A luxury wedding planner and florist needed a website as elegant as the weddings it creates, one that tells their story, shows their work and makes booking a consultation feel personal.',
    approach: [
      'Created a three-slide hero where each slide changes the background photo, headline, call to action and arched image card, with a script accent in soft pink.',
      'Built a soft, feminine palette of plum, blush and sage, with scalloped section edges and arch-shaped cards that echo wedding arches and doorways.',
      'Designed sections for services, a mosaic portfolio, the planning journey, a décor gallery, reviews and a guest list sign-up.',
      'Turned the contact form into a fill-in-the-blanks letter (Dear Florista...) to make enquiring feel warm and personal, and adapted every section to mobile.'
    ],
    results: ['A romantic, premium brand feel', 'Services, work and process easy to explore', 'A memorable, personal way to enquire'],
    live: '', code: '',
    shots: ['assets/img/florista-hero1.webp', 'assets/img/florista-hero2.webp', 'assets/img/florista-mobile.webp', 'assets/img/florista-full.webp']
  },
  {
    slug: 'ravenmoor-fc', cat: 'landing', color: 'c1', icon: 'bi-trophy',
    cover: 'assets/img/ravenmoor-hero.webp',
    tag: 'Multi-page website', title: 'Ravenmoor FC — Football Club',
    summary: 'A multi-page football club website with a live match centre, fixtures and results, news, squad profiles, standings, video and ticketing.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A football club needed a website that feels like matchday all year round: fast to scan for scores and fixtures, rich enough for stories and video, and clear about tickets and membership.',
    approach: [
      'Opened with a full-screen hero slider, a clear Explore fixtures call to action and live-update and match-highlight shortcuts.',
      'Built a next-match centre with a countdown, followed by the big stories, season stats, squad grid with position filters, standings and latest results.',
      'Designed inner pages with a shared header and pitch-line banner: Matches with fixtures, results and competition filters, News with article layout, and About with club history and community.',
      'Used a deep green and gold palette with bold type, added a language switcher and sign-in, and made every page responsive down to a compact mobile layout.'
    ],
    results: ['One place for fixtures, scores and stories', 'Consistent look across home and inner pages', 'Clear routes to tickets and membership'],
    live: '', code: '',
    shots: ['assets/img/ravenmoor-hero.webp', 'assets/img/ravenmoor-matches.webp', 'assets/img/ravenmoor-news.webp', 'assets/img/ravenmoor-about.webp', 'assets/img/ravenmoor-mobile.webp', 'assets/img/ravenmoor-full.webp']
  },
  {
    slug: 'bagista-handbags', cat: 'shop', color: 'c4', icon: 'bi-handbag',
    cover: 'assets/img/bagista-hero.webp',
    tag: 'E-commerce', title: 'Bagista — Luxury Handbags',
    summary: 'A refined, bilingual online store for handmade Egyptian leather bags, with elegant script typography and rich editorial imagery.',
    role: 'Design & Front-End Development', year: '2026', duration: '4 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A luxury handbag brand needed a store that feels as crafted as its leather: elegant, trustworthy and easy to shop, in both English and Arabic.',
    approach: [
      'Opened with a cinematic hero: a dramatic product photo, a flowing script headline against bold serif type and a gold Shop Now button.',
      'Built a long editorial page with the brand story, collections, bestsellers, a signature product spotlight, craftsmanship details and customer stories.',
      'Used a deep burgundy, cream and gold palette with refined serif typography to communicate luxury and heritage.',
      'Added an English and Arabic language switch, wishlist and cart access in the header, and a newsletter sign-up, all fully responsive.'
    ],
    results: ['A luxurious, editorial brand feel', 'Clear path from collections to product', 'Ready for English and Arabic audiences'],
    live: '', code: '',
    shots: ['assets/img/bagista-hero.webp', 'assets/img/bagista-full.webp']
  },
  {
    slug: 'emily-jane-books', cat: 'landing', color: 'c2', icon: 'bi-book',
    cover: 'assets/img/emilyjane-cover.webp',
    tag: 'Landing page', title: 'Emily Jane — Classic Books Library',
    summary: 'A charming, searchable library of free classic love stories, with pastel scalloped sections, a book of the month, reading lists and a monthly read-along.',
    role: 'Design & Front-End Development', year: '2026', duration: '4 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    challenge: 'A book curator wanted a cosy website that makes classic novels feel fresh, lets readers find a story quickly and sends them straight to a free copy to read.',
    approach: [
      'Built a soft palette of butter yellow, powder blue, blush and cocoa with scalloped section edges, striped and patterned backgrounds and hand-drawn underline details that feel like a stationery shop.',
      'Opened with a floating pill navigation and a hero with tilted vintage book covers, then a scrolling ticker and a Book of the Month section with genre tags.',
      'Created a library of 16 books with live search and filter chips (Jane Austen, Slow Burn, Gothic and more), a result counter, and a details popup with a quote and Read Free button.',
      'Added the human touches: a newsletter card, a highlighted quote, a Meet Emily section with polaroid photos, reasons the classics still work, a monthly read-along, an FAQ accordion and a contact form with a custom dropdown.',
      'Made the whole site responsive, with a slide-out menu, stacked cards and a compact footer on phones.'
    ],
    results: ['A warm, memorable brand feel', 'Readers can find a book in seconds', 'A clear path from browsing to reading'],
    live: '', code: '',
    shots: ['assets/img/emilyjane-hero.webp', 'assets/img/emilyjane-library.webp', 'assets/img/emilyjane-contact.webp', 'assets/img/emilyjane-modal.webp', 'assets/img/emilyjane-responsive.webp', 'assets/img/emilyjane-mobile.webp', 'assets/img/emilyjane-full.webp']
  },
  {
    slug: 'healthcare-plus', cat: 'landing', color: 'c1', icon: 'bi-heart-pulse',
    cover: 'assets/img/healthcare-home.webp',
    tag: 'Multi-page website', title: 'HealthCare Plus — Medical Clinic',
    summary: 'A clean, trustworthy multi-page website for a medical clinic, with an appointment booking bar, department pages, a doctors team, a blog and an FAQ.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A clinic needed a website that feels calm and professional, helps patients find the right department quickly and makes booking an appointment effortless on any device.',
    approach: [
      'Opened the home page with a bold hero and a booking bar (choose service, choose date, contact number) so patients can start an appointment straight away.',
      'Built consistent inner pages with a shared blue banner and breadcrumb trail: About, Services, Team, Blog, FAQ and Contact.',
      'Created service and department detail pages with an Other Services sidebar, plus a searchable blog with categories and a full article layout.',
      'Added a floating pill header with a dark mode toggle and a clear Book an Appointment button, and made every page responsive down to a compact mobile layout.'
    ],
    results: ['A calm, trustworthy first impression', 'Appointment booking always one click away', 'Consistent look across 10+ pages and in dark mode'],
    live: '', code: '',
    shots: ['assets/img/healthcare-home.webp', 'assets/img/healthcare-services.webp', 'assets/img/healthcare-team.webp', 'assets/img/healthcare-mobile.webp', 'assets/img/healthcare-full.webp']
  },
  {
    slug: 'forno-restaurant', cat: 'landing', color: 'c4', icon: 'bi-cup-hot',
    cover: 'assets/img/forno-cover.webp',
    tag: 'Multi-page website', title: 'Forno & Co. — Italian Restaurant',
    summary: 'An elegant multi-page restaurant website with a cinematic hero, a seasonal menu, a gallery with a lightbox, private dining enquiries and an online reservation flow.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A family restaurant needed a website that feels as warm and unhurried as an evening at its tables, makes the menu easy to browse and turns a visitor into a booking in a few taps.',
    approach: [
      'Chose a candlelit palette of espresso black, warm cream and antique gold, pairing a refined serif with an italic gold accent word in every headline, so the food photography leads each page.',
      'Opened with a full-screen hero, with a clear Reserve a Table action, then told the story in sections: the kitchen, a seasonal menu with category tabs, a tasting evening, a photo gallery, guest reviews and a map.',
      'Built a guided reservation page: choose a date, party size and time from simple buttons while a live summary card repeats the booking, followed by opening hours and a short FAQ.',
      'Added the rest of the restaurant in six consistent pages: Our Story with a day in the kitchen, the Menu with a sticky category bar, Private Dining and Events with an enquiry form, a filterable Gallery with a full-screen viewer, and Contact.',
      'Designed one centred logo header with a full-screen slide-out menu on phones, and made every page responsive.'
    ],
    results: ['A warm, premium first impression', 'Booking a table takes a few taps', 'One consistent look across seven pages'],
    live: '', code: '',
    shots: ['assets/img/forno-cover.webp', 'assets/img/forno-home.webp', 'assets/img/forno-events.webp', 'assets/img/forno-about.webp', 'assets/img/forno-gallery.webp', 'assets/img/forno-contact.webp', 'assets/img/forno-mobile.webp', 'assets/img/forno-full.webp']
  },
  {
    slug: 'little-stage-arts', cat: 'landing', color: 'c4', icon: 'bi-balloon-heart',
    cover: 'assets/img/littlestage-home.webp',
    tag: 'Landing page', title: 'Little Stage Arts — Nursery',
    summary: 'A warm, hand-illustrated website for an arts-focused nursery, with gentle colour, playful characters and a simple way for parents to book a visit.',
    role: 'Design & Front-End Development', year: '2026', duration: '3 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    challenge: 'A nursery needed a website that feels as welcoming as its classrooms: soft and playful for children, but clear and trustworthy for the parents who make the decision.',
    approach: [
      'Opened with a friendly hero: an illustrated monkey on a grassy hill, a calm serif headline and two clear buttons, Book a Visit and Our Approach, above rolling green hills.',
      'Used a cream, forest green and soft pastel palette, with hand-painted style characters (a dragon, a knight on a horse, a garden scene) to give each section its own story.',
      'Structured the page around what parents ask: the founder’s story, the three pillars of learning, kind words from other parents, a typical day as a simple three-step timeline, and a short enrolment form.',
      'Finished with a footer that holds opening hours, address and a newsletter sign-up, and built a colourful slide-out menu with icons for phones and tablets.'
    ],
    results: ['A warm, trustworthy first impression', 'Everything parents need on one calm page', 'An easy, friendly route to booking a visit'],
    live: '', code: '',
    shots: ['assets/img/littlestage-home.webp', 'assets/img/littlestage-about.webp', 'assets/img/littlestage-approach.webp', 'assets/img/littlestage-parents.webp', 'assets/img/littlestage-mobile.webp', 'assets/img/littlestage-full.webp']
  },
  {
    slug: 'dolce-rose', cat: 'shop', color: 'c2', icon: 'bi-cake2',
    cover: 'assets/img/dolce-rose-desktop.webp',
    tag: 'E-commerce', title: 'Dolce Rosé — Patisserie',
    summary: 'A dreamy, rose-gradient website for a boutique bakery, with a menu, product carousel and custom cake orders.',
    role: 'Design & Front-End Development', year: '2025', duration: '3 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A boutique patisserie wanted a website as delicate and indulgent as its macarons and cakes, one that makes visitors hungry, shows the full menu clearly and makes ordering a custom cake feel effortless.',
    approach: [
      'Built a soft rose-and-lilac gradient identity with an elegant serif and sans pairing, so the pastries stay the stars.',
      'Designed a bento-style grid for signature sweets and a dark menu section that lists every treat with its price at a glance.',
      'Added a hero slider, a freshly baked favourites carousel with cart badge, and a clear call to action for custom celebration cakes.',
      'Made every section fully responsive, with a dedicated mobile hero and an easy slide-out menu.'
    ],
    results: ['A mouth-watering first impression', 'Menu and products easy to browse', 'Smooth, app-like experience on mobile'],
    live: '', code: '',
    shots: ['assets/img/dolce-rose-desktop.webp', 'assets/img/dolce-rose-mobile.webp', 'assets/img/dolce-rose-full.webp']
  },
  {
    slug: 'mrl-architecture', cat: 'portfolio', color: 'c4', icon: 'bi-building',
    cover: 'assets/img/mrl-hero.webp',
    tag: 'Portfolio', title: 'MR L Production — Architecture Studio',
    summary: 'A cinematic, full-screen portfolio for an architecture and interiors studio, with a glass dashboard of featured work and key numbers.',
    role: 'Design & Front-End Development', year: '2025', duration: '4 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'An architecture studio needed a website that lets its buildings speak first, feels as refined as its work and quickly proves experience to potential clients.',
    approach: [
      'Led with a full-bleed architectural photo, a large serif headline with a warm gold accent and a clear Explore Our Work call to action.',
      'Added a floating pill navigation and a slim side rail for quick jumps between sections, plus a Watch Showreel button.',
      'Built a glass-style bottom dashboard with a featured project slider, three headline statistics and a Bring Your Vision To Life contact card.',
      'Used a dark, warm palette of charcoal, cream and copper so the photography and typography stay in focus.'
    ],
    results: ['A premium, cinematic first impression', 'Featured work and credibility visible at once', 'Clear invitation to start a project'],
    live: '', code: '',
    shots: ['assets/img/mrl-hero.webp']
  },
  {
    slug: 'verde-studio', cat: 'shop', color: 'c5', icon: 'bi-bag-heart',
    cover: 'assets/img/verde-home.webp',
    tag: 'E-commerce', title: 'VERDE Studio — Sustainable Fashion',
    summary: 'A refined multi-page fashion store with an editorial home page, a filterable collection, product pages, wishlist, bag and a step-by-step checkout.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A conscious fashion label needed an online store that feels as calm and considered as its clothes, with every step from browsing to checkout clear and uncluttered, on any screen.',
    approach: [
      'Built a quiet palette of warm cream, forest green and terracotta, with elegant serif headlines and an italic accent word, so the photography stays the focus.',
      'Opened the home page with an editorial hero, curated collections in arched image panels, new arrivals, a trending carousel and a styled-for-you section with category chips.',
      'Created every page a shopper needs: a filterable collection with search, colour and size filters and a grid or list view, product pages with colour and size pickers, a saved wishlist, a shopping bag and a four-step checkout.',
      'Added the brand story pages (About with the atelier, craft and sustainability sections, and a Contact page with boutiques) and a client account area with order history.',
      'Kept one header, footer and set of components across all pages, with a full-height slide-out menu and stacked layouts on phones.'
    ],
    results: ['A calm, premium shopping experience', 'Every page from browsing to checkout in one consistent system', 'A layout that holds up from phone to widescreen'],
    live: '', code: '',
    shots: ['assets/img/verde-home.webp', 'assets/img/verde-about.webp', 'assets/img/verde-contact.webp', 'assets/img/verde-mobile.webp', 'assets/img/verde-full.webp']
  },
  {
    slug: 'enola-ceramics', cat: 'landing', color: 'c3', icon: 'bi-cup-hot',
    cover: 'assets/img/enola-home.webp',
    tag: 'Multi-page website', title: 'ENOLA — Ceramics Studio',
    summary: 'A calm, editorial multi-page website for a handmade ceramics studio, with a full-screen slider, arch-shaped galleries, masterclass booking and a product catalog.',
    role: 'Design & Front-End Development', year: '2026', duration: '5 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A ceramics studio needed a website as quiet and tactile as its work: one that shows the pieces first, explains its masterclasses clearly and makes enquiring feel unhurried.',
    approach: [
      'Opened with a rounded full-screen slider: a huge ENOLA wordmark, three slides (the studio, the collections and masterclasses), a floating glass navigation pill and a rotating circular badge.',
      'Used warm clay, cream and espresso tones with elegant serif headings and italic accents, so the photography of vases, plates and hands at the wheel stays the focus.',
      'Echoed the shape of a kiln and a doorway with arches throughout: tall arched gallery panels that expand on hover, arched principle cards and arched project images.',
      'Built five pages with one shared header and footer: Home, About with a milestones timeline, Projects with category filters, Masterclass with a booking form and FAQ accordion, and Catalog with enquiry buttons, plus a contact page with a styled map and a custom dropdown.',
      'Made every page responsive, with a slide-out menu and a stacked layout on phones.'
    ],
    results: ['A calm, premium brand feel', 'Pieces and classes easy to explore and book', 'Consistent look across five pages'],
    live: '', code: '',
    shots: ['assets/img/enola-home.webp', 'assets/img/enola-slide.webp', 'assets/img/enola-pieces.webp', 'assets/img/enola-mobile.webp', 'assets/img/enola-full.webp']
  },
  {
    slug: 'kido-kids', cat: 'shop', color: 'c6', icon: 'bi-emoji-smile',
    cover: 'assets/img/kido-hero.webp',
    tag: 'E-commerce', title: 'Kido Kids — Childrenswear',
    summary: 'A bright, playful online store for organic childrenswear, with a photo-led hero, product collections, an exclusive offer countdown and parent reviews.',
    role: 'Design & Front-End Development', year: '2026', duration: '5 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A childrenswear brand needed a store that feels joyful and trustworthy at the same time, one that parents can shop quickly and that makes organic quality obvious.',
    approach: [
      'Opened with a full-width photo hero of happy kids, a clear Shop Now call to action and trust cues such as the parent rating and 100% organic cotton badge.',
      'Added a benefits strip and a new collection slider with category filters, wishlist hearts and quick add-to-cart buttons.',
      'Organised shopping by vibe and moment with image cards, then built a flash-sale countdown, a brand story, reasons to choose the brand and a community gallery.',
      'Finished with parent reviews, an FAQ accordion, a contact form and a newsletter club, using a soft lime and lavender palette that is fun but clean on every screen size.'
    ],
    results: ['A warm, joyful brand feel', 'Easy shopping by category and occasion', 'Trust built with reviews, FAQs and support'],
    live: '', code: '',
    shots: ['assets/img/kido-hero.webp', 'assets/img/kido-full.webp']
  },
  {
    slug: 'petrocore-energy', cat: 'landing', color: 'c5', icon: 'bi-fuel-pump',
    cover: 'assets/img/petrocore-home.webp',
    tag: 'Multi-page website', title: 'PetroCore — Energy Solutions',
    summary: 'A bold corporate website for an oil and gas engineering company, with cinematic industrial photography, services, a project portfolio, insights and a leadership contact page.',
    role: 'Design & Front-End Development', year: '2026', duration: '6 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'An energy engineering firm needed a website that communicates scale, safety and expertise at a glance, while giving clients a clear way to explore services and projects and get in touch.',
    approach: [
      'Led with full-bleed industrial photography under a deep navy overlay, with refined serif headlines and an energetic orange accent.',
      'Built a multi-page structure: Home with a Why Choose Us card and industry rating, About, Services, Projects with detailed project pages, an Insights blog and Contact.',
      'Wrote each hero as a single clear promise (for example Powering the World, Responsibly) and added a call-us shortcut in the header for fast enquiries.',
      'Kept the navigation, banners and typography consistent across pages and optimised the layout for mobile.'
    ],
    results: ['A premium, high-trust corporate look', 'Services and projects easy to explore', 'Consistent design across every page'],
    live: '', code: '',
    shots: ['assets/img/petrocore-home.webp', 'assets/img/petrocore-services.webp', 'assets/img/petrocore-projects.webp', 'assets/img/petrocore-mobile.webp', 'assets/img/petrocore-full.webp']
  },
  {
    slug: 'pethouse-adoption', cat: 'landing', color: 'c6', icon: 'bi-heart',
    cover: 'assets/img/pethouse-cover.webp',
    tag: 'Landing page', title: 'PetHouse — Pet Adoption',
    summary: 'A bright, playful landing page for a pet adoption network, with a pet finder, filterable pet cards, real stories from adopters and a contact form.',
    role: 'Design & Front-End Development', year: '2026', duration: '3 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    challenge: 'An adoption network needed a website that feels happy and welcoming, makes it easy to find a pet that fits, and builds the trust a family needs before getting in touch.',
    approach: [
      'Built a joyful identity from cobalt blue, warm cream, soft pink and sunshine orange, with a chunky rounded display font for the headings and a clean sans-serif for reading.',
      'Opened with a hero that puts the first action up front: a pet-type picker with a Start Here button, trust badges such as Vet checked, a family rating, and live counters for pets available, matches made and animals saved.',
      'Walked visitors through the decision in order: how adoption works in three simple steps, pets that can be filtered by type, why adopt with PetHouse, a photo gallery of the animals and stories from happy families.',
      'Finished with an FAQ accordion, a contact form with address and opening hours, and a newsletter sign-up, using wavy section edges to keep the page soft and friendly.',
      'Made every section responsive, with a compact menu and stacked cards on phones.'
    ],
    results: ['A warm, memorable first impression', 'Pets are easy to browse and filter', 'Trust built with stories, FAQs and clear contact details'],
    live: '', code: '',
    shots: ['assets/img/pethouse-hero.webp', 'assets/img/pethouse-mobile.webp', 'assets/img/pethouse-full.webp']
  },
  {
    slug: 'wash-house', cat: 'shop', color: 'c3', icon: 'bi-droplet-half',
    cover: 'assets/img/washhouse-hero.webp',
    tag: 'E-commerce', title: 'Wash House — Natural Soap',
    summary: 'A warm, earthy online store for handmade natural soap, with bold typography, a moving ticker and a playful brand voice.',
    role: 'Design & Front-End Development', year: '2025', duration: '3 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    challenge: 'A natural soap brand wanted a store that felt handmade, honest and fun, standing out from sterile skincare sites while still making it easy to shop.',
    approach: [
      'Chose a warm cream, forest green and terracotta palette with a bold serif headline to give the brand a crafted, friendly personality.',
      'Designed a hero with a curved image mask, a clear shop call to action and social proof right beside it.',
      'Added an announcement bar and a scrolling ticker of brand values (plant-based, cold process, made by hand, plastic-free) to communicate what matters at a glance.',
      'Built a clean header with simple navigation, account and a live cart counter, fully responsive on mobile.'
    ],
    results: ['A distinctive, memorable brand feel', 'Brand values communicated in seconds', 'Clear path from first look to shop'],
    live: '', code: '',
    shots: ['assets/img/washhouse-hero.webp']
  },
  {
    slug: 'kidoro-academy', cat: 'landing', color: 'c1', icon: 'bi-palette',
    cover: 'assets/img/kidoro-home.webp',
    tag: 'Multi-page website', title: 'Kidoro — Creative Kids Academy',
    summary: 'A playful, colourful multi-page website for a children’s art academy, with programs, events, a student gallery and a free-trial booking form.',
    role: 'Design & Front-End Development', year: '2026', duration: '5 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'An art academy for children aged 3 to 6 needed a website that feels joyful and creative for kids, yet clear and trustworthy for the parents who choose the programs.',
    approach: [
      'Built a bold identity from lime, lavender, pink and sunshine yellow, pairing a heavy sans-serif with an italic serif accent in every headline, with floating organic shapes and a rotating circular badge.',
      'Opened the home page with a large headline, an animated video thumbnail, hashtag stickers on a curved line and three colourful program cards, followed by a scrolling ticker, a trust story with statistics and a how-it-works section.',
      'Created five consistent inner pages, each with its own coloured header and breadcrumb: About with a story, values and a growth timeline, Programs with a comparison table and class breakdowns, Events with a featured date and filters, a filterable Student showcase gallery and Contact with a map.',
      'Added parent-friendly details: age badges, a typical class in four steps, a free-trial booking form with custom dropdowns, FAQ accordions and a newsletter sign-up.',
      'Designed a numbered slide-out menu for phones and made every page stack cleanly on small screens.'
    ],
    results: ['A joyful, memorable brand for kids and parents', 'Programs, events and the studio easy to explore', 'A clear path to booking a free trial'],
    live: '', code: '',
    shots: ['assets/img/kidoro-about.webp', 'assets/img/kidoro-programs.webp', 'assets/img/kidoro-events.webp', 'assets/img/kidoro-gallery.webp', 'assets/img/kidoro-contact.webp', 'assets/img/kidoro-nav.webp', 'assets/img/kidoro-full.webp']
  },
  {
    slug: 'gamila-hijab', cat: 'shop', color: 'c2', icon: 'bi-bag-heart',
    cover: 'assets/img/gamila-hero.webp',
    tag: 'E-commerce', title: 'Gamila — Hijab Boutique',
    summary: 'An elegant burgundy-and-rose online boutique for premium hijabs, built around arched imagery and a luxe collection hero.',
    role: 'Design & Front-End Development', year: '2025', duration: '3 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper'],
    challenge: 'A hijab boutique needed an online store that felt as refined as its satin fabrics, with a premium look, clear shopping paths and an easy way to browse by fabric and colour.',
    approach: [
      'Created a rich burgundy and rose palette with a classic serif logo and script accents to convey luxury and warmth.',
      'Designed an arched triple-panel hero slider that pairs fabric close-ups, the featured collection and model photography.',
      'Built a clean store header with announcement bar, social links, search, account, wishlist and cart counters, plus a navigation focused on Shop, Fabrics, Colours and Reviews.',
      'Kept the layout fully responsive so shoppers can browse and buy comfortably from their phones.'
    ],
    results: ['A premium, memorable brand look', 'Easy browsing by fabric and colour', 'Smooth shopping experience on every device'],
    live: '', code: '',
    shots: ['assets/img/gamila-hero.webp']
  },
  {
    slug: 'wanderly-travel', cat: 'landing', color: 'c1', icon: 'bi-globe-americas',
    cover: 'assets/img/wanderly-desktop.webp',
    tag: 'Landing page', title: 'Wanderly — Travel & Tours',
    summary: 'An immersive travel agency website with a full-screen hero, destination cards, trip packages, stories and a glassy floating navigation.',
    role: 'Design & Front-End Development', year: '2025', duration: '4 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Swiper', 'Owl Carousel'],
    challenge: 'A travel agency needed a website that makes visitors feel the destination before they book, while guiding them from inspiration to choosing a package without friction.',
    approach: [
      'Opened with a full-screen aerial hero, a script-accent headline and a glass navigation bar so the photography leads the story.',
      'Structured a long, scroll-friendly page: top destinations, trip types, popular packages, early-bird offer, how it works, traveller stories, inspiration gallery and travel tips.',
      'Used a deep green and fresh mint palette with elegant serif headings to feel calm, natural and trustworthy.',
      'Added carousels, hover cards and clear calls to action such as Plan Your Trip, and optimised the layout for mobile with a compact menu and stacked sections.'
    ],
    results: ['A hero that sells the experience instantly', 'A clear journey from inspiration to booking', 'Consistent, polished design across a long page'],
    live: '', code: '',
    shots: ['assets/img/wanderly-desktop.webp', 'assets/img/wanderly-mobile.webp', 'assets/img/wanderly-full.webp']
  },
  {
    slug: 'aegis-logistics', cat: 'landing', color: 'c5', icon: 'bi-truck',
    cover: 'assets/img/aegis-hero.webp',
    tag: 'Landing page', title: 'Aegis Logistics — Global Freight',
    summary: 'A clean, trustworthy website for a global freight company, with a bold headline, service overview, network map, leadership team, news and a quote request form.',
    role: 'Design & Front-End Development', year: '2026', duration: '4 weeks',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    challenge: 'A logistics company needed a website that makes complex global freight feel simple and reliable, builds trust quickly and turns visitors into quote requests.',
    approach: [
      'Led with a confident serif headline (Don’t just ship, deliver), a single clear call to action and a rotating circular text badge for personality.',
      'Added a dark trust bar (24/7 tracking, 150+ countries, 100% secure) and a row of key benefits right under the hero.',
      'Structured the page around what clients need to decide: about the company, services, global network, statistics, sustainability, leadership team, partner reviews and logistics news.',
      'Finished with a Request Your Freight Quote form, and used a deep green, cream and lavender palette that feels professional but approachable, fully responsive on mobile.'
    ],
    results: ['Trust built within seconds of landing', 'Services and credentials easy to scan', 'A clear path to request a quote'],
    live: '', code: '',
    shots: ['assets/img/aegis-hero.webp', 'assets/img/aegis-mobile.webp', 'assets/img/aegis-full.webp']
  }
];

/* Image sizes (width, height) so the browser can reserve space before images load. Generated by the image optimiser. */
window.IMG_DIMS = {"assets/img/wayfarer-santorini.webp":[1600,1000],"assets/img/wayfarer-maldives.webp":[1600,1000],"assets/img/wayfarer-bali.webp":[1600,1000],"assets/img/wayfarer-lapland.webp":[1600,1000],"assets/img/wayfarer-full.webp":[1000,7524],"assets/img/formwood-hero.webp":[1600,924],"assets/img/formwood-departments.webp":[1600,1000],"assets/img/formwood-drop.webp":[1600,1000],"assets/img/formwood-lookbook.webp":[1600,1000],"assets/img/formwood-bundle.webp":[1600,1000],"assets/img/formwood-philosophy.webp":[1600,967],"assets/img/formwood-reviews.webp":[1600,906],"assets/img/formwood-mockup.webp":[1600,1000],"assets/img/florista-hero1.webp":[1500,1125],"assets/img/florista-hero2.webp":[1500,1125],"assets/img/florista-mobile.webp":[640,1385],"assets/img/florista-full.webp":[1000,6917],"assets/img/ravenmoor-hero.webp":[1600,1000],"assets/img/ravenmoor-matches.webp":[1600,1000],"assets/img/ravenmoor-news.webp":[1600,1000],"assets/img/ravenmoor-about.webp":[1600,1000],"assets/img/ravenmoor-mobile.webp":[640,1385],"assets/img/ravenmoor-full.webp":[1000,5536],"assets/img/bagista-hero.webp":[1600,1000],"assets/img/bagista-full.webp":[1000,6205],"assets/img/emilyjane-cover.webp":[1600,787],"assets/img/emilyjane-hero.webp":[1600,668],"assets/img/emilyjane-library.webp":[1600,1467],"assets/img/emilyjane-contact.webp":[1600,1009],"assets/img/emilyjane-modal.webp":[1600,1000],"assets/img/emilyjane-responsive.webp":[1600,840],"assets/img/emilyjane-mobile.webp":[640,1385],"assets/img/emilyjane-full.webp":[1000,6850],"assets/img/healthcare-home.webp":[1600,1000],"assets/img/healthcare-services.webp":[1600,1000],"assets/img/healthcare-team.webp":[1600,1000],"assets/img/healthcare-mobile.webp":[640,1385],"assets/img/healthcare-full.webp":[1000,6472],"assets/img/littlestage-home.webp":[1600,1000],"assets/img/littlestage-about.webp":[1600,656],"assets/img/littlestage-approach.webp":[1600,600],"assets/img/littlestage-parents.webp":[1600,1131],"assets/img/littlestage-mobile.webp":[640,1385],"assets/img/littlestage-full.webp":[1000,3877],"assets/img/dolce-rose-desktop.webp":[1600,822],"assets/img/dolce-rose-mobile.webp":[640,1385],"assets/img/dolce-rose-full.webp":[1100,3903],"assets/img/mrl-hero.webp":[1600,1000],"assets/img/enola-home.webp":[1600,1000],"assets/img/enola-slide.webp":[1600,1000],"assets/img/enola-pieces.webp":[1600,1175],"assets/img/enola-mobile.webp":[640,1385],"assets/img/enola-full.webp":[1000,4274],"assets/img/kido-hero.webp":[1600,1000],"assets/img/kido-full.webp":[1000,5806],"assets/img/petrocore-home.webp":[1600,1000],"assets/img/petrocore-services.webp":[1600,1000],"assets/img/petrocore-projects.webp":[1600,1000],"assets/img/petrocore-mobile.webp":[640,1385],"assets/img/petrocore-full.webp":[1000,6183],"assets/img/washhouse-hero.webp":[1600,1000],"assets/img/kidoro-home.webp":[1600,1000],"assets/img/kidoro-about.webp":[1600,1000],"assets/img/kidoro-programs.webp":[1600,1000],"assets/img/kidoro-events.webp":[1600,1000],"assets/img/kidoro-gallery.webp":[1600,1000],"assets/img/kidoro-contact.webp":[1600,1000],"assets/img/kidoro-nav.webp":[1400,1167],"assets/img/kidoro-full.webp":[1000,6551],"assets/img/gamila-hero.webp":[1600,900],"assets/img/wanderly-desktop.webp":[1600,1000],"assets/img/wanderly-mobile.webp":[640,1385],"assets/img/wanderly-full.webp":[1000,5824],"assets/img/aegis-hero.webp":[1600,1000],"assets/img/aegis-mobile.webp":[640,1385],"assets/img/aegis-full.webp":[1000,6535],"assets/img/verde-home.webp":[1600,961],"assets/img/verde-about.webp":[1600,961],"assets/img/verde-contact.webp":[1600,961],"assets/img/verde-mobile.webp":[640,1385],"assets/img/verde-full.webp":[1000,3889],"assets/img/pethouse-cover.webp":[1600,1000],"assets/img/pethouse-hero.webp":[1600,1000],"assets/img/pethouse-mobile.webp":[488,1056],"assets/img/pethouse-full.webp":[1000,5981],"assets/img/forno-home.webp":[1600,1000],"assets/img/forno-about.webp":[1600,1000],"assets/img/forno-gallery.webp":[1600,1000],"assets/img/forno-contact.webp":[1600,1000],"assets/img/forno-mobile.webp":[640,1385],"assets/img/forno-full.webp":[1000,2794],"assets/img/forno-cover.webp":[1600,933],"assets/img/forno-events.webp":[1600,933]};
