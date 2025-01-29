export function selectNameRandom(){
    const names = [
        "Carlos", "Ana", "Luis", "Maria", "Jose", 
        "Sofia", "Juan", "Valentina", "Andres", "Isabel"
      ];
    const randoName = names[Math.floor(Math.random()* names.length)]
    const resultName = randoName
    return resultName;   
}

export function selectlastnameRandom(){
    const lastname = [
        "Gonzalez", "Rodriguez", "Lopez", "Perez", "Martinez", 
        "Sanchez", "Ramirez", "Torres", "Gomez", "Diaz"
      ];
    const randomLastname = lastname[Math.floor(Math.random() * lastname.length)]    
    const resultLastame = randomLastname
    return resultLastame; 
}
export function selectBirthDay() {
    const years = [
        '2000',
        '1999', '1998', '1997', '1996', '1995',
        '1994', '1993', '1992', '1991', '1990',
        '1989', '1988', '1987', '1986', '1985',
        '1984', '1983', '1982', '1981', '1980',
        '1979', '1978', '1977', '1976', '1975',
        '1974', '1973', '1972', '1971', '1970',
        '1969', '1968', '1967', '1966', '1965',
        '1964', '1963', '1962', '1961', '1960'
    ];
    const indexYear = years[Math.floor(Math.random() * years.length)]
    const ramdomyear = indexYear;
    const days = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28'
    ];
    const indexDays = days[Math.floor(Math.random() * days.length)]
    const randomDays = indexDays;

    const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12'
    ];
    const indexMonths = months[Math.floor(Math.random() * months.length)]
    const randomMonths = indexMonths;

    const randomDate = '/' + randomMonths + '/' + randomDays;
    return randomDate
}

export function selectRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber.toString();
}