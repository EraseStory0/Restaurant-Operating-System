/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9"/>',
  plate:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  receipt:'<path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21z"/><path d="M9 8h6M9 12h6"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  flame:'<path d="M12 2c1.2 3.6-3.4 4.6-3.4 9.2a3.4 3.4 0 0 0 6.8 0c0-1.6-.8-2.6-.8-2.6s.8 2.6-.8 3.4c.8-2.6-1.7-3.4-1.7-3.4s1.7 2.6 0 4.3a3.4 3.4 0 0 1-3.4-3.4C8.7 6.6 12 6.6 12 2z"/>',
  box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15 20a5 5 0 0 1 7-4.5"/>',
  shield:'<path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"/>',
  activity:'<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6z"/><path d="M9 18v4M15 18v4"/>',
  chart:'<path d="M4 20V10M11 20V4M18 20v-7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  utensil:'<path d="M6 2v8M6 6h0M4 2v6a2 2 0 0 0 4 0V2"/><path d="M17 2c-2 1-3 3.5-3 6 0 2 1 3 2 3v11"/>',
  drink:'<path d="M7 3h10l-1.5 16a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z"/><path d="M6.5 9h11"/>',
  leaf:'<path d="M5 20c8 0 14-6 14-15-9 0-15 6-15 15z"/><path d="M6 19c3-3 6-6 12-13"/>',
  cake:'<path d="M4 12h16v8H4z"/><path d="M4 16h16"/><path d="M8 12V9a2 2 0 0 1 4 0v3M12 9V6"/><path d="M16 12V9a2 2 0 0 1 4 0v3"/>',
  check:'<path d="M5 13l4 4L19 7"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>'
};
function svg(name, cls){ return '<svg class="icon '+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+ICONS[name]+'</svg>'; }

/* ============================================================
   MOCK DATA
   ============================================================ */
const ROLES = [
  {id:'customer', label:'Customer', icon:'home', avatar:'C', name:'Jordan Lee'},
  {id:'waiter', label:'Waiter', icon:'utensil', avatar:'W', name:'Sam Rivera'},
  {id:'kitchen', label:'Kitchen', icon:'flame', avatar:'K', name:'Priya Nair'},
  {id:'manager', label:'Manager', icon:'chart', avatar:'M', name:'Alex Chen'},
  {id:'admin', label:'Admin', icon:'shield', avatar:'A', name:'Morgan Blake'}
];

const NAV = {
  customer:[{tab:'overview',label:'Overview',icon:'home'},{tab:'menu',label:'Menu',icon:'plate'},{tab:'reservations',label:'Reservations',icon:'calendar'},{tab:'orders',label:'Orders',icon:'receipt'},{tab:'billing',label:'Billing',icon:'card'}],
  waiter:[{tab:'floor',label:'Floor',icon:'grid'},{tab:'orders',label:'Orders',icon:'receipt'},{tab:'reservations',label:'Reservations',icon:'calendar'},{tab:'notifications',label:'Notifications',icon:'bell'}],
  kitchen:[{tab:'rail',label:'Ticket rail',icon:'flame'},{tab:'history',label:'History',icon:'clock'}],
  manager:[{tab:'overview',label:'Overview',icon:'home'},{tab:'sales',label:'Sales',icon:'chart'},{tab:'inventory',label:'Inventory',icon:'box'},{tab:'staff',label:'Staff',icon:'users'},{tab:'reports',label:'Reports',icon:'receipt'}],
  admin:[{tab:'users',label:'Users & roles',icon:'users'},{tab:'security',label:'Security',icon:'shield'},{tab:'health',label:'System health',icon:'activity'},{tab:'integrations',label:'Integrations',icon:'plug'}]
};

const PAGE_META = {
  customer:{title:'Welcome back', sub:'CUSTOMER PORTAL'},
  waiter:{title:'Floor & service', sub:'WAITER CONSOLE'},
  kitchen:{title:'Kitchen display', sub:'KITCHEN STAFF'},
  manager:{title:'Restaurant overview', sub:'MANAGER DASHBOARD'},
  admin:{title:'System administration', sub:'ADMIN CONSOLE'}
};

