 // --- DATA ---
        // Array of post objects. Each object has a name and an image URL.
        const arr = [
            { name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=800&auto=format&fit=crop" },
            { name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" },
            { name: "The crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=800&auto=format&fit=crop" },
            { name: "Fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=800&auto=format&fit=crop" },
            { name: "Orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop" },
            { name: "Web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" },
            { name: "Apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=800&auto=format&fit=crop" },
            { name: "Astronaut in space", image: "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=800&auto=format&fit=crop" },
            { name: "Anime wallpaper", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop" },
            { name: "Misa Amane", image: "https://images.unsplash.com/photo-1673047233450-57066e5ae49d?q=80&w=800&auto=format&fit=crop" },
            { name: "Ryuk from Death Note", image: "https://images.unsplash.com/photo-1733519786430-e42dc635b1c2?q=80&w=687&auto=format&fit=crop" },
            { name: "Zenitsu Agatsuma", image: "https://images.unsplash.com/photo-1705932461994-6fb2b07f27dd?q=80&w=670&auto=format&fit=crop" },
            { name: "Nezuko Kamado", image: "https://images.unsplash.com/photo-1705912090259-195fd30509e2?q=80&w=698&auto=format&fit=crop" },
            { name: "Itachi Uchiha", image: "https://images.unsplash.com/photo-1677143016687-8dbb7e71db08?q=80&w=800&auto=format&fit=crop" },
            { name: "Vibrant sky", image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=735&auto=format&fit=crop" },
            { name: "Fashion model", image: "https://images.unsplash.com/photo-1661980686546-148c752ccaa7?q=80&w=687&auto=format&fit=crop" }
        ];

        // --- DOM ELEMENTS ---
        const searchInput = document.querySelector("#searchinput");
        const searchDataContainer = document.querySelector(".searchdata");
        const overlay = document.querySelector("#page-overlay");
        const postContainer = document.querySelector(".container");
        const homeButton = document.querySelector("#home");
        const closeSearchButton = document.querySelector("#close-search");


        // --- FUNCTIONS ---

        /**
         * Renders the image cards on the page.
         * @param {Array} data - The array of post objects to display. Defaults to the full 'arr'.
         */
        function showTheCards(data = arr) {
            let clutter = "";
            data.forEach(function(obj) {
                // **FIXED**: Now uses obj.name for the caption instead of placeholder text.
                clutter += `<div class="box">
                    <div class="overlay-hover"></div>
                    <img src="${obj.image}" alt="${obj.name}">
                    <div class="caption">${obj.name}</div>
                </div>`;
            });
            postContainer.innerHTML = clutter;
        }

        /**
         * Hides the search overlay and results dropdown.
         */
        function hideSearch() {
            overlay.classList.add("hidden");
            searchDataContainer.classList.add("hidden");
        }

        /**
         * Handles all search-related functionality.
         */
        function handleSearchFunctionality() {
            // Show overlay when the user focuses on the search input
            searchInput.addEventListener("focus", function() {
                overlay.classList.remove("hidden");
            });

            // Filter and display search results as the user types
            searchInput.addEventListener("input", function() {
                const searchTerm = this.value.toLowerCase().trim();

                if (searchTerm === "") {
                    searchDataContainer.classList.add("hidden");
                    return;
                }

                const filteredArray = arr.filter(obj => obj.name.toLowerCase().includes(searchTerm));
                let clutter = "";
                filteredArray.forEach(function(obj) {
                    // **IMPROVED**: Added a data-name attribute to identify the clicked item.
                    clutter += `<div class="res flex items-center px-5 py-3 hover:bg-zinc-100 cursor-pointer" data-name="${obj.name}">
                        <i class="ri-search-line font-semibold mr-3 text-zinc-500"></i>
                        <h3 class="font-semibold text-sm">${obj.name}</h3>
                    </div>`;
                });

                searchDataContainer.innerHTML = clutter;
                searchDataContainer.classList.remove("hidden");
            });

            // **NEW**: Added event listener to handle clicks on search results.
            searchDataContainer.addEventListener("click", function(event) {
                const clickedResult = event.target.closest('.res');
                if (clickedResult) {
                    const clickedName = clickedResult.dataset.name;
                    const resultToShow = arr.filter(obj => obj.name === clickedName);
                    showTheCards(resultToShow); // Show only the clicked card
                    searchInput.value = clickedName; // Put the name in the search bar
                    hideSearch();
                }
            });
        }

        // --- EVENT LISTENERS ---

        // Click the overlay to close the search dropdown
        overlay.addEventListener("click", hideSearch);

        // Click the 'Home' button to show all cards again
        homeButton.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default link behavior
            searchInput.value = ""; // Clear search input
            showTheCards(); // Show all cards
        });

        // **NEW**: Click the 'X' icon in the search bar to clear it
        closeSearchButton.addEventListener("click", function() {
            searchInput.value = "";
            searchDataContainer.classList.add("hidden");
            showTheCards(); // Reset to show all cards
            searchInput.focus(); // Keep the search bar active
        });


        // --- INITIALIZATION ---

        // Initial call to display all cards when the page loads
        showTheCards();

        // Initialize all search-related event listeners
        handleSearchFunctionality();
