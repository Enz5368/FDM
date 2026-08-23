"use client";

import { ChangeEvent, CSSProperties, PointerEvent, useMemo, useRef, useState } from "react";

type Format = "Tous" | "Portrait" | "Story" | "Carré" | "Paysage";
type PhotoFile = { name:string; url:string; x:number; y:number; zoom:number };
type Rect = { x:number; y:number; w:number; h:number; rotate?:number; z?:number; frame?:"soft"|"polaroid"|"round" };
type Template = { id:number; format:Exclude<Format,"Tous">; photos:number; layout:Rect[]; title:string; author:string; avatar:string; saves:number; images:string[]; tone:string; variant:number };

const imageIds = ["photo-1501785888041-af3ef285b470","photo-1507525428034-b723cf961d3e","photo-1542051841857-5f90071e7989","photo-1464822759023-fed622ff2c3b","photo-1500530855697-b586d89ba3ee","photo-1472396961693-142e6e269027","photo-1529156069898-49953e39b3ac","photo-1488426862026-3ee34a7d66df","photo-1464278533981-50106e6176b1","photo-1517841905240-472988babdf9","photo-1492562080023-ab3db95bfbce","photo-1484291470158-b8f8d608850d"];
const formats:Template["format"][] = ["Portrait","Story","Carré","Paysage"];
const names = ["Instant précieux","Golden days","Carnet d’été","Slow weekend","Échappée belle","Entre amis","Jours heureux","City stories","Air salé","Petits bonheurs"];
const makeLayout = (count:number,variant:number):Rect[] => {
  if(count===1)return variant===4?[{x:7,y:5,w:86,h:88,rotate:-2,frame:"polaroid"}]:variant===3?[{x:5,y:4,w:90,h:92,frame:"round"}]:[{x:0,y:0,w:100,h:100}];
  const rows=(total:number,max:number) => { const number=Math.ceil(total/max),base=Math.floor(total/number),extra=total%number; return Array.from({length:number},(_,i)=>base+(i<extra?1:0)); };
  const rowLayout=(counts:number[],top=0,height=100,offset=0,width=100) => {
    const result:Rect[]=[]; const weights=counts.map((_,i)=>i%2===0?1.08:.92),sum=weights.reduce((a,b)=>a+b,0); let y=top;
    counts.forEach((items,row)=>{const h=height*weights[row]/sum;const emphasis=variant===0&&items>1&&row%2===0?1.22:1;const unit=width/(items-1+emphasis);let x=offset;for(let col=0;col<items;col++){const w=unit*(col===0?emphasis:1);result.push({x,y,w,h});x+=w;}y+=h;}); return result;
  };
  if(variant===3){
    if(count===1)return[{x:5,y:4,w:90,h:92,frame:"round"}];
    const heroH=count<=5?68:count<=10?50:40;
    const overlays=rowLayout(rows(count-1,count<=8?3:4),heroH-7,107-heroH,4,92).map((rect,i)=>({...rect,rotate:i%2===0?-1.5:1.5,z:2,frame:"soft" as const}));
    return[{x:3,y:3,w:94,h:heroH,frame:"round",z:1},...overlays];
  }
  if(variant===4){
    return rowLayout(rows(count,count<=8?3:4),5,90,5,90).map((rect,i)=>({...rect,x:rect.x-(i%2?1:-1),y:rect.y-(i%3===0?1:0),w:rect.w+2,h:rect.h+2,rotate:[-3,2,-1,3][i%4],z:i+1,frame:"polaroid" as const}));
  }
  if(variant===0) return rowLayout(rows(count,count<=6?3:4));
  if(variant===1){
    if(count===2)return[{x:0,y:0,w:58,h:100},{x:58,y:0,w:42,h:100}];
    const heroH=count<=6?58:count<=12?42:32; return [{x:0,y:0,w:100,h:heroH},...rowLayout(rows(count-1,count<=9?3:4),heroH,100-heroH)];
  }
  if(count<=6){const heroW=count===2?55:48;return[{x:0,y:0,w:heroW,h:100},...rowLayout(rows(count-1,2),0,100,heroW,100-heroW)];}
  const heroH=count<=12?38:28;return[{x:0,y:0,w:62,h:heroH},{x:62,y:0,w:38,h:heroH},...rowLayout(rows(count-2,4),heroH,100-heroH)];
};
const templates:Template[] = Array.from({length:100},(_,index) => {
  const count = index % 20 + 1, variant = Math.floor(index / 20);
  return { id:index+1, photos:count, variant, layout:makeLayout(count,variant), format:formats[(count+variant)%4], title:`${names[(count+variant*3)%names.length]} ${["Classique","Édito","Panorama","Layers","Tirages"][variant]}`, author:["atelier.mosaïque","moodboard.club","studio.souvenir","layered.stories","paper.memory"][variant], avatar:["AM","MC","SS","LS","PM"][variant], saves:9+(index*7)%52, tone:["lime","sand","blue","rose"][(count+variant)%4], images:Array.from({length:count},(_,i) => `https://images.unsplash.com/${imageIds[(index+i*3)%imageIds.length]}?auto=format&fit=crop&w=700&q=80`) };
});