const menuItems = [
  {id:1,name:'Charred Octopus',desc:'Smoked paprika, white bean puree, lemon oil',price:16,cat:'Starters',icon:'flame',img:'https://kimi-web-img.moonshot.cn/img/www.anotherfoodblogger.com/dc3d6828e89e55c1c7ab478c68f55a09cef10312.jpg'},
  {id:2,name:'Heirloom Tomato Salad',desc:'Whipped ricotta, basil, aged balsamic',price:12,cat:'Starters',icon:'leaf',img:'https://kimi-web-img.moonshot.cn/img/media.chefdehome.com/9a4848cc6d3b1c82a5e2ab6730f38af669e02673.jpg'},
  {id:3,name:'Crispy Beef',desc:'Chili caramel, pickled daikon',price:14,cat:'Starters',icon:'flame',img:'  {id:3,name:'Crispy Beef',desc:'Chili caramel, pickled daikon',price:14,cat:'Starters',icon:'flame',img:'https://pupswithchopsticks.com/wp-content/uploads/sweet-sticky-crispy-mongolian-beef-portrait.jpg'},
'},
  {id:4,name:'Grilled Salmon',desc:'Roasted vegetables, herb butter',price:26,cat:'Mains',icon:'plate',img:'https://kimi-web-img.moonshot.cn/img/popmenucloud.com/73ca18b470c1916eba569eb8422e04484a2ec76c.jpg'},
  {id:5,name:'Braised Short Rib',desc:'Root vegetable mash, red wine jus',price:29,cat:'Mains',icon:'plate',img:'https://kimi-web-img.moonshot.cn/img/www.ouichefnetwork.com/9fcef198e7691c8642a223e7d587e0ae85be15de.jpg'},
  {id:6,name:'Wild Mushroom Risotto',desc:'Parmesan, truffle oil, chives',price:22,cat:'Mains',icon:'leaf',img:'https://kimi-web-img.moonshot.cn/img/images.themodernproper.com/5278dc96018db219dfecac87ea8a42d74f48185b.jpg'},
  {id:7,name:'Smoked Brisket Plate',desc:'House rub, charred onions, jus',price:27,cat:'Grills',icon:'flame',img:'https://kimi-web-img.moonshot.cn/img/food.fnr.sndimg.com/e7367327bd5246c14557f3a662aeee462985a1d6.webp'},
  {id:8,name:'Charcoal Chicken',desc:'Citrus marinade, chimichurri',price:21,cat:'Grills',icon:'flame',img:'https://kimi-web-img.moonshot.cn/img/images.getrecipekit.com/704dfeedd53f435adada3bebbcdcb4a1a64207fc.jpeg'},
  {id:9,name:'Grilled Vegetable Skewers',desc:'Romesco, smoked salt',price:17,cat:'Grills',icon:'leaf',img:'https://kimi-web-img.moonshot.cn/img/wholesomepatisserie.com/849a0e180c26cabc24c258bf1f086e291119c11b.jpg'},
  {id:10,name:'Dark Chocolate Torte',desc:'Sea salt, espresso cream',price:11,cat:'Desserts',icon:'cake',img:'https://kimi-web-img.moonshot.cn/img/cookinglsl.com/0f0b41002da4e8d82b88c1b26fe8d876b8715e72.jpg'},
  {id:11,name:'Citrus Panna Cotta',desc:'Candied orange, mint',price:9,cat:'Desserts',icon:'cake',img:'https://kimi-web-img.moonshot.cn/img/www.vickery.tv/df3bbc13cfd5b0e423b6c28cd0e2fbd2122cd2f3.jpg'},
  {id:12,name:'Barrel-Aged Old Fashioned',desc:'House bitters, orange oil',price:14,cat:'Drinks',icon:'drink',img:'https://kimi-web-img.moonshot.cn/img/mixthatdrink.com/8b3fe530b64dd7f2b04ab4f290d1e6e2369f56f5.jpg'},
  {id:13,name:'Smoked Rosemary Spritz',desc:'Gin, elderflower, soda',price:13,cat:'Drinks',icon:'drink',img:'https://kimi-web-img.moonshot.cn/img/joinjules.com/ad42824c28c7be3fac809566dcad1d431e9a635b.png'}
];

let tables = [
  {id:'T1',status:'available'},{id:'T2',status:'occupied'},{id:'T3',status:'reserved'},{id:'T4',status:'available'},
  {id:'T5',status:'bussing'},{id:'T6',status:'occupied'},{id:'T7',status:'available'},{id:'T8',status:'reserved'},
  {id:'T9',status:'occupied'},{id:'T10',status:'available'},{id:'T11',status:'bussing'},{id:'T12',status:'occupied'}
];

const reservationsData = [
  {time:'6:00 PM', guest:'Diane Foster', guests:2, table:'T3', status:'Confirmed'},
  {time:'6:30 PM', guest:'Marcus Webb', guests:4, table:'T8', status:'Confirmed'},
  {time:'7:15 PM', guest:'The Alvarez Party', guests:6, table:'T12', status:'Pending'},
  {time:'7:30 PM', guest:'Jordan Lee', guests:4, table:'T5', status:'Confirmed'},
  {time:'8:00 PM', guest:'Nina Osei', guests:2, table:'—', status:'Waitlist'}
];

const myReservations = [
  {date:'Sat, Aug 2', time:'7:30 PM', guests:4, seating:'Patio', status:'Confirmed'},
  {date:'Jul 12', time:'8:00 PM', guests:2, seating:'Window', status:'Completed'}
];

const orderHistory = [
  {id:'#OS-2288', date:'Jul 24', items:'Braised short rib, panna cotta', total:'$41.20'},
  {id:'#OS-2201', date:'Jul 10', items:'Grilled salmon, spritz', total:'$39.00'}
];

const receipts = [
  {id:'#R-4471', date:'Jul 24', total:'$41.20'},
  {id:'#R-4390', date:'Jul 10', total:'$39.00'}
];

let ticketIdSeed = 3300;
let kitchenTickets = [
  {id:'#'+(ticketIdSeed++), table:'T6', items:[{name:'Braised Short Rib',qty:1},{name:'Wild Mushroom Risotto',qty:1}], firedMinAgo:14, lane:'new'},
  {id:'#'+(ticketIdSeed++), table:'Takeaway', items:[{name:'Charcoal Chicken',qty:2}], firedMinAgo:4, lane:'new'},
  {id:'#'+(ticketIdSeed++), table:'T2', items:[{name:'Grilled Salmon',qty:1},{name:'Heirloom Tomato Salad',qty:1}], firedMinAgo:9, lane:'firing'},
  {id:'#'+(ticketIdSeed++), table:'T9', items:[{name:'Smoked Brisket Plate',qty:1}], firedMinAgo:2, lane:'firing'},
  {id:'#'+(ticketIdSeed++), table:'Delivery', items:[{name:'Grilled Vegetable Skewers',qty:1},{name:'Dark Chocolate Torte',qty:1}], firedMinAgo:1, lane:'ready'}
];
const kitchenHistory = [
  {id:'#3287', label:'T4', items:'Grilled Salmon x1', time:'17m'},
  {id:'#3286', label:'Takeaway', items:'Charcoal Chicken x1, Torte x1', time:'12m'},
  {id:'#3285', label:'T11', items:'Braised Short Rib x2', time:'22m'}
];

const inventoryData = [
  {item:'Salmon fillet', qty:'14 kg', threshold:'10 kg', supplier:'Coastal Seafoods', low:false},
  {item:'Short rib', qty:'6 kg', threshold:'8 kg', supplier:'Prairie Meats Co.', low:true},
  {item:'Heirloom tomatoes', qty:'9 kg', threshold:'5 kg', supplier:'Green Valley Farms', low:false},
  {item:'Arborio rice', qty:'3 kg', threshold:'6 kg', supplier:'Milano Dry Goods', low:true},
  {item:'House bitters', qty:'2 L', threshold:'3 L', supplier:'Barrel & Bloom', low:true},
  {item:'Dark chocolate (70%)', qty:'11 kg', threshold:'4 kg', supplier:'Milano Dry Goods', low:false}
];

const staffData = [
  {name:'Sam Rivera', role:'Waiter', shift:'4:00 PM – 12:00 AM', attendance:'On shift'},
  {name:'Priya Nair', role:'Kitchen Staff', shift:'2:00 PM – 10:00 PM', attendance:'On shift'},
  {name:'Diego Ruiz', role:'Waiter', shift:'4:00 PM – 12:00 AM', attendance:'On shift'},
  {name:'Lena Kowalski', role:'Kitchen Staff', shift:'11:00 AM – 7:00 PM', attendance:'Off shift'},
  {name:'Theo Brandt', role:'Host', shift:'5:00 PM – 11:00 PM', attendance:'Late'}
];

const reportsData = [
  {title:'Sales Report', desc:'Revenue, covers and average check by day.', icon:'chart'},
  {title:'Inventory Report', desc:'Stock levels, usage rate and reorder points.', icon:'box'},
  {title:'Employee Report', desc:'Hours worked, attendance and performance notes.', icon:'users'}
];

const usersData = [
  {name:'Jordan Lee', email:'jordan@example.com', role:'Customer', status:'Active'},
  {name:'Sam Rivera', email:'sam@rosystem.io', role:'Waiter', status:'Active'},
  {name:'Priya Nair', email:'priya@rosystem.io', role:'Kitchen Staff', status:'Active'},
  {name:'Alex Chen', email:'alex@rosystem.io', role:'Manager', status:'Active'},
  {name:'Morgan Blake', email:'morgan@rosystem.io', role:'Admin', status:'Active'},
  {name:'Theo Brandt', email:'theo@rosystem.io', role:'Host', status:'Suspended'}
];

const auditLog = [
  {time:'09:41', user:'morgan@rosystem.io', action:'Updated role permissions for Host', ip:'10.0.4.21', level:'Info'},
  {time:'10:02', user:'unknown', action:'3 failed login attempts', ip:'82.14.6.190', level:'Warning'},
  {time:'11:15', user:'alex@rosystem.io', action:'Exported sales report', ip:'10.0.4.9', level:'Info'},
  {time:'13:47', user:'system', action:'Automated backup completed', ip:'—', level:'Info'},
  {time:'14:30', user:'unknown', action:'API key used from new location', ip:'201.55.12.4', level:'Warning'}
];

const integrationsData = [
  {name:'Payment Gateway', desc:'Card and contactless payment processing.', status:'Connected'},
  {name:'POS Terminals', desc:'12 terminals synced across the floor.', status:'Connected'},
  {name:'Cloud Infrastructure (AWS)', desc:'EC2 compute and S3 storage.', status:'Connected'},
  {name:'Delivery Partners', desc:'Third-party delivery order intake.', status:'Attention needed'}
];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  selectedRole:'customer',
  currentRole:null,
  cart:[],
  orderType:'Dine-in',
  aiHistory:{},
  notifOpen:false,
  guestMenuFilter:'All'
};

