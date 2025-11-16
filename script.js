// Room data
const rooms = [
  { name: "Room 1", description: "Description 1", image: "room1.jpg" },
  { name: "Room 2", description: "Description 2", image: "room2.jpg" },
  { name: "Room 3", description: "Description 3", image: "room3.jpg" },
  { name: "Room 4", description: "Description 4", image: "room4.jpg" },
  { name: "Room 5", description: "Description 5", image: "room5.jpg" },
  { name: "Room 6", description: "Description 6", image: "room6.jpg" },
  { name: "Room 7", description: "Description 7", image: "room7.jpg" },
  { name: "Room 8", description: "Description 8", image: "room8.jpg" },
  { name: "Room 9", description: "Description 9", image: "room9.jpg" },
  { name: "Room 10", description: "Description 10", image: "room10.jpg" },
  { name: "Room 11", description: "Description 11", image: "room11.jpg" },
];

// Generate room gallery dynamically
const roomGallery = document.querySelector(".room-gallery");

rooms.forEach((room) => {
  const roomHTML = `
    <div class="room">
      <img src="${room.image}" alt="${room.name}">
      <h3>${room.name}</h3>
      <p>${room.description}</p>
    </div>
  `;
  roomGallery.insertAdjacentHTML("beforeend", roomHTML);
});
