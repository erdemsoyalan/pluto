"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeDollarSign,
  Bell,
  Check,
  ClipboardList,
  DoorOpen,
  History,
  Home,
  MapPinned,
  Menu,
  Minus,
  Phone,
  PhoneCall,
  RotateCcw,
  Trash2,
  X,
} from "lucide-react";

type Tab = "knock" | "route" | "calls" | "sales" | "history";
type Status = "Sold" | "Callback" | "No Answer" | "Not Interested" | "Interested";

type Knock = {
  id: string;
  street: string;
  house: string;
  status: Status;
  note: string;
  phone?: string;
  callbackTime?: string;
  saleAmount?: number;
  createdAt: string;
};

type Sale = {
  id: string;
  knockId: string;
  address: string;
  service: string;
  price: number;
  deposit: number;
  commissionRate: number;
  createdAt: string;
};

const STORAGE_KEY = "pluto-sales-command-v10";

const actionConfig: Record<Status, { hint: string; className: string; icon: React.ReactNode }> = {
  Sold: { hint: "Close a sale", className: "sold", icon: <Check size={32} /> },
  Callback: { hint: "Set callback", className: "callback", icon: <Phone size={30} /> },
  "No Answer": { hint: "No response", className: "noanswer", icon: <Minus size={32} /> },
  "Not Interested": { hint: "Not interested", className: "notinterested", icon: <X size={32} /> },
  Interested: { hint: "Warm lead", className: "interested", icon: <DoorOpen size={30} /> },
};

const actions: Status[] = ["Sold", "Callback", "No Answer", "Not Interested", "Interested"];