/* ============================================================
   UTIL
   ============================================================ */
function $(sel, root){ return (root||document).querySelector(sel); }
function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }
function money(n){ return '$'+n.toFixed(2); }
function showToast(msg){
  const host = $('#toastHost');
  const t = document.createElement('div');
  t.className='toast';
  t.innerHTML = svg('check','icon-sm')+'<span>'+msg+'</span>';
  host.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .3s'; setTimeout(()=>t.remove(),300); }, 2600);
}

/* ============================================================
   LOGIN SIDE PANEL
   ============================================================ */
function openLoginPanel(){
  $('#loginPanel').classList.add('open');
  $('#loginScrim').hidden = false;
}
function closeLoginPanel(){
  $('#loginPanel').classList.remove('open');
  $('#loginScrim').hidden = true;
}
$('#guestSignInBtn').addEventListener('click', openLoginPanel);
$('#guestSignInBtn2').addEventListener('click', openLoginPanel);
$('#loginPanelClose').addEventListener('click', closeLoginPanel);
$('#loginScrim').addEventListener('click', closeLoginPanel);

function buildRoleGrid(){
  const grid = $('#roleGrid');
  grid.innerHTML = ROLES.map(r =>
    '<button type="button" class="role-card'+(r.id===state.selectedRole?' selected':'')+'" data-role="'+r.id+'">'+
      svg(r.icon,'icon-lg')+'<span>'+r.label+'</span>'+
    '</button>'
  ).join('');
  $all('.role-card', grid).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.selectedRole = btn.dataset.role;
      $all('.role-card', grid).forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      const role = ROLES.find(r=>r.id===state.selectedRole);
      $('#signInRoleLabel').textContent = role.label;
    });
  });
}

/* ============================================================
   AUTH FLOW
   ============================================================ */
$('#loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  signIn(state.selectedRole);
});
function signIn(roleId){
  const role = ROLES.find(r=>r.id===roleId) || ROLES[0];
  state.currentRole = role.id;
  $('#screen-guest').hidden = true;
  $('#screen-app').hidden = false;
  closeLoginPanel();
  $('#userAvatar').textContent = role.avatar;
  $('#userName').textContent = role.name;
  $('#userRole').textContent = role.label;
  buildSidebarNav(role.id);
  showRoleView(role.id);
  showToast('Signed in as '+role.label);
}
$('#logoutBtn').addEventListener('click', ()=>{
  $('#screen-app').hidden = true;
  $('#screen-guest').hidden = false;
  $('#sidebar').classList.remove('open');
  closeAI();
  state.currentRole = null;
  state.cart = [];
  renderCart();
});

/* Forgot password modal */
$('#forgotLink').addEventListener('click', e=>{ e.preventDefault(); openModal('modalForgot'); });
$('#forgotSendBtn').addEventListener('click', ()=>{
  const email = $('#forgotEmail').value.trim();
  $('#forgotBody').innerHTML = '<div class="success-note">'+svg('check')+'<div>If an account exists for <strong>'+(email||'that address')+'</strong>, a reset link is on its way.</div></div>'+
    '<div class="modal-close-row"><button class="btn btn-primary btn-sm" data-close-modal="modalForgot">Done</button></div>';
});

/* Create account modal */
$('#createAccountLink').addEventListener('click', e=>{ e.preventDefault(); openModal('modalSignup'); });
$('#signupCreateBtn').addEventListener('click', ()=>{
  const name = $('#signupName').value.trim() || 'New Guest';
  $('#signupBody').innerHTML = '<div class="success-note">'+svg('check')+'<div>Welcome, <strong>'+name+'</strong> — your account is ready. Signing you in…</div></div>';
  setTimeout(()=>{
    closeModal('modalSignup');
    state.selectedRole='customer';
    ROLES[0].name = name;
    signIn('customer');
  }, 900);
});

function openModal(id){ $('#'+id).hidden = false; }
function closeModal(id){ $('#'+id).hidden = true; }
$all('[data-close-modal]').forEach(b=> b.addEventListener('click', ()=> closeModal(b.dataset.closeModal)));
$all('.modal-overlay').forEach(ov=> ov.addEventListener('click', e=>{ if(e.target===ov) ov.hidden = true; }));

/* ============================================================
   SIDEBAR / NAV / TABS
   ============================================================ */
