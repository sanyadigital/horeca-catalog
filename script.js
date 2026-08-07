const PAGE_COUNT = 47;
const TOC_LINKS = [
  { number:'01', title:'Սերուցք', page:4,  x:9,    y:38,   w:37.5, h:8.7 },
  { number:'02', title:'Պանիր', page:6,   x:9,    y:47.2, w:37.5, h:7.8 },
  { number:'03', title:'Կաթ', page:10,    x:9,    y:55.8, w:37.5, h:7.2 },
  { number:'04', title:'Կարագ', page:12,  x:9,    y:63.5, w:37.5, h:7.3 },
  { number:'05', title:'Կարտոֆիլ ֆրի', page:14, x:9, y:72.1, w:37.5, h:8.7 },
  { number:'06', title:'Ձեթ', page:17,    x:9,    y:81.3, w:37.5, h:7.6 },
  { number:'07', title:'Մայոնեզ, սոուս', page:20, x:9, y:89.5, w:37.5, h:7.7 },
  { number:'08', title:'Պահածոյացված բանջարեղեն', page:27, x:54.1, y:38,   w:41, h:8.7 },
  { number:'09', title:'Սառեցված մթերք', page:32, x:54.1, y:47.2, w:41, h:7.8 },
  { number:'10', title:'Քացախ', page:36,  x:54.1, y:55.8, w:41, h:7.2 },
  { number:'11', title:'Ալյուր', page:38,  x:54.1, y:63.5, w:41, h:7.3 },
  { number:'12', title:'Հաց և չորահաց', page:41, x:54.1, y:72.1, w:41, h:8.7 },
  { number:'13', title:'Գետնանուշի կարագ, օշարակ', page:45, x:54.1, y:81.3, w:41, h:7.6 }
];
const EXTRA_PRODUCT_PAGES = {
  16:{category:'Картофель фри',country:'China',brand:'McFry',items:[
    ['Картофель фри 7x7 мм','1kg','4'],['Картофель фри 7x7 мм','2.5kg','4'],
    ['Картофель фри 10x10 мм','1kg','4'],['Картофель фри 10x10 мм','2.5kg','4'],
    ['Картофель фри 10x10 мм','2.5kg','4','Moonfish']
  ]},
  22:{category:'Соусы',country:'Russia',brand:'Astoria',items:[
    ['Кетчуп','1L','3'],['Соус для пиццы PRO','1L','3'],
    ['Кетчуп PRO, дип-пот','25g','125'],['Соус Барбекю PRO, дип-пот','25g','125'],
    ['Соус Сырный PRO 42%, дип-пот','25g','125'],['Соус Сливочно-чесночный PRO 42%, дип-пот','25g','125'],
    ['Соус Кисло-сладкий PRO, дип-пот','25g','125'],['Соус Сырный PRO 42%','1kg','6']
  ]},
  23:{category:'Соусы',country:'Russia',brand:'Astoria',items:[
    ['Соус Барбекю','1kg','6'],['Соус Терияки','1kg','6'],
    ['Соус Бургер 30%','1kg','6'],['Соус Огуречный релиш','1kg','6'],
    ['Соус Кисло-сладкий','1kg','6'],['Соус Горчичный','1kg','6'],
    ['Соус Гриль 30%','1kg','6'],['Соус Карри 30%','1kg','6']
  ]},
  24:{category:'Соусы',country:'Russia',brand:'Astoria',items:[
    ['Соус Тартар PRO 30%','1kg','6'],['Соус Сметанный с грибами PRO 42%','1kg','6'],
    ['Соус Цезарь','1kg','6'],['Соус Сэндвич PRO 30%','1kg','6'],
    ['Соус Сливочно-чесночный PRO 42%','1kg','6'],['Соус со вкусом трюфеля 30%','1kg','6'],
    ['Соус Сладкий чили','1kg','6'],['Соус Сальса острый','1kg','6']
  ]},
  25:{category:'Соусы',country:'USA',brand:'Bulliards',items:[
    ['Соус для куриных крылышек','3.785L','4'],['Острый соус','3.785L','4'],
    ['Соус Барбекю Hickory','3.785L','4','Atlanta'],['Оригинальный соус Барбекю','3.785L','4','Bullseye'],
    ['Вустерширский соус','3.78L','4','Lea & Perrins']
  ]},
  26:{category:'Соусы',country:'USA',brand:'House of Lords',rects:[
    {x:5,y:6,w:43,h:27},{x:52,y:6,w:43,h:27},
    {x:5,y:33,w:43,h:27},{x:52,y:33,w:43,h:27}
  ],items:[
    ['Соус для салата Цезарь','3.78L','4'],['Соус для салата Ранч','3.78L','4'],
    ['Горчица жёлтая классическая','2.97kg','4',"French's"],['Соус сырный Чеддер','3kg','4','Majesty']
  ]},
  28:{category:'Консервированные овощи',country:'Italy',brand:'Ciao',rects:[
    {x:5,y:8,w:43,h:25},{x:52,y:8,w:43,h:25},
    {x:5,y:35,w:43,h:25},{x:52,y:35,w:43,h:25},
    {x:5,y:64,w:43,h:25}
  ],items:[
    ['Томаты очищенные','2.5kg','6'],['Томаты резаные','2.5kg','6'],
    ['Томатное пюре','2.5kg','6'],['Соус для пиццы классический','4.1kg','3'],
    ['Соус для пиццы с приправами','3kg','6']
  ]},
  29:{category:'Консервированные овощи',country:'Italy',brand:'Mazza',rects:[
    {x:5,y:7,w:43,h:27},{x:52,y:7,w:43,h:27},
    {x:5,y:34,w:43,h:27},{x:52,y:34,w:43,h:27}
  ],items:[
    ['Соус для пиццы классический','4.1kg','6'],['Соус для пиццы с приправами','4.1kg','3'],
    ['Томаты целые очищенные','2.5kg','6'],['Артишоки целые в масле','3.1kg','4']
  ]},
  30:{category:'Консервированные овощи',country:'Italy',brand:'Mazza',items:[
    ['Каперсы в уксусе','0.3kg','12'],['Сердцевины артишоков в воде','2.5kg','4'],
    ['Каперсы с хвостиком в уксусе','0.72kg','12'],['Соус с чёрным трюфелем 5%','0.5kg','6'],
    ['Сладкий релиш','3.78L','4','Harvest Fresh','USA'],['Огурцы маринованные резаные','3.78L','4','Harvest Fresh','USA'],
    ['Халапеньо резаный','3.78L','4','Harvest Fresh','USA']
  ]},
  31:{category:'Рис',country:'Italy',brand:'Mazza',rects:[
    {x:7,y:8,w:38,h:29}
  ],items:[['Рис Arborio','1kg','12']]},
  33:{category:'Колбасы, бекон, ветчина',country:'Russia',brand:'Cherkizovo',items:[
    ['Колбаса Пепперони классическая, замороженная','0.5kg','6'],['Колбаса Пепперони для пиццы, замороженная','0.5kg','6'],
    ['Колбаса Чоризо нарезка 1.7 мм, замороженная','1kg','8','Remit'],['Колбаса Пепперони нарезка 1.7 мм, замороженная','1kg','8','Remit'],
    ['Ветчина для пиццы, замороженная','0.5kg','6'],['Бекон нарезка 2 мм, замороженный','0.5kg','10','Remit'],
    ['Бекон классический, замороженный','0.5kg','6']
  ]},
  34:{category:'Полуфабрикаты',country:'Russia',brand:'Cherkizovo',items:[
    ['Наггетсы куриные в панировке с сыром','1.15kg','15'],['Наггетсы куриные Классические','1.15kg','15'],
    ['Стрипсы куриные в панировке','1.15kg','15'],['Крылышки куриные в панировке','1kg','16'],
    ['Крылышки куриные острые в панировке','1kg','16'],['Крылышки куриные Домашние в панировке','2kg','7'],
    ['Котлета куриная 60 в панировке','0.96kg','16'],['Котлета куриная 100 в панировке','1kg','16']
  ]},
  35:{category:'Сосиски',country:'Russia',brand:'Remit',items:[
    ['Сосиски Бавария ассорти для гриля, замороженные','0.5kg','5'],['Сосиски Chicken Spicy, замороженные','10x75g','12'],
    ['Сосиски свиные Hot Dog, замороженные','10x75g','12'],['Сосиски говяжьи для гриля Hot Dog, замороженные','10x75g','12'],
    ['Сосиски Кнаквурст, замороженные','10x100g','12'],['Сосиски Марсельские с сыром, замороженные','10x75g','12']
  ]},
  37:{category:'Уксус',country:'Italy',brand:'De Nigris',items:[
    ['Глазурь белая','0.25L','6'],['Глазурь бальзамическая','0.5L / 0.25L','6/12'],
    ['Уксус бальзамический','1L / 0.5L / 0.25L','6/6/12'],['Уксус яблочный','0.5L','12'],
    ['Уксус красный винный','1L','12'],['Уксус белый винный','1L','12']
  ]},
  39:{category:'Мука',country:'Italy',brand:'Bongiovanni',items:[
    ['Мука для пиццы Napoletana 00 Vera','25kg','1'],['Мука для пиццы Romana 1 Core','25kg','1'],
    ['Мука для пиццы 00 Luisa','25kg','1'],['Мука для пиццы 00 Carlotta','1kg','1'],
    ['Семолина Porta Nuova','1kg','1'],['Мука для пасты 00 Porta Susa','25kg','1'],
    ['Мука для круассанов 0 Piazza Castello','25kg','1'],['Мука хлебопекарная 00 Superga','1kg','1']
  ]},
  40:{category:'Мука',country:'Russia',brand:'СуперМука',rects:[
    {x:5,y:5,w:43,h:22},{x:52,y:5,w:43,h:22},
    {x:5,y:27,w:43,h:22},{x:52,y:27,w:43,h:22},
    {x:5,y:49,w:43,h:22},{x:52,y:49,w:43,h:22}
  ],items:[
    ['Мука для сдобного теста','25kg','1'],['Мука для слоёного теста','25kg','1'],
    ['Мука для пиццы Standart','25kg','1'],['Мука для пиццы Napoletana','25kg','1'],
    ['Смесь для римской пиццы Rizza Mix','25kg','1'],['Семолина из твёрдых сортов пшеницы','25kg','1']
  ]},
  42:{category:'Хлеб',country:'Italy',brand:'Roberto',items:[
    ['Бриошь для бургера','300g','6'],['Гамбургер Gourmet глазированный','300g','6'],
    ['Булочка для гамбургера','300g','6'],['Булочка Maxi для гамбургера с кунжутом','300g','6'],
    ['Мини-булочка для бургера с кунжутом','200g','9'],['Мини-булочка для гамбургера','200g','9']
  ]},
  43:{category:'Хлеб',country:'Italy',brand:'Roberto',items:[
    ['Хлеб для тостов Maxi','500g','6'],['Хлеб цельнозерновой Integrale нарезанный','400g','8'],
    ['Хлеб белый нарезанный','400g','8'],['Хлеб белый для сэндвичей нарезанный','330g','8'],
    ['Тортилья пшеничная','240g','8'],['Булочка для хот-дога','250g','9']
  ]},
  44:{category:'Хлебные палочки',country:'Italy',brand:'Roberto',rects:[
    {x:5,y:7,w:43,h:31},{x:52,y:7,w:43,h:31},
    {x:5,y:39,w:43,h:29}
  ],items:[
    ['Мини-палочки с крупинками соли','150g','10'],['Мини-палочки с томатом и орегано','150g','10'],
    ['Хлебные палочки Torinesi','250g','10']
  ]},
  46:{category:'Арахисовая паста и сироп',country:'USA',brand:'Mississippi Belle',rects:[
    {x:5,y:7,w:43,h:28},{x:52,y:7,w:43,h:28},
    {x:5,y:35,w:43,h:27}
  ],items:[
    ['Арахисовая паста','510g','6'],['Арахисовая паста Chunky','510g','6'],
    ['Сироп для панкейков','710ml','12']
  ]}
};
function productRects(count){
  if(count===1) return [{x:53,y:48,w:40,h:35}];
  const rows=Math.ceil(count/2), top=9, bottom=91, gap=3;
  const rowHeight=(bottom-top-gap*(rows-1))/rows;
  return Array.from({length:count},(_,index)=>({
    x:index%2===0?5:52,
    y:top+Math.floor(index/2)*(rowHeight+gap),
    w:43,
    h:rowHeight
  }));
}
function extraProducts(){
  return Object.entries(EXTRA_PRODUCT_PAGES).flatMap(([page,config])=>{
    const rects=config.rects||productRects(config.items.length);
    return config.items.map((item,index)=>{
      const [name,volume,pack,brand=config.brand,country=config.country]=item;
      return {
        id:`PX${String(page).padStart(3,'0')}-${String(index+1).padStart(2,'0')}`,
        page:String(page),...Object.fromEntries(Object.entries(rects[index]).map(([k,v])=>[k,String(v)])),
        category:config.category,brand,name,volume,pack,country,image:''
      };
    });
  });
}
const FALLBACK_PRODUCTS_CSV = `id,page,x,y,w,h,category,brand,name,volume,pack,country,image
P005-01,5,6,10,38,24,Сливки,Master Martini,Master Gourmet cooking cream,1L,12,Italy,
P005-02,5,56,10,38,24,Сливки,Master Martini,Decor Up whipping cream,1L,12,Italy,
P005-03,5,6,38,38,24,Сливки,Elle & Vire,Excellence whipping cream 35.1%,1L,12,France,
P005-04,5,56,38,38,24,Сливки,Econiva,Whipping cream 33%,1L,12,Russia,
P007-01,7,6,11,38,23,Сыр,Ile de France,Camembert,0.125kg,12,France,
P007-02,7,56,11,38,23,Сыр,Ile de France,Cream Cheese,1kg,9,France,
P007-03,7,6,38,38,22,Сыр,Bonfesto Cooking,Mascarpone,0.5kg,6,Belarus,
P007-04,7,56,38,38,22,Сыр,Bonfesto Cooking,Ricotta,0.5kg,6,Belarus,
P007-05,7,6,66,38,24,Сыр,Bonfesto Cooking,Cream Cheese,11kg / 2.25kg / 0.5kg,1/4/6,Belarus,
P007-06,7,56,66,38,24,Сыр,Bonfesto Cooking,Vegetable Cream Cheese,2.25kg,4,Belarus,
P008-01,8,6,13,38,24,Сыр,Bonfesto Cooking,Cheddar Light slices,0.4kg,8,Belarus,
P008-02,8,56,13,38,24,Сыр,Bonfesto,Mozzarella Pizza,1kg,8,Belarus,
P009-01,9,6,10,38,23,Сыр,Bonfesto Cooking,Mozzarella Pizza,2.6kg,4,Belarus,
P009-02,9,56,10,38,23,Сыр,Bonfesto Cooking,Pizza topping mozzarella,2.6kg,4,Belarus,
P009-03,9,6,39,38,23,Сыр,Басни о сыре,Gouda Light semi-hard cheese,2.6kg,4,Belarus,
P009-04,9,56,39,38,23,Сыр,Басни о сыре,Cheddar Light semi-hard cheese,2.6kg,4,Belarus,
P009-05,9,6,68,38,22,Сыр,Bonfesto,Smoked Mozzarella,2.6kg,4,Belarus,
P011-01,11,6,8,38,21,Молоко,Econiva,Milk 0.5% Professional Line,1L,12,Russia,
P011-02,11,56,8,38,21,Молоко,Econiva,Milk 1.5% Professional Line,1L,12,Russia,
P011-03,11,6,30,38,20,Молоко,Econiva,Milk 2.5% Professional Line,1L,12,Russia,
P011-04,11,56,30,38,20,Молоко,Econiva,Milk 3.2% Professional Line,1L,12,Russia,
P011-05,11,6,52,38,20,Молоко,Econiva,Milk 3.5% SlimCap Professional Line,1L,12,Russia,
P011-06,11,56,52,38,20,Молоко,Econiva,Lactose Free Milk 2.5%,1L,12,Russia,
P011-07,11,6,74,38,18,Сливки,Econiva,Cream 10% Professional Line,1L,12,Russia,
P013-01,13,6,10,38,21,Масло,Elle & Vire,Gourmet Butter 82%,500g / 250g,8/12,France,
P013-02,13,56,10,38,21,Масло,Elle & Vire,Extra Dry Butter 84%,1kg,10,France,
P013-03,13,6,36,38,21,Масло,Elle & Vire,Butter brick 82%,200g,40,France,
P013-04,13,56,36,38,21,Масло,Elle & Vire,Micro Portion Butter,10g,100,France,
P013-05,13,6,65,38,22,Масло,Novbar,Butter 82.5%,20kg,1,Iran,
P013-06,13,56,65,38,22,Масло,Vanak,Butter 82%,25kg,1,Iran,
P015-01,15,6,10,38,21,Картофель фри,Bato,French fries 10x10 / 7x7,2.25kg,4,Iran,
P015-02,15,56,10,38,21,Картофель фри,Bato,Crinkle fries,2.5kg,4,Iran,
P015-03,15,6,38,38,21,Картофель фри,Bato,Dip Fries,2.25kg,4,Iran,
P015-04,15,56,38,38,21,Картофель фри,Bato,Small whole potato,2.5kg,4,Iran,
P015-05,15,6,68,38,21,Картофель фри,Bato,Fries with skin,2.5kg,4,Iran,
P018-01,18,6,15,38,24,Оливковое масло,Pietro Coricelli,Extra Virgin Olive Oil,5L / 5L / 1L,4/2/12,Italy,
P018-02,18,56,15,38,24,Оливковое масло,Pietro Coricelli,Pomace Olive Oil,5L / 5L / 1L,4/2/12,Italy,
P018-03,18,6,66,38,23,Фритюрное масло,Master Martini,Friggitutto palm frying oil,25L,1,Italy,
P019-01,19,6,10,38,22,Фритюрное масло,Astoria,K 800 Light frying oil,4.3kg,3,Russia,
P019-02,19,56,10,38,22,Фритюрное масло,Astoria,K 800 frying oil,4.3kg,3,Russia,
P019-03,19,6,42,38,23,Подсолнечное масло,Южный Полюс,Sunflower frying oil,5L,3,Russia,
P019-04,19,56,42,38,23,Подсолнечное масло,Кубанское Любимое,Refined sunflower oil,5L / 1L,3/12,Russia,
P021-01,21,6,12,38,21,Майонез,Astoria,Provencal mayonnaise 40%,9.8kg,1,Russia,
P021-02,21,56,12,38,21,Майонез,Astoria,Provencal mayonnaise 50.5%,9kg,1,Russia,
P021-03,21,6,42,38,21,Майонез,Astoria,Provencal mayonnaise 57%,3kg,4,Russia,
P021-04,21,56,42,38,21,Майонез,Astoria,Provencal mayonnaise 67%,3kg / 9.6kg,4/1,Russia,
`;
const state = {
  products: [],
  selected: JSON.parse(localStorage.getItem('selectedProducts') || '{}'),
  client: JSON.parse(localStorage.getItem('clientData') || '{}'),
  current: null,
  bookPage: 1,
  pageFlip: null,
  resizeTimer: null,
  pageFlipMode: null
};

