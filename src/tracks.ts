export interface Track {
  name: string;
  url: string;
}

export type DownloadFormat = 'vgm' | 'wav' | 'mml';

export interface SongFiles {
  name: string;
  ja: string;
  files: Record<DownloadFormat, { url: string; file: string; size: number }>;
}

const base = import.meta.env.BASE_URL;
const entry = (dir: string, file: string, size: number) => ({ url: `${base}${dir}/${encodeURIComponent(file)}`, file, size });

// name, Japanese title, then byte sizes; the WAV rips carry their own file names
const SONGS: { name: string; ja: string; vgm: number; wav: [string, number]; mml: number }[] = [
  { name: "01 Spare Track 1", ja: "予備曲・1", vgm: 171512, wav: ["01 - 予備曲・1 (Spare Track 1).wav", 20117830], mml: 26129 },
  { name: "02 Indoors", ja: "室内", vgm: 846434, wav: ["02 - 室内 (Indoors).wav", 82175510], mml: 62835 },
  { name: "03 H Scene B", ja: "Hシーン・B", vgm: 233766, wav: ["03 - Hシーン・B (H Scene B).wav", 32111872], mml: 50928 },
  { name: "04 Outdoors", ja: "屋外", vgm: 260368, wav: ["04 - 屋外 (Outdoors).wav", 25862454], mml: 91397 },
  { name: "05 Fun", ja: "楽しい", vgm: 204947, wav: ["05 - 楽しい (Fun).wav", 22814276], mml: 95512 },
  { name: "06 Church", ja: "教会", vgm: 179638, wav: ["06 - 教会 (Church).wav", 27704872], mml: 31856 },
  { name: "07 Sad", ja: "悲しい", vgm: 304199, wav: ["07 - 悲しい (Sad).wav", 46654188], mml: 29380 },
  { name: "08 Tavern", ja: "酒場", vgm: 302481, wav: ["08 - 酒場 (Tavern).wav", 27855488], mml: 96538 },
  { name: "09 Flustered", ja: "あわてる", vgm: 249856, wav: ["09 - あわてる (Flustered).wav", 19922430], mml: 73320 },
  { name: "10 H Scene A", ja: "Hシーン・A", vgm: 188972, wav: ["10 - Hシーン・A (H Scene A).wav", 33277734], mml: 31652 },
  { name: "11 Battle", ja: "戦闘", vgm: 1043923, wav: ["11 - 戦闘 (Battle).wav", 52273446], mml: 96030 },
  { name: "12 Untitled", ja: "BGM", vgm: 262803, wav: ["12 - BGM (無題) (BGM (Untitled)).wav", 32608504], mml: 88144 },
  { name: "13 Castle", ja: "城", vgm: 322885, wav: ["13 - 城 (Castle).wav", 31489848], mml: 18567 },
  { name: "14 Elf Village", ja: "エルフの里", vgm: 267091, wav: ["14 - エルフの里 (Elf Village).wav", 30962296], mml: 67685 },
  { name: "15 Ending", ja: "エンディング", vgm: 331631, wav: ["15 - エンディング (Ending).wav", 53575282], mml: 78233 },
];

export const songs: SongFiles[] = SONGS.map(({ name, ja, vgm, wav, mml }) => ({
  name,
  ja,
  files: {
    vgm: entry('music', `${name}.vgm`, vgm),
    wav: entry('wav', wav[0], wav[1]),
    mml: entry('mml', `${name}.mml`, mml),
  },
}));

export const tracks: Track[] = songs.map(({ name, files }) => ({ name, url: files.vgm.url }));
