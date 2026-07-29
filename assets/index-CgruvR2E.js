(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const a={name:"Unfiltered by Vanessa",shortName:"UV",owner:"Vanessa Fort",phone:"4355920973",phoneDisplay:"(435) 592-0973",email:"Vanessafort435@yahoo.com",region:"Southern Utah",areas:["Cedar City","St. George","New Harmony","Kanarraville","Summit","Parowan","Paragonah","Beaver","Every little town in between"]},c=[{name:"Desert Mama Tee",label:"Mom shirt",price:"Concept: from $22",color:"rose",phrase:"MAMA, BUT MAKE IT WILD",details:"Soft everyday tee with a red-rock palette, western lettering, and enough attitude for school pickup or a girls' weekend.",specs:["S-3XL","Dusty rose, black, cream","Single or small-batch"]},{name:"Little Wildflower Tee",label:"Girl shirt",price:"Concept: from $18",color:"sage",phrase:"LITTLE WILDFLOWER",details:"A sweet, local-feeling design for birthdays, first days, cousin crews, and matching sets.",specs:["Toddler-youth","Sage, white, lavender","Name add-on ready"]},{name:"Unfiltered Mom Club",label:"Best seller concept",price:"Concept: from $24",color:"charcoal",phrase:"UNFILTERED MOM CLUB",details:"For the moms who say the quiet part out loud. Clean enough for errands, funny enough for the group chat.",specs:["S-4XL","Black, mineral, sand","Front or back print"]},{name:"Southern Utah Crew",label:"Local drop",price:"Concept: from $28",color:"clay",phrase:"SOUTHERN UTAH GIRLS",details:"A town-proud tee or crewneck that can be adapted for Cedar City, St. George, Parowan, Beaver, or your tiny-town crew.",specs:["Youth-adult","Tee or crewneck","Town swap available"]}],d=["Made for personality first: funny, sentimental, bold, soft, matching, or fully custom.","Built around online ordering with local delivery across Vanessa's Southern Utah route.","Small enough to feel personal, organized enough to grow into seasonal drops and ecommerce."],p=[{title:"Send the spark",copy:"A phrase, screenshot, event date, size range, color idea, or just the vibe. Messy notes are welcome."},{title:"Confirm the build",copy:"Vanessa confirms direction, shirt options, timing, delivery city, and final pricing before anything moves forward."},{title:"Wear it local",copy:"Orders are arranged online, then delivered locally where available or coordinated for pickup/shipping."}],h=["Adult tees","Youth tees","Toddler sizes","Crewnecks","Matching sets","Event batches","Town-name swaps","Custom phrases"],u=[{question:"Can I order online?",answer:"Yes. For now, orders start by phone or email so Vanessa can confirm details before collecting payment or producing the shirt."},{question:"Are these exact products final?",answer:"They are starter concepts for launch. They show realistic shirt directions the business can offer while the final catalog, pricing, and photos are gathered."},{question:"Do you deliver outside Cedar City?",answer:"Yes. Local delivery covers Cedar City, St. George, New Harmony, Kanarraville, Summit, Parowan, Paragonah, Beaver, and smaller towns along the route."}],m=encodeURIComponent(`Hi Vanessa,

I am interested in a shirt order.

Product or idea:
Phrase or design direction:
Sizes:
Quantity:
Preferred shirt colors:
Needed by:
Delivery city:

Thank you!`),t=`mailto:${a.email}?subject=${encodeURIComponent("Shirt order inquiry")}&body=${m}`;function y(){return a.areas.map(e=>`<span>${e}</span>`).join("")}function f(){return c.map(e=>`
        <article class="product-card ${e.color}">
          <div class="product-art" aria-hidden="true">
            <div class="shirt-shape">
              <span>${e.phrase}</span>
            </div>
          </div>
          <div class="product-copy">
            <p class="product-label">${e.label}</p>
            <h3>${e.name}</h3>
            <p>${e.details}</p>
          </div>
          <div class="product-meta">
            <strong>${e.price}</strong>
            <ul>
              ${e.specs.map(o=>`<li>${o}</li>`).join("")}
            </ul>
          </div>
        </article>
      `).join("")}function v(){return d.map(e=>`<li>${e}</li>`).join("")}function g(){return p.map((e,o)=>`
        <li>
          <span>${String(o+1).padStart(2,"0")}</span>
          <div>
            <h3>${e.title}</h3>
            <p>${e.copy}</p>
          </div>
        </li>
      `).join("")}function w(){return h.map(e=>`<span>${e}</span>`).join("")}function b(){return u.map(e=>`
        <details>
          <summary>${e.question}</summary>
          <p>${e.answer}</p>
        </details>
      `).join("")}document.querySelector("#app").innerHTML=`
  <header class="site-header" aria-label="Main navigation">
    <a class="brand" href="#top" aria-label="${a.name} home">
      <span>${a.shortName}</span>
      <strong>${a.name}</strong>
    </a>
    <nav>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#delivery">Delivery</a>
      <a href="#order">Order</a>
    </nav>
    <a class="nav-cta" href="tel:+1${a.phone}">Call</a>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Southern Utah custom tees</p>
        <h1>Unfiltered shirts for moms, girls, crews, and tiny towns.</h1>
        <p class="hero-lede">
          Vanessa Fort makes personality-forward shirts with online ordering, local delivery, and room for the kind of custom ideas that do not fit inside a boring catalog.
        </p>
        <div class="hero-actions" aria-label="Order actions">
          <a class="button primary" href="${t}">Start an order</a>
          <a class="button secondary" href="tel:+1${a.phone}">${a.phoneDisplay}</a>
        </div>
      </div>
      <figure class="hero-media">
        <img src="assets/hero-shirts.png" alt="Folded graphic T-shirts arranged in warm studio light" />
        <figcaption>
          <span>Online orders</span>
          <span>Local delivery</span>
          <span>Custom phrases</span>
        </figcaption>
      </figure>
    </section>

    <section class="ticker" aria-label="Common shirt directions">
      <span>Mom shirts</span>
      <span>Girl shirts</span>
      <span>Birthday sets</span>
      <span>Tiny-town drops</span>
      <span>Fundraisers</span>
      <span>Game-day crews</span>
      <span>Inside jokes</span>
    </section>

    <section id="products" class="section product-intro">
      <div>
        <p class="eyebrow">Starter catalog</p>
        <h2>Realistic concepts while the final inventory comes together.</h2>
      </div>
      <p>
        These are launch-ready product directions, not locked inventory. They give customers something concrete to react to while Vanessa collects final photos, blanks, colors, and pricing.
      </p>
    </section>

    <section class="product-grid" aria-label="Starter shirt concepts">
      ${f()}
    </section>

    <section id="about" class="section about">
      <div class="about-copy">
        <p class="eyebrow">About the shop</p>
        <h2>Small-town service, big personality.</h2>
        <p>
          Unfiltered by Vanessa is a Southern Utah shirt shop built around the way people actually order custom tees: a half-formed phrase, a family inside joke, a school color, a girls' trip, a birthday theme, a local town name, and a deadline that matters.
        </p>
        <p>
          Until the full client story is confirmed, the brand voice is simple: warm, direct, a little cheeky, and genuinely useful. The site is ready for product photos, customer galleries, seasonal drops, and ecommerce when the business wants to grow.
        </p>
      </div>
      <ul class="story-list">
        ${v()}
      </ul>
    </section>

    <section class="section fit-board">
      <div>
        <p class="eyebrow">What can be made</p>
        <h2>From one shirt to a whole group text.</h2>
      </div>
      <div class="fit-tags">
        ${w()}
      </div>
    </section>

    <section id="delivery" class="section delivery">
      <div class="delivery-copy">
        <p class="eyebrow">Delivery route</p>
        <h2>Cedar City to St. George, Beaver to the little towns between.</h2>
        <p>
          Online orders can be coordinated across Southern Utah, with local delivery to Vanessa's core service towns and flexible arrangements for nearby communities.
        </p>
      </div>
      <div class="route-panel">
        <div class="route-line" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="area-list" aria-label="Delivery areas">
          ${y()}
        </div>
      </div>
    </section>

    <section id="order" class="section order-band">
      <div>
        <p class="eyebrow">How orders work</p>
        <h2>Send the idea. Vanessa shapes the order.</h2>
      </div>
      <ol class="steps">
        ${g()}
      </ol>
      <div class="contact-panel">
        <p>Owner: ${a.owner}</p>
        <a href="tel:+1${a.phone}">${a.phoneDisplay}</a>
        <a href="${t}">${a.email}</a>
      </div>
    </section>

    <section class="section faq-section">
      <div>
        <p class="eyebrow">Before you message</p>
        <h2>Quick answers for first-time customers.</h2>
      </div>
      <div class="faq-list">
        ${b()}
      </div>
    </section>

    <section class="final-cta">
      <p class="eyebrow">Ready when the idea hits</p>
      <h2>Custom shirts without the overcomplicated cart.</h2>
      <div class="hero-actions" aria-label="Final order actions">
        <a class="button primary" href="${t}">Email Vanessa</a>
        <a class="button secondary light" href="tel:+1${a.phone}">${a.phoneDisplay}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>${a.name} · ${a.region}</p>
    <a href="${t}">Order by email</a>
  </footer>
`;
