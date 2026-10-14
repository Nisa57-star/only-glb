import React from 'react';
import { GraphDefinition } from '../types/game';

interface GraphViewerProps {
  graph: GraphDefinition;
}

export const GraphViewer: React.FC<GraphViewerProps> = ({ graph }) => {
  const { kind, title, yAxisLabel, xAxisLabel, values } = graph;

  return (
    <div className="bg-slate-950/85 border border-slate-700/60 rounded-xl p-2.5 flex flex-col items-center justify-center my-2 shadow-inner w-full max-w-sm mx-auto">
      {title && (
        <div className="text-[11px] font-bold text-slate-300 mb-1.5 tracking-wide uppercase text-center flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>{title}</span>
        </div>
      )}

      {/* 1. TICKER TIMER GLB (Titik-titik berjarak konstan) */}
      {kind === 'ticker-glb' && (
        <div className="w-full flex flex-col items-center py-2 px-3">
          <div className="text-[10px] text-slate-400 mb-1 font-mono flex items-center justify-between w-full">
            <span>Arah Tarik Pita ⬅️</span>
            <span className="text-cyan-400 font-bold">Pita Ticker Timer</span>
          </div>
          <svg viewBox="0 0 260 46" className="w-full h-11 bg-slate-900 rounded-lg border border-slate-700">
            {/* Paper tape background */}
            <rect x="5" y="6" width="250" height="34" rx="4" fill="#f8fafc" />
            {/* Guide line */}
            <line x1="15" y1="23" x2="245" y2="23" stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="1" />
            {/* Equidistant dots (GLB: kecepatan tetap, jarak antar titik sama) */}
            {[25, 55, 85, 115, 145, 175, 205, 235].map((x, idx) => (
              <g key={idx}>
                <circle cx={x} cy="23" r="3.5" fill="#0f172a" />
                {idx < 7 && (
                  <text x={x + 15} y="16" fill="#64748b" fontSize="8" fontWeight="bold" textAnchor="middle">
                    Δs
                  </text>
                )}
              </g>
            ))}
          </svg>
          <div className="text-[9.5px] text-emerald-400 font-bold mt-1 tracking-wide">
            Jarak antar titik selalu sama (Δs tetap) → Kecepatan Tetap (GLB)
          </div>
        </div>
      )}

      {/* 2. TETESAN OLI MOBIL GLB (Jarak tetesan sama di jalan) */}
      {kind === 'oil-glb' && (
        <div className="w-full flex flex-col items-center py-2 px-3">
          <div className="text-[10px] text-slate-400 mb-1 font-mono flex items-center justify-between w-full">
            <span className="text-amber-400 font-bold">Jejak Tetesan Oli di Jalan</span>
            <span>Arah Mobil ➡️</span>
          </div>
          <svg viewBox="0 0 260 48" className="w-full h-12 bg-slate-900 rounded-lg border border-slate-700">
            {/* Road */}
            <rect x="5" y="8" width="250" height="32" rx="4" fill="#1e293b" />
            <line x1="8" y1="24" x2="252" y2="24" stroke="#475569" strokeDasharray="6 6" strokeWidth="1.5" />
            {/* Equidistant oil drops */}
            {[25, 60, 95, 130, 165, 200, 235].map((x, idx) => (
              <g key={idx}>
                <circle cx={x} cy="24" r="4" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
                <circle cx={x - 1} cy="22" r="1.2" fill="#fef3c7" />
              </g>
            ))}
          </svg>
          <div className="text-[9.5px] text-amber-300 font-bold mt-1 tracking-wide">
            Jarak tetesan oli seragam → Mobil melaju dengan kelajuan konstan (GLB)
          </div>
        </div>
      )}

      {/* 3. DIAGRAM LINTASAN 1D (Jarak vs Perpindahan garis lurus bolak-balik) */}
      {kind === 'disp-1d' && (
        <div className="w-full flex flex-col items-center py-2 px-3">
          <svg viewBox="0 0 260 85" className="w-full h-20 bg-slate-900 rounded-lg border border-slate-700">
            {/* Number line */}
            <line x1="20" y1="52" x2="240" y2="52" stroke="#64748b" strokeWidth="2" />
            <polygon points="244,52 236,48 236,56" fill="#64748b" />

            {/* Points A, C, B */}
            {/* Point A (Start) */}
            <circle cx="35" cy="52" r="4" fill="#38bdf8" />
            <text x="35" y="68" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
              {values?.pointA ?? 'A (0 m)'}
            </text>

            {/* Point C (Turn point or Final) */}
            <circle cx="120" cy="52" r="4" fill="#f59e0b" />
            <text x="120" y="68" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
              {values?.pointC ?? 'C (40 m)'}
            </text>

            {/* Point B (Farthest point) */}
            <circle cx="215" cy="52" r="4" fill="#34d399" />
            <text x="215" y="68" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
              {values?.pointB ?? 'B (100 m)'}
            </text>

            {/* Path 1: A -> B */}
            <path d="M 35,42 Q 125,20 215,42" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
            <polygon points="215,42 205,38 209,46" fill="#38bdf8" />
            <text x="125" y="18" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
              Maju ke B ({values?.d1 ?? 100} m)
            </text>

            {/* Path 2: B -> C */}
            <path d="M 215,44 Q 167,32 120,44" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="120,44 130,40 126,48" fill="#f43f5e" />
            <text x="167" y="32" fill="#f43f5e" fontSize="8.5" fontWeight="bold" textAnchor="middle">
              Balik ke C ({values?.d2 ?? 60} m)
            </text>
          </svg>
          <div className="text-[9.5px] text-slate-300 font-bold mt-1 text-center">
            Posisi Awal di A, Akhir di C. Perhatikan perbedaan jarak total & perpindahan!
          </div>
        </div>
      )}

      {/* 4. DIAGRAM VEKTOR SIKU-SIKU 2D (Pythagoras Perpindahan) */}
      {kind === 'disp-2d' && (
        <div className="w-full flex flex-col items-center py-1.5 px-3">
          <svg viewBox="0 0 260 100" className="w-full h-24 bg-slate-900 rounded-lg border border-slate-700">
            {/* Compass small */}
            <g transform="translate(230, 25)">
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#475569" strokeWidth="1.5" />
              <line x1="-12" y1="0" x2="12" y2="0" stroke="#475569" strokeWidth="1.5" />
              <text x="0" y="-14" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">U</text>
              <text x="16" y="3" fill="#64748b" fontSize="7" fontWeight="bold">T</text>
            </g>

            {/* Path 1: Eastward line (horizontal) */}
            <line x1="50" y1="75" x2="160" y2="75" stroke="#38bdf8" strokeWidth="3" />
            <polygon points="160,75 152,71 152,79" fill="#38bdf8" />
            <text x="105" y="90" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Timur: {values?.d1 ?? 40} m
            </text>

            {/* Path 2: Northward line (vertical) */}
            <line x1="160" y1="75" x2="160" y2="20" stroke="#34d399" strokeWidth="3" />
            <polygon points="160,20 156,28 164,28" fill="#34d399" />
            <text x="195" y="50" fill="#34d399" fontSize="9.5" fontWeight="bold" textAnchor="middle">
              Utara: {values?.d2 ?? 30} m
            </text>

            {/* Right angle marker */}
            <rect x="148" y="63" width="12" height="12" fill="none" stroke="#64748b" strokeWidth="1.2" />

            {/* Displacement vector (Hypotenuse) */}
            <line x1="50" y1="75" x2="160" y2="20" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="160,20 148,22 153,29" fill="#f59e0b" />
            <text x="95" y="42" fill="#f59e0b" fontSize="9.5" fontWeight="extrabold" textAnchor="middle">
              Perpindahan (?)
            </text>

            {/* Start and end points */}
            <circle cx="50" cy="75" r="4" fill="#38bdf8" />
            <text x="35" y="78" fill="#94a3b8" fontSize="9" fontWeight="bold">Awal</text>
            <circle cx="160" cy="20" r="4" fill="#f59e0b" />
            <text x="160" y="12" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Akhir</text>
          </svg>
          <div className="text-[9.5px] text-amber-400 font-bold mt-1 text-center">
            Jarak = Lintasan Total | Perpindahan = Garis Lurus Awal ke Akhir
          </div>
        </div>
      )}

      {/* 5. GRAFIK STANDAR BERBASIS SUMBU (vt-glb, st-glb, st-compare, st-calc-speed, at-glb, vt-calc-distance) */}
      {(kind === 'vt-glb' ||
        kind === 'st-glb' ||
        kind === 'st-compare' ||
        kind === 'st-calc-speed' ||
        kind === 'at-glb' ||
        kind === 'vt-calc-distance') && (
        <svg
          viewBox="0 0 260 135"
          className="w-full max-w-[270px] h-[115px] select-none overflow-visible"
        >
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <rect x="40" y="15" width="200" height="95" fill="url(#grid)" />

          {/* Origin 'O' */}
          <text x="32" y="116" fill="#94a3b8" fontSize="10" fontWeight="bold">0</text>

          {/* Y Axis */}
          <line x1="40" y1="110" x2="40" y2="15" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="40,10 36,18 44,18" fill="#94a3b8" />
          <text
            x="35"
            y="12"
            fill="#38bdf8"
            fontSize="10.5"
            fontWeight="bold"
            textAnchor="end"
          >
            {yAxisLabel ?? 'v (m/s)'}
          </text>

          {/* X Axis */}
          <line x1="40" y1="110" x2="245" y2="110" stroke="#94a3b8" strokeWidth="2" />
          <polygon points="250,110 242,106 242,114" fill="#94a3b8" />
          <text
            x="248"
            y="125"
            fill="#38bdf8"
            fontSize="10.5"
            fontWeight="bold"
            textAnchor="end"
          >
            {xAxisLabel ?? 't (s)'}
          </text>

          {/* 5.1 v-t GLB (Kecepatan tetap - garis mendatar) */}
          {kind === 'vt-glb' && (
            <g>
              <line x1="40" y1="55" x2="225" y2="55" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="37" y1="55" x2="40" y2="55" stroke="#38bdf8" strokeWidth="2" />
              <text x="32" y="59" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="end">
                {values?.vt ?? 'v'}
              </text>
              <circle cx="40" cy="55" r="3" fill="#38bdf8" />
              <circle cx="225" cy="55" r="3" fill="#38bdf8" />
              <rect x="85" y="32" width="105" height="18" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <text x="137" y="44" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                v = konstan (GLB)
              </text>
            </g>
          )}

          {/* 5.2 s-t GLB (Garis lurus miring naik) */}
          {kind === 'st-glb' && (
            <g>
              <line x1="40" y1="110" x2="220" y2="25" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="220" y1="25" x2="220" y2="110" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="25" x2="220" y2="25" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <text x="32" y="29" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="end">
                {values?.s ?? 's'}
              </text>
              <text x="220" y="123" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
                {values?.t ?? 't'}
              </text>
              <circle cx="40" cy="110" r="3" fill="#34d399" />
              <circle cx="220" cy="25" r="3" fill="#34d399" />
              <text x="115" y="60" fill="#34d399" fontSize="9.5" fontWeight="bold">
                Jarak bertambah teratur
              </text>
            </g>
          )}

          {/* 5.3 s-t Compare (Mobil A vs Mobil B) */}
          {kind === 'st-compare' && (
            <g>
              {/* Car A (Steeper slope) */}
              <line x1="40" y1="110" x2="160" y2="25" stroke="#06b6d4" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="160" cy="25" r="3" fill="#06b6d4" />
              <text x="168" y="28" fill="#06b6d4" fontSize="10.5" fontWeight="bold">Mobil A</text>

              {/* Car B (Gentler slope) */}
              <line x1="40" y1="110" x2="220" y2="58" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="220" cy="58" r="3" fill="#f59e0b" />
              <text x="228" y="61" fill="#f59e0b" fontSize="10.5" fontWeight="bold">Mobil B</text>

              <rect x="70" y="16" width="85" height="18" rx="4" fill="#0f172a" stroke="#06b6d4" strokeWidth="0.8" />
              <text x="112" y="28" fill="#06b6d4" fontSize="9" fontWeight="bold" textAnchor="middle">
                Kemiringan = Kelajuan
              </text>
            </g>
          )}

          {/* 5.4 s-t Hitung Kelajuan (v = s / t) */}
          {kind === 'st-calc-speed' && (
            <g>
              <line x1="40" y1="110" x2="210" y2="35" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="210" y1="35" x2="210" y2="110" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="40" y1="35" x2="210" y2="35" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <text x="32" y="39" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="end">
                {values?.s ?? 60}
              </text>
              <text x="210" y="125" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                {values?.t ?? 5}
              </text>
              <circle cx="40" cy="110" r="3" fill="#34d399" />
              <circle cx="210" cy="35" r="3" fill="#34d399" />
              <text x="100" y="68" fill="#34d399" fontSize="10.5" fontWeight="bold">
                v = s / t
              </text>
            </g>
          )}

          {/* 5.5 a-t GLB (a = 0) */}
          {kind === 'at-glb' && (
            <g>
              <line x1="40" y1="110" x2="225" y2="110" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="40" cy="110" r="4" fill="#38bdf8" />
              <circle cx="225" cy="110" r="4" fill="#38bdf8" />
              <rect x="75" y="60" width="125" height="22" rx="5" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
              <text x="137" y="74" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                a = 0 (Percepatan Nol pada GLB)
              </text>
            </g>
          )}

          {/* 5.6 v-t Hitung Jarak (Luas Daerah s = v * t) */}
          {kind === 'vt-calc-distance' && (
            <g>
              <polygon
                points="40,110 40,55 200,55 200,110"
                fill="url(#areaGrad)"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              <line x1="40" y1="55" x2="200" y2="55" stroke="#38bdf8" strokeWidth="3.5" />
              <line x1="36" y1="55" x2="40" y2="55" stroke="#38bdf8" strokeWidth="2" />
              <text x="32" y="59" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="end">
                {values?.vt ?? 12}
              </text>
              <line x1="200" y1="110" x2="200" y2="115" stroke="#38bdf8" strokeWidth="2" />
              <text x="200" y="125" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">
                {values?.t ?? 5}
              </text>
              <text x="120" y="85" fill="#38bdf8" fontSize="11" fontWeight="extrabold" textAnchor="middle">
                Luas = Jarak (s)
              </text>
            </g>
          )}
        </svg>
      )}
    </div>
  );
};
