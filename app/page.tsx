"use client";

import { useMemo, useState } from "react";

type Format = "Tous" | "Portrait" | "Story" | "Carré" | "Paysage";
const templates = [
  { id: 1, format: "Story", author: "SCRL", avatar: "SR", saves: 9, photos: 1, title: "Lacs sauvages", images: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=85"], layout: "postcard" },
  { id: 2, format: "Portrait", author: "heidimichellephoto", avatar: "HM", saves: 10, photos: 19, title: "Summer memories", images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85"], layout: "single" },
  { id: 3, format: "Portrait", author: "SCRL", avatar: "SR", saves: 19, photos: 3, title: "Photo dump", images: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=85", "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=85", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=85", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=85"], layout: "grid" },
  { id: 4, format: "Portrait", author: "snappedbyscarlett", avatar: "SS", saves: 6, photos: 5, title: "Golden hour", images: ["https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=85"], layout: "overlay" },
  { id: 5, format: "Carré", author: "marlostudio", avatar: "MS", saves: 14, photos: 2, title: "Tokyo nights", images: ["https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=900&q=85"], layout: "polaroid" },
  { id: 6, format: "Paysage", author: "northbound", avatar: "NB", saves: 22, photos: 4, title: "Weekend highlight", images: ["https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=500&q=85"], layout: "frame" },
  { id: 7, format: "Story", author: "slowdays", avatar: "SD", saves: 31, photos: 7, title: "Côte sauvage", images: ["https://images.unsplash.com/photo-1484291470158-b8f8d608850d?auto=format&fit=crop&w=900&q=85"], layout: "single" },
  { id: 8, format: "Carré", author: "filmbylou", avatar: "FL", saves: 17, photos: 6, title: "Sunday club", images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85", "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=85"], layout: "postcard" },
] as const;

export default function Home() {
  const [active, setActive] = useState<Format>("Tous");
  const [saved, setSaved] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const filtered = useMemo(() => templates.filter((item) => active === "Tous" || item.format === active), [active]);
  const chosen = templates.find((item) => item.id === selected);
  return (
    <main>
      <header className="topbar"><a className="brand" href="#top" aria-label="Mosaïque, accueil"><span>M</span>Mosaïque</a><button className="profile" aria-label="Ouvrir le profil">EZ</button></header>
      <section className="hero" id="top"><p className="eyebrow">CRÉE · PARTAGE · INSPIRE</p><h1>Trouve le cadre parfait<br />pour tes <em>souvenirs.</em></h1><p className="intro">Des templates pensés pour transformer tes photos en histoires qui restent.</p></section>
      <nav className="filters" aria-label="Filtrer par format">{(["Tous", "Portrait", "Story", "Carré", "Paysage"] as Format[]).map((format) => <button key={format} className={active === format ? "active" : ""} onClick={() => setActive(format)}>{format}</button>)}</nav>
      <section className="gallery" aria-live="polite">{filtered.map((item, index) => (
        <article className="template-card" key={item.id} style={{ animationDelay: `${index * 45}ms` }}>
          <button className={`preview ${item.layout}`} onClick={() => setSelected(item.id)} aria-label={`Choisir le template ${item.title}`}>
            {item.images.map((src) => <img key={src} src={src} alt="" />)}
            {item.layout === "frame" && <span className="frame-label">WEEKEND HIGHLIGHT</span>}{item.layout === "grid" && <span className="script-label">PHOTO<br />DUMP</span>}
            <span className="choose">Choisir ce template</span><span className="dots"><i></i><i></i><i></i><i></i></span>
          </button>
          <div className="meta"><span className="avatar">{item.avatar}</span><span className="details"><strong>{item.author}</strong><small>{item.format} <b>▧</b> {item.saves} <b>▯</b> {item.photos}</small></span><button className={`save ${saved.includes(item.id) ? "saved" : ""}`} onClick={() => setSaved((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])} aria-label="Enregistrer le template">{saved.includes(item.id) ? "♥" : "♡"}</button></div>
        </article>))}</section>
      <footer className="comment-bar"><input value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Ajouter un commentaire…" aria-label="Ajouter un commentaire" /><button className="bookmark" aria-label="Voir les favoris">♡<span>{saved.length || ""}</span></button></footer>
      {chosen && <div className="modal-backdrop" onClick={() => setSelected(null)}><section className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="close" onClick={() => setSelected(null)} aria-label="Fermer">×</button><span className="modal-kicker">{chosen.format} · {chosen.photos} photo{chosen.photos > 1 ? "s" : ""}</span><h2 id="modal-title">{chosen.title}</h2><p>Ton template est prêt. Ajoute tes photos pour commencer à créer.</p><button className="primary" onClick={() => setSelected(null)}>Utiliser ce template <span>→</span></button></section></div>}
    </main>
  );
}