function buildSidebarNav(roleId){
  const nav = NAV[roleId];
  $('#sidebarNav').innerHTML = nav.map((n,i)=>
    '<button class="nav-item'+(i===0?' active':'')+'" data-tab="'+n.tab+'">'+svg(n.icon)+'<span>'+n.label+'</span></button>'
  ).join('');
  $all('.nav-item', $('#sidebarNav')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $all('.nav-item', $('#sidebarNav')).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      switchTab(roleId, btn.dataset.tab);
      $('#sidebar').classList.remove('open');
    });
  });
}
function showRoleView(roleId){
  $all('.role-view').forEach(v=> v.classList.remove('active'));
  $('#view-'+roleId).classList.add('active');
  const meta = PAGE_META[roleId];
  $('#pageTitle').textContent = meta.title;
  $('#pageSub').textContent = meta.sub;
  buildAIChips(roleId);
  $('#aiRoleLabel').textContent = ROLES.find(r=>r.id===roleId).label + ' assistant';
}
function switchTab(roleId, tabName){
  const view = $('#view-'+roleId);
  $all('.tab-btn', view).forEach(b=> b.classList.toggle('active', b.dataset.tab===tabName));
  $all('.tab-panel', view).forEach(p=> p.classList.toggle('active', p.dataset.panel===tabName));
}
$all('.tabs').forEach(tabRow=>{
  $all('.tab-btn', tabRow).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const view = btn.closest('.role-view');
      const roleId = view.dataset.role;
      $all('.tab-btn', view).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      switchTab(roleId, btn.dataset.tab);
      const navBtn = $all('.nav-item').find(n=> n.dataset.tab===btn.dataset.tab);
      if(navBtn){ $all('.nav-item').forEach(n=>n.classList.remove('active')); navBtn.classList.add('active'); }
    });
  });
});

/* Mobile sidebar toggle */
$('#hamburgerBtn').addEventListener('click', ()=> $('#sidebar').classList.add('open'));
$('#sidebarClose').addEventListener('click', ()=> $('#sidebar').classList.remove('open'));

/* Notifications popover */
const notifByRole = {
  customer:[{t:'Your order is being prepared', s:'2 min ago'},{t:'Reservation confirmed for Sat 7:30 PM', s:'1 hr ago'}],
  waiter:[{t:'Table 6 order is ready for pickup', s:'Just now'},{t:'Table 9 requested the bill', s:'3 min ago'}],
  kitchen:[{t:'New ticket fired: Takeaway #3302', s:'1 min ago'},{t:'Ticket #3298 is aging — 18 min', s:'4 min ago'}],
  manager:[{t:'Low stock: Short rib, Arborio rice', s:'20 min ago'},{t:'Daily sales report ready', s:'1 hr ago'}],
  admin:[{t:'3 failed login attempts detected', s:'10 min ago'},{t:'Nightly backup completed', s:'6 hr ago'}]
};
$('#notifBtn').addEventListener('click', e=>{
  e.stopPropagation();
  const pop = $('#notifPop');
  if(!pop.hidden){ pop.hidden = true; return; }
  const list = notifByRole[state.currentRole] || [];
  pop.innerHTML = '<h4>Notifications</h4>' + list.map(n=>'<div class="notif-item">'+n.t+'<span>'+n.s+'</span></div>').join('');
  pop.hidden = false;
});
document.addEventListener('click', ()=>{ $('#notifPop').hidden = true; });

/* ============================================================
   GUEST PAGE: MENU
   ============================================================ */
function buildGuestMenuFilters(){
  const cats = ['All', ...Array.from(new Set(menuItems.map(m=>m.cat)))];
  $('#guestMenuFilterPills').innerHTML = cats.map(c=>
    '<button class="filter-pill'+(c===state.guestMenuFilter?' active':'')+'" data-gcat="'+c+'">'+c+'</button>'
  ).join('');
  $all('[data-gcat]', $('#guestMenuFilterPills')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      state.guestMenuFilter = btn.dataset.gcat;
      $all('[data-gcat]', $('#guestMenuFilterPills')).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      buildGuestMenuGrid();
    });
  });
}

function buildGuestMenuGrid(){
  const items = state.guestMenuFilter==='All' ? menuItems : menuItems.filter(m=>m.cat===state.guestMenuFilter);
  $('#guestMenuGrid').innerHTML = items.map(m=>
    '<div class="dish-card guest-dish">'+
      '<div class="dish-img-wrap"><img src="'+m.img+'" alt="'+m.name+'" loading="lazy"></div>'+
      '<div class="dish-body">'+
        '<div class="dish-top">'+
          '<div><div class="dish-name">'+m.name+'</div><div class="dish-tag">'+m.cat+'</div></div>'+
        '</div>'+
        '<div class="dish-desc">'+m.desc+'</div>'+
        '<div class="dish-foot"><span class="dish-price">'+money(m.price)+'</span><span class="dish-login-hint">Sign in to order</span></div>'+
      '</div>'+
    '</div>'
  ).join('');
}

/* ============================================================
   CUSTOMER: MENU
   ============================================================ */
let menuFilter = 'All';
function buildMenuFilters(){
  const cats = ['All', ...Array.from(new Set(menuItems.map(m=>m.cat)))];
  $('#menuFilterPills').innerHTML = cats.map(c=>
    '<button class="filter-pill'+(c===menuFilter?' active':'')+'" data-cat="'+c+'">'+c+'</button>'
  ).join('');
  $all('.filter-pill', $('#menuFilterPills')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      menuFilter = btn.dataset.cat;
      $all('.filter-pill', $('#menuFilterPills')).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      buildMenuGrid();
    });
  });
}

const plateColors = {Starters:'var(--teal-tint)', Mains:'var(--amber-tint)', Grills:'var(--ember-tint)', Desserts:'var(--herb-tint)', Drinks:'var(--paper-2)'};
const plateIconColors = {Starters:'var(--teal)', Mains:'var(--amber-deep)', Grills:'var(--ember)', Desserts:'var(--herb)', Drinks:'var(--ink-soft)'};

function buildMenuGrid(){
  const items = menuFilter==='All' ? menuItems : menuItems.filter(m=>m.cat===menuFilter);
  $('#menuGrid').innerHTML = items.map(m=>
    '<div class="dish-card">'+
      '<div class="dish-img-wrap"><img src="'+m.img+'" alt="'+m.name+'" loading="lazy"></div>'+
      '<div class="dish-body">'+
        '<div class="dish-top">'+
          '<div class="dish-plate" style="background:'+plateColors[m.cat]+'; color:'+plateIconColors[m.cat]+'">'+svg(m.icon)+'</div>'+
          '<div><div class="dish-name">'+m.name+'</div><div class="dish-tag">'+m.cat+'</div></div>'+
        '</div>'+
        '<div class="dish-desc">'+m.desc+'</div>'+
        '<div class="dish-foot"><span class="dish-price">'+money(m.price)+'</span><button class="btn btn-ghost btn-sm" data-add="'+m.id+'">Add</button></div>'+
      '</div>'+
    '</div>'
  ).join('');
  $all('[data-add]', $('#menuGrid')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = menuItems.find(m=>m.id==btn.dataset.add);
      addToCart(item);
      showToast(item.name+' added to your order');
    });
  });
}