const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function parseCSV(text){
  const rows=[]; let row=[], cell='', q=false;
  for(let i=0;i<text.length;i++){
    const ch=text[i], next=text[i+1];
    if(ch==='"' && q && next==='"'){cell+='"'; i++;}
    else if(ch==='"') q=!q;
    else if(ch===',' && !q){row.push(cell); cell='';}
    else if((ch==='\n'||ch==='\r') && !q){ if(cell||row.length){row.push(cell); rows.push(row); row=[]; cell='';} if(ch==='\r'&&next==='\n') i++; }
    else cell+=ch;
  }
  if(cell||row.length){row.push(cell); rows.push(row);}
  const head=rows.shift().map(x=>x.trim());
  return rows.filter(r=>r.length>1).map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

async function init(){
  // При открытии index.html напрямую с компьютера некоторые браузеры блокируют fetch('products.csv').
  // Поэтому в проект встроен резервный CSV, чтобы каталог работал без сервера.
  let csvText = FALLBACK_PRODUCTS_CSV;
  try {
    if (location.protocol !== 'file:') {
      const res = await fetch('products.csv', { cache: 'no-store' });
      if (res.ok) csvText = await res.text();
    }
  } catch (e) {
    console.warn('CSV loaded from fallback because products.csv could not be fetched:', e);
  }
  state.products = [...parseCSV(csvText),...extraProducts()];
  syncSelectedProductData();
  buildPages();
  buildFilters();
  restoreClient();
  bind();
  updateCount();
}

function syncSelectedProductData(){
  let changed=false;
  Object.entries(state.selected).forEach(([id,saved])=>{
    const current=state.products.find(product=>product.id===id);
    if(!current){
      delete state.selected[id];
      changed=true;
      return;
    }
    state.selected[id]={
      ...saved,
      ...current,
      specialRequest:saved.specialRequest??saved.priceRequest??false
    };
    delete state.selected[id].priceRequest;
    changed=true;
  });
  if(changed) localStorage.setItem('selectedProducts',JSON.stringify(state.selected));
}

function buildPages(){
  const pages=$('pages'); const list=$('pageList');
  for(let i=1;i<=PAGE_COUNT;i++){
    const btn=document.createElement('button'); btn.textContent=i; btn.onclick=()=>openBook(i); list.appendChild(btn);
    if(i===1) continue;
    const page=document.createElement('section'); page.className='page'; page.dataset.page=i;
    page.innerHTML=`<img src="images/pages/page-${String(i).padStart(2,'0')}.jpg" alt="page ${i}" loading="lazy"><span class="catalog-page-number">${i-1}</span>`;
    state.products.filter(p=>+p.page===i).forEach(p=>page.appendChild(makeHotspot(p)));
    if(i===3) TOC_LINKS.forEach(link=>page.appendChild(makeTocLink(link)));
    pages.appendChild(page);
  }
}
function makeTocLink(link){
  const button=document.createElement('button');
  button.type='button';
  button.className='toc-link';
  button.setAttribute('aria-label',`${link.number} ${link.title} — открыть страницу ${link.page}`);
  Object.assign(button.style,{left:link.x+'%',top:link.y+'%',width:link.w+'%',height:link.h+'%'});
  button.onclick=e=>{e.stopPropagation(); openBook(link.page)};
  return button;
}
function makeHotspot(p){
  const h=document.createElement('button'); h.type='button'; h.className='hotspot'; h.title=`${p.brand} — ${p.name}`; h.dataset.id=p.id;
  h.setAttribute('aria-label',`${p.brand} — ${p.name}`);
  Object.assign(h.style,{left:p.x+'%',top:p.y+'%',width:p.w+'%',height:p.h+'%'});
  if(state.selected[p.id]) h.classList.add('selected');
  h.onclick=()=>openProduct(p.id); return h;
}
function buildFilters(){
  [...new Set(state.products.map(p=>p.category).filter(Boolean))].sort().forEach(c=>{
    const o=document.createElement('option'); o.value=c; o.textContent=c; $('categoryFilter').appendChild(o);
  });
}
function bind(){
  $('clientBtn').onclick=()=>openModal('clientModal'); $('reportBtn').onclick=openReport;
  document.querySelectorAll('[data-open-catalog]').forEach(button=>{
    button.onclick=()=>openCatalogFromShelf(button);
  });
  $('prevPage').onclick=e=>{e.stopPropagation(); turnPage(-1)};
  $('nextPage').onclick=e=>{e.stopPropagation(); turnPage(1)};
  $('closeBook').onclick=closeBook;
  document.addEventListener('keydown',e=>{
    if($('book').classList.contains('is-closed') || document.querySelector('.modal:not(.hidden)')) return;
    if(e.key==='ArrowLeft') turnPage(-1);
    if(e.key==='ArrowRight') turnPage(1);
    if(e.key==='Escape') closeBook();
  });
  $('saveProduct').onclick=saveCurrentProduct; $('removeProduct').onclick=removeCurrentProduct;
  $('mOrder').onchange=toggleOrderQuantity;
  $('saveClient').onclick=saveClient;
  $('downloadPdf').onclick=downloadPDF;
  $('downloadExcel').onclick=downloadExcel;
  $('sendWhatsapp').onclick=()=>sharePDF('WhatsApp');
  $('sendTelegram').onclick=()=>sharePDF('Telegram');
  $('clearBtn').onclick=()=>{ if(confirm('Очистить данные текущей встречи?')){localStorage.clear(); state.selected={}; state.client={}; location.reload();}};
  document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeModal(b.dataset.close));
  $('search').oninput=applyFilter; $('categoryFilter').onchange=applyFilter;
  $('cPhone').oninput=e=>{
    e.target.value=formatArmenianPhone(e.target.value);
    e.target.setCustomValidity('');
  };
  $('cEmail').oninput=e=>e.target.setCustomValidity('');
}
function formatArmenianPhone(value){
  let digits=String(value||'').replace(/\D/g,'');
  if(digits.startsWith('374')) digits=digits.slice(3);
  digits=digits.slice(0,8);
  let result='+374';
  if(digits.length) result+=' '+digits.slice(0,2);
  if(digits.length>2) result+=' '+digits.slice(2,5);
  if(digits.length>5) result+=' '+digits.slice(5,8);
  return result;
}
function pagesPerView(){
  return window.innerWidth <= 900 || window.matchMedia('(orientation: portrait)').matches ? 1 : 2;
}
function pageToIndex(page){
  return Math.max(0,Math.min(PAGE_COUNT-2,(+page||2)-2));
}
function catalogTargetRect(){
  const single=pagesPerView()===1;
  const ratio=single ? 1850/2813 : 3700/2813;
  const widthLimit=single ? Math.min(window.innerWidth-18,710) : Math.min(window.innerWidth-36,1320);
  const heightLimit=window.innerHeight-(single?100:92);
  const width=Math.max(1,Math.min(widthLimit,heightLimit*ratio));
  const height=width/ratio;
  return {
    left:(window.innerWidth-width)/2,
    top:Math.max(document.querySelector('.topbar').getBoundingClientRect().bottom+10,(window.innerHeight-height)/2),
    width,
    height
  };
}
function pageFlipSize(){
  const rect=catalogTargetRect();
  const single=pagesPerView()===1;
  const pageWidth=single ? Math.round(rect.width) : Math.floor(rect.width/2);
  return {
    pageWidth,
    height:Math.round(rect.height),
    totalWidth:single ? Math.round(rect.width) : pageWidth*2
  };
}
function applyPageFlipSize(){
  const size=pageFlipSize();
  const pages=$('pages');
  pages.style.setProperty('width',size.totalWidth+'px','important');
  pages.style.setProperty('height',size.height+'px','important');
  pages.style.setProperty('aspect-ratio','auto','important');
  pages.style.setProperty('min-width',size.totalWidth+'px','important');
  pages.style.setProperty('min-height',size.height+'px','important');
  return size;
}
function syncPageFlipFrame(){
  const size=applyPageFlipSize();
  const wrapper=$('pages').querySelector('.stf__wrapper');
  const block=$('pages').querySelector('.stf__block');
  if(wrapper){
    wrapper.style.setProperty('width','100%','important');
    wrapper.style.setProperty('height',size.height+'px','important');
    wrapper.style.setProperty('padding-bottom','0','important');
  }
  if(block){
    block.style.setProperty('height',size.height+'px','important');
  }
  return size;
}
function destroyPageFlip(){
  if(!state.pageFlip) return;
  state.pageFlip.clear();
  state.pageFlip.getUI().destroy();
  state.pageFlip=null;
  state.pageFlipMode=null;
}
function setBookPage(page){
  state.bookPage=page;
  $('pageIndicator').textContent=`Страница ${state.bookPage} из ${PAGE_COUNT}`;
}
function normalizePageForMode(page=state.bookPage){
  const index=pageToIndex(page);
  if(pagesPerView()===1) return index+2;
  return index%2===0 ? index+2 : index+1;
}
function showCatalogPage(page){
  const target=normalizePageForMode(page);
  state.pageFlip.turnToPage(pageToIndex(target));
  setBookPage(target);
  setTimeout(()=>{
    if(state.pageFlip && state.pageFlip.getCurrentPageIndex()===pageToIndex(target)) setBookPage(target);
  },40);
}
function rebuildPageFlipForViewport(){
  if($('book').classList.contains('is-closed') || !state.pageFlip) return;
  const mode=pagesPerView()===1 ? 'portrait' : 'landscape';
  const page=normalizePageForMode();
  if(mode!==state.pageFlipMode){
    destroyPageFlip();
    initPageFlip();
  }else{
    syncPageFlipFrame();
    state.pageFlip.update();
  }
  showCatalogPage(page);
}
function openCatalogFromShelf(button){
  if($('book').dataset.opening==='true') return;
  $('book').dataset.opening='true';
  const start=button.getBoundingClientRect();
  const target=catalogTargetRect();
  const ghost=button.cloneNode(true);
  ghost.className=`catalog-zoom-ghost ${button.className}`;
  Object.assign(ghost.style,{
    left:start.left+'px',
    top:start.top+'px',
    width:start.width+'px',
    height:start.height+'px'
  });
  const ghostTitle=ghost.querySelector('.catalog-name');
  if(ghostTitle) ghostTitle.style.fontSize=getComputedStyle(button.querySelector('.catalog-name')).fontSize;
  document.body.appendChild(ghost);
  button.style.visibility='hidden';
  requestAnimationFrame(()=>{
    Object.assign(ghost.style,{
      left:target.left+'px',
      top:target.top+'px',
      width:target.width+'px',
      height:target.height+'px',
      opacity:'0'
    });
  });
  setTimeout(()=>{
    button.style.visibility='';
    ghost.remove();
    delete $('book').dataset.opening;
    openBook(2,true);
  },920);
}
function openBook(page=1,fromCover=false){
  $('book').classList.remove('is-closed');
  const target=normalizePageForMode(fromCover ? 2 : Math.max(2,page));
  requestAnimationFrame(()=>{
    initPageFlip();
    showCatalogPage(target);
  });
  if(fromCover){
    $('book').classList.remove('book-opening');
    requestAnimationFrame(()=>requestAnimationFrame(()=>$('book').classList.add('book-opening')));
    setTimeout(()=>$('book').classList.remove('book-opening'),850);
  }
}
function closeBook(){
  $('book').classList.add('is-closed');
  destroyPageFlip();
}
function turnPage(direction){
  if(!state.pageFlip) return;
  syncPageFlipFrame();
  const before=state.pageFlip.getCurrentPageIndex();
  const step=pagesPerView()===1 ? 1 : 2;
  const fallbackTarget=Math.max(0,Math.min(PAGE_COUNT-2,before+(direction>0 ? step : -step)));
  direction>0 ? state.pageFlip.flipNext('bottom') : state.pageFlip.flipPrev('bottom');
  setTimeout(()=>{
    if(!state.pageFlip || state.pageFlip.getCurrentPageIndex()!==before) return;
    state.pageFlip.turnToPage(fallbackTarget);
  },930);
}
function initPageFlip(){
  if(state.pageFlip) return;
  if(!window.St?.PageFlip) throw new Error('PageFlip library is not loaded');
  state.pageFlipMode=pagesPerView()===1 ? 'portrait' : 'landscape';
  const size=applyPageFlipSize();
  state.pageFlip=new St.PageFlip($('pages'),{
    width:694,
    height:1056,
    size:'stretch',
    minWidth:size.pageWidth,
    maxWidth:size.pageWidth,
    minHeight:size.height,
    maxHeight:size.height,
    drawShadow:true,
    flippingTime:900,
    usePortrait:true,
    startZIndex:0,
    autoSize:false,
    maxShadowOpacity:.65,
    showCover:false,
    mobileScrollSupport:false,
    swipeDistance:20,
    clickEventForward:true,
    useMouseEvents:false,
    showPageCorners:false,
    disableFlipByClick:true
  });
  state.pageFlip.on('flip',e=>{
    setBookPage(e.data+2);
  });
  state.pageFlip.on('init',e=>{
    setBookPage(e.data.page+2);
  });
  state.pageFlip.on('changeOrientation',()=>{
    syncPageFlipFrame();
    if(state.bookPage) showCatalogPage(state.bookPage);
  });
  state.pageFlip.loadFromHTML(document.querySelectorAll('#pages > .page'));
  requestAnimationFrame(()=>{
    syncPageFlipFrame();
    state.pageFlip.update();
  });
}
window.addEventListener('resize',()=>{
  clearTimeout(state.resizeTimer);
  state.resizeTimer=setTimeout(rebuildPageFlipForViewport,180);
});
function openModal(id){$(id).classList.remove('hidden')} function closeModal(id){$(id).classList.add('hidden')}
function openProduct(id){
  const p=state.products.find(x=>x.id===id); state.current=p; const s=state.selected[id]||{};
  const variants=productVariants(p);
  const displayVolume=variants.map(item=>item.volume).join(' / ');
  const displayPack=variants.map(item=>item.pack).join('/');
  $('mTitle').textContent=`${p.brand} — ${p.name}`;
  $('mMeta').innerHTML=`Категория: <b>${esc(p.category)}</b><br>Объем/вес: <b>${esc(displayVolume)}</b><br>Упаковка: <b>${esc(displayPack)}</b><br>Страна: <b>${esc(p.country)}</b>`;
  $('mSpecial').checked=specialConditionRequested(s);
  $('mSample').checked=!!s.sampleRequest;
  $('mOrder').checked=!!s.orderRequest;
  renderOrderVariants(p,s);
  toggleOrderQuantity();
  $('mComment').value=s.comment||'';
  $('removeProduct').style.display=state.selected[id]?'inline-block':'none'; openModal('productModal');
}
function productVariants(p){
  const volumes=String(p.volume||'').split(/\s*\/\s*/).map(x=>x.trim()).filter(Boolean);
  const packs=String(p.pack||'').split(/\s*\/\s*/).map(x=>x.trim()).filter(Boolean);
  const sizes=[...String(p.name||'').matchAll(/\b(\d+(?:[.,]\d+)?\s*[x×]\s*\d+(?:[.,]\d+)?)\b/gi)]
    .map(match=>match[1].replace(/\s*[x×]\s*/i,'×'));
  if(sizes.length>1){
    return sizes.map((size,index)=>({
      volume:`${size} мм — ${volumes[index]||volumes[0]||'—'}`,
      pack:packs[index]||packs[0]||'—'
    }));
  }
  return (volumes.length?volumes:['—']).map((volume,index)=>({
    volume,
    pack:packs[index]||packs[0]||'—'
  }));
}
function savedOrderItems(p,s){
  if(Array.isArray(s.orderItems)) return s.orderItems;
  if(s.orderRequest && s.orderQuantity){
    const first=productVariants(p)[0];
    return [{...first,quantity:+s.orderQuantity}];
  }
  return [];
}
function renderOrderVariants(p,s={}){
  const saved=savedOrderItems(p,s);
  const hasSizes=productVariants(p).some(item=>item.volume.includes(' мм — '));
  const heading=$('mQuantityWrap').querySelector('strong');
  if(heading) heading.textContent=hasSizes?'Выберите размер и количество':'Выберите объём и количество';
  $('mOrderVariants').innerHTML=productVariants(p).map((variant,index)=>{
    const current=saved.find(item=>item.volume===variant.volume&&item.pack===variant.pack);
    return `<label class="order-variant">
      <span><b>${esc(variant.volume)}</b><small>В упаковке: ${esc(variant.pack)} шт.</small></span>
      <span class="order-quantity-control">
        <input class="order-variant-quantity" data-index="${index}" type="number" min="0" step="1" inputmode="numeric" value="${current?.quantity||0}" aria-label="Количество ${esc(variant.volume)}">
        <em>шт.</em>
      </span>
    </label>`;
  }).join('');
  document.querySelectorAll('.order-variant-quantity').forEach(input=>{
    input.oninput=()=>input.setCustomValidity('');
  });
}
function toggleOrderQuantity(){
  const enabled=$('mOrder').checked;
  $('mQuantityWrap').classList.toggle('hidden',!enabled);
}
function saveCurrentProduct(){
  const p=state.current; if(!p) return;
  const orderRequest=$('mOrder').checked;
  const variants=productVariants(p);
  const inputs=[...document.querySelectorAll('.order-variant-quantity')];
  const invalid=inputs.find(input=>!Number.isInteger(Number(input.value))||Number(input.value)<0);
  if(orderRequest && invalid){
    invalid.setCustomValidity('Укажите целое количество не меньше 0');
    invalid.reportValidity(); invalid.focus(); return;
  }
  const orderItems=orderRequest?inputs.map((input,index)=>({
    ...variants[index],quantity:Number(input.value)
  })).filter(item=>item.quantity>0):[];
  if(orderRequest && !orderItems.length){
    const first=inputs[0];
    first.setCustomValidity('Укажите количество минимум для одного объёма');
    first.reportValidity(); first.focus(); return;
  }
  const orderQuantity=orderItems.reduce((sum,item)=>sum+item.quantity,0);
  state.selected[p.id]={...p, specialRequest:$('mSpecial').checked, sampleRequest:$('mSample').checked, orderRequest, orderItems, orderQuantity, comment:$('mComment').value.trim(), savedAt:new Date().toISOString()};
  localStorage.setItem('selectedProducts',JSON.stringify(state.selected)); updateCount(); closeModal('productModal'); refreshHotspots();
}
function removeCurrentProduct(){ if(state.current){delete state.selected[state.current.id]; localStorage.setItem('selectedProducts',JSON.stringify(state.selected)); updateCount(); refreshHotspots(); closeModal('productModal');}}
function refreshHotspots(){document.querySelectorAll('.hotspot').forEach(h=>h.classList.toggle('selected',!!state.selected[h.dataset.id]));}
function updateCount(){ $('selectedCount').textContent=Object.keys(state.selected).length; }
function applyFilter(){
  const q=$('search').value.toLowerCase(); const cat=$('categoryFilter').value;
  document.querySelectorAll('.hotspot').forEach(h=>{
    const p=state.products.find(x=>x.id===h.dataset.id); const text=[p.category,p.brand,p.name,p.volume,p.country].join(' ').toLowerCase();
    h.style.display=(!cat||p.category===cat) && (!q||text.includes(q)) ? '' : 'none';
  });
}
function restoreClient(){
  const c=state.client; $('cDate').value=c.date || new Date().toISOString().slice(0,10);
  ['Company','Person','Phone','Email','Type','Manager','Address','DeliveryAddress','Comment'].forEach(k=>{ const el=$('c'+k); if(el && c[k.toLowerCase()]) el.value=c[k.toLowerCase()]; });
  if(c.phone) $('cPhone').value=formatArmenianPhone(c.phone);
}
function saveClient(){
  const required=[$('cCompany'),$('cPerson'),$('cPhone'),$('cEmail')];
  $('cPhone').setCustomValidity(
    /^\+374 \d{2} \d{3} \d{3}$/.test($('cPhone').value)
      ? ''
      : 'Введите номер телефона в формате +374 XX XXX XXX'
  );
  $('cEmail').setCustomValidity(
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('cEmail').value.trim())
      ? ''
      : 'Введите корректный e-mail, например test@test.am'
  );
  const invalid=required.find(el=>!el.checkValidity());
  if(invalid){invalid.reportValidity();invalid.focus();return}
  state.client={company:$('cCompany').value.trim(),person:$('cPerson').value.trim(),phone:$('cPhone').value,email:$('cEmail').value.trim(),type:$('cType').value,manager:$('cManager').value.trim(),date:$('cDate').value,address:$('cAddress').value.trim(),deliveryaddress:$('cDeliveryAddress').value.trim(),comment:$('cComment').value.trim()};
  localStorage.setItem('clientData',JSON.stringify(state.client)); closeModal('clientModal');
}
function rows(){return Object.values(state.selected)}
function specialConditionRequested(p){return !!(p?.specialRequest??p?.priceRequest)}
function orderItems(p){return savedOrderItems(p,p).filter(item=>+item.quantity>0)}
function orderUnits(p){return orderItems(p).reduce((sum,item)=>sum+(+item.quantity||0),0)}
function orderDetails(p,separator='<br>'){
  const items=orderItems(p);
  return items.length?items.map(item=>`${esc(item.volume)} × ${esc(item.quantity)} шт. (уп. ${esc(item.pack)})`).join(separator):'—';
}
function orderDetailsText(p){
  const items=orderItems(p);
  return items.length?items.map(item=>`${item.volume} — ${item.quantity} шт. (в упаковке ${item.pack} шт.)`).join('; '):'нет';
}
function orderDetailsLines(p){
  const items=orderItems(p);
  return items.length?items.map(item=>`${item.volume} — ${item.quantity} шт. (уп. ${item.pack} шт.)`).join('\n'):'—';
}
function variantVolumes(p){
  return productVariants(p).map(item=>item.volume).join('\n');
}
function variantPacks(p){
  return productVariants(p).map(item=>`${item.pack} шт.`).join('\n');
}
function openReport(){
  const r=rows(), c=state.client;
  $('reportSummary').innerHTML=`<div>Клиент: ${esc(c.company||'не указан')}</div><div>Товаров: ${r.length}</div><div>К заказу: ${r.reduce((sum,x)=>sum+orderUnits(x),0)} шт.</div><div>Образцы: ${r.filter(x=>x.sampleRequest).length}</div><div>Спец. условия: ${r.filter(specialConditionRequested).length}</div>`;
  const mark=value=>`<span class="report-mark ${value?'yes':'no'}" aria-label="${value?'Да':'Нет'}">${value?'✓':'✕'}</span>`;
  $('reportTable').innerHTML='<thead><tr><th>ID</th><th>Категория</th><th>Бренд</th><th>Товар</th><th>Объем</th><th>Уп.</th><th>Заказать</th><th>Образец</th><th>Спец. условие</th><th>Варианты заказа</th><th>Комментарий</th><th>Удалить</th></tr></thead><tbody>'+r.map(p=>`<tr><td>${esc(p.id)}</td><td>${esc(p.category)}</td><td>${esc(p.brand)}</td><td>${esc(p.name)}</td><td>${esc(p.volume)}</td><td>${esc(p.pack)}</td><td class="mark-cell">${mark(p.orderRequest)}</td><td class="mark-cell">${mark(p.sampleRequest)}</td><td class="mark-cell">${mark(specialConditionRequested(p))}</td><td>${orderDetails(p)}</td><td>${esc(p.comment)}</td><td class="report-remove-cell"><button class="report-remove" type="button" data-remove-product="${esc(p.id)}" aria-label="Удалить ${esc(p.brand)} — ${esc(p.name)} из списка" title="Удалить товар">×</button></td></tr>`).join('')+'</tbody>';
  document.querySelectorAll('[data-remove-product]').forEach(button=>{
    button.onclick=()=>removeProductFromReport(button.dataset.removeProduct);
  });
  openModal('reportModal');
}
function removeProductFromReport(id){
  if(!state.selected[id]) return;
  delete state.selected[id];
  localStorage.setItem('selectedProducts',JSON.stringify(state.selected));
  updateCount();
  refreshHotspots();
  openReport();
}
function reportCSV(){
  const c=state.client; const head=['client_company','contact_person','phone','email','client_type','manager','date','legal_address','delivery_address','product_id','page','category','brand','name','volume','pack','country','order_request','sample_request','special_condition_request','order_quantity','order_details','comment'];
  const csv=[head, ...rows().map(p=>[c.company,c.person,c.phone,c.email,c.type,c.manager,c.date,c.address,c.deliveryaddress,p.id,p.page,p.category,p.brand,p.name,p.volume,p.pack,p.country,p.orderRequest?'yes':'no',p.sampleRequest?'yes':'no',specialConditionRequested(p)?'yes':'no',orderUnits(p),orderDetailsText(p),p.comment])];
  return csv.map(r=>r.map(v=>'"'+String(v??'').replaceAll('"','""')+'"').join(',')).join('\n');
}
function downloadCSV(){ const blob=new Blob(['\ufeff'+reportCSV()],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`horeca-report-${new Date().toISOString().slice(0,10)}.csv`; a.click(); URL.revokeObjectURL(a.href); }
function pdfText(value){return String(value??'').trim()||'—'}
function createPDFDocument(){
    const {jsPDF}=window.jspdf||{};
    if(!jsPDF) throw new Error('Модуль PDF не загружен');
    const {regular,bold}=window.HORECA_PDF_FONTS||{};
    if(!regular||!bold) throw new Error('Шрифты PDF не загружены');
    const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4',compress:true});
    doc.addFileToVFS('Arial.ttf',regular);
    doc.addFont('Arial.ttf','Arial','normal');
    doc.addFileToVFS('Arial-Bold.ttf',bold);
    doc.addFont('Arial-Bold.ttf','Arial','bold');
    doc.setFont('Arial','normal');

    const c=state.client;
    const r=rows();
    const orange=[245,81,22], green=[11,74,56], mint=[220,239,216], dark=[23,56,47];
    doc.setFillColor(...green);
    doc.rect(0,0,297,18,'F');
    if(window.HORECA_PDF_LOGO){
      doc.addImage(window.HORECA_PDF_LOGO,'PNG',16,4.1,37,9.8);
    }
    doc.setFont('Arial','bold');
    doc.setTextColor(255,255,255);
    doc.setFontSize(13);
    doc.text('Итог встречи',283,11.5,{align:'right'});
    doc.setTextColor(...dark);

    doc.setFontSize(11);
    const clientRows=[
      ['Компания',pdfText(c.company),'Контактное лицо',pdfText(c.person)],
      ['Телефон',pdfText(c.phone),'E-mail',pdfText(c.email)],
      ['Тип клиента',pdfText(c.type),'Менеджер',pdfText(c.manager)],
      ['Дата',pdfText(c.date),'Юридический адрес',pdfText(c.address)],
      ['Адрес доставки',pdfText(c.deliveryaddress),'Комментарий',pdfText(c.comment)]
    ];
    doc.autoTable({
      startY:23,
      body:clientRows,
      theme:'grid',
      styles:{font:'Arial',fontSize:9,cellPadding:2.2,textColor:dark,lineColor:[205,216,210]},
      columnStyles:{0:{fontStyle:'bold',fillColor:mint,cellWidth:30},1:{cellWidth:75},2:{fontStyle:'bold',fillColor:mint,cellWidth:34},3:{cellWidth:130}},
      margin:{left:14,right:14}
    });

    const specialCount=r.filter(specialConditionRequested).length;
    const sampleCount=r.filter(x=>x.sampleRequest).length;
    const totalOrderUnits=r.reduce((sum,x)=>sum+orderUnits(x),0);
    let y=doc.lastAutoTable.finalY+5;
    const summary=[
      `Товаров: ${r.length}`,
      `К заказу: ${totalOrderUnits} шт.`,
      `Образцы: ${sampleCount}`,
      `Спец. условия: ${specialCount}`
    ];
    const summaryWidth=64;
    summary.forEach((text,index)=>{
      const x=14+index*(summaryWidth+3);
      doc.setFillColor(...mint);
      doc.roundedRect(x,y,summaryWidth,10,2,2,'F');
      doc.setFont('Arial','bold');
      doc.setFontSize(9);
      doc.text(text,x+3,y+6.3);
    });
    y+=15;

    doc.autoTable({
      startY:y,
      head:[['ID','Категория','Бренд','Товар','Объём/вес','Уп.','Заказать','Образец','Спец. условие','Варианты заказа','Комментарий']],
      body:r.map(p=>[
        pdfText(p.id),pdfText(p.category),pdfText(p.brand),pdfText(p.name),
        pdfText(variantVolumes(p)),pdfText(variantPacks(p)),
        p.orderRequest?'✓':'✕',p.sampleRequest?'✓':'✕',specialConditionRequested(p)?'✓':'✕',
        p.orderRequest?pdfText(orderDetailsLines(p)):'—',pdfText(p.comment)
      ]),
      theme:'grid',
      rowPageBreak:'avoid',
      styles:{font:'Arial',fontSize:7.2,cellPadding:1.7,textColor:dark,lineColor:[210,215,212],overflow:'linebreak',valign:'middle'},
      headStyles:{font:'Arial',fontStyle:'bold',fillColor:green,textColor:[255,255,255],fontSize:7.5},
      columnStyles:{
        0:{cellWidth:15},1:{cellWidth:21},2:{cellWidth:26},3:{cellWidth:36},
        4:{cellWidth:21},5:{cellWidth:15},6:{cellWidth:16,halign:'center'},
        7:{cellWidth:16,halign:'center'},8:{cellWidth:20,halign:'center'},
        9:{cellWidth:49},10:{cellWidth:34}
      },
      didParseCell:data=>{
        if(data.section==='body'&&(data.column.index===6||data.column.index===7||data.column.index===8)){
          data.cell.text=[];
          data.cell.styles.halign='center';
          data.cell.styles.minCellHeight=8;
        }
      },
      didDrawCell:data=>{
        if(data.section!=='body'||(data.column.index!==6&&data.column.index!==7&&data.column.index!==8))return;
        const yes=data.cell.raw==='✓';
        const cx=data.cell.x+data.cell.width/2;
        const cy=data.cell.y+data.cell.height/2;
        const radius=1.85;
        if(yes){
          doc.setFillColor(218,243,227);
        }else{
          doc.setFillColor(248,221,221);
        }
        doc.circle(cx,cy,radius,'F');
        doc.setLineWidth(.35);
        if(yes){
          doc.setDrawColor(25,145,72);
          doc.line(cx-1.15,cy,cx-.3,cy+.85);
          doc.line(cx-.3,cy+.85,cx+1.35,cy-1.05);
        }else{
          doc.setDrawColor(205,45,45);
          doc.line(cx-.95,cy-.95,cx+.95,cy+.95);
          doc.line(cx+.95,cy-.95,cx-.95,cy+.95);
        }
      },
      margin:{left:14,right:14,bottom:13},
      didDrawPage:data=>{
        const page=doc.getNumberOfPages();
        doc.setFont('Arial','normal');
        doc.setFontSize(8);
        doc.setTextColor(100,110,105);
        doc.text(`Страница ${page}`,283,202,{align:'right'});
        doc.text('foodservice.am',14,202);
      }
    });

    return doc;
}
async function downloadPDF(){
  const button=$('downloadPdf');
  const oldText=button.textContent;
  button.disabled=true;
  button.textContent='Формирование PDF...';
  try{
    const doc=createPDFDocument();
    doc.save(`horeca-report-${new Date().toISOString().slice(0,10)}.pdf`);
  }catch(error){
    console.error(error);
    alert('Не удалось сформировать PDF-отчёт. Попробуйте ещё раз.');
  }finally{
    button.disabled=false;
    button.textContent=oldText;
  }
}
function excelSafe(value){return String(value??'').trim()||'—'}
async function downloadExcel(){
  const button=$('downloadExcel');
  const oldText=button.textContent;
  button.disabled=true;
  button.textContent='Формирование Excel...';
  try{
    if(!window.ExcelJS) throw new Error('Модуль Excel не загружен');
    const c=state.client;
    const products=rows();
    const workbook=new ExcelJS.Workbook();
    workbook.creator='Alpha Food Service';
    workbook.created=new Date();
    const green='FF0B4A38', mint='FFDCEFD8', white='FFFFFFFF', dark='FF17382F', red='FFC72F2F';

    const meetingSheet=workbook.addWorksheet('Итог встречи',{views:[{showGridLines:false}]});
    meetingSheet.columns=[{width:25},{width:80}];
    meetingSheet.mergeCells('A1:B1');
    meetingSheet.getCell('A1').value='ИТОГ ВСТРЕЧИ — ALPHA FOOD SERVICE';
    meetingSheet.getCell('A1').font={bold:true,size:16,color:{argb:white}};
    meetingSheet.getCell('A1').fill={type:'pattern',pattern:'solid',fgColor:{argb:green}};
    meetingSheet.getCell('A1').alignment={vertical:'middle'};
    meetingSheet.getRow(1).height=32;
    meetingSheet.addRow([]);
    [
      ['Компания',excelSafe(c.company)],
      ['Контактное лицо',excelSafe(c.person)],
      ['Телефон',excelSafe(c.phone)],
      ['E-mail',excelSafe(c.email)],
      ['Тип клиента',excelSafe(c.type)],
      ['Менеджер',excelSafe(c.manager)],
      ['Дата',excelSafe(c.date)],
      ['Юридический адрес',excelSafe(c.address)],
      ['Адрес доставки',excelSafe(c.deliveryaddress)],
      ['Комментарий',excelSafe(c.comment)]
    ].forEach((values,index)=>{
      const row=meetingSheet.addRow(values);
      row.getCell(1).font={bold:true,color:{argb:dark}};
      row.getCell(1).fill={type:'pattern',pattern:'solid',fgColor:{argb:mint}};
      row.alignment={vertical:'top',wrapText:true};
    });
    meetingSheet.addRow([]);
    [
      ['Товаров',products.length],
      ['К заказу, шт.',products.reduce((sum,p)=>sum+orderUnits(p),0)],
      ['Образцы',products.filter(p=>p.sampleRequest).length],
      ['Специальные условия',products.filter(specialConditionRequested).length]
    ].forEach(values=>{
      const row=meetingSheet.addRow(values);
      row.font={bold:true,color:{argb:dark}};
      row.fill={type:'pattern',pattern:'solid',fgColor:{argb:mint}};
    });

    const productSheet=workbook.addWorksheet('Товары',{
      views:[{state:'frozen',ySplit:1,showGridLines:false}]
    });
    productSheet.columns=[
      {header:'ID',key:'id',width:13},{header:'Категория',key:'category',width:22},
      {header:'Бренд',key:'brand',width:24},{header:'Товар',key:'name',width:38},
      {header:'Объём/вес',key:'volume',width:34},{header:'Упаковка',key:'pack',width:18},
      {header:'Страна',key:'country',width:14},{header:'Заказать',key:'order',width:11},
      {header:'Образец',key:'sample',width:11},{header:'Спец. условие',key:'special',width:16},
      {header:'Варианты заказа',key:'details',width:55},
      {header:'Комментарий',key:'comment',width:42}
    ];
    products.forEach(p=>{
      const row=productSheet.addRow({
        id:p.id,category:p.category,brand:p.brand,name:p.name,
        volume:variantVolumes(p),pack:variantPacks(p),country:p.country,
        order:p.orderRequest?'✓':'✕',sample:p.sampleRequest?'✓':'✕',
        special:specialConditionRequested(p)?'✓':'✕',
        details:p.orderRequest?orderDetailsLines(p):'—',comment:p.comment||'—'
      });
      row.alignment={vertical:'top',wrapText:true};
      row.height=Math.max(24,18*Math.max(
        String(row.getCell('volume').value).split('\n').length,
        String(row.getCell('pack').value).split('\n').length,
        String(row.getCell('details').value).split('\n').length
      ));
      ['order','sample','special'].forEach(key=>{
        const cell=row.getCell(key);
        cell.alignment={horizontal:'center',vertical:'middle'};
        cell.font={bold:true,color:{argb:cell.value==='✓'?'FF168C46':red}};
      });
    });
    const header=productSheet.getRow(1);
    header.height=30;
    header.font={bold:true,color:{argb:white}};
    header.fill={type:'pattern',pattern:'solid',fgColor:{argb:green}};
    header.alignment={vertical:'middle',wrapText:true};
    productSheet.autoFilter={from:'A1',to:`L${Math.max(1,products.length+1)}`};
    productSheet.eachRow(row=>{
      row.eachCell(cell=>{
        cell.border={bottom:{style:'thin',color:{argb:'FFD5DDD9'}}};
      });
    });

    const buffer=await workbook.xlsx.writeBuffer();
    const blob=new Blob([buffer],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    const link=document.createElement('a');
    link.href=URL.createObjectURL(blob);
    link.download=`horeca-report-${new Date().toISOString().slice(0,10)}.xlsx`;
    link.click();
    setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  }catch(error){
    console.error(error);
    alert('Не удалось сформировать Excel-отчёт. Попробуйте ещё раз.');
  }finally{
    button.disabled=false;
    button.textContent=oldText;
  }
}
function downloadPdfFile(file){
  const link=document.createElement('a');
  link.href=URL.createObjectURL(file);
  link.download=file.name;
  link.click();
  setTimeout(()=>URL.revokeObjectURL(link.href),1000);
}
async function sharePDF(channel){
  const button=channel==='WhatsApp' ? $('sendWhatsapp') : $('sendTelegram');
  const oldText=button.textContent;
  button.disabled=true;
  button.textContent='Формирование PDF...';
  try{
    const doc=createPDFDocument();
    const filename=`horeca-report-${new Date().toISOString().slice(0,10)}.pdf`;
    const file=new File([doc.output('blob')],filename,{type:'application/pdf'});
    const shareData={
      files:[file],
      title:'Итог встречи — Alpha Food Service',
      text:`PDF-отчёт по итогам встречи. Клиент: ${state.client.company||'не указан'}`
    };
    if(navigator.share && (!navigator.canShare || navigator.canShare({files:[file]}))){
      await navigator.share(shareData);
      return;
    }
    downloadPdfFile(file);
    alert(`Браузер не поддерживает прямую отправку PDF. Отчёт скачан — прикрепите его в ${channel}.`);
    channel==='WhatsApp' ? sendWhatsAppText() : sendTelegramText();
  }catch(error){
    if(error?.name!=='AbortError'){
      console.error(error);
      alert('Не удалось сформировать или отправить PDF-отчёт.');
    }
  }finally{
    button.disabled=false;
    button.textContent=oldText;
  }
}
async function copyReport(){
  const text=rows().map(p=>`${p.brand} — ${p.name}; заказать: ${orderDetailsText(p)}; образец: ${p.sampleRequest?'да':'нет'}; специальное условие: ${specialConditionRequested(p)?'да':'нет'}; ${p.comment||''}`).join('\n');
  await navigator.clipboard.writeText(`Клиент: ${state.client.company||''}\nКонтакт: ${state.client.person||''}\nТелефон: ${state.client.phone||''}\nАдрес доставки: ${state.client.deliveryaddress||''}\n\n${text}`); alert('Отчет скопирован');
}
function whatsappReport(){
  const c=state.client;
  const products=rows().map((p,index)=>
    `${index+1}. ${p.brand} — ${p.name}\n`+
    `Заказать: ${orderDetailsText(p)}; образец: ${p.sampleRequest?'да':'нет'}; `+
    `специальное условие: ${specialConditionRequested(p)?'да':'нет'}`+
    `${p.comment?`\nКомментарий: ${p.comment}`:''}`
  ).join('\n\n');
  return `*Итог встречи — Alpha Food Service*\n\n`+
    `Клиент: ${c.company||'не указан'}\n`+
    `Контакт: ${c.person||'не указан'}\n`+
    `Телефон: ${c.phone||'не указан'}\n`+
    `E-mail: ${c.email||'не указан'}\n`+
    `Адрес доставки: ${c.deliveryaddress||'не указан'}\n`+
    `${c.comment?`Комментарий по встрече: ${c.comment}\n`:''}\n`+
    `*Выбранные товары:*\n${products||'Товары не выбраны'}`;
}
function sendWhatsAppText(){
  const phone=String(state.client.phone||'').replace(/\D/g,'');
  const text=encodeURIComponent(whatsappReport());
  const url=phone
    ? `https://wa.me/${phone}?text=${text}`
    : `https://wa.me/?text=${text}`;
  window.open(url,'_blank','noopener,noreferrer');
}
function sendTelegramText(){
  const text=encodeURIComponent(whatsappReport());
  const url=encodeURIComponent('https://foodservice.am/');
  window.open(`https://t.me/share/url?url=${url}&text=${text}`,'_blank','noopener,noreferrer');
}
init();
