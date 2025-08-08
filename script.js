var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Astronaut in space", image: "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {
        name: "Anime", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },

    {
        name: "Misa Amaane", image: "https://images.unsplash.com/photo-1673047233450-57066e5ae49d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Ryuk", image: "https://images.unsplash.com/photo-1733519786430-e42dc635b1c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Zenitsu Agatsuma", image: "https://images.unsplash.com/photo-1705932461994-6fb2b07f27dd?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name:"Nezuko Kamado", image: "https://images.unsplash.com/photo-1705912090259-195fd30509e2?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Itachi Uchiha", image: "https://images.unsplash.com/photo-1677143016687-8dbb7e71db08?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Sky", image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        name: "Model", image: "https://images.unsplash.com/photo-1661980686546-148c752ccaa7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]


function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj) {
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`; 


    })
    document.querySelector(".container").innerHTML = clutter;
}


function handleSearchFunctionality() {

    document.querySelector("#searchinput").addEventListener("focus", function() {
        document.querySelector(".overlay").style.display = "block";
    });

    document.querySelector("#searchinput").addEventListener("input", function() {
        const input = this; // Fix: get the input element
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        var clutter = "";
        filteredArray.forEach(function(obj) {
            clutter += `<div class="res flex px-8 py-3"> <i class="ri-search-line font-semibold mr-5"></i> <h3 class="font-semibold">${obj.name}</h3></div>`;
        });
        const searchData = document.querySelector(".searchdata");
        searchData.classList.remove("hidden"); // Remove hidden class to show
        searchData.innerHTML = clutter;
    });



    document.querySelector("#searchinput").addEventListener("blur", function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").classList.add("hidden"); // Hide search list
    });
}


document.querySelector(".overlay").addEventListener("click", function() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".searchdata").classList.add("hidden"); // Hide search list
});








    document.querySelector("#home").addEventListener("mouseover", function() {
    document.querySelector("#home").style.color = "red";
});
document.querySelector("#home").addEventListener("mouseout", function() {
    document.querySelector("#home").style.color = "black";


});




document.querySelector("#explore").addEventListener("mouseover", function() {
    document.querySelector("#explore").style.color = "red";
});
document.querySelector("#explore").addEventListener("mouseout", function() {
    document.querySelector("#explore").style.color = "black";
});


document.querySelector("#create").addEventListener("mouseover", function() {
    document.querySelector("#create").style.color = "red";
});
document.querySelector("#create").addEventListener("mouseout", function() {
    document.querySelector("#create").style.color = "black";
});

document.querySelector("#notification").addEventListener("click", function() {
    document.querySelector("#notification").style.color = "red";
});


handleSearchFunctionality();
showTheCards();
