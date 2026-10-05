"use client";

import { createContext, useContext, useEffect, useState } from "react";
import players from "../Data/player.json";

export type Player = (typeof players)[number];

type TeamContextType = {
  coins: number;
  selected: Player[];
  addCredit: () => void;
  choosePlayer: (player: Player) => void;
  removePlayer: (player: Player) => void;
};

const TeamContext = createContext<TeamContextType | null>(null);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [coins, setCoins] = useState(0);
  const [selected, setSelected] = useState<Player[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem("bpl-team");
        if (saved) {
          const data = JSON.parse(saved);
          setCoins(data.coins ?? 0);
          setSelected(data.selected ?? []);
        }
      } catch {}
      setLoaded(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("bpl-team", JSON.stringify({ coins, selected }));
    }
  }, [coins, selected, loaded]);

  function addCredit() {
    setCoins(coins + 2000);
  }

  function choosePlayer(player: Player) {
    if (selected.length >= 11) {
      alert("You can only select 11 players!");
      return;
    }
    if (coins < player.price) {
      alert("Not enough coins! Claim free credit first.");
      return;
    }
    setCoins(coins - player.price);
    setSelected([...selected, player]);
  }

  function removePlayer(player: Player) {
    setCoins(coins + player.price);
    setSelected(selected.filter((p) => p.id !== player.id));
  }

  return (
    <TeamContext.Provider
      value={{ coins, selected, addCredit, choosePlayer, removePlayer }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const ctx = useContext(TeamContext);
  if (!ctx) throw new Error("useTeam must be used inside TeamProvider");
  return ctx;
}
