import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNpSTERiNAf6TDVAU4hiZ_p6n4L5zhkf8",
  authDomain: "thoughts-base.firebaseapp.com",
  databaseURL: "https://thoughts-base-default-rtdb.firebaseio.com",
  projectId: "thoughts-base",
  storageBucket: "thoughts-base.firebasestorage.app",
  messagingSenderId: "68040062741",
  appId: "1:68040062741:web:56c0ebe8effeef8f781b1c",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function getThought(e) {
  let randNum = Math.floor(Math.random() * 75) + 1;
  let thoughtVariable = `thought${randNum}`;
  console.log(randNum);
  console.log(thoughtVariable);

  const thoughtRef = ref(db, "Thoughts/" + thoughtVariable);

  // Use the `get` method to fetch data
  get(thoughtRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const thought = snapshot.val();
        console.log(thought);
        document.getElementById("thoughtSpan").innerText = thought;
      } else {
        console.log("No thought found for this key.");
        document.getElementById("thoughtSpan").innerText =
          "No thought found for this key.";
      }
    })
    .catch((error) => {
      console.error("Error fetching thought:", error);
    });
}

getThought();

document.querySelector("#changesButton").addEventListener("click", function () {
  let borderColor = document.querySelector("#borderColor").value;
  let textColor = document.querySelector("#textColor").value;
  document.querySelector("#mainContainer").style.borderColor = borderColor;
  document.querySelector("#thoughtDisplay").style.color = textColor;
});
