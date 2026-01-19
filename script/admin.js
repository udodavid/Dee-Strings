const tableBody = document.getElementById("tableBody");
    const data = JSON.parse(localStorage.getItem("onlineClasses")) || [];

    if (data.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center p-4 text-gray-500">
            No submissions found.
          </td>
        </tr>
      `;
    } else {
      data.forEach((item, index) => {
        tableBody.innerHTML += `
          <tr>
            <td class="border p-2">${index + 1}</td>
            <td class="border p-2">${item.first_name || ""}</td>
            <td class="border p-2">${item.email || ""}</td>
            <td class="border p-2">${item.phone || ""}</td>
            <td class="border p-2">${formatInstrument(item.membership_level)}</td>
            <td class="border p-2">${item.message || ""}</td>
            <td class="border p-2">${new Date(item.timestamp).toLocaleString()}</td>
          </tr>
        `;
      });
    }

    function formatInstrument(value) {
      const map = {
        np: "Piano",
        bronze: "Guitar",
        silver: "Saxophone",
        gold: "Violin"
      };
      return map[value] || value;
    }

    function clearData() {
      if (confirm("Are you sure you want to delete all submissions?")) {
        localStorage.removeItem("onlineClasses");
        location.reload();
      }
    }

    function downloadJSON() {
      const data = localStorage.getItem("onlineClasses");
      if (!data) return alert("No data to download.");

      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "online-classes-submissions.json";
      a.click();

      URL.revokeObjectURL(url);
    }