/* ============================================================
   CUSTOMER: CART / ORDERS
   ============================================================ */
function addToCart(item){
  const existing = state.cart.find(c=>c.id===item.id);
  if(existing){ existing.qty += 1; } else { state.cart.push({...item, qty:1}); }
  renderCart();
}
function renderCart(){
  const list = $('#cartList');
  if(state.cart.length===0){
    list.innerHTML = '<p style="color:var(--ink-soft); font-size:.82rem;">Your cart is empty.</p>';
  } else {
    list.innerHTML = state.cart.map(c=>
      '<div style="display:flex; justify-content:space-between; align-items:center; font-size:.85rem;">'+
        '<span>'+c.qty+'× '+c.name+'</span><span class="mono">'+money(c.price*c.qty)+'</span>'+
      '</div>'
    ).join('');
  }
  const total = state.cart.reduce((s,c)=>s+c.price*c.qty,0);
  $('#cartTotal').textContent = money(total);
}
$all('[data-order-type]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    state.orderType = btn.dataset.orderType;
    $all('[data-order-type]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});
$('#placeOrderBtn').addEventListener('click', ()=>{
  if(state.cart.length===0){ showToast('Add an item before placing your order'); return; }
  showToast(state.orderType+' order placed — tracking below');
  state.cart = [];
  renderCart();
});
function renderReservationList(){
  $('#reservationList').innerHTML = myReservations.map(r=>
    '<div class="card" style="display:flex; align-items:center; justify-content:space-between;">'+
      '<div><strong>'+r.date+' · '+r.time+'</strong><div style="font-size:.8rem; color:var(--ink-soft);">'+r.guests+' guests · '+r.seating+'</div></div>'+
      '<span class="pill '+(r.status==='Confirmed'?'pill-herb':'pill-mute')+'">'+r.status+'</span>'+
    '</div>'
  ).join('');
}
$('#reservationForm').addEventListener('submit', e=>{
  e.preventDefault();
  const date = $('#resDate').value || 'Selected date';
  const time = $('#resTime').value || '7:00 PM';
  const guests = $('#resGuests').value || 2;
  myReservations.unshift({date:date, time:time, guests:guests, seating:$('#resSeating').value, status:'Confirmed'});
  renderReservationList();
  showToast('Reservation confirmed for '+date);
});
function renderOrderHistory(){
  $('#orderHistoryList').innerHTML = orderHistory.map(o=>
    '<div class="card" style="display:flex; justify-content:space-between; align-items:center;">'+
      '<div><strong class="mono">'+o.id+'</strong><div style="font-size:.8rem; color:var(--ink-soft);">'+o.items+' · '+o.date+'</div></div>'+
      '<span class="mono">'+o.total+'</span>'+
    '</div>'
  ).join('');
}
function renderReceipts(){
  $('#receiptList').innerHTML = receipts.map(r=>
    '<div class="card" style="display:flex; justify-content:space-between; align-items:center;">'+
      '<span class="mono">'+r.id+'</span><span style="color:var(--ink-soft); font-size:.85rem;">'+r.date+'</span><span class="mono">'+r.total+'</span>'+
    '</div>'
  ).join('');
}
$('#payNowBtn').addEventListener('click', ()=> showToast('Payment received — receipt sent to your email'));

/* ============================================================
   WAITER: FLOOR / ORDERS / RESERVATIONS / NOTIFICATIONS
   ============================================================ */
const nextStatus = {available:'occupied', occupied:'bussing', bussing:'reserved', reserved:'available'};
function buildFloorGrid(){
  $('#floorGrid').innerHTML = tables.map(t=>
    '<button class="table-tile '+t.status+'" data-table="'+t.id+'"><span>'+t.id+'</span>'+cap(t.status)+'</button>'
  ).join('');
  $all('[data-table]', $('#floorGrid')).forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const t = tables.find(x=>x.id===btn.dataset.table);
      t.status = nextStatus[t.status];
      buildFloorGrid();
      showToast(t.id+' marked '+t.status);
    });
  });
}
function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
function buildWaiterOrders(){
  $('#waiterOrdersList').innerHTML = kitchenTickets.map(t=>
    '<div class="card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">'+
      '<div><strong class="mono">'+t.id+'</strong> · '+t.table+'<div style="font-size:.8rem; color:var(--ink-soft);">'+t.items.map(i=>i.qty+'× '+i.name).join(', ')+'</div></div>'+
      '<span class="pill '+(t.lane==='ready'?'pill-herb':t.lane==='firing'?'pill-amber':'pill-mute')+'">'+cap(t.lane)+'</span>'+
    '</div>'
  ).join('');
}
function buildWaiterReservations(){
  const body = $('#waiterResTable tbody');
  body.innerHTML = reservationsData.map(r=>
    '<tr><td>'+r.time+'</td><td>'+r.guest+'</td><td>'+r.guests+'</td><td class="mono">'+r.table+'</td>'+
    '<td><span class="pill '+(r.status==='Confirmed'?'pill-herb':r.status==='Pending'?'pill-amber':'pill-mute')+'">'+r.status+'</span></td>'+
    '<td><button class="btn btn-ghost btn-sm">Seat</button></td></tr>'
  ).join('');
}
function buildWaiterNotifs(){
  $('#waiterNotifList').innerHTML = (notifByRole.waiter).map(n=>
    '<div class="card" style="display:flex; justify-content:space-between;"><span>'+n.t+'</span><span style="color:var(--ink-soft); font-size:.8rem;">'+n.s+'</span></div>'
  ).join('');
}

/* ============================================================
   KITCHEN: TICKET RAIL
   ============================================================ */
