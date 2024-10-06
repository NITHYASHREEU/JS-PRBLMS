let cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat sandwich"],
      weight: 8,
      furcolor: "white"
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3
    },
  ]
};
cat.name = "Fluffyy";
cat.height = 30;
cat.weight = 5;

console.log(cat);
let activities = [];
cat.catFriends.forEach(friend => {
  activities = activities.concat(friend.activities);
});
console.log(activities);
cat.catFriends.forEach(friend => {
  console.log(friend.name);
});
let totalWeight = cat.catFriends.reduce((total, friend) => total+friend.weight,0);
console.log(totalWeight);
let allActivities = cat.activities.slice();
cat.catFriends.forEach(friend => {
  allActivities = allActivities.concat(friend.activities);
});
console.log(allActivities.length);
cat.catFriends.forEach(friend => {
  if (friend.name === "bar"){
    friend.activities.push("climb trees", "chase laser");
  } else if (friend.name === "foo"){
    friend.activities.push("hunt mice", "play with yarn");
  }
});
console.log(cat.catFriends);
cat.catFriends.forEach(friend => {
   if (friend.name === "bar") {
    friend.furcolor = "gray"
   }
});
 console.log(cat.catFriends);
