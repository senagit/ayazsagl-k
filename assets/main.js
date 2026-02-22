// Year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Quick WhatsApp form handler (if form exists)
function bindQuickForm(phoneE164){
  const form = document.getElementById("quickForm");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const get = (id) => (document.getElementById(id)?.value || "").trim();
    const name = get("qName");
    const phone = get("qPhone");
    const service = get("qService");
    const location = get("qLocation");
    const note = get("qNote");

    if(!name || !phone || !service || !location){
      alert("Lütfen Ad Soyad, Telefon, Hizmet ve Konum alanlarını doldurun.");
      return;
    }

    const lines = [
      "Merhaba, Ayaz Sağlık Kabini için bilgi almak istiyorum.",
      "",
      "Ad Soyad: " + name,
      "Telefon: " + phone,
      "Hizmet: " + service,
      "Konum/İlçe: " + location
    ];
    if(note) lines.push("Not: " + note);

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${phoneE164}?text=${msg}`, "_blank", "noopener");
  });
}