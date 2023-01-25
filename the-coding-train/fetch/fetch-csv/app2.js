

getData();

async function getData() {
    const response = await fetch('test1.csv');
    const data = await response.text();

    const table = data.split('\n');
    console.log(table);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        const jan = columns[1];
        console.log(year, jan);
    })
}