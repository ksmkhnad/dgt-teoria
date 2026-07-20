"use client";

import { useEffect, useState } from "react";
import { loadProfile, onProfileChanged, type Profile } from "./profile";

export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
    setReady(true);
    return onProfileChanged(() => setProfile(loadProfile()));
  }, []);

  return { profile, ready };
}
