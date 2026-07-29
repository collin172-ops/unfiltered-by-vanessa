(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();const r={name:"Unfiltered by Vanessa",owner:"Vanessa Fort",phone:"4355920973",phoneDisplay:"(435) 592-0973",email:"Vanessafort435@yahoo.com",region:"Southern Utah",areas:["Cedar City","St. George","New Harmony","Kanarraville","Summit","Parowan","Paragonah","Beaver","Little towns in between"]},c=[{label:"Mom Shirts",title:"Unfiltered mom-life tees",copy:"Bold, funny, sentimental, or completely custom designs for everyday wear, family events, and gifts."},{label:"Girl Shirts",title:"Playful girl shirts",copy:"School, birthdays, squads, teams, matching sets, and small-batch styles with personality."},{label:"Custom Runs",title:"Small batches and local drops",copy:"A simple path for reunions, fundraisers, local groups, and seasonal Southern Utah drops."}],d=["Send the shirt idea, size range, color preference, and needed date.","Vanessa confirms design direction, availability, pricing, and delivery options.","Orders are delivered locally where available or arranged online."],h=encodeURIComponent(`Hi Vanessa,

I am interested in a shirt order.

Idea or phrase:
Sizes:
Quantity:
Preferred shirt colors:
Needed by:
Delivery city:

Thank you!`),i=`mailto:${r.email}?subject=${encodeURIComponent("Shirt order inquiry")}&body=${h}`;function p(){return r.areas.map(s=>`<span>${s}</span>`).join("")}function u(){return c.map(s=>`
        <article class="collection-card">
          <p>${s.label}</p>
          <h3>${s.title}</h3>
          <span>${s.copy}</span>
        </article>
      `).join("")}function y(){return d.map((s,t)=>`
        <li>
          <span>${String(t+1).padStart(2,"0")}</span>
          <p>${s}</p>
        </li>
      `).join("")}document.querySelector("#app").innerHTML=`
  <header class="site-header" aria-label="Main navigation">
    <a class="brand" href="#top" aria-label="${r.name} home">
      <span>UV</span>
      <strong>${r.name}</strong>
    </a>
    <nav>
      <a href="#shirts">Shirts</a>
      <a href="#delivery">Delivery</a>
      <a href="#order">Order</a>
    </nav>
    <a class="nav-cta" href="tel:+1${r.phone}">Call</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Custom tees across ${r.region}</p>
        <h1>${r.name}</h1>
        <p class="hero-lede">
          Mom shirts, girl shirts, and made-to-order designs with a little attitude, a lot of heart, and local delivery from Cedar City to St. George and beyond.
        </p>
        <div class="hero-actions" aria-label="Order actions">
          <a class="button primary" href="${i}">Start an order</a>
          <a class="button secondary" href="tel:+1${r.phone}">${r.phoneDisplay}</a>
        </div>
      </div>
      <figure class="hero-media">
        <img src="assets/hero-shirts.png" alt="Folded graphic T-shirts arranged in warm studio light" />
      </figure>
    </section>

    <section id="shirts" class="section intro-grid">
      <div>
        <p class="eyebrow">Current focus</p>
        <h2>Clean first, expandable next.</h2>
      </div>
      <p>
        This site starts as a contact-driven shirt business, not a cart. The structure is ready for product drops, galleries, wholesale requests, online checkout, and customer photos when the business is ready.
      </p>
    </section>

    <section class="section collections" aria-label="Shirt categories">
      ${u()}
    </section>

    <section id="delivery" class="section delivery">
      <div class="delivery-copy">
        <p class="eyebrow">Local delivery</p>
        <h2>Serving Southern Utah towns, big and small.</h2>
        <p>
          Online ordering is available, with local delivery to core service areas and the small towns between them.
        </p>
      </div>
      <div class="area-list" aria-label="Delivery areas">
        ${p()}
      </div>
    </section>

    <section id="order" class="section order-band">
      <div>
        <p class="eyebrow">How orders work</p>
        <h2>Send the idea. Get the shirt made.</h2>
      </div>
      <ol class="steps">
        ${y()}
      </ol>
      <div class="contact-panel">
        <p>Owner: ${r.owner}</p>
        <a href="tel:+1${r.phone}">${r.phoneDisplay}</a>
        <a href="${i}">${r.email}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>${r.name} · ${r.region}</p>
    <a href="${i}">Order by email</a>
  </footer>
`;