const laneAdvance = {new:'firing', firing:'ready', ready:'served'};
const laneLabel = {new:'laneNew', firing:'laneFiring', ready:'laneReady'};
const laneCount = {new:'countNew', firing:'countFiring', ready:'countReady'};
function buildKitchenRail(){
  ['new','firing','ready'].forEach(lane=>{
    const tickets = kitchenTickets.filter(t=>t.lane===lane);
    $('#'+laneCount[lane]).textContent = tickets.length;
    $('#'+laneLabel[lane]).innerHTML = tickets.length ? tickets.map(t=>{
      const aging = t.firedMinAgo >= 15;
      return '<div class="ticket'+(aging?' aging':'')+'">'+
        '<div class="ticket-top"><span class="ticket-id">'+t.id+' · '+t.table+'</span>'+
        '<span class="ticket-time">'+svg('clock','icon-sm')+t.firedMinAgo+'m</span></div>'+
        '<div class="ticket-items">'+t.items.map(i=>i.qty+'× '+i.name).join('<br>')+'</div>'+
        '<div class="ticket-actions">'+
          (lane!=='ready' ? '<button class="btn btn-dark btn-sm" data-advance="'+t.id+'">'+(lane==='new'?'Fire':'Mark ready')+'</button>' :
            '<button class="btn btn-primary btn-sm" data-advance="'+t.id+'">Served</button>')+
        '</div></div>';
    }).join('') : '<p style="color:var(--ink-soft); font-size:.82rem; padding:6px 2px;">No tickets.</p>';
  });
  $all('[data-advance]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const t = kitchenTickets.find(x=>x.id===btn.dataset.advance);
      if(!t) return;
      if(t.lane==='ready'){
        kitchenHistory.unshift({id:t.id, label:t.table, items:t.items.map(i=>i.qty+'× '+i.name).join(', '), time:t.firedMinAgo+'m'});
        kitchenTickets = kitchenTickets.filter(x=>x.id!==t.id);
        buildKitchenHistory();
      } else {
        t.lane = laneAdvance[t.lane];
        t.firedMinAgo = 0;
      }
      buildKitchenRail();
      showToast(t.id+' updated');
    });
  });
}
function buildKitchenHistory(){
  $('#kitchenHistoryBody').innerHTML = kitchenHistory.map(h=>
    '<tr><td class="mono">'+h.id+'</td><td>'+h.label+'</td><td>'+h.items+'</td><td class="mono">'+h.time+'</td></tr>'
  ).join('');
}

/* ============================================================
   MANAGER: CHARTS / INVENTORY / STAFF / REPORTS
   ============================================================ */
