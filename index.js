function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
  return "This one is on me!"
} else if (distance > 2000 && distance < 2500) {
  return "I will gladly take your thirty bucks."
} else {
  return "No can do."
}
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
  case "generous":
    return "Thank you so much.";
  case "not as generous":
    return "Thank you.";
  default:
    return "Bye.";
  }
}

  //generous - Thank you so much.
  //not as generous - Thank you.
  //anything else - Bye.
<<<<<<< HEAD
=======

>>>>>>> 807df7e0093eda1c9b640ad17e9a0eed3f580c6d
