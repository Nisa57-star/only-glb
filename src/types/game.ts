export type TopicType = 'GLB' | 'JARAK_PERPINDAHAN';
export type CognitiveLevel = 'C1' | 'C2' | 'C3';

export type GraphKind =
  | 'vt-glb'           // Kecepatan tetap terhadap waktu (garis mendatar)
  | 'st-glb'           // Jarak bertambah teratur terhadap waktu (garis miring lurus naik)
  | 'st-compare'       // Perbandingan grafik s-t dua mobil (Mobil A vs Mobil B)
  | 'st-calc-speed'    // Grafik s-t dengan nilai angka untuk menghitung kelajuan v = s/t
  | 'at-glb'           // Percepatan nol (a = 0 pada GLB)
  | 'vt-calc-distance' // Grafik v-t GLB dengan angka tertentu untuk menghitung jarak s = v * t
  | 'ticker-glb'       // Pola pita ticker timer dengan jarak ketukan sama/konstan (GLB)
  | 'oil-glb'          // Pola tetesan oli mobil dengan jarak tetesan konstan/seragam (GLB)
  | 'disp-1d'          // Diagram lintasan 1D garis lurus bolak-balik (Jarak vs Perpindahan)
  | 'disp-2d';         // Diagram lintasan 2D siku-siku / kompas (Pythagoras perpindahan)

export interface GraphDefinition {
  kind: GraphKind;
  title?: string;
  yAxisLabel?: string; // e.g. "v (m/s)" or "s (m)" or "a (m/s²)"
  xAxisLabel?: string; // e.g. "t (s)"
  values?: {
    v0?: number;
    vt?: number;
    t?: number;
    s?: number;
    a?: number;
    d1?: number; // e.g. jarak ruas 1
    d2?: number; // e.g. jarak ruas 2
    pointA?: string;
    pointB?: string;
    pointC?: string;
  };
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  text: string;
  topic: TopicType;
  cognitiveLevel: CognitiveLevel;
  graph?: GraphDefinition;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
}

export interface PlayerColorTheme {
  name: string;
  primary: string;       // Tailwind class
  accentHex: string;     // Hex color for SVG/glow
  lightHex: string;
  glowHex: string;
  borderClass: string;
  bgBadgeClass: string;
  buttonClass: string;
}

export interface PlayerState {
  id: number;
  name: string;
  colorTheme: PlayerColorTheme;
  score: number;
  correctCount: number;
  wrongCount: number;
  progress: number; // 0 to 100
  isFinished: boolean;
  finishRank?: number;
  questionIndex: number;
  currentQuestion: Question;
  usedQuestionIds: string[];
  feedback: 'idle' | 'correct' | 'wrong' | 'round-over';
  isMoving: boolean;
  streak: number;
  disabledKeys?: ('A' | 'B' | 'C' | 'D')[];
}

export interface GameSettings {
  playerCount: 2 | 3 | 4 | 5;
  targetQuestions: number; // 5, 7, 10
  materialMode: 'all' | 'glb' | 'jarak_perpindahan';
  soundEnabled: boolean;
}
