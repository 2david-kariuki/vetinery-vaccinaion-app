document.addEventListener("DOMContentLoaded", function () {
    const API_URL = "https://vccination.vercel.app/vaccinations";
  const vaccinationList = document.getElementById("vaccinationList");
  const form = document.getElementById("vaccinationForm");
  let editingId = null;

  function showVaccinations() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        vaccinationList.innerHTML = "";
        data.forEach((vacc) => {
          const li = document.createElement("li");
          li.innerHTML = `${vacc.animalName} - ${vacc.vaccine} (${vacc.date}) 
            <button class="edit" data-id="${vacc.id}">Edit</button>
            <button data-id="${vacc.id}">Delete</button>`;
          vaccinationList.appendChild(li);
        });
      });
  }

  function saveVaccination(event) {
    event.preventDefault();

    const animalName = document.getElementById("animalName").value;
    const vaccine = document.getElementById("vaccine").value;
    const date = document.getElementById("date").value;

    const vaccData = { animalName: animalName, vaccine: vaccine, date: date };

    if (editingId) {
      fetch(`${API_URL}/${editingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vaccData),
      }).then(() => {
        editingId = null;
        form.reset();
        showVaccinations();
      });
    } else {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vaccData),
      }).then(() => {
        form.reset();
        showVaccinations();
      });
    }
  }

  function deleteVaccination(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() =>
      showVaccinations()
    );
  }

  function handleListClick(event) {
    const id = event.target.getAttribute("data-id");

    if (event.target.className === "edit") {
      fetch(`${API_URL}/${id}`)
        .then((response) => response.json())
        .then((vacc) => {
          document.getElementById("animalName").value = vacc.animalName;
          document.getElementById("vaccine").value = vacc.vaccine;
          document.getElementById("date").value = vacc.date;
          editingId = id;
        });
    } else if (event.target.tagName === "BUTTON") {
      deleteVaccination(id);
    }
  }

  form.addEventListener("submit", saveVaccination);

  vaccinationList.addEventListener("click", handleListClick);

  document.getElementById("animalName").addEventListener("input", (event) => {
    console.log("Typing animal name:", event.target.value);
  });

  showVaccinations();
});