const salesLast7 = [3120,3480,2990,3760,4010,4560,4286];
function buildSalesLineChart(){
  const w=520,h=180,pad=28;
  const max = Math.max(...salesLast7)*1.15, min = Math.min(...salesLast7)*0.85;
  const stepX = (w-pad*2)/(salesLast7.length-1);
  const pts = salesLast7.map((v,i)=>{
    const x = pad + i*stepX;
    const y = h-pad - ((v-min)/(max-min))*(h-pad*2);
    return [x,y];
  });
  const linePath = pts.map((p,i)=> (i===0?'M':'L')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
  const areaPath = linePath+' L'+pts[pts.length-1][0].toFixed(1)+' '+(h-pad)+' L'+pts[0][0].toFixed(1)+' '+(h-pad)+' Z';
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const dots = pts.map((p,i)=>'<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.5" fill="var(--amber-deep)"/>').join('');
  const labels = pts.map((p,i)=>'<text x="'+p[0].toFixed(1)+'" y="'+(h-8)+'" font-size="10" fill="var(--ink-soft)" text-anchor="middle" font-family="IBM Plex Mono, monospace">'+days[i]+'</text>').join('');
  $('#salesLineChart').innerHTML =
    '<svg viewBox="0 0 '+w+' '+h+'">'+
      '<defs><linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">'+
        '<stop offset="0%" stop-color="var(--amber)" stop-opacity="0.35"/>'+
        '<stop offset="100%" stop-color="var(--amber)" stop-opacity="0"/>'+
      '</linearGradient></defs>'+
      '<path d="'+areaPath+'" fill="url(#areaGrad)"/>'+
      '<path d="'+linePath+'" fill="none" stroke="var(--amber-deep)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'+
      dots + labels +
    '</svg>';
}
const topItems = [{name:'Grilled Salmon',v:58},{name:'Short Rib',v:49},{name:'Charcoal Chicken',v:41},{name:'Brisket Plate',v:33},{name:'Risotto',v:27}];
function buildSalesBarChart(){
  const w=520,h=180,pad=30, gap=14;
  const barW = (w-pad*2-gap*(topItems.length-1))/topItems.length;
  const max = Math.max(...topItems.map(i=>i.v));
  const bars = topItems.map((it,i)=>{
    const x = pad + i*(barW+gap);
    const bh = (it.v/max)*(h-pad*2);
    const y = h-pad-bh;
    return '<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+barW.toFixed(1)+'" height="'+bh.toFixed(1)+'" rx="4" fill="var(--teal)"/>'+
      '<text x="'+(x+barW/2).toFixed(1)+'" y="'+(y-6)+'" font-size="10" fill="var(--ink-soft)" text-anchor="middle" font-family="IBM Plex Mono, monospace">'+it.v+'</text>'+
      '<text x="'+(x+barW/2).toFixed(1)+'" y="'+(h-8)+'" font-size="9" fill="var(--ink-soft)" text-anchor="middle">'+it.name.split(' ')[0]+'</text>';
  }).join('');
  $('#salesBarChart').innerHTML = '<svg viewBox="0 0 '+w+' '+h+'">'+bars+'</svg>';
}
function buildInventoryTable(){
  const lowItems = inventoryData.filter(i=>i.low);
  $('#lowStockText').textContent = lowItems.length
    ? lowItems.length+' ingredient'+(lowItems.length>1?'s are':' is')+' below threshold: '+lowItems.map(i=>i.item).join(', ')+'.'
    : 'All ingredients are above their reorder threshold.';
  $('#lowStockBanner').style.display = lowItems.length ? 'flex' : 'none';
  $('#inventoryBody').innerHTML = inventoryData.map(i=>
    '<tr><td>'+i.item+'</td><td class="mono">'+i.qty+'</td><td class="mono">'+i.threshold+'</td><td>'+i.supplier+'</td>'+
    '<td><span class="pill '+(i.low?'pill-ember':'pill-herb')+'">'+(i.low?'Low stock':'OK')+'</span></td>'+
    '<td>'+(i.low?'<button class="btn btn-ghost btn-sm" data-reorder="'+i.item+'">Reorder</button>':'')+'</td></tr>'
  ).join('');
  $all('[data-reorder]').forEach(btn=> btn.addEventListener('click', ()=> showToast('Purchase order sent for '+btn.dataset.reorder)));
}
function buildStaffTable(){
  $('#staffBody').innerHTML = staffData.map(s=>
    '<tr><td>'+s.name+'</td><td>'+s.role+'</td><td>'+s.shift+'</td>'+
    '<td><span class="pill '+(s.attendance==='On shift'?'pill-herb':s.attendance==='Late'?'pill-ember':'pill-mute')+'">'+s.attendance+'</span></td></tr>'
  ).join('');
}
function buildReportsGrid(){
  $('#reportsGrid').innerHTML = reportsData.map(r=>
    '<div class="card"><div class="dish-plate" style="background:var(--paper-2); color:var(--ink-soft); margin-bottom:10px;">'+svg(r.icon)+'</div>'+
    '<h3 style="margin-bottom:6px;">'+r.title+'</h3><p style="color:var(--ink-soft); font-size:.83rem; margin-bottom:14px;">'+r.desc+'</p>'+
    '<div style="display:flex; gap:8px;"><button class="btn btn-dark btn-sm" data-gen="'+r.title+'">Generate</button>'+
    '<button class="chip ai-quick" data-role="manager" data-prompt="Write a short, plain-language summary of what a '+r.title+' would typically highlight for this restaurant this week." style="border-radius:7px;">Ask AI to summarize</button></div></div>'
  ).join('');
  $all('[data-gen]').forEach(btn=> btn.addEventListener('click', ()=> showToast(btn.dataset.gen+' generated')));
}

/* ============================================================
   ADMIN: USERS / AUDIT / HEALTH / INTEGRATIONS
   ============================================================ */
function buildUsersTable(){
  $('#usersBody').innerHTML = usersData.map((u,i)=>
    '<tr><td>'+u.name+'</td><td>'+u.email+'</td><td>'+u.role+'</td>'+
    '<td><span class="pill '+(u.status==='Active'?'pill-herb':'pill-ember')+'">'+u.status+'</span></td>'+
    '<td><button class="btn btn-ghost btn-sm" data-toggle-user="'+i+'">'+(u.status==='Active'?'Suspend':'Reactivate')+'</button></td></tr>'
  ).join('');
  $all('[data-toggle-user]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const u = usersData[btn.dataset.toggleUser];
      u.status = u.status==='Active' ? 'Suspended' : 'Active';
      buildUsersTable();
      showToast(u.name+' is now '+u.status.toLowerCase());
    });
  });
}
function buildAuditTable(){
  $('#auditBody').innerHTML = auditLog.map(a=>
    '<tr><td class="mono">'+a.time+'</td><td>'+a.user+'</td><td>'+a.action+'</td><td class="mono">'+a.ip+'</td>'+
    '<td><span class="pill '+(a.level==='Warning'?'pill-ember':'pill-mute')+'">'+a.level+'</span></td></tr>'
  ).join('');
}
function buildGauges(){
  const gauges = [{label:'CPU',v:42},{label:'Memory',v:61},{label:'DB load',v:34}];
  $('#gaugeGrid').innerHTML = gauges.map(g=>{
    const r=40, c=2*Math.PI*r, off=c*(1-g.v/100);
    return '<div style="text-align:center;">'+
      '<svg width="110" height="110" viewBox="0 0 110 110">'+
        '<circle cx="55" cy="55" r="'+r+'" fill="none" stroke="var(--paper-2)" stroke-width="10"/>'+
        '<circle cx="55" cy="55" r="'+r+'" fill="none" stroke="var(--teal)" stroke-width="10" stroke-linecap="round" '+
        'stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+off.toFixed(1)+'" transform="rotate(-90 55 55)"/>'+
        '<text x="55" y="60" text-anchor="middle" font-size="18" font-weight="700" fill="var(--ink)" font-family="IBM Plex Mono, monospace">'+g.v+'%</text>'+
      '</svg><div style="font-size:.78rem; color:var(--ink-soft); margin-top:6px;">'+g.label+'</div></div>';
  }).join('');
}
function buildIntegrations(){
  $('#integrationsGrid').innerHTML = integrationsData.map(i=>
    '<div class="card" style="display:flex; justify-content:space-between; align-items:center;">'+
      '<div><h3 style="margin-bottom:4px;">'+i.name+'</h3><p style="color:var(--ink-soft); font-size:.83rem;">'+i.desc+'</p></div>'+
      '<span class="pill '+(i.status==='Connected'?'pill-herb':'pill-ember')+'">'+i.status+'</span>'+
    '</div>'
  ).join('');
}

/* ============================================================
   RAIL AI ASSISTANT
   ============================================================ */
const AI_CHIPS = {
  customer:[{l:'Recommend a meal', p:'Based on the menu, recommend a starter, main and dessert for someone who likes bold, smoky flavors.'},
            {l:'Track my order', p:"What's the status of my order #OS-2291 and roughly how much longer will it take?"}],
  waiter:[{l:'Which table next?', p:'Looking at the floor plan, which table should I seat the next 2-top party at, and why?'},
          {l:'VIP reservations today?', p:'Are there any VIP or large-party reservations today I should prep for?'}],
  kitchen:[{l:'Fire order suggestion', p:'Given the current tickets on the rail, what order should I fire them in, and why?'},
           {l:'Tickets running late?', p:'Are any tickets at risk of running late? Flag anything approaching or past a reasonable ticket time.'}],
  manager:[{l:"Summarize today", p:"Summarize today's restaurant performance in 3-4 sentences using the KPI data, and call out one thing worth acting on."},
           {l:'Restock priorities', p:'Based on current inventory levels, which ingredients should I reorder first?'}],
  admin:[{l:'Security check', p:'Review today\'s audit log entries and tell me if anything looks unusual or worth investigating.'},
         {l:'System health summary', p:'Give me a one-paragraph plain-language summary of current system health.'}]
};

