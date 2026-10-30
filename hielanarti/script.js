/* =============================================================
   EDIT YOUR PHOTOS HERE / عدّل الصور والروابط هنا فقط
   1. Put your images inside assets/ (for example: art-01.jpg).
   2. Change src below to the exact filename, including extension.
   3. Set demo: false after adding your real drawings.
   إضافة صورة: انسخ أحد عناصر art وغيّر اسم الملف والعنوان.
   ============================================================= */
const SITE = {
  defaultLanguage: "en", // "en" or "ar"
  slideshowSeconds: 5,
  art: [
    { src: "assets/art-01.svg", title: { en: "A little daydream", ar: "أحلام صغيرة" }, alt: { en: "Decorative preview: pink flowers on a cream background", ar: "صورة تجريبية: زهور وردية على خلفية كريمية" }, demo: true },
    { src: "assets/art-02.svg", title: { en: "Somewhere among the stars", ar: "في مكان بين النجوم" }, alt: { en: "Decorative preview: a moon and stars in a mauve sky", ar: "صورة تجريبية: قمر ونجوم في سماء بنفسجية" }, demo: true },
    { src: "assets/art-03.svg", title: { en: "Little things, big feelings", ar: "أشياء صغيرة، مشاعر كبيرة" }, alt: { en: "Decorative preview: a pink heart and green leaves", ar: "صورة تجريبية: قلب وردي وأوراق خضراء" }, demo: true }
  ],
  character: {
    src: "assets/jade-placeholder.svg", // Replace with assets/jade.png (or .jpg / .webp)
    alt: { en: "Decorative placeholder for a Jade Harley image", ar: "صورة مؤقتة لاستبدالها بصورة Jade Harley" }
  },
  instagram: "https://www.instagram.com/realhielanarti/",
  instagramHandle: "@realhielanarti",
  tiktok: "https://www.tiktok.com/@hielanarti4",
  tiktokHandle: "@hielanarti4"
};

/* Text in both languages / جميع نصوص الموقع باللغتين */
const TEXT = {
  en: {
    skip: "Skip to content", navigation: "Main navigation", navAbout: "About me", navArt: "My art", navFavorites: "Favorites", navAccounts: "Say hi",
    heroEyebrow: "MY VERY OWN LITTLE CORNER", hello: "oh, hi there! i'm hiesoo ♡", heroLine1: "a little art.", heroLine2: "a lot of me.",
    intro: "I'm a student from Iraq. I love games, art, and turning little moments into something lovely. Welcome to my world — make yourself at home.",
    explore: "Take a little look", heroNote: "a collection of things that feel like me", location: "A LITTLE HELLO FROM IRAQ", student: "student", gamer: "gamer", artLover: "art lover", est: "EST. OCTOBER 2026",
    artEyebrow: "01 / MY ART", artLine1: "from my", artLine2: "sketchbook.", artDescription: "A few colors, a little imagination, and pieces of my world. There’s always room for one more drawing.", artNote: "little pieces of a big imagination ♡",
    galleryLabel: "My art gallery", galleryPreview: "GALLERY PREVIEW", openArtwork: "Open artwork", imageMissing: "This little picture is on its way ♡", galleryHint: "a tiny gallery, made with love", chooseArt: "Choose an artwork", previous: "Previous artwork", next: "Next artwork", pauseSlideshow: "Pause slideshow", playSlideshow: "Play slideshow", artworkPreview: "Artwork preview", close: "Close preview", emptyGallery: "New drawings are on their way ♡",
    gamesEyebrow: "02 / MY FAVORITE GAMES", gamesLine1: "soft colors.", gamesLine2: "chaotic lobbies.", gamesDescription: "A little competitive, a little chaotic. These are the worlds I love getting lost in.", marqueeLabel: "Favorite games. Focus or hover to pause movement.", brawlGenre: "a little mayhem", brawlTag: "one more match?", ultrakillGenre: "beautiful chaos", ultrakillTag: "no time to slow down", overwatchGenre: "team-up energy", overwatchTag: "meet me in the lobby", gamesNote: "yes, my game library has a personality of its own.",
    characterEyebrow: "03 / MY FAVORITE CHARACTER", characterDescription: "Every little world needs a favorite character. Mine has a special place for Jade Harley — this corner is all hers.", jadeTag1: "forever a favorite", jadeTag2: "a little green magic", characterNote: "some characters just feel like home ♡",
    accountsEyebrow: "04 / MY ACCOUNTS", accountsLine1: "let's stay", accountsLine2: "a little closer.", accountsDescription: "More little moments, games, and whatever I’m into lately. You can find me here.",
    footerNote: "you made my little corner a little warmer.", footerLine1: "thanks for", footerLine2: "stopping by.", footerGoodbye: "Hope you found something that made you smile. Come back whenever — I’ll be here, probably drawing or in a game.", backTop: "back to the top", madeWith: "made with a little love ♡", pauseMotion: "Pause animations", playMotion: "Resume animations",
    postcard: "the little things ♡", dearInternet: "dear internet,", friends: "let's be friends.", daydreamer: "daydreamer", characterSticker: "MY FAVORITE FICTIONAL GIRL ♡", jadeBeloved: "jade, my beloved."
  },
  ar: {
    skip: "انتقل إلى المحتوى", navigation: "التنقل الرئيسي", navAbout: "عني", navArt: "رسوماتي", navFavorites: "مفضلاتي", navAccounts: "حساباتي",
    heroEyebrow: "ركني الصغير في هذا العالم", hello: "أهلًا، أنا هيسو ♡", heroLine1: "شوية فنّ.", heroLine2: "وكثير منّي.",
    intro: "أنا طالبة من العراق، أحب الألعاب والفن وأحوّل اللحظات الصغيرة إلى أشياء حلوة. أهلًا بك في عالمي، خذ راحتك وكأنك في بيتك.",
    explore: "خذ لفة في عالمي", heroNote: "مجموعة أشياء تشبهني وتعبّر عنّي", location: "أهلًا صغيرة من العراق", student: "طالبة", gamer: "أحب الألعاب", artLover: "عاشقة للفن", est: "منذ أكتوبر ٢٠٢٦",
    artEyebrow: "٠١ / رسوماتي", artLine1: "من دفتر", artLine2: "رسوماتي.", artDescription: "شوية ألوان، شوية خيال، وقطع صغيرة من عالمي. دائمًا فيه مساحة لرسمة جديدة.", artNote: "تفاصيل صغيرة من خيال كبير ♡",
    galleryLabel: "معرض رسوماتي", galleryPreview: "معاينة للمعرض", openArtwork: "افتح الرسمة", imageMissing: "هالصورة الحلوة في الطريق ♡", galleryHint: "معرض صغير، معمول بحب", chooseArt: "اختر رسمة", previous: "الرسمة السابقة", next: "الرسمة التالية", pauseSlideshow: "أوقف العرض التلقائي", playSlideshow: "شغّل العرض التلقائي", artworkPreview: "معاينة الرسمة", close: "أغلق المعاينة", emptyGallery: "رسومات جديدة في الطريق ♡",
    gamesEyebrow: "٠٢ / ألعابي المفضلة", gamesLine1: "ألوان هادية.", gamesLine2: "وقيمات فوضوية.", gamesDescription: "شوية حماس، وشوية فوضى. هذي العوالم اللي أحب أضيع بين تفاصيلها.", marqueeLabel: "الألعاب المفضلة. حدّد القائمة أو مرّر المؤشر لإيقاف الحركة.", brawlGenre: "شوية فوضى", brawlTag: "قيم أخير؟", ultrakillGenre: "فوضى جميلة", ultrakillTag: "ما فيه وقت نهدأ", overwatchGenre: "حماس الفريق", overwatchTag: "نلتقي في اللوبي", gamesNote: "إيه، حتى قائمة ألعابي لها شخصية لحالها.",
    characterEyebrow: "٠٣ / شخصيتي المفضلة", characterDescription: "كل عالم صغير يحتاج شخصية مفضلة. وعالمي فيه مكان خاص لجيد هارلي، فهالركن كله لها.", jadeTag1: "مفضلتي دائمًا", jadeTag2: "شوية سحر أخضر", characterNote: "بعض الشخصيات تحسّها تشبه البيت ♡",
    accountsEyebrow: "٠٤ / حساباتي", accountsLine1: "خلّنا نبقى", accountsLine2: "أقرب شوي.", accountsDescription: "لحظات أكثر، ألعاب، وكل الأشياء اللي أحبها هالأيام. تقدر تلقاني هنا.",
    footerNote: "وجودك خلّى ركني الصغير أدفى.", footerLine1: "شكرًا لأنك", footerLine2: "مرّيت من هنا.", footerGoodbye: "أتمنى لقيت شي خلّاك تبتسم. ارجع بأي وقت، بتلقاني هنا، غالبًا أرسم أو وسط قيم.", backTop: "نرجع للبداية", madeWith: "معمول بشوية حب ♡", pauseMotion: "أوقف الحركات", playMotion: "شغّل الحركات",
    postcard: "التفاصيل الصغيرة ♡", dearInternet: "يا عالمي الصغير،", friends: "خلّنا نصير أصدقاء.", daydreamer: "أحلام يقظة", characterSticker: "شخصيتي الخيالية المفضلة ♡", jadeBeloved: "جيد، يا مفضلتي."
  }
};

