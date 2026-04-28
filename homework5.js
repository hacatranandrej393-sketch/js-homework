var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                total += parseInt(this[key]);
            }
        }
        return total + " грн";
    },

    maxPrice: function() {
        let max = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let currentPrice = parseInt(this[key]);
                if (currentPrice > max) { 
                    max = currentPrice; 
                }
            }
        }
        return max + " грн";
    },

    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                let currentPrice = parseInt(this[key]);
                if (currentPrice < min) { 
                    min = currentPrice; 
                }
            }
        }
        return min + " грн";
    }
};

services['Розбити скло'] = "200 грн";

console.log("Загальна вартість:", services.price());
console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());