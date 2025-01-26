export function displayHero(hero: {
  id: number;
  balance: number;
  fatigue: number;
  energy: number;
  owner: string;
}) {
  return `-------- 🦹‍♂️ ${hero.id} --------
balance ${hero.balance}
fatigue ${hero.fatigue}
energy ${hero.energy}
owner ${hero.owner.slice(0, 6)}...${hero.owner.slice(-6)}
----------------------`;
}