(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* Private browsing may disable storage. */ } }
  };
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const savedLanguage = storage.get("hiesoo-language");
  let language = ["en", "ar"].includes(savedLanguage) ? savedLanguage : SITE.defaultLanguage;
  if (!TEXT[language]) language = "en";
  const savedMotion = storage.get("hiesoo-pause-motion");
  let motionPaused = savedMotion === null ? media.matches : savedMotion === "true";
  let slidePaused = false;
  let hovered = false;
  let focused = false;
  let activeIndex = 0;
  let elapsed = 0;
  let previousFrame = 0;
  let animationFrame = null;
  let imageFailed = new Set();
  const slides = Array.isArray(SITE.art) ? SITE.art : [];
  const duration = Math.max(2, Number(SITE.slideshowSeconds) || 5) * 1000;
  const gallery = $("gallery");
  const display = $("artDisplay");
  const modal = $("artModal");
  const fallback = display.querySelector(".image-fallback");
  const imageElements = [];
  const dots = [];
  const localized = (value) => typeof value === "string" ? value : value?.[language] || value?.en || "";

  slides.forEach((slide, index) => {
    const img = document.createElement("img");
    img.decoding = "async";
    img.draggable = false;
    img.width = 1000;
    img.height = 800;
    img.addEventListener("error", () => {
      imageFailed.add(index);
      if (activeIndex === index) updateGallery();
    });
    img.src = slide.src;
    display.append(img);
    imageElements.push(img);
    const dot = document.createElement("button");
    dot.type = "button";
    dot.addEventListener("click", () => showSlide(index, true));
    $("galleryDots").append(dot);
    dots.push(dot);
  });

  // Duplicate one full set for a seamless loop. Clones are hidden from assistive technology.
  const gameSet = $("gamesTrack").querySelector(".game-set");
  // Two repeats per group ensure the content fills wide screens before looping.
  [...gameSet.children].forEach((card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    gameSet.append(clone);
  });
  const repeatedGames = gameSet.cloneNode(true);
  repeatedGames.setAttribute("aria-hidden", "true");
  $("gamesTrack").append(repeatedGames);

  function updateGallery() {
    const slide = slides[activeIndex];
    const hasImage = Boolean(slide) && !imageFailed.has(activeIndex);
    imageElements.forEach((img, index) => {
      img.alt = localized(slides[index].alt || slides[index].title);
      img.classList.toggle("is-active", index === activeIndex && hasImage);
      img.setAttribute("aria-hidden", String(index !== activeIndex || !hasImage));
    });
    fallback.hidden = hasImage;
    fallback.textContent = slide ? TEXT[language].imageMissing : TEXT[language].emptyGallery;
    display.disabled = !hasImage;
    $("galleryDemo").hidden = !slide?.demo;
    $("artCaption").textContent = slide ? localized(slide.title) : TEXT[language].emptyGallery;
    $("galleryCount").replaceChildren(document.createTextNode(String(slide ? activeIndex + 1 : 0).padStart(2, "0") + " "));
    const total = document.createElement("span");
    total.textContent = "/ " + String(slides.length).padStart(2, "0");
    $("galleryCount").append(total);
    dots.forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === activeIndex));
      dot.setAttribute("aria-label", `${TEXT[language].openArtwork}: ${localized(slides[index].title)} (${index + 1})`);
    });
    $("previousArt").disabled = slides.length < 2;
    $("nextArt").disabled = slides.length < 2;
    $("galleryPlay").disabled = slides.length < 2 || motionPaused;
  }

  function showSlide(index, announce = false) {
    if (!slides.length) return;
    activeIndex = (index + slides.length) % slides.length;
    elapsed = 0;
    $("slideProgress").style.transform = "scaleX(0)";
    updateGallery();
    if (announce) $("galleryStatus").textContent = `${localized(slides[activeIndex].title)} — ${activeIndex + 1} / ${slides.length}`;
  }

  function canPlay() {
    return slides.length > 1 && !slidePaused && !motionPaused && !hovered && !focused && !document.hidden && !modal.open;
  }
  function tick(now) {
    animationFrame = null;
    if (!canPlay()) return;
    if (previousFrame) elapsed += Math.min(now - previousFrame, 250);
    previousFrame = now;
    if (elapsed >= duration) showSlide(activeIndex + 1);
    $("slideProgress").style.transform = `scaleX(${elapsed / duration})`;
    animationFrame = requestAnimationFrame(tick);
  }
  function syncPlayback() {
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    previousFrame = 0;
    if (canPlay()) animationFrame = requestAnimationFrame(tick);
    const paused = slidePaused || motionPaused;
    $("galleryPlay").textContent = paused ? "▷" : "Ⅱ";
    $("galleryPlay").setAttribute("aria-pressed", String(paused));
    $("galleryPlay").setAttribute("aria-label", TEXT[language][paused ? "playSlideshow" : "pauseSlideshow"]);
  }

  function applyLanguage() {
    const t = TEXT[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "هيسو — شوية فنّ، وكثير منّي" : "hiesoo — a little art, a lot of me";
    document.querySelector('meta[name="description"]').content = t.intro;
    document.querySelectorAll("[data-i18n]").forEach((node) => { if (t[node.dataset.i18n]) node.textContent = t[node.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-aria]").forEach((node) => { if (t[node.dataset.i18nAria]) node.setAttribute("aria-label", t[node.dataset.i18nAria]); });
    $("languageToggle").innerHTML = language === "en" ? 'عربي <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
    $("languageToggle").lang = language === "en" ? "ar" : "en";
    $("languageToggle").setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية");
    $("previousArt").setAttribute("aria-label", t.previous);
    $("nextArt").setAttribute("aria-label", t.next);
    $("closeModal").setAttribute("aria-label", t.close);
    $("characterImage").alt = localized(SITE.character.alt);
    updateMotionLabels();
    updateGallery();
    syncPlayback();
    if (modal.open) updateModal();
  }

  function updateMotionLabels() {
    const label = TEXT[language][motionPaused ? "playMotion" : "pauseMotion"];
    $("motionToggle").setAttribute("aria-label", label);
    $("motionToggle").title = label;
    $("motionToggle").setAttribute("aria-pressed", String(motionPaused));
  }
  function applyMotion() {
    document.documentElement.classList.toggle("motion-paused", motionPaused);
    updateMotionLabels();
    updateGallery();
    syncPlayback();
  }

  $("languageToggle").addEventListener("click", () => {
    language = language === "en" ? "ar" : "en";
    storage.set("hiesoo-language", language);
    applyLanguage();
  });
  $("motionToggle").addEventListener("click", () => {
    motionPaused = !motionPaused;
    storage.set("hiesoo-pause-motion", String(motionPaused));
    applyMotion();
  });
  media.addEventListener("change", (event) => {
    if (storage.get("hiesoo-pause-motion") === null) { motionPaused = event.matches; applyMotion(); }
  });
  $("previousArt").addEventListener("click", () => showSlide(activeIndex - 1, true));
  $("nextArt").addEventListener("click", () => showSlide(activeIndex + 1, true));
  $("galleryPlay").addEventListener("click", () => { slidePaused = !slidePaused; syncPlayback(); });
  gallery.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { hovered = true; syncPlayback(); } });
  gallery.addEventListener("pointerleave", (event) => { if (event.pointerType === "mouse") { hovered = false; syncPlayback(); } });
  gallery.addEventListener("focusin", () => { focused = true; syncPlayback(); });
  gallery.addEventListener("focusout", (event) => { if (!gallery.contains(event.relatedTarget)) { focused = false; syncPlayback(); } });
  document.addEventListener("visibilitychange", syncPlayback);
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      showSlide(activeIndex + (language === "ar" ? -direction : direction), true);
    }
  });

  // Swipe horizontally on the picture; vertical movement still scrolls the page.
  let pointerStart = null;
  let suppressClick = false;
  display.addEventListener("pointerdown", (event) => { pointerStart = { x: event.clientX, y: event.clientY }; suppressClick = false; });
  display.addEventListener("pointerup", (event) => {
    if (!pointerStart) return;
    const dx = event.clientX - pointerStart.x;
    const dy = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      suppressClick = true;
      const direction = dx < 0 ? 1 : -1;
      showSlide(activeIndex + (language === "ar" ? -direction : direction), true);
    }
  });
  display.addEventListener("pointercancel", () => { pointerStart = null; });

  function updateModal() {
    const slide = slides[activeIndex];
    if (!slide) return;
    $("modalImage").src = slide.src;
    $("modalImage").alt = localized(slide.alt || slide.title);
    $("modalCaption").textContent = localized(slide.title);
  }
  display.addEventListener("click", () => {
    if (suppressClick) { suppressClick = false; return; }
    if (!slides.length || imageFailed.has(activeIndex)) return;
    updateModal();
    if (typeof modal.showModal === "function") { modal.showModal(); syncPlayback(); }
  });
  $("closeModal").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => { if (event.target === modal) { const r = modal.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) modal.close(); } });
  modal.addEventListener("close", syncPlayback);

  $("characterImage").addEventListener("error", () => { $("characterImage").hidden = true; document.querySelector(".character-fallback").hidden = false; });
  $("characterImage").src = SITE.character.src;
  $("instagramLink").href = SITE.instagram;
  $("instagramHandle").textContent = SITE.instagramHandle;
  $("tiktokLink").href = SITE.tiktok;
  $("tiktokHandle").textContent = SITE.tiktokHandle;

  if ("IntersectionObserver" in window && !media.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.documentElement.classList.add("js-reveal");
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
  }

  applyLanguage();
  applyMotion();
})();
