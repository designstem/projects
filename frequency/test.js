
Array.from({ length: 6}).map((_,index) => 360 / 3 * index).forEach((value,index) => {
    console.log(value, 100 * (index % 3 * 0.1))
})