export default function Home() {
  const [active,setActive] = useState<Format>("Tous"), [photoCount,setPhotoCount] = useState<number|null>(null), [saved,setSaved] = useState<number[]>([]), [selected,setSelected] = useState<number|null>(null), [comment,setComment] = useState("");
  const [uploads,setUploads] = useState<PhotoFile[]>([]), [activePhoto,setActivePhoto] = useState(0), [exporting,setExporting] = useState(false), [exportMessage,setExportMessage] = useState("");
  const drag = useRef<{pointer:number;x:number;y:number;startX:number;startY:number}|null>(null);
  const filtered = useMemo(() => templates.filter(item => (active === "Tous" || item.format === active) && (photoCount === null || item.photos === photoCount)),[active,photoCount]);
  const chosen = templates.find(item => item.id === selected), currentPhoto = uploads[activePhoto];
  const tileStyle = (rect:Rect) => ({left:`${rect.x}%`,top:`${rect.y}%`,width:`${rect.w}%`,height:`${rect.h}%`,transform:`rotate(${rect.rotate||0}deg)`,zIndex:rect.z||1,borderRadius:rect.frame==="round"?"18px":rect.frame==="soft"?"9px":"2px"} as CSSProperties);
  const resetFiles = () => uploads.forEach(file => URL.revokeObjectURL(file.url));
  const openEditor = (id:number) => { resetFiles(); setUploads([]); setActivePhoto(0); setExportMessage(""); setSelected(id); };
  const closeEditor = () => { resetFiles(); setUploads([]); setSelected(null); };
  const addPhotos = (event:ChangeEvent<HTMLInputElement>) => { if (!chosen || !event.target.files) return; const room=chosen.photos-uploads.length; const next=Array.from(event.target.files).filter(file=>file.type.startsWith("image/")).slice(0,room).map(file=>({name:file.name,url:URL.createObjectURL(file),x:0,y:0,zoom:1})); setUploads(current=>[...current,...next]); if (!uploads.length) setActivePhoto(0); event.target.value=""; };
  const updatePhoto = (patch:Partial<PhotoFile>) => setUploads(current => current.map((file,i) => i === activePhoto ? {...file,...patch} : file));
  const removePhoto = (index:number) => setUploads(current => { URL.revokeObjectURL(current[index].url); return current.filter((_,i)=>i!==index); });
  const pointerDown = (event:PointerEvent<HTMLDivElement>) => { if (!currentPhoto) return; event.currentTarget.setPointerCapture(event.pointerId); drag.current={pointer:event.pointerId,x:event.clientX,y:event.clientY,startX:currentPhoto.x,startY:currentPhoto.y}; };
  const pointerMove = (event:PointerEvent<HTMLDivElement>) => { if (!drag.current || drag.current.pointer!==event.pointerId) return; const rect=event.currentTarget.getBoundingClientRect(); updatePhoto({x:Math.max(-100,Math.min(100,drag.current.startX+(event.clientX-drag.current.x)/rect.width*150)),y:Math.max(-100,Math.min(100,drag.current.startY+(event.clientY-drag.current.y)/rect.height*150))}); };
  const pointerUp = (event:PointerEvent<HTMLDivElement>) => { if (drag.current?.pointer===event.pointerId) drag.current=null; };
  const createMontage = async () => {
    if (!chosen || uploads.length!==chosen.photos || exporting) return; setExporting(true); setExportMessage("");
    try {
      const sizes:Record<Template["format"],[number,number]>={Story:[1080,1920],Portrait:[1350,1688],"Carré":[1600,1600],Paysage:[1920,1080]}, [width,height]=sizes[chosen.format];
      const canvas=document.createElement("canvas"); canvas.width=width; canvas.height=height; const ctx=canvas.getContext("2d"); if(!ctx) throw new Error(); ctx.fillStyle="#f2eee4"; ctx.fillRect(0,0,width,height);
      const margin=Math.round(width*.045), footer=Math.round(height*.085), gap=Math.max(8,Math.round(width*.006)), areaW=width-margin*2, areaH=height-margin*2-footer;
      const loaded=await Promise.all(uploads.map(file=>new Promise<HTMLImageElement>((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=file.url;})));
      loaded.forEach((image,index)=>{
        const file=uploads[index],rect=chosen.layout[index],x=margin+areaW*rect.x/100+gap/2,y=margin+areaH*rect.y/100+gap/2,outerW=areaW*rect.w/100-gap,outerH=areaH*rect.h/100-gap;
        const pad=rect.frame==="polaroid"?gap*1.3:rect.frame?gap*.65:0,bottom=rect.frame==="polaroid"?gap*1.8:0,cellW=outerW-pad*2,cellH=outerH-pad*2-bottom;
        const base=Math.max(cellW/image.naturalWidth,cellH/image.naturalHeight),scale=base*file.zoom,sourceW=cellW/scale,sourceH=cellH/scale,freeX=Math.max(0,image.naturalWidth-sourceW),freeY=Math.max(0,image.naturalHeight-sourceH),sourceX=freeX/2*(1-file.x/100),sourceY=freeY/2*(1-file.y/100);
        ctx.save();ctx.translate(x+outerW/2,y+outerH/2);ctx.rotate((rect.rotate||0)*Math.PI/180);if(rect.frame){ctx.fillStyle="#fffdf8";ctx.fillRect(-outerW/2,-outerH/2,outerW,outerH);}ctx.drawImage(image,sourceX,sourceY,sourceW,sourceH,-outerW/2+pad,-outerH/2+pad,cellW,cellH);ctx.restore();
      });
      ctx.fillStyle="#181817";ctx.font=`italic ${Math.round(width*.028)}px Georgia`;ctx.fillText(chosen.title,margin,height-margin-Math.round(width*.012));ctx.font=`600 ${Math.round(width*.009)}px Arial`;ctx.textAlign="right";ctx.fillText(`MOSAÏQUE · ${chosen.photos} PHOTOS`,width-margin,height-margin-Math.round(width*.012));
      const blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,"image/png",.95));if(!blob)throw new Error();const url=URL.createObjectURL(blob),link=document.createElement("a");link.href=url;link.download=`mosaique-${chosen.photos}-photos.png`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);setExportMessage("Montage téléchargé ✓");
    } catch { setExportMessage("Impossible de créer le fichier. Réessaie avec d’autres images."); } finally { setExporting(false); }
  };

  return <main>
    <header className="topbar"><a className="brand" href="#top"><span>M</span>Mosaïque</a><span className="library-count">100 templates</span><button className="profile" aria-label="Ouvrir le profil">EZ</button></header>
    <section className="hero" id="top"><p className="eyebrow">CRÉE · PARTAGE · INSPIRE</p><h1>Un template pour<br/><em>chaque histoire.</em></h1><p className="intro">Cinq compositions originales pour chaque sélection de 1 à 20 photos.</p></section>
    <section className="filter-panel"><nav className="filters format-filters">{(["Tous","Portrait","Story","Carré","Paysage"] as Format[]).map(format=><button key={format} className={active===format?"active":""} onClick={()=>setActive(format)}>{format}</button>)}</nav><div className="count-heading"><span>Nombre de photos</span><button onClick={()=>setPhotoCount(null)} className={photoCount===null?"selected":""}>Toutes</button></div><nav className="count-filters">{Array.from({length:20},(_,i)=>i+1).map(count=><button key={count} className={photoCount===count?"active":""} onClick={()=>setPhotoCount(photoCount===count?null:count)}>{count}</button>)}</nav></section>
    <div className="result-line"><span>{filtered.length} template{filtered.length>1?"s":""}</span>{photoCount&&<strong>pour {photoCount} photo{photoCount>1?"s":""}</strong>}</div>
    <section className="gallery">{filtered.map((item,index)=><article className="template-card" key={item.id} style={{animationDelay:`${Math.min(index,10)*35}ms`}}>
      <button className={`preview template-mini collection-${item.variant} tone-${item.tone}`} onClick={()=>openEditor(item.id)}>
        <span className="artboard">{item.images.map((src,i)=><span className={`art-tile frame-${item.layout[i].frame||"clean"}`} style={tileStyle(item.layout[i])} key={`${src}-${i}`}><img src={src} alt=""/></span>)}<span className="art-caption"><b>{String(item.id).padStart(2,"0")}</b><em>{item.title}</em></span></span>
        <span className="photo-badge">{item.photos} <small>PHOTO{item.photos>1?"S":""}</small></span><span className="variant-badge">{["SIGNATURE","ÉDITORIAL","CINÉMATIQUE","SUPERPOSÉ","TIRAGES"][item.variant]}</span><span className="choose">Choisir ce template</span>
      </button>
      <div className="meta"><span className="avatar">{item.avatar}</span><span className="details"><strong>{item.title}</strong><small>par {item.author} · {item.format}</small></span><button className={`save ${saved.includes(item.id)?"saved":""}`} onClick={()=>setSaved(current=>current.includes(item.id)?current.filter(id=>id!==item.id):[...current,item.id])}>{saved.includes(item.id)?"♥":"♡"}</button></div>
    </article>)}</section>
    <footer className="comment-bar"><input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Ajouter un commentaire…"/><button className="bookmark">♡<span>{saved.length||""}</span></button></footer>
    {chosen&&<div className="modal-backdrop editor-backdrop" onClick={closeEditor}><section className="modal editor" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true"><button className="close" onClick={closeEditor}>×</button><div className="editor-head"><div><span className="modal-kicker">{chosen.format} · {chosen.photos} PHOTOS · {["SIGNATURE","ÉDITORIAL","CINÉMATIQUE","SUPERPOSÉ","TIRAGES"][chosen.variant]}</span><h2>{chosen.title}</h2></div><strong className={uploads.length===chosen.photos?"complete":""}>{uploads.length}/{chosen.photos}</strong></div>
      <div className="editor-workspace"><div className={`montage-grid collection-${chosen.variant}`}>{Array.from({length:chosen.photos},(_,i)=><button key={i} style={tileStyle(chosen.layout[i])} className={`montage-cell frame-${chosen.layout[i].frame||"clean"} ${activePhoto===i?"active":""}`} onClick={()=>uploads[i]&&setActivePhoto(i)}>{uploads[i]?<img src={uploads[i].url} alt="" style={{transform:`translate(${uploads[i].x*.15}%,${uploads[i].y*.15}%) scale(${uploads[i].zoom})`}}/>:<span>{i+1}</span>}</button>)}</div>{currentPhoto&&<div className="crop-tools"><div><strong>Recadrer la photo {activePhoto+1}</strong><small>Glisse l’image pour choisir la zone visible</small></div><div className="crop-stage" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}><img draggable={false} src={currentPhoto.url} alt="Photo à recadrer" style={{transform:`translate(${currentPhoto.x*.15}%,${currentPhoto.y*.15}%) scale(${currentPhoto.zoom})`}}/><span>↔ Glisser</span></div><label className="zoom-control">Zoom <input type="range" min="1" max="3" step="0.05" value={currentPhoto.zoom} onChange={e=>updatePhoto({zoom:Number(e.target.value)})}/><b>{currentPhoto.zoom.toFixed(1)}×</b></label><button className="reset-crop" onClick={()=>updatePhoto({x:0,y:0,zoom:1})}>Réinitialiser le cadrage</button></div>}</div>
      <div className="upload-zone"><input id="photo-upload" type="file" accept="image/*" multiple onChange={addPhotos} disabled={uploads.length>=chosen.photos}/><label htmlFor="photo-upload" className={uploads.length>=chosen.photos?"disabled":""}><b>＋</b><span>{uploads.length?"Ajouter d’autres photos":"Choisir mes photos"}<small>{chosen.photos-uploads.length} place{chosen.photos-uploads.length>1?"s":""} restante{chosen.photos-uploads.length>1?"s":""}</small></span></label></div>
      {uploads.length>0&&<div className="upload-list">{Array.from({length:chosen.photos},(_,i)=>uploads[i]?<div className={`upload-thumb ${activePhoto===i?"active":""}`} key={uploads[i].url} onClick={()=>setActivePhoto(i)}><img src={uploads[i].url} alt=""/><button onClick={e=>{e.stopPropagation();removePhoto(i);setActivePhoto(Math.max(0,i-1));}}>×</button><span>{i+1}</span></div>:<div className="upload-slot" key={i}><span>{i+1}</span></div>)}</div>}
      <button className="primary" disabled={uploads.length!==chosen.photos||exporting} onClick={createMontage}>{exporting?"Création en cours…":uploads.length===chosen.photos?"Créer et télécharger mon montage":`Ajoute encore ${chosen.photos-uploads.length} photo${chosen.photos-uploads.length>1?"s":""}`}<span>↓</span></button>{exportMessage&&<p className={`export-message ${exportMessage.includes("✓")?"success":"error"}`}>{exportMessage}</p>}<p className="privacy-note">Tes photos restent sur cet appareil.</p>
    </section></div>}
  </main>;
}
