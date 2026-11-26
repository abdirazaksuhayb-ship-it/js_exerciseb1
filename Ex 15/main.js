const persons = [
    {
        name: "Suhayb",
        age: 22,
        city: "Jigjiga"
    },
    {
        name: "Dalxe",
        age: 24,
        city: "Hargeisa"
    },
    {
        name: "Zack",
        age: 23,
        city: "Mogadishu"
    }
];

// Using for...of
for (let person of persons) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("City:", person.city);
    console.log("----------------");
}