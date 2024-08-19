let Pass = "1234";
let ingreso = false;

for (let i = 5; i >= 1; i--) {
    let ingresar = prompt("Ingresa tu Password");
    if (Pass === ingresar) {
        alert("Sistema de Gestion Liga Nafir");
        ingreso = true;
        break;
    } else {
        if (i > 1) {
            alert(`Hay un error en el ingreso. Te quedan ${i - 1} intentos.`);
        } else {
            alert("Has superado el número máximo de intentos. Usuario bloqueado.");
        }
    }
}

if (ingreso) {
    const jugadores = [
        { id: 1, apellido: "rodriguez", nombre: "carlos", categoria: 1991, club: "boca" },
        { id: 2, apellido: "perez", nombre: "alberto", categoria: 1990, club: "river" },
        { id: 3, apellido: "fernandez", nombre: "pedro", categoria: 1993, club: "colon" },
        { id: 4, apellido: "diaz", nombre: "martin", categoria: 1998, club: "union" },
        { id: 5, apellido: "garcia", nombre: "alejandro", categoria: 1995, club: "newells" },
        { id: 6, apellido: "sanchez", nombre: "ulises", categoria: 1992, club: "argentinos" },
        { id: 8, apellido: "romero", nombre: "alfonso", categoria: 1997, club: "banfield" },
        { id: 9, apellido: "sosa", nombre: "jorge", categoria: 1993, club: "lanus" },
        { id: 10, apellido: "gomez", nombre: "martin", categoria: 1991, club: "talleres" },
        { id: 11, apellido: "diaz", nombre: "luciano", categoria: 1990, club: "belgrano" },
        { id: 12, apellido: "rodriguez", nombre: "federico", categoria: 1998, club: "boca" },
        { id: 13, apellido: "gomez", nombre: "sebastian", categoria: 1999, club: "huracan" },
        { id: 14, apellido: "perez", nombre: "nicolas", categoria: 1997, club: "platense" },
    ];

    function buscar(arr, filtroClub, filtroApellido) {
        const resultados = arr.filter(el =>
            el.club.toLowerCase().includes(filtroClub.toLowerCase()) &&
            el.apellido.toLowerCase().includes(filtroApellido.toLowerCase())
        );
        if (resultados.length > 1) {
            const filtroNombre = prompt("Hay más de un jugador con este apellido. Ingrese el nombre del jugador:");
            return resultados.find(el => el.nombre.toLowerCase().includes(filtroNombre.toLowerCase()));
        }
        return resultados[0];
    }

    const filtroClub = prompt("Ingrese el nombre del club:");
    const filtroApellido = prompt("Ingrese el apellido del jugador:");

    const jugador = buscar(jugadores, filtroClub, filtroApellido);

    if (jugador) {
        console.log("Jugador encontrado:", jugador);
    } else {
        console.log("No se encontró ningún jugador con los datos proporcionados.");
    }
}