export default function App() {
  const [tab, setTab] = useState<Tab>("knock");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [note, setNote] = useState("");
  const [phone, setPhone] = useState("");
  const [callbackTime, setCallbackTime] = useState("");
  const [saleAmount, setSaleAmount] = useState("");
  const [dailyGoal, setDailyGoal] = useState(60);
  const [knocks, setKnocks] = useState<Knock[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        setStreet(data.street || "");
        setHouse(data.house || "");
        setNote(data.note || "");
        setPhone(data.phone || "");
        setCallbackTime(data.callbackTime || "");
        setSaleAmount(data.saleAmount || "");
        setDailyGoal(Number(data.dailyGoal) || 60);
        setKnocks(Array.isArray(data.knocks) ? data.knocks : []);
        setSales(Array.isArray(data.sales) ? data.sales : []);
      }
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        street,
        house,
        note,
        phone,
        callbackTime,
        saleAmount,
        dailyGoal,
        knocks,
        sales,
      })
    );
  }, [loaded, street, house, note, phone, callbackTime, saleAmount, dailyGoal, knocks, sales]);

  const todayDate = new Date().toISOString().slice(0, 10);

  const today = useMemo(
    () => knocks.filter((k) => k.createdAt.slice(0, 10) === todayDate),
    [knocks, todayDate]
  );

  const todaySales = today.filter((k) => k.status === "Sold").length;
  const callbacks = useMemo(() => knocks.filter((k) => k.status === "Callback"), [knocks]);
  const interested = knocks.filter((k) => k.status === "Interested").length;
  const totalSales = knocks.filter((k) => k.status === "Sold").length;
  const closeRate = knocks.length ? Math.round((totalSales / knocks.length) * 1000) / 10 : 0;
  const todayCloseRate = today.length ? Math.round((todaySales / today.length) * 1000) / 10 : 0;
  const goalPercent = Math.min(100, Math.round((today.length / Math.max(1, dailyGoal)) * 100));
  const revenue = sales.reduce((sum, sale) => sum + (Number(sale.price) || 0), 0);
  const commission = sales.reduce(
    (sum, sale) => sum + ((Number(sale.price) || 0) * (Number(sale.commissionRate) || 0)) / 100,
    0
  );

  const currentStreetKnocks = street.trim()
    ? knocks.filter((k) => k.street.toLowerCase() === street.trim().toLowerCase())
    : knocks;

  function clearCurrentHouse() {
    setHouse("");
    setNote("");
    setPhone("");
    setCallbackTime("");
    setSaleAmount("");
  }

  function record(status: Status) {
    const cleanStreet = street.trim();
    const cleanHouse = house.trim();
    const cleanSaleAmount = Number(saleAmount) || 0;

    if (!cleanStreet || !cleanHouse) {
      alert("Enter the street and house number first.");
      return;
    }

    if (status === "Sold" && cleanSaleAmount <= 0) {
      alert("Enter the sale amount before pressing Sold.");
      return;
    }

    const entry: Knock = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      street: cleanStreet,
      house: cleanHouse,
      status,
      note: note.trim(),
      phone: phone.trim(),
      callbackTime: status === "Callback" ? callbackTime.trim() : "",
      saleAmount: status === "Sold" ? cleanSaleAmount : 0,
      createdAt: new Date().toISOString(),
    };

    setKnocks((prev) => [entry, ...prev]);

    if (status === "Sold") {
      setSales((prev) => [
        {
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          knockId: entry.id,
          address: `${cleanHouse} ${cleanStreet}`,
          service: "Door sale",
          price: cleanSaleAmount,
          deposit: 0,
          commissionRate: 25,
          createdAt: entry.createdAt,
        },
        ...prev,
      ]);
    }

    clearCurrentHouse();
  }

  function deleteKnock(id: string) {
    setKnocks((prev) => prev.filter((k) => k.id !== id));
    setSales((prev) => prev.filter((s) => s.knockId !== id));
  }

  function updateSale(id: string, field: keyof Sale, value: string) {
    setSales((prev) =>
      prev.map((sale) =>
        sale.id === id
          ? {
              ...sale,
              [field]: ["price", "deposit", "commissionRate"].includes(field) ? Number(value) : value,
            }
          : sale
      )
    );
  }

  function resetToday() {
    if (!confirm("Clear today's saved knocks and related sales?")) return;
    const todayIds = new Set(today.map((k) => k.id));
    setKnocks((prev) => prev.filter((k) => !todayIds.has(k.id)));
    setSales((prev) => prev.filter((s) => !todayIds.has(s.knockId)));
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="icon-btn" type="button" aria-label="Menu">
          <Menu size={30} />
        </button>

        <div className="brand">
          <div className="brand-main">PLUTO</div>
          <div className="brand-sub">SALES COMMAND</div>
        </div>

        <button className="bell-btn" type="button" onClick={() => setTab("calls")} aria-label="Callbacks">
          <Bell size={28} />
          {callbacks.length > 0 && <span>{callbacks.length}</span>}
        </button>
      </header>

      {tab === "knock" && (
        <section className="screen">
          <div className="hero-row">
            <div className="logo-tile">K</div>

            <div>
              <p className="muted big">Good evening,</p>
              <h1>Erdem</h1>
              <p className="muted">Enter street + house, then tap one action.</p>
            </div>

            <button className="session-card" type="button" onClick={() => setTab("history")}>
              <span className="status-dot" />
              <small>SESSION ACTIVE</small>
              <strong>{today.length}</strong>
              <em>doors today</em>
            </button>
          </div>

          <section className="panel entry-panel">
            <div className="section-label">FAST KNOCK ENTRY</div>

            <label>
              Street name
              <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street Name" />
            </label>

            <div className="two-col">
              <label>
                House number
                <input
                  value={house}
                  onChange={(e) => setHouse(e.target.value)}
                  placeholder="House #"
                  inputMode="numeric"
                  autoComplete="off"
                />
              </label>

              <label>
                Sale amount
                <input
                  value={saleAmount}
                  onChange={(e) => setSaleAmount(e.target.value)}
                  placeholder="Sale Price"
                  inputMode="decimal"
                />
              </label>
            </div>

            <div className="two-col">
              <label>
                Phone optional
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Client Name" inputMode="tel" />
              </label>

              <label>
                Callback time optional
                <input value={callbackTime} onChange={(e) => setCallbackTime(e.target.value)} placeholder="Callback time" />
              </label>
            </div>

            <label>
              Daily goal
              <input value={dailyGoal} onChange={(e) => setDailyGoal(Number(e.target.value) || 0)} inputMode="numeric" />
            </label>

            <label>
              Notes optional
              <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Job Deatils" />
            </label>

            <button className="ghost-btn" type="button" onClick={clearCurrentHouse}>
              <RotateCcw size={16} /> Clear current house
            </button>
          </section>

          <section>
            <div className="section-title">Quick Action</div>
            <div className="action-grid">
              {actions.map((status) => {
                const config = actionConfig[status];

                return (
                  <button key={status} className={`action-card ${config.className}`} type="button" onClick={() => record(status)}>
                    <span>{config.icon}</span>
                    <strong>{status}</strong>
                    <small>{config.hint}</small>
                  </button>
                );
              })}
            </div>
          </section>

          <ProgressPanel
            today={today.length}
            dailyGoal={dailyGoal}
            todayCloseRate={todayCloseRate}
            goalPercent={goalPercent}
            totalSales={totalSales}
            callbacks={callbacks.length}
            interested={interested}
            commission={commission}
          />

          <RoutePreview street={street} knocks={currentStreetKnocks} setTab={setTab} />
        </section>
      )}

      {tab === "route" && (
        <section className="screen">
          <PageHeader icon={<MapPinned />} title="Route" subtitle="Manual list only. No generated houses." />

          <section className="panel entry-panel compact">
            <div className="section-label">CURRENT STREET FILTER</div>
            <input value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street name" />
          </section>

          <div className="list-stack">
            {currentStreetKnocks.length === 0 ? (
              <Empty text="No houses entered for this street yet. Go to Knock and save your first house." />
            ) : (
              currentStreetKnocks.map((knock) => <KnockCard key={knock.id} knock={knock} onDelete={() => deleteKnock(knock.id)} />)
            )}
          </div>
        </section>
      )}

      {tab === "calls" && (
        <section className="screen">
          <PageHeader icon={<PhoneCall />} title="Calls" subtitle="Callback pipeline, pulled from your quick actions." />

          <div className="list-stack">
            {callbacks.length === 0 ? (
              <Empty text="No callbacks yet. On the Knock screen, enter the house and tap Callback." />
            ) : (
              callbacks.map((knock) => <CallbackCard key={knock.id} knock={knock} onDelete={() => deleteKnock(knock.id)} />)
            )}
          </div>
        </section>
      )}

      {tab === "sales" && (
        <section className="screen">
          <PageHeader
            icon={<BadgeDollarSign />}
            title="Sales"
            subtitle={`Revenue $${Math.round(revenue).toLocaleString()} · Commission $${Math.round(commission).toLocaleString()}`}
          />

          <div className="list-stack">
            {sales.length === 0 ? (
              <Empty text="No sales yet. On the Knock screen, enter sale amount and tap Sold." />
            ) : (
              sales.map((sale) => (
                <article key={sale.id} className="panel sale-card">
                  <h3>{sale.address}</h3>

                  <div className="sale-grid">
                    <label>
                      Service
                      <input value={sale.service} onChange={(e) => updateSale(sale.id, "service", e.target.value)} />
                    </label>

                    <label>
                      Total price
                      <input
                        value={sale.price || ""}
                        onChange={(e) => updateSale(sale.id, "price", e.target.value)}
                        inputMode="decimal"
                        placeholder="0"
                      />
                    </label>

                    <label>
                      Deposit
                      <input
                        value={sale.deposit || ""}
                        onChange={(e) => updateSale(sale.id, "deposit", e.target.value)}
                        inputMode="decimal"
                        placeholder="0"
                      />
                    </label>

                    <label>
                      Commission %
                      <input
                        value={sale.commissionRate || ""}
                        onChange={(e) => updateSale(sale.id, "commissionRate", e.target.value)}
                        inputMode="decimal"
                        placeholder="25"
                      />
                    </label>
                  </div>

                  <div className="sale-total">
                    Commission: ${Math.round(((sale.price || 0) * (sale.commissionRate || 0)) / 100).toLocaleString()}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      )}

      {tab === "history" && (
        <section className="screen">
          <PageHeader icon={<History />} title="History" subtitle="All knocks, including callbacks and sales, saved in order." />

          <section className="panel mini-dashboard">
            <Mini label="All Doors" value={knocks.length} />
            <Mini label="Callbacks" value={callbacks.length} orange />
            <Mini label="Close %" value={`${closeRate}%`} green />
          </section>

          <button className="danger-btn" type="button" onClick={resetToday}>
            Clear today only
          </button>

          <div className="list-stack">
            {knocks.length === 0 ? (
              <Empty text="Your full door history will show here." />
            ) : (
              knocks.map((knock) => <HistoryCard key={knock.id} knock={knock} onDelete={() => deleteKnock(knock.id)} />)
            )}
          </div>
        </section>
      )}

      <nav className="bottom-nav">
        <TabButton tab={tab} setTab={setTab} id="knock" label="Knock" icon={<Home />} />
        <TabButton tab={tab} setTab={setTab} id="route" label="Route" icon={<MapPinned />} />
        <button className="center-action" type="button" onClick={() => setTab("knock")} aria-label="Knock entry">
          <DoorOpen size={30} />
        </button>
        <TabButton tab={tab} setTab={setTab} id="calls" label="Calls" icon={<PhoneCall />} />
        <TabButton tab={tab} setTab={setTab} id="history" label="History" icon={<ClipboardList />} />
      </nav>
    </main>
  );
}

function ProgressPanel({
  today,
  dailyGoal,
  todayCloseRate,
  goalPercent,
  totalSales,
  callbacks,
  interested,
  commission,
}: {
  today: number;
  dailyGoal: number;
  todayCloseRate: number;
  goalPercent: number;
  totalSales: number;
  callbacks: number;
  interested: number;
  commission: number;
}) {
  return (
    <section className="panel progress-panel">
      <div className="section-label purple">TODAY&apos;S PROGRESS</div>

      <div className="progress-top">
        <div>
          <p>DOORS KNOCKED</p>
          <strong>{today}</strong>
          <small>Goal: {dailyGoal}</small>
        </div>

        <div>
          <p>CLOSE RATE</p>
          <strong className="green-text">{todayCloseRate}%</strong>
          <small>today&apos;s rate</small>
        </div>

        <div className="ring" style={{ background: `conic-gradient(#7367ff ${goalPercent * 3.6}deg, rgba(255,255,255,.09) 0deg)` }}>
          <div>
            <strong>{goalPercent}%</strong>
            <span>of goal</span>
          </div>
        </div>
      </div>

      <div className="mini-row">
        <Mini label="Sales" value={totalSales} green />
        <Mini label="Commission" value={`$${Math.round(commission)}`} purple />
        <Mini label="Callbacks" value={callbacks} orange />
        <Mini label="Interested" value={interested} blue />
      </div>
    </section>
  );
}

function RoutePreview({ street, knocks, setTab }: { street: string; knocks: Knock[]; setTab: (tab: Tab) => void }) {
  return (
    <button className="panel route-preview" type="button" onClick={() => setTab("route")}>
      <div className="map-card">
        <MapPinned size={34} />
      </div>

      <div>
        <div className="section-label purple">CURRENT ROUTE</div>
        <h2>{street.trim() || "Enter Street"}</h2>
        <p>{knocks.length} manually entered houses</p>
        <div className="bar">
          <span style={{ width: `${Math.min(100, knocks.length * 8)}%` }} />
        </div>
      </div>

      <span className="chev">›</span>
    </button>
  );
}

function TabButton({
  tab,
  setTab,
  id,
  label,
  icon,
}: {
  tab: Tab;
  setTab: (tab: Tab) => void;
  id: Tab;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button type="button" className={tab === id ? "nav-tab active" : "nav-tab"} onClick={() => setTab(id)}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PageHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <section className="panel page-header">
      <div className="title-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

function KnockCard({ knock, onDelete }: { knock: Knock; onDelete: () => void }) {
  return (
    <article className="panel knock-card">
      <div className="card-row">
        <div>
          <h3>{knock.house}</h3>
          <p>{knock.street}</p>
        </div>

        <span className={`pill ${slug(knock.status)}`}>{knock.status}</span>
      </div>

      {knock.saleAmount ? <div className="note-box">Sale Amount: ${knock.saleAmount.toLocaleString()}</div> : null}
      {knock.note && <div className="note-box">{knock.note}</div>}

      <div className="card-footer">
        <small>{new Date(knock.createdAt).toLocaleString()}</small>
        <button onClick={onDelete}>
          <Trash2 size={15} /> Delete
        </button>
      </div>
    </article>
  );
}

function CallbackCard({ knock, onDelete }: { knock: Knock; onDelete: () => void }) {
  return (
    <article className="panel callback-card">
      <div className="time-box">
        <strong>{knock.callbackTime || "Call"}</strong>
      </div>

      <div className="grow">
        <h3>
          {knock.house} {knock.street}
        </h3>
        <p>{knock.note || "Callback lead"}</p>
        {knock.phone && <a href={`tel:${knock.phone}`}>{knock.phone}</a>}
      </div>

      <button className="call-now" type="button" onClick={() => (knock.phone ? (window.location.href = `tel:${knock.phone}`) : undefined)}>
        <PhoneCall size={22} />
      </button>

      <button className="tiny-delete" onClick={onDelete}>
        <Trash2 size={15} />
      </button>
    </article>
  );
}

function HistoryCard({ knock, onDelete }: { knock: Knock; onDelete: () => void }) {
  const isCallback = knock.status === "Callback";
  const isSold = knock.status === "Sold";

  return (
    <article className={isCallback ? "panel history-card callback-highlight" : "panel history-card"}>
      <div className="card-row">
        <div>
          <h3>
            {knock.house} {knock.street}
          </h3>
          <p>{new Date(knock.createdAt).toLocaleString()}</p>
        </div>

        <span className={`pill ${slug(knock.status)}`}>{knock.status}</span>
      </div>

      {isSold && <div className="callback-strip">Sale Amount: ${Number(knock.saleAmount || 0).toLocaleString()}</div>}

      {isCallback && (
        <div className="callback-strip">
          <PhoneCall size={16} /> Callback: {knock.callbackTime || "time not set"}
        </div>
      )}

      {knock.note && <div className="note-box">{knock.note}</div>}

      <div className="card-footer">
        <span>{knock.phone || "No phone"}</span>
        <button onClick={onDelete}>
          <Trash2 size={15} /> Delete
        </button>
      </div>
    </article>
  );
}

function Mini({
  label,
  value,
  green,
  purple,
  orange,
  blue,
}: {
  label: string;
  value: string | number;
  green?: boolean;
  purple?: boolean;
  orange?: boolean;
  blue?: boolean;
}) {
  return (
    <div className="mini">
      <strong className={green ? "green-text" : purple ? "purple-text" : orange ? "orange-text" : blue ? "blue-text" : ""}>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <div className="panel empty">{text}</div>;
}

function slug(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}
