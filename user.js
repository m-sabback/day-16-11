// const users = [
//     { id: 1, name: 'Muhammad', purchases: [30, 10, 45]},
//     { id: 2, name: 'Khalid', purchases: [11, 60, 21]},
//     { id: 3, name: 'Ahmed', purchases: [99, 20]},
// ]

// function getUsersTotals(arr){
//     return arr.map(user => {
//         const total = user.purchases.reduce((sum, p) => sum + p, 0)
//         return {name: user.name, totalPurchases: total}
//     })
// }

// function getHighSpenders(arr){
//     return getUsersTotals(arr).filter(u =>u.totalPurchases > 100)
// }

// function sortByPurchases(arr){
//     return getUsersTotals(arr).sort((a, b) => b.totalPurchases - a.totalPurchases)
// }

// console.log(getUsersTotals(users))
// console.log(getHighSpenders(users))
// console.log(sortByPurchases(users))






const users = [
    { id: 1, name: 'Muhammad', purchases: [30, 10, 45]},
    { id: 2, name: 'Khalid', purchases: [11, 60, 21]},
    { id: 3, name: 'Ahmed', purchases: [99, 20]},
]

function getUsersTotals(arr){
    return arr.map((user) => { 
        const total = user.purchases.reduce((sum, p) => sum + p, 0 )
        return {name:user.name, totalPurchases: total}
    })
}

function getHighSpenders(arr){
    return getUsersTotals(arr).filter((total) => total.totalPurchases > 100)
}

function sortByPurchases(arr){
    return getUsersTotals(arr).sort((a, b) => b.totalPurchases - a.totalPurchases)
}

console.log(getUsersTotals(users))
console.log(sortByPurchases(users))
console.log(getHighSpenders(users))


