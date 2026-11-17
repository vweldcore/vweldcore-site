(function () {
  const WHATSAPP_NUM = "2349068771239";

  // 1. Enterprise Styles (Non-invasive, dark industrial glassmorphism)
  const style = document.createElement("style");
  style.textContent = `
    #vw-toast {
      position: fixed; bottom: 88px; left: 18px; z-index: 9998;
      background: #0b1320; color: #f8fafc; border-left: 4px solid #0ea5e9;
      padding: 12px 16px; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;
      font-size: 13px; box-shadow: 0 12px 28px rgba(0,0,0,0.4);
      max-width: 315px; opacity: 0; transform: translateY(15px);
      transition: all 0.4s ease; pointer-events: none;
    }
    #vw-toast.show { opacity: 1; transform: translateY(0); }
    #vw-toast strong { color: #38bdf8; display: block; margin-bottom: 2px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.6px; }
    #vw-modal-backdrop {
      position: fixed; inset: 0; background: rgba(2, 6, 23, 0.84);
      backdrop-filter: blur(6px); z-index: 99999; display: none;
      align-items: center; justify-content: center; padding: 16px;
    }
    #vw-modal {
      background: #0f172a; color: #f8fafc; border: 1px solid #1e293b;
      border-radius: 14px; max-width: 470px; width: 100%; padding: 26px;
      font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 25px 55px rgba(0,0,0,0.65);
      position: relative;
    }
    #vw-modal h3 { margin: 0 0 8px; font-size: 20px; color: #fff; line-height: 1.3; }
    #vw-modal p { margin: 0 0 16px; font-size: 14px; color: #94a3b8; line-height: 1.5; }
    #vw-modal input, #vw-modal select {
      width: 100%; padding: 11px 12px; margin-bottom: 10px; border-radius: 8px;
      border: 1px solid #334155; background: #1e293b; color: #fff; font-size: 14px;
      box-sizing: border-box;
    }
    #vw-modal button.vw-cta {
      width: 100%; padding: 13px; background: linear-gradient(135deg, #0284c7, #0ea5e9);
      color: #fff; font-weight: 700; border: none; border-radius: 8px; cursor: pointer;
      font-size: 14px; margin-top: 4px;
    }
    #vw-close {
      position: absolute; top: 14px; right: 16px; background: none; border: none;
      color: #94a3b8; font-size: 22px; cursor: pointer;
    }
    .vw-badge-pill {
      display: inline-block; background: rgba(14,165,233,0.16); color: #38bdf8;
      padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 700;
      margin-bottom: 10px; letter-spacing: 0.5px;
    }
    #vw-pdf-float {
      position: fixed; bottom: 24px; left: 18px; z-index: 9997;
      background: #0f172a; color: #e2e8f0; border: 1px solid #334155;
      padding: 10px 14px; border-radius: 99px; font-family: system-ui, sans-serif;
      font-size: 12px; font-weight: 600; cursor: pointer;
      box-shadow: 0 8px 20px rgba(0,0,0,0.35); display: flex; align-items: center; gap: 6px;
    }
    #vw-pdf-float:hover { border-color: #0ea5e9; color: #fff; }
  `;
  document.head.appendChild(style);

  // 2. Live B2B Industrial Buying-Signal Notifications
  const signals = [
    { tag: "Verified RFQ · Ikeja Industrial Estate", msg: "Food processor scoped 100mm PU Blast Freezer (-35°C) with SS304 lining." },
    { tag: "Pharma Cold Chain · Abuja FCT", msg: "Medical distributor downloaded +2°C to +8°C Cold Room Datasheet." },
    { tag: "Sanitary Fabrication · Agbara", msg: "Beverage plant requested BOQ for 2,000L AISI 316L Jacketed Tank." },
    { tag: "Commercial Ice · Port Harcourt", msg: "Cold-chain operator requested 150-Block Ice Plant quotation." }
  ];
  const toast = document.createElement("div");
  toast.id = "vw-toast";
  document.body.appendChild(toast);

  let idx = 0;
  setInterval(() => {
    const item = signals[idx % signals.length];
    toast.innerHTML = `<strong>${item.tag}</strong>${item.msg}`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 5500);
    idx++;
  }, 17000);

  // 3. Executive CAPEX & ROI Specification Modal (Exit-Intent + Deep-Read)
  const backdrop = document.createElement("div");
  backdrop.id = "vw-modal-backdrop";
  backdrop.innerHTML = `
    <div id="vw-modal">
      <button id="vw-close" aria-label="Close">&times;</button>
      <span class="vw-badge-pill">CAC RC 8909233 · CORPORATE PROCUREMENT DESK</span>
      <h3>Get 2026 Cold Chain &amp; SS304/316 CAPEX &amp; Generator Load Matrix</h3>
      <p>Built for Factory Directors &amp; Procurement Teams: compare insulation thicknesses, 3-phase KVA sizing, and budgetary pricing benchmarks.</p>
      <form id="vw-lead-form">
        <input type="text" id="vw-name" placeholder="Full Name & Role (e.g., Operations Director)" required />
        <input type="text" id="vw-company" placeholder="Company / Institution Name" required />
        <input type="tel" id="vw-phone" placeholder="Direct WhatsApp / Phone (+234...)" required />
        <select id="vw-interest">
          <option value="Industrial Cold Room / Blast Freezer">System: Industrial Cold Room / Blast Freezer</option>
          <option value="Commercial Ice Block Machine (100-200+ Blocks)">System: Commercial Ice Block Machine Plant</option>
          <option value="AISI 304/316L Stainless Tanks, Silos & Piping">System: AISI 304/316L Tanks, Silos &amp; Piping</option>
          <option value="800L+ Industrial Process Water Chiller">System: 800L+ Industrial Water Chiller</option>
        </select>
        <button type="submit" class="vw-cta">Send Matrix &amp; Request Priority BOQ &rarr;</button>
      </form>
    </div>
  `;
  document.body.appendChild(backdrop);

  const openModal = (force = false) => {
    if (!force && sessionStorage.getItem("vw_modal_shown")) return;
    backdrop.style.display = "flex";
    sessionStorage.setItem("vw_modal_shown", "1");
  };

  document.getElementById("vw-close").onclick = () => (backdrop.style.display = "none");
  backdrop.onclick = (e) => { if (e.target === backdrop) backdrop.style.display = "none"; };

  document.addEventListener("mouseout", (e) => { if (e.clientY < 10) openModal(false); });
  setTimeout(() => openModal(false), 38000);

  // Floating Quick-Trigger Pill for Procurement Officers
  const pdfBtn = document.createElement("button");
  pdfBtn.id = "vw-pdf-float";
  pdfBtn.innerHTML = "&#128196; 2026 CAPEX &amp; BOQ Matrix";
  pdfBtn.onclick = () => openModal(true);
  document.body.appendChild(pdfBtn);

  // 4. Priority Engineering Desk WhatsApp Handoff
  document.getElementById("vw-lead-form").onsubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById("vw-name").value.trim();
    const company = document.getElementById("vw-company").value.trim();
    const phone = document.getElementById("vw-phone").value.trim();
    const interest = document.getElementById("vw-interest").value;

    const msg = encodeURIComponent(
      `*PRIORITY B2B ENGINEERING REQUEST*\n` +
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Phone: ${phone}\n` +
      `System: ${interest}\n` +
      `Request: Please share the 2026 CAPEX/KVA Sizing Matrix & initiate a formal BOQ review.`
    );

    backdrop.style.display = "none";
    window.open(`https://wa.me{WHATSAPP_NUM}?text=${msg}`, "_blank");
  };

  // 5. Automatic Traffic Source Attribution on All WhatsApp Links
  const params = new URLSearchParams(window.location.search);
  const src = params.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "Direct B2B Search");
  document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach((link) => {
    try {
      const url = new URL(link.href);
      const existing = url.searchParams.get("text") || "Hello VWELDCORE Engineering Desk, I want to request a formal BOQ.";
      if (!existing.includes("[Ref:")) {
        url.searchParams.set("text", `${existing} [Ref: ${src}]`);
        link.href = url.toString();
      }
    } catch (_) {}
  });
})();
