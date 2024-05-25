const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avater");
const username = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Chotta Bheem",
    position: "@2008",
    photo: "./assets/images/bheem.png",
    text: "The series is set in a village in the kingdom of Dholakpur. The series revolves around Bheem, sometimes referred to as Chhota Bheem due to his young age, a boy who is strong and intelligent.Bheem is a well-loved figure in the village, known for his good heart and helping hand. His closest friends are Chutki, a clever girl; Raju, a brave toddler wearing nothing but his underpants; and a talking monkey called Jaggu.The show revolves around Bheem and his team using their skills to solve various problems affecting the village, unravel mysteries, fight evil villains that seek to harm Dholakpur and/or its inhabitants, or foil the plans of their rivals Kalia, Dholu, and Bholu, who aim to embarrass Bheem. Their antics also sometimes get them into trouble.",
  },
  {
    name: "Shinchan",
    position: "@1990",
    photo: "./assets/images/shinchan.png",
    text: "Set in the city of Kasukabe of Saitama Prefecture within the Greater Tokyo Area of Japan, the series follows the adventures of the five-year-old Shinnosuke (shin) Nohara and his parents, baby sister, dog, neighbours, and best friends. Most of the plot is about Shin-chan's daily life, but it is also often interspersed with a lot of fantastic and incredible elements.",
  },
  {
    name: "Motu Patlu",
    position: "@2012",
    photo: "./assets/images/motu.png",
    text: "The series is set in a fictional town of Furfuri Nagar of India.It is a peaceful yet glamorous small town, simultaneously noble and squalid, adjoined by a river with a few shops, a large market area, a bus depot, a cluster of single-storeyed houses, temples, and a few recreational places. The town has three or more banks, three or more jewellery shops, Furfuri Nagar Police Station, Chingum's house, Boxer's house, Motu Patlu's house, Chaiwala's stall and house, Furfuri Nagar Central Jail, Furfuri Nagar Bus Stand, John's den, Dr. Jhatka's laboratory and house and Ghasitaram's house. There are a few villages and a few neighbouring cities around, such as Kamalpur, Sursuri Nagar and Modern City. Despite being a small town it has its own airport.",
  },
  {
    name: "Mr. Bean",
    position: "@1990",
    photo: "./assets/images/mr_bean.png",
    text: "Based on a character developed by Atkinson while he was studying for his master's degree at the University of Oxford, the series centres on Mr. Bean, described by Atkinson as (a child in a grown man's body) as he solves various problems presented by everyday tasks and often causes disruption in the process.The series has been influenced by physical comedy actors such as Jacques Tati and those from early silent films.",
  },
  {
    name: "BEN10",
    position: "@2010",
    photo: "./assets/images/ben10.png",
    text: "Ben 10: Ultimate Challenge is a game show developed for television by United Kingdom-based company Twenty Twenty, which airs on Cartoon Network in the United Kingdom, Spain, France, Italy, Netherlands, Bulgaria, the Nordic region, Hungary, Poland, Germany, Russia, Turkey, Chile, United States and the Middle East. Ultimate Challenge is a trivia show that tasks children with answering questions about all three series.Ultimate Challenge is produced by Mandy Morris and executive produced by Daniel Marlowe.",
  },
  {
    name: "Pokemon",
    position: "@2016",
    photo: "./assets/images/pokemon.png",
    text: "The player character takes the role of a Pokémon Trainer. The Trainer has three primary goals: travel and explore the Pokémon world; discover and catch each Pokémon species in order to complete their Pokédex; and train a team of up to six Pokémon at a time and have them engage in battles. Most Pokémon can be caught with spherical devices known as Poké Balls. Once the opposing Pokémon is sufficiently weakened, the Trainer throws the Poké Ball against the Pokémon, which is then transformed into a form of energy and transported into the device. Once the catch is successful, the Pokémon is tamed and is under the Trainer's command from then on. If the Poké Ball is thrown again, the Pokémon re-materializes into its original state.",
  },
  {
    name: "Titoo",
    position: "@2020",
    photo: "./assets/images/logo7.png",
    text: "Titoo is an animated kids' comedy show that follows the daily escapades of eight-year-old boy Titoo. Though, he is a good-hearted, intelligent kid who loves to help everyone, but inadvertently manages to brew even more trouble.",
  },
  {
    name: "Tom & Jerry",
    position: "@2014",
    photo: "./assets/images/logo1.png",
    text: "The series features comic fights between an iconic set of adversaries, a house cat (Tom) and a house mouse (Jerry). The plots of many shorts are often set in the backdrop of a house, centering on Tom (who is often enlisted by a human) trying to capture Jerry, and the mayhem and destruction that follows. Tom rarely succeeds in catching Jerry, mainly because of Jerry's cleverness, cunning abilities, and luck.",
  },
  {
    name: "Angry Birds",
    position: "@2016",
    photo: "./assets/images/angry.png",
    text: "Angry Birds is a Finnish action, puzzle, and strategy based media franchise created by Rovio Entertainment, and owned by Sega. The game series focuses on the titular flock of colorful angry birds who try to save their eggs from green-colored pigs. Inspired by the game Crush the Castle,the game has been praised for its successful combination of fun gameplay, comical style, and low price. ",
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
