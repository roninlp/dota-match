export interface Chat {
  time: number;
  type: string;
  key: string;
  slot: number;
  player_slot: number;
}

export interface DraftTiming {
  order: number;
  pick: boolean;
  active_team: number;
  hero_id: number;
  player_slot: number | null;
  extra_time: number;
  total_time_taken: number;
}

export interface PickBan {
  is_pick: boolean;
  hero_id: number;
  team: number;
  order: number;
  ord: number;
  match_id: number;
}
export interface League {
  leagueid: number;
  ticket: string | null;
  banner: string | null;
  tier: string;
  name: string;
}

export interface Team {
  team_id: number;
  name: string;
  tag: string;
  logo_url: string;
}

export interface MatchResponse {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  chat: Chat[];
  cluster: number;
  cosmetics: any;
  dire_score: number;
  dire_team_id: number;
  draft_timings: DraftTiming[];
  duration: number;
  engine: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  leagueid: number;
  lobby_type: number;
  match_seq_num: number;
  negative_votes: number;
  objectives: any[];
  picks_bans: PickBan[];
  positive_votes: number;
  radiant_gold_adv: number[];
  radiant_score: number;
  radiant_team_id: number;
  radiant_win: boolean;
  radiant_xp_adv: number[];
  skill: number | null;
  start_time: number;
  teamfights: any[];
  tower_status_dire: number;
  tower_status_radiant: number;
  version: number;
  replay_salt: number;
  series_id: number;
  series_type: number;
  league: League;
  radiant_team: Team;
  dire_team: Team;
  players: any[];
  patch: number;
  region: number;
  all_word_counts: any;
  my_word_counts: any;
  comeback: number;
  stomp: number;
  replay_url: string;
}