function buildAIChips(roleId){
  const chips = AI_CHIPS[roleId] || [];
  $('#aiChipsRow').innerHTML = chips.map(c=>'<button class="ai-chip" data-prompt="'+c.p.replace(/"/g,'&quot;')+'">'+c.l+'</button>').join('');
  $all('.ai-chip', $('#aiChipsRow')).forEach(btn=>{
    btn.addEventListener('click', ()=> sendAIMessage(btn.dataset.prompt));
  });
}

function contextForRole(roleId){
  if(roleId==='customer'){
    return 'Menu items: '+menuItems.map(m=>m.name+' ('+m.cat+', $'+m.price+')').join('; ')+
      '. Customer loyalty points: 1240. Active order #OS-2291 (Grilled Salmon, Roasted vegetables) is Preparing, started 9 minutes ago.'+
      ' Upcoming reservation: Sat 7:30 PM, table for 4, patio.';
  }
  if(roleId==='waiter'){
    return 'Table statuses: '+tables.map(t=>t.id+'='+t.status).join(', ')+
      '. Today\'s reservations: '+reservationsData.map(r=>r.time+' '+r.guest+' party of '+r.guests+' table '+r.table+' ('+r.status+')').join('; ')+'.';
  }
  if(roleId==='kitchen'){
    return 'Current tickets: '+kitchenTickets.map(t=>t.id+' ('+t.table+', lane='+t.lane+', fired '+t.firedMinAgo+' min ago): '+t.items.map(i=>i.qty+'x '+i.name).join(', ')).join(' | ')+'.';
  }
  if(roleId==='manager'){
    return 'KPIs today: Revenue $4,286 (+12%), Orders 213 (+18), Avg ticket time 16m (-2m), Table turnover 3.1x (+0.2x). '+
      'Inventory low-stock items: '+inventoryData.filter(i=>i.low).map(i=>i.item+' (on hand '+i.qty+', threshold '+i.threshold+', supplier '+i.supplier+')').join('; ')+'. '+
      'Staff today: '+staffData.map(s=>s.name+' ('+s.role+', '+s.attendance+')').join('; ')+'.';
  }
  if(roleId==='admin'){
    return 'Audit log: '+auditLog.map(a=>a.time+' '+a.user+' — '+a.action+' ('+a.level+', IP '+a.ip+')').join(' | ')+
      '. System: uptime 99.97% (30d), 6,842 concurrent users of 10,000 capacity, last backup today 03:00 (OK), 0 open incidents.';
  }
  return '';
}
const ROLE_VOICE = {
  customer:'You are Rail AI, the in-app assistant for a restaurant guest using the Restaurant Operating System (ROS). Be warm, concise, and help with menu questions, recommendations, orders and reservations.',
  waiter:'You are Rail AI, an assistant for a restaurant waiter using ROS. Be brisk and practical — help with seating, table turns, and service priorities.',
  kitchen:'You are Rail AI, an assistant for kitchen staff using the ROS Kitchen Display System. Be terse and operational — help sequence tickets and flag timing risks.',
  manager:'You are Rail AI, a business assistant for a restaurant manager using ROS. Give clear, decision-useful summaries grounded in the data provided, and call out risks or opportunities.',
  admin:'You are Rail AI, a systems assistant for a restaurant platform administrator using ROS. Be precise and security-conscious when reviewing logs and system health.'
};

function openAI(){
  $('#aiPanel').classList.add('open');
  $('#aiScrim').hidden = false;
  if(!state.aiHistory[state.currentRole] || state.aiHistory[state.currentRole].length===0){
    renderAIMessages();
    addAIBubble('ai', "Hi, I'm Rail AI. Ask me anything, or tap a suggestion above.");
  }
}
function closeAI(){
  $('#aiPanel').classList.remove('open');
  $('#aiScrim').hidden = true;
}
$('#aiToggleBtn').addEventListener('click', openAI);
$('#aiCloseBtn').addEventListener('click', closeAI);
$('#aiScrim').addEventListener('click', closeAI);
document.addEventListener('click', e=>{
  const btn = e.target.closest('.ai-quick');
  if(btn){
    openAI();
    sendAIMessage(btn.dataset.prompt);
  }
});

function ensureHistory(){
  if(!state.aiHistory[state.currentRole]) state.aiHistory[state.currentRole] = [];
  return state.aiHistory[state.currentRole];
}
function addAIBubble(role, text){
  const hist = ensureHistory();
  hist.push({role:role, text:text});
  renderAIMessages();
}
function renderAIMessages(){
  const hist = ensureHistory();
  $('#aiMessages').innerHTML = hist.map(m=>
    '<div class="msg '+(m.role==='user'?'user':m.role==='error'?'error':'ai')+'">'+escapeHTML(m.text)+'</div>'
  ).join('');
  $('#aiMessages').scrollTop = $('#aiMessages').scrollHeight;
}
function escapeHTML(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

$('#aiSendBtn').addEventListener('click', ()=>{
  const input = $('#aiInput');
  if(input.value.trim()){ sendAIMessage(input.value.trim()); input.value=''; }
});
$('#aiInput').addEventListener('keydown', e=>{
  if(e.key==='Enter'){ e.preventDefault(); $('#aiSendBtn').click(); }
});

async function sendAIMessage(userText){
  openAI();
  addAIBubble('user', userText);
  const hist = ensureHistory();
  const thinkingIdx = hist.length;
  hist.push({role:'thinking', text:'Rail AI is thinking…'});
  renderAIMessages();

  const roleId = state.currentRole || 'customer';
  const system = ROLE_VOICE[roleId] + ' Use this live context from the restaurant\'s system when relevant:\n' + contextForRole(roleId) +
    ' Keep replies under 120 words unless the person asks for more detail.';

  const apiMessages = hist
    .filter(m=> m.role==='user' || m.role==='ai')
    .map(m=> ({role: m.role==='user'?'user':'assistant', content: m.text}));

  try{
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:1000,
        system: system,
        messages: apiMessages
      })
    });
    const data = await response.json();
    let text = '';
    if(data && data.content){
      text = data.content.map(b=> b.type==='text' ? b.text : '').filter(Boolean).join('\n');
    }
    if(!text) text = "I couldn't quite generate a reply — could you try rephrasing?";
    hist.splice(thinkingIdx, 1);
    addAIBubble('ai', text.trim());
  } catch(err){
    hist.splice(thinkingIdx, 1);
    addAIBubble('error', "Rail AI is unavailable right now. Please try again in a moment.");
  }
}

/* ============================================================
   INIT
   ============================================================ */
function initAll(){
  buildRoleGrid();
  buildGuestMenuFilters();
  buildGuestMenuGrid();
  buildMenuFilters();
  buildMenuGrid();
  renderCart();
  renderReservationList();
  renderOrderHistory();
  renderReceipts();
  buildFloorGrid();
  buildWaiterOrders();
  buildWaiterReservations();
  buildWaiterNotifs();
  buildKitchenRail();
  buildKitchenHistory();
  buildSalesLineChart();
  buildSalesBarChart();
  buildInventoryTable();
  buildStaffTable();
  buildReportsGrid();
  buildUsersTable();
  buildAuditTable();
  buildGauges();
  buildIntegrations();
}
initAll();
