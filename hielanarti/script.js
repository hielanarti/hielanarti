/* hiesoo — script.js
   يدعم ترتيب المجلدات الظاهر في صورك.
   لا يحتاج تعديل HTML أو CSS.
*/

(() => {
  "use strict";

  // نحفظ مكان ملف JavaScript قبل تنفيذ بقية الكود.
  const scriptURL = document.currentScript?.src || document.baseURI;

  function init() {
    const $ = (id) => document.getElementById(id);

    const storage = {
      get(key) {
        try {
          return localStorage.getItem(key);
        } catch {
          return null;
        }
      },

      set(key, value) {
        try {
          localStorage.setItem(key, value);
        } catch {}
      }
    };

    /* النص الإنجليزي أولًا، ثم العربي */
    const translations = {
      skip: ["Skip to content", "انتقل إلى المحتوى"],
      navigation: ["Main navigation", "التنقل الرئيسي"],
      navAbout: ["About me", "عني"],
      navArt: ["My art", "رسوماتي"],
      navFavorites: ["Favorites", "مفضلاتي"],
      navAccounts: ["Say hi", "حساباتي"],

      heroEyebrow: [
        "MY VERY OWN LITTLE CORNER",
        "ركني الصغير في هذا العالم"
      ],
      hello: ["oh, hi there! i'm hiesoo ♡", "أهلًا، أنا هيسو ♡"],
      heroLine1: ["a little art.", "شوية فنّ."],
      heroLine2: ["a lot of me.", "وكثير منّي."],
      intro: [
        "I'm a student from Iraq. I love games, art, and turning little moments into something lovely. Welcome to my world — make yourself at home.",
        "أنا طالبة من العراق، أحب الألعاب والفن وأحوّل اللحظات الصغيرة إلى أشياء حلوة. أهلًا بك في عالمي، خذ راحتك وكأنك في بيتك."
      ],
      explore: ["Take a little look", "خذ لفة في عالمي"],
      heroNote: [
        "a collection of things that feel like me",
        "مجموعة أشياء تشبهني وتعبّر عنّي"
      ],

      location: ["A LITTLE HELLO FROM IRAQ", "أهلًا صغيرة من العراق"],
      student: ["student", "طالبة"],
      gamer: ["gamer", "أحب الألعاب"],
      artLover: ["art lover", "عاشقة للفن"],
      est: ["EST. OCTOBER 2026", "منذ أكتوبر ٢٠٢٦"],

      artEyebrow: ["01 / MY ART", "٠١ / رسوماتي"],
      artLine1: ["from my", "من دفتر"],
      artLine2: ["sketchbook.", "رسوماتي."],
      artDescription: [
        "A few colors, a little imagination, and pieces of my world. There’s always room for one more drawing.",
        "شوية ألوان، شوية خيال، وقطع صغيرة من عالمي. دائمًا فيه مساحة لرسمة جديدة."
      ],
      artNote: [
        "little pieces of a big imagination ♡",
        "تفاصيل صغيرة من خيال كبير ♡"
      ],
      galleryLabel: ["My art gallery", "معرض رسوماتي"],
      galleryPreview: ["GALLERY PREVIEW", "معاينة للمعرض"],
      openArtwork: ["Open artwork", "افتح الرسمة"],
      imageMissing: [
        "This little picture is on its way ♡",
        "هالصورة الحلوة في الطريق ♡"
      ],
      imageLoading: ["Loading a little art…", "نحمّل شوية فن…"],
      galleryHint: [
        "a tiny gallery, made with love",
        "معرض صغير، معمول بحب"
      ],
      chooseArt: ["Choose an artwork", "اختر رسمة"],
      previous: ["Previous artwork", "الرسمة السابقة"],
      next: ["Next artwork", "الرسمة التالية"],
      pauseSlideshow: ["Pause slideshow", "أوقف العرض التلقائي"],
      playSlideshow: ["Play slideshow", "شغّل العرض التلقائي"],
      artworkPreview: ["Artwork preview", "معاينة الرسمة"],
      close: ["Close preview", "أغلق المعاينة"],

      gamesEyebrow: ["02 / MY FAVORITE GAMES", "٠٢ / ألعابي المفضلة"],
      gamesLine1: ["soft colors.", "ألوان هادية."],
      gamesLine2: ["chaotic lobbies.", "وقيمات فوضوية."],
      gamesDescription: [
        "A little competitive, a little chaotic. These are the worlds I love getting lost in.",
        "شوية حماس، وشوية فوضى. هذي العوالم اللي أحب أضيع بين تفاصيلها."
      ],
      marqueeLabel: [
        "Favorite games. Focus or hover to pause movement.",
        "الألعاب المفضلة. حدّد القائمة أو مرّر المؤشر لإيقاف الحركة."
      ],
      brawlGenre: ["a little mayhem", "شوية فوضى"],
      brawlTag: ["one more match?", "قيم أخير؟"],
      ultrakillGenre: ["beautiful chaos", "فوضى جميلة"],
      ultrakillTag: ["no time to slow down", "ما فيه وقت نهدأ"],
      overwatchGenre: ["team-up energy", "حماس الفريق"],
      overwatchTag: ["meet me in the lobby", "نلتقي في اللوبي"],
      gamesNote: [
        "yes, my game library has a personality of its own.",
        "إيه، حتى قائمة ألعابي لها شخصية لحالها."
      ],

      characterEyebrow: [
        "03 / MY FAVORITE CHARACTER",
        "٠٣ / شخصيتي المفضلة"
      ],
      characterDescription: [
        "Every little world needs a favorite character. Mine has a special place for Jade Harley — this corner is all hers.",
        "كل عالم صغير يحتاج شخصية مفضلة. وعالمي فيه مكان خاص لجيد هارلي، فهالركن كله لها."
      ],
      jadeTag1: ["forever a favorite", "مفضلتي دائمًا"],
      jadeTag2: ["a little green magic", "شوية سحر أخضر"],
      characterNote: [
        "some characters just feel like home ♡",
        "بعض الشخصيات تحسّها تشبه البيت ♡"
      ],

      accountsEyebrow: ["04 / MY ACCOUNTS", "٠٤ / حساباتي"],
      accountsLine1: ["let's stay", "خلّنا نبقى"],
      accountsLine2: ["a little closer.", "أقرب شوي."],
      accountsDescription: [
        "More little moments, games, and whatever I’m into lately. You can find me here.",
        "لحظات أكثر، ألعاب، وكل الأشياء اللي أحبها هالأيام. تقدر تلقاني هنا."
      ],

      footerNote: [
        "you made my little corner a little warmer.",
        "وجودك خلّى ركني الصغير أدفى."
      ],
      footerLine1: ["thanks for", "شكرًا لأنك"],
      footerLine2: ["stopping by.", "مرّيت من هنا."],
      footerGoodbye: [
        "Hope you found something that made you smile. Come back whenever — I’ll be here, probably drawing or in a game.",
        "أتمنى لقيت شي خلّاك تبتسم. ارجع بأي وقت، بتلقاني هنا، غالبًا أرسم أو وسط قيم."
      ],
      backTop: ["back to the top", "نرجع للبداية"],
      madeWith: ["made with a little love ♡", "معمول بشوية حب ♡"],

      pauseMotion: ["Pause animations", "أوقف الحركات"],
      playMotion: ["Resume animations", "شغّل الحركات"],
      postcard: ["the little things ♡", "التفاصيل الصغيرة ♡"],
      dearInternet: ["dear internet,", "يا عالمي الصغير،"],
      friends: ["let's be friends.", "خلّنا نصير أصدقاء."],
      daydreamer: ["daydreamer", "أحلام يقظة"],
      characterSticker: [
        "MY FAVORITE FICTIONAL GIRL ♡",
        "شخصيتي الخيالية المفضلة ♡"
      ],
      jadeBeloved: ["jade, my beloved.", "جيد، يا مفضلتي."]
    };

    let language = storage.get("hiesoo-language") === "ar"
      ? "ar"
      : "en";

    const t = (key) => {
      const pair = translations[key];
      return pair ? pair[language === "ar" ? 1 : 0] : key;
    };

    const localize = (pair) => pair[language === "ar" ? 1 : 0];

    /* إعدادات الرسومات */

    const artworks = [
      {
        name: "art01",
        title: ["A little daydream", "أحلام صغيرة"],
        alt: ["Artwork by hiesoo — 1", "رسمة هيسو الأولى"],
        status: "loading",
        url: ""
      },
      {
        name: "art02",
        title: ["Somewhere among the stars", "في مكان بين النجوم"],
        alt: ["Artwork by hiesoo — 2", "رسمة هيسو الثانية"],
        status: "loading",
        url: ""
      },
      {
        name: "art03",
        title: ["Little things, big feelings", "أشياء صغيرة، مشاعر كبيرة"],
        alt: ["Artwork by hiesoo — 3", "رسمة هيسو الثالثة"],
        status: "loading",
        url: ""
      }
    ];

    /*
      البحث بحسب مكان ملف JavaScript ومكان الصفحة.
      يدعم:
      assets/name.png
      assets/name.jpg
      assets/assets/name.png
      assets/assets/name.jpg
      وكذلك المجلد الأعلى عند فتح النسخة الداخلية.
    */

    const directories = new Set();

    for (const base of [scriptURL, document.baseURI]) {
      for (const folder of [
        "./assets/",
        "./assets/assets/",
        "../assets/",
        "../assets/assets/"
      ]) {
        directories.add(new URL(folder, base).href);
      }
    }

    function getCandidates(name) {
      const names = [name];

      // يدعم أيضًا art-01 إذا تغيّر الاسم مستقبلًا.
      if (/^art\d+$/.test(name)) {
        names.push(name.replace("art", "art-"));
      }

      const urls = [];

      for (const directory of directories) {
        for (const filename of names) {
          for (const extension of ["png", "jpg", "jpeg", "webp"]) {
            urls.push(
              new URL(`${filename}.${extension}`, directory).href
            );
          }
        }
      }

      return [...new Set(urls)];
    }

    function probeImage(url) {
      return new Promise((resolve) => {
        const image = new Image();
        let finished = false;

        const finish = (success) => {
          if (finished) return;

          finished = true;
          clearTimeout(timer);
          image.onload = null;
          image.onerror = null;

          resolve(success ? url : null);
        };

        const timer = setTimeout(() => finish(false), 6000);

        image.onload = () => finish(image.naturalWidth > 0);
        image.onerror = () => finish(false);
        image.src = url;
      });
    }

    async function findImage(name) {
      const candidates = getCandidates(name);

      // نجرب مجموعة صغيرة بالتوازي حتى لا يطول التحميل.
      for (let i = 0; i < candidates.length; i += 4) {
        const results = await Promise.all(
          candidates.slice(i, i + 4).map(probeImage)
        );

        const found = results.find(Boolean);

        if (found) return found;
      }

      console.warn(`لم يتم العثور على صورة ${name}`, candidates);
      return null;
    }

    /* عناصر الصفحة */

    const gallery = $("gallery");
    const display = $("artDisplay");
    const modal = $("artModal");
    const heroImage = document.querySelector(".postcard-art img");
    const jadeImage = $("characterImage");

    if (!gallery || !display || !modal) {
      console.error("عناصر المعرض غير موجودة في ملف HTML الحالي.");
      return;
    }

    const fallback = display.querySelector(".image-fallback");
    const jadeFallback = document.querySelector(".character-fallback");

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const savedMotion = storage.get("hiesoo-pause-motion");

    let motionPaused = savedMotion === null
      ? media.matches
      : savedMotion === "true";

    let userPaused = false;
    let hovered = false;
    let focused = false;
    let activeIndex = 0;
    let elapsed = 0;
    let lastFrame = 0;
    let frameID = null;

    const slideDuration = 5000;
    const images = [];
    const dots = [];

    /* تنظيف المعرض ثم إنشاء الصور */

    display.querySelectorAll("img").forEach((image) => image.remove());
    $("galleryDots").replaceChildren();

    artworks.forEach((art, index) => {
      const image = document.createElement("img");
      image.decoding = "async";
      image.draggable = false;
      image.width = 1000;
      image.height = 800;

      display.append(image);
      images.push(image);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.addEventListener("click", () => showSlide(index, true));

      $("galleryDots").append(dot);
      dots.push(dot);
    });

    $("galleryDemo").hidden = true;

    function renderGallery() {
      const current = artworks[activeIndex];
      const ready = current.status === "ready";

      images.forEach((image, index) => {
        image.alt = localize(artworks[index].alt);

        const visible = index === activeIndex && ready;

        image.classList.toggle("is-active", visible);
        image.setAttribute("aria-hidden", String(!visible));
      });

      if (fallback) {
        fallback.hidden = ready;
        fallback.textContent = t(
          current.status === "loading" ? "imageLoading" : "imageMissing"
        );
      }

      display.disabled = !ready;
      $("artCaption").textContent = localize(current.title);

      const count = document.createTextNode(
        String(activeIndex + 1).padStart(2, "0") + " "
      );

      const total = document.createElement("span");
      total.textContent = "/ " + String(artworks.length).padStart(2, "0");

      $("galleryCount").replaceChildren(count, total);

      dots.forEach((dot, index) => {
        dot.setAttribute("aria-current", String(index === activeIndex));
        dot.setAttribute(
          "aria-label",
          `${t("openArtwork")}: ${localize(artworks[index].title)}`
        );
      });

      $("previousArt").disabled = artworks.length < 2;
      $("nextArt").disabled = artworks.length < 2;
      $("galleryPlay").disabled = artworks.length < 2 || motionPaused;
    }

    function showSlide(index, announce = false) {
      activeIndex = (index + artworks.length) % artworks.length;
      elapsed = 0;

      $("slideProgress").style.transform = "scaleX(0)";
      renderGallery();

      if (announce && $("galleryStatus")) {
        $("galleryStatus").textContent =
          `${localize(artworks[activeIndex].title)} — ` +
          `${activeIndex + 1} / ${artworks.length}`;
      }
    }

    function canPlay() {
      return artworks.length > 1
        && !userPaused
        && !motionPaused
        && !hovered
        && !focused
        && !document.hidden
        && !modal.open;
    }

    function tick(now) {
      frameID = null;
      if (!canPlay()) return;

      if (lastFrame) {
        elapsed += Math.min(now - lastFrame, 250);
      }

      lastFrame = now;

      if (elapsed >= slideDuration) {
        showSlide(activeIndex + 1);
      }

      $("slideProgress").style.transform =
        `scaleX(${elapsed / slideDuration})`;

      frameID = requestAnimationFrame(tick);
    }

    function syncPlayback() {
      if (frameID !== null) cancelAnimationFrame(frameID);

      frameID = null;
      lastFrame = 0;

      if (canPlay()) frameID = requestAnimationFrame(tick);

      const paused = userPaused || motionPaused;

      $("galleryPlay").textContent = paused ? "▷" : "Ⅱ";
      $("galleryPlay").setAttribute("aria-pressed", String(paused));
      $("galleryPlay").setAttribute(
        "aria-label",
        t(paused ? "playSlideshow" : "pauseSlideshow")
      );
    }

    /* الحركة المستمرة للألعاب */

    const track = $("gamesTrack");
    const gameSet = track?.querySelector(".game-set");

    if (gameSet && !track.dataset.initialized) {
      const originalCards = [...gameSet.children];

      originalCards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        gameSet.append(clone);
      });

      const repeatedSet = gameSet.cloneNode(true);
      repeatedSet.setAttribute("aria-hidden", "true");
      track.append(repeatedSet);
      track.dataset.initialized = "true";
    }

    /* اللغة */

    function updateMotionLabels() {
      const button = $("motionToggle");
      if (!button) return;

      const label = t(motionPaused ? "playMotion" : "pauseMotion");

      button.title = label;
      button.setAttribute("aria-label", label);
      button.setAttribute("aria-pressed", String(motionPaused));
    }

    function updateModal() {
      const current = artworks[activeIndex];

      if (current.status !== "ready") return;

      $("modalImage").src = current.url;
      $("modalImage").alt = localize(current.alt);
      $("modalCaption").textContent = localize(current.title);
    }

    function applyLanguage() {
      document.documentElement.lang = language;
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

      document.title = language === "ar"
        ? "هيسو — شوية فنّ، وكثير منّي"
        : "hiesoo — a little art, a lot of me";

      const description = document.querySelector(
        'meta[name="description"]'
      );

      if (description) description.content = t("intro");

      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        if (translations[key]) node.textContent = t(key);
      });

      document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
        const key = node.dataset.i18nAria;
        if (translations[key]) node.setAttribute("aria-label", t(key));
      });

      const languageButton = $("languageToggle");

      if (languageButton) {
        languageButton.innerHTML = language === "en"
          ? 'عربي <span aria-hidden="true">↗</span>'
          : 'EN <span aria-hidden="true">↗</span>';

        languageButton.lang = language === "en" ? "ar" : "en";

        languageButton.setAttribute(
          "aria-label",
          language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
        );
      }

      $("previousArt").setAttribute("aria-label", t("previous"));
      $("nextArt").setAttribute("aria-label", t("next"));
      $("closeModal").setAttribute("aria-label", t("close"));

      if (heroImage) {
        heroImage.alt = language === "ar"
          ? "أهلًا بك في عالم هيسو"
          : "Welcome to hiesoo's world";
      }

      if (jadeImage) {
        jadeImage.alt = language === "ar"
          ? "جيد هارلي من هومستك"
          : "Jade Harley from Homestuck";
      }

      updateMotionLabels();
      renderGallery();
      syncPlayback();

      if (modal.open) updateModal();
    }

    function applyMotion() {
      document.documentElement.classList.toggle(
        "motion-paused",
        motionPaused
      );

      updateMotionLabels();
      renderGallery();
      syncPlayback();
    }

    $("languageToggle")?.addEventListener("click", () => {
      language = language === "en" ? "ar" : "en";
      storage.set("hiesoo-language", language);
      applyLanguage();
    });

    $("motionToggle")?.addEventListener("click", () => {
      motionPaused = !motionPaused;
      storage.set("hiesoo-pause-motion", String(motionPaused));
      applyMotion();
    });

    media.addEventListener("change", (event) => {
      if (storage.get("hiesoo-pause-motion") === null) {
        motionPaused = event.matches;
        applyMotion();
      }
    });

    /* أزرار المعرض */

    $("previousArt").addEventListener("click", () => {
      showSlide(activeIndex - 1, true);
    });

    $("nextArt").addEventListener("click", () => {
      showSlide(activeIndex + 1, true);
    });

    $("galleryPlay").addEventListener("click", () => {
      userPaused = !userPaused;
      syncPlayback();
    });

    gallery.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") {
        hovered = true;
        syncPlayback();
      }
    });

    gallery.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") {
        hovered = false;
        syncPlayback();
      }
    });

    gallery.addEventListener("focusin", () => {
      focused = true;
      syncPlayback();
    });

    gallery.addEventListener("focusout", (event) => {
      if (!gallery.contains(event.relatedTarget)) {
        focused = false;
        syncPlayback();
      }
    });

    document.addEventListener("visibilitychange", syncPlayback);

    gallery.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();

      let direction = event.key === "ArrowRight" ? 1 : -1;
      if (language === "ar") direction *= -1;

      showSlide(activeIndex + direction, true);
    });

    /* السحب على الجوال */

    let pointerStart = null;
    let suppressClick = false;

    display.addEventListener("pointerdown", (event) => {
      pointerStart = { x: event.clientX, y: event.clientY };
      suppressClick = false;
    });

    display.addEventListener("pointerup", (event) => {
      if (!pointerStart) return;

      const dx = event.clientX - pointerStart.x;
      const dy = event.clientY - pointerStart.y;

      pointerStart = null;

      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        suppressClick = true;

        let direction = dx < 0 ? 1 : -1;
        if (language === "ar") direction *= -1;

        showSlide(activeIndex + direction, true);
      }
    });

    display.addEventListener("pointercancel", () => {
      pointerStart = null;
    });

    /* تكبير الصور */

    display.addEventListener("click", () => {
      if (suppressClick) {
        suppressClick = false;
        return;
      }

      if (artworks[activeIndex].status !== "ready") return;

      updateModal();

      if (typeof modal.showModal === "function") {
        modal.showModal();
        syncPlayback();
      }
    });

    $("closeModal").addEventListener("click", () => modal.close());
    modal.addEventListener("close", syncPlayback);

    modal.addEventListener("click", (event) => {
      if (event.target !== modal) return;

      const rect = modal.getBoundingClientRect();

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        modal.close();
      }
    });

    /* روابط الحسابات */

    if ($("instagramLink")) {
      $("instagramLink").href =
        "https://www.instagram.com/realhielanarti/";
    }

    if ($("instagramHandle")) {
      $("instagramHandle").textContent = "@realhielanarti";
    }

    if ($("tiktokLink")) {
      $("tiktokLink").href = "https://www.tiktok.com/@hielanarti4";
    }

    if ($("tiktokHandle")) {
      $("tiktokHandle").textContent = "@hielanarti4";
    }

    /* ظهور الأقسام عند التمرير */

    if ("IntersectionObserver" in window && !media.matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      document.documentElement.classList.add("js-reveal");

      document.querySelectorAll(".reveal").forEach((node) => {
        observer.observe(node);
      });
    }

    applyLanguage();
    applyMotion();

    /* البحث عن الصور وتحميلها */

    artworks.forEach(async (art, index) => {
      const url = await findImage(art.name);

      if (!url) {
        art.status = "error";
        renderGallery();
        return;
      }

      images[index].onload = () => {
        art.status = "ready";
        renderGallery();
      };

      images[index].onerror = () => {
        art.status = "error";
        renderGallery();
      };

      art.url = url;
      images[index].src = url;
    });

    if (heroImage) {
      heroImage.style.visibility = "hidden";

      findImage("hero").then((url) => {
        if (!url) return;

        heroImage.onload = () => {
          heroImage.style.visibility = "visible";
        };

        heroImage.src = url;

        if (heroImage.complete && heroImage.naturalWidth > 0) {
          heroImage.style.visibility = "visible";
        }
      });
    }

    if (jadeImage) {
      jadeImage.hidden = true;

      findImage("jade").then((url) => {
        if (!url) {
          if (jadeFallback) jadeFallback.hidden = false;
          return;
        }

        const revealJade = () => {
          jadeImage.hidden = false;
          if (jadeFallback) jadeFallback.hidden = true;
        };

        jadeImage.onload = revealJade;

        jadeImage.onerror = () => {
          jadeImage.hidden = true;
          if (jadeFallback) jadeFallback.hidden = false;
        };

        jadeImage.src = url;

        if (jadeImage.complete && jadeImage.naturalWidth > 0) {
          revealJade();
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
