export interface LevelProps {
  name: string;
  time: number;
  score: number;
}

const LEVELS_OPTIONS: LevelProps[] = [
  { name: "low", time: 10, score: 10 },
  { name: "mid", time: 5, score: 20 },
  { name: "high", time: 2, score: 30 },
];

export { LEVELS_OPTIONS };
