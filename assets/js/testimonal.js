const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avater");
const username = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Asians Creed Valhalla",
    position: "@2020",
    photo: "./assets/images/game4.png",
    text: "Asians Creed Valhalla set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles. Players control Eivor Varinsdottir, a Viking raider who, while attempting to establish a new Viking clan in England, becomes embroiled in the centuries-old conflict between the Assassin Brotherhood, who fight for peace and liberty, and the Templar Order, who desire peace through control.[c] The game also includes a framing story, set in the 21st century, which follows Layla Hassan, an Assassin who relives Eivor's memories so as to find a way to save the Earth from destruction.Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey.",
  },
  {
    name: "Grand Theft Auto",
    position: "@1997",
    photo: "./assets/images/game1.png",
    text: "Grand Theft Auto (GTA) focuses on an open world where the player can complete missions to progress an overall story, as well as engage in various side activities. Most of the gameplay revolves around driving and shooting, with occasional role-playing and stealth elements. The series also has elements of the earlier beat 'em up games from the 16-bit era. The games in the Grand Theft Auto series are set in fictional locales modelled after real-life cities, at various points in time from the early 1960s to the 2010s. Grand Theft Auto (GTA) is an action-adventure video game series created by David Jones and Mike Dailly.",
  },
  {
    name: "Spider Man",
    position: "@2020",
    photo: "./assets/images/spder.png",
    text: "Spider-Man is presented from the third-person perspective with a primary focus on Miles' traversal and combat abilities. Miles can freely move around New York City, interacting with characters, undertaking missions, and unlocking new gadgets and suits by progressing through the main story or completing tasks. Outside the story, the player is able to complete side missions to unlock additional content and collectible items. Combat focuses on chaining attacks together and using the environment, webs, and Venom attacks to incapacitate numerous foes while avoiding damage.Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. ",
  },
  {
    name: "God Of War",
    position: "@2005",
    photo: "./assets/images/game5.png",
    text: "God of War is an action-adventure game franchise created by David Jaffe and developed by Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 (PS2) video game console and has become a flagship series for PlayStation, consisting of nine installments across multiple platforms. Based on ancient mythologies, the series' plot follows Kratos, a Spartan warrior who becomes the God of War and comes into conflict with various mythological pantheons. The earlier games in the series are based on Greek mythology and see Kratos follow a path of vengeance against the Olympian gods; the later games are based on Norse mythology and see Kratos go on a path of redemption while also introducing his son Atreus as a secondary protagonist.",
  },
  {
    name: "Batman Arkham City",
    position: "@2011",
    photo: "./assets/images/game3.png",
    text: "Batman Arkham City is presented from the third-person perspective with a primary focus on Batman's combat and stealth abilities, detective skills, and gadgets that can be used in both combat and exploration. Batman can freely move around the Arkham City prison, interacting with characters and undertaking missions, and unlocking new areas by progressing through the main story or obtaining new equipment. The player is able to complete side missions away from the main story to unlock additional content and collectible items. Batman's ally Catwoman is another playable character, featuring her own story campaign that runs parallel to the game's main plot.Batman: Arkham City is a 2011 action-adventure game developed by Rocksteady Studios and published by Warner Bros.",
  },
  {
    name: "Battlegrounds Mobile",
    position: "@2021",
    photo: "./assets/images/game7.png",
    text: "Each round, the plane's flight path across the map changes, requiring players to quickly determine the best time to eject and parachute to the ground. Players begin with no equipment other than customised clothing options that have no effect on gameplay. Once on the ground, players can search buildings, ghost towns, and other locations for weapons, vehicles, armour, and other items. At the start of a match, these items are procedurally distributed throughout the map, with higher-risk zones typically having better equipment. Finished players can also be looted for their gear. Players can choose to play in first-person or third-person, with each having advantages and disadvantages in combat and situational awareness.Battlegrounds Mobile India (BGMI), previously known as PUBG Mobile India is a version of PUBG Mobile, exclusively available in India.It is an online multiplayer battle royale game by Krafton. The game was initially released on 2 July 2021 for Android devices, and on 18 August for iOS devices",
  },
  {
    name: "Call of Duty",
    position: "@2003",
    photo: "./assets/images/game8.png",
    text: "The Call of Duty series originally focused on a World War II setting, with Infinity Ward developing Call of Duty (2003) and Call of Duty 2 (2005) and Treyarch developing Call of Duty 3 (2006). Call of Duty 4: Modern Warfare (2007) introduced a modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series; a Modern Warfare remastered version released in 2016. Two other entries, Modern Warfare 2 (2009) and Modern Warfare 3 (2011), were made. The sub-series received a reboot with Modern Warfare in 2019, Modern Warfare II in 2022, and Modern Warfare III in 2023. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016).Call of Duty is a military video game series and media franchise published by Activision, starting in 2003. The games were first developed by Infinity Ward, then by Treyarch and Sledgehammer Games. ",
  },
  {
    name: "Free Fire",
    position: "@2017",
    photo: "./assets/images/free.png",
    text: "The game features two main game modes: Battle Royale and Clash Squad. In Battle Royale, 50 players are dropped onto an island and must fight to be the last one standing. Clash Squad is a team-based mode where two teams of 4 players fight each other in a best-of-5 match. Free Fire features a variety of weapons, items, and vehicles that players can use to survive. The game also has a system of playable characters with unique skills.Free Fire is a free-to-play battle royale game developed and published by Garena for Android and iOS. It was released on 8 December 2017.",
  },
  {
    name: "Shadow Fight Arena",
    position: "@2020",
    photo: "./assets/images/shadow.png",
    text: "In Shadow Fight Arena, you create a dream team of 3 fighters to defeat the opponent’s team. All heroes have unique upgradeable abilities that interact with each other and can be leveled up. Choose the right fighter to counteract the enemy’s tactic and win the battle! Control your hero like in classical fighting and get a console-level battle experience on your mobile device. Discover the famous Shadow Fight series of games that have been downloaded more than 500 million times.",
  },
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterHandle.innerHTML = position;

  counter++;

  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(showNextTestimonial, 10000);
