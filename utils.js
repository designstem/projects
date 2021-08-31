export const toKeyedRows = (data) => {
    const titles = data[0].map( (title) => { 
        return title.split(" ").join("").toLowerCase();
    });
    return data.slice(1).map( 
        row => Object.fromEntries(row.map((value, i) => ([titles[i], value])))
    );
}