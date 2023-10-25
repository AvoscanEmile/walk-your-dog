  // Get all the message containers and their second circles
  const messageContainers = document.querySelectorAll(".phone__message-container");
  const secondCircles = document.querySelectorAll(".message-container__second-circle");

  // Track the currently selected message container
  let currentSelection = null;

  // Add a click event listener to each message container
  messageContainers.forEach((container, index) => {
    container.addEventListener("click", () => {
      if (currentSelection === container) {
        // If the current container is already selected, do nothing
        return;
      }

      // Check if the other circle has opacity 1 and reset it to 0
      if (currentSelection) {
        const otherCircle = currentSelection.querySelector(".message-container__second-circle");
        otherCircle.style.opacity = 0;
      }

      // Set the opacity of the second circle within the clicked container to 1
      const selectedCircle = secondCircles[index];
      selectedCircle.style.opacity = 1;

      // Update the current selection
      currentSelection = container;
    });
  });