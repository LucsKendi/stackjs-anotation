const programmer = {
    name: "Lucas",
    age: 24,
    programmingLanguages: [
    {languageName: "C++", workField: "Desktop"},
    {languageName: "Python", workField: "Data Science"},
    {languageName: "JavaScript", workField: "Web/Mobile"}
    ]
}
console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.programmingLanguages[0].languageName} com especialidade em ${programmer.programmingLanguages[0].workField}.`)
