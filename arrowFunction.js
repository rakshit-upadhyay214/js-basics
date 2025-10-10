const years = [1990, 1965, 1982, 1948];

const ages = years.map(function (el){
    return 2025 -el;
});

console.log(ages);


const ages2 = years.map(ele => {
    console.log(2025 -ele)
    return 2025 -ele;
});
console.log(ages2);





btn = {
    name: "Button-1",
    color: "green",
    clickMe: function() {
        document.querySelector("#btn-1").addEventListener('click', () => {
            console.log("-----working here-- -- is a new normal "+ this.name);
        });
    }
};

btn.clickMe();

