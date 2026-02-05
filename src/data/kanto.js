import { coloresTipos } from "./coloresTipos"

const crearPokemon = (id, nombre, tipos, estadisticas) => {
  const [color1, color2, hover] = coloresTipos[tipos[0]]

  return {
    id,
    nombre,
    tipoPrincipal: tipos[0],
    tipoSecundario: tipos[1] || null,

    imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,


    colorFondo1: color1,
    colorFondo2: color2,
    colorHover: hover,

    estadisticas
  }
}

export const kanto = [
  crearPokemon(1, "Bulbasaur", ["planta", "veneno"], {
    vida: 45, ataque: 49, defensa: 49, ataqueEspecial: 65, defensaEspecial: 65, velocidad: 45
  }),
  crearPokemon(2, "Ivysaur", ["planta", "veneno"], {
    vida: 60, ataque: 62, defensa: 63, ataqueEspecial: 80, defensaEspecial: 80, velocidad: 60
  }),
  crearPokemon(3, "Venusaur", ["planta", "veneno"], {
    vida: 80, ataque: 82, defensa: 83, ataqueEspecial: 100, defensaEspecial: 100, velocidad: 80
  }),
  crearPokemon(4, "Charmander", ["fuego"], {
    vida: 39, ataque: 52, defensa: 43, ataqueEspecial: 60, defensaEspecial: 50, velocidad: 65
  }),
  crearPokemon(5, "Charmeleon", ["fuego"], {
    vida: 58, ataque: 64, defensa: 58, ataqueEspecial: 80, defensaEspecial: 65, velocidad: 80
  }),
  crearPokemon(6, "Charizard", ["fuego", "volador"], {
    vida: 78, ataque: 84, defensa: 78, ataqueEspecial: 109, defensaEspecial: 85, velocidad: 100
  }),
  crearPokemon(7, "Squirtle", ["agua"], {
    vida: 44, ataque: 48, defensa: 65, ataqueEspecial: 50, defensaEspecial: 64, velocidad: 43
  }),
  crearPokemon(8, "Wartortle", ["agua"], {
    vida: 59, ataque: 63, defensa: 80, ataqueEspecial: 65, defensaEspecial: 80, velocidad: 58
  }),
  crearPokemon(9, "Blastoise", ["agua"], {
    vida: 79, ataque: 83, defensa: 100, ataqueEspecial: 85, defensaEspecial: 105, velocidad: 78
 }),
  crearPokemon(10, "Caterpie", ["bicho"], {
    vida: 45, ataque: 30, defensa: 35, ataqueEspecial: 20, defensaEspecial: 20, velocidad: 45
  }),
  crearPokemon(11, "Metapod", ["bicho"], {
    vida: 50, ataque: 20, defensa: 55, ataqueEspecial: 25, defensaEspecial: 25, velocidad: 30
  }),
  crearPokemon(12, "Butterfree", ["bicho", "volador"], {
    vida: 60, ataque: 45, defensa: 50, ataqueEspecial: 90, defensaEspecial: 80, velocidad: 70
  }),
  crearPokemon(13, "Weedle", ["bicho", "veneno"], {
    vida: 40, ataque: 35, defensa: 30, ataqueEspecial: 20, defensaEspecial: 20, velocidad: 50
  }),
  crearPokemon(14, "Kakuna", ["bicho", "veneno"], {
    vida: 45, ataque: 25, defensa: 50, ataqueEspecial: 25, defensaEspecial: 25, velocidad: 35
  }),
  crearPokemon(15, "Beedrill", ["bicho", "veneno"], {
    vida: 65, ataque: 90, defensa: 40, ataqueEspecial: 45, defensaEspecial: 80, velocidad: 75
  }),
  crearPokemon(16, "Pidgey", ["normal", "volador"], {
    vida: 40, ataque: 45, defensa: 40, ataqueEspecial: 35, defensaEspecial: 35, velocidad: 56
  }),
  crearPokemon(17, "Pidgeotto", ["normal", "volador"], {
    vida: 63, ataque: 60, defensa: 55, ataqueEspecial: 50, defensaEspecial: 50, velocidad: 71
  }),
  crearPokemon(18, "Pidgeot", ["normal", "volador"], {
    vida: 83, ataque: 80, defensa: 75, ataqueEspecial: 70, defensaEspecial: 70, velocidad: 101
  }),
  crearPokemon(19, "Rattata", ["normal"], {
    vida: 30, ataque: 56, defensa: 35, ataqueEspecial: 25, defensaEspecial: 35, velocidad: 72
  }),
  crearPokemon(20, "Raticate", ["normal"], {
    vida: 55, ataque: 81, defensa: 60, ataqueEspecial: 50, defensaEspecial: 70, velocidad: 97
  }),
  crearPokemon(21, "Spearow", ["normal", "volador"], {
    vida: 40, ataque: 60, defensa: 30, ataqueEspecial: 31, defensaEspecial: 31, velocidad: 70
  }),
  crearPokemon(22, "Fearow", ["normal", "volador"], {
    vida: 65, ataque: 90, defensa: 65, ataqueEspecial: 61, defensaEspecial: 61, velocidad: 100
  }),
  crearPokemon(23, "Ekans", ["veneno"], {
    vida: 35, ataque: 60, defensa: 44, ataqueEspecial: 40, defensaEspecial: 54, velocidad: 55
  }),
  crearPokemon(24, "Arbok", ["veneno"], {
    vida: 60, ataque: 95, defensa: 69, ataqueEspecial: 65, defensaEspecial: 79, velocidad: 80
  }),
  crearPokemon(25, "Pikachu", ["electrico"], {
    vida: 35, ataque: 55, defensa: 40, ataqueEspecial: 50, defensaEspecial: 50, velocidad: 90
  }),
  crearPokemon(26, "Raichu", ["electrico"], {
    vida: 60, ataque: 90, defensa: 55, ataqueEspecial: 90, defensaEspecial: 80, velocidad: 110
  }),
  crearPokemon(27, "Sandshrew", ["tierra"], {
    vida: 50, ataque: 75, defensa: 85, ataqueEspecial: 20, defensaEspecial: 30, velocidad: 40
  }),
  crearPokemon(28, "Sandslash", ["tierra"], {
    vida: 75, ataque: 100, defensa: 110, ataqueEspecial: 45, defensaEspecial: 55, velocidad: 65
  }),
  crearPokemon(29, "Nidoran♀", ["veneno"], {
    vida: 55, ataque: 47, defensa: 52, ataqueEspecial: 40, defensaEspecial: 40, velocidad: 41
  }),
  crearPokemon(30, "Nidorina", ["veneno"], {
    vida: 70, ataque: 62, defensa: 67, ataqueEspecial: 55, defensaEspecial: 55, velocidad: 56
  }),
  crearPokemon(31, "Nidoqueen", ["veneno", "tierra"], {
    vida: 90, ataque: 92, defensa: 87, ataqueEspecial: 75, defensaEspecial: 85, velocidad: 76
  }),
  crearPokemon(32, "Nidoran♂", ["veneno"], {
    vida: 46, ataque: 57, defensa: 40, ataqueEspecial: 40, defensaEspecial: 40, velocidad: 50
  }),
  crearPokemon(33, "Nidorino", ["veneno"], {
    vida: 61, ataque: 72, defensa: 57, ataqueEspecial: 55, defensaEspecial: 55, velocidad: 65
  }),
  crearPokemon(34, "Nidoking", ["veneno", "tierra"], {
    vida: 81, ataque: 102, defensa: 77, ataqueEspecial: 85, defensaEspecial: 75, velocidad: 85
  }),
  crearPokemon(35, "Clefairy", ["hada"], {
    vida: 70, ataque: 45, defensa: 48, ataqueEspecial: 60, defensaEspecial: 65, velocidad: 35
  }),
  crearPokemon(36, "Clefable", ["hada"], {
    vida: 95, ataque: 70, defensa: 73, ataqueEspecial: 95, defensaEspecial: 90, velocidad: 60
  }),
  crearPokemon(37, "Vulpix", ["fuego"], {
    vida: 38, ataque: 41, defensa: 40, ataqueEspecial: 50, defensaEspecial: 65, velocidad: 65
  }),
  crearPokemon(38, "Ninetales", ["fuego"], {
    vida: 73, ataque: 76, defensa: 75, ataqueEspecial: 81, defensaEspecial: 100, velocidad: 100
  }),
  crearPokemon(39, "Jigglypuff", ["normal", "hada"], {
    vida: 115, ataque: 45, defensa: 20, ataqueEspecial: 45, defensaEspecial: 25, velocidad: 20
  }),
  crearPokemon(40, "Wigglytuff", ["normal", "hada"], {
    vida: 140, ataque: 70, defensa: 45, ataqueEspecial: 85, defensaEspecial: 50, velocidad: 45
  }),
  crearPokemon(41, "Zubat", ["veneno", "volador"], {
    vida: 40, ataque: 45, defensa: 35, ataqueEspecial: 30, defensaEspecial: 40, velocidad: 55
  }),
  crearPokemon(42, "Golbat", ["veneno", "volador"], {
    vida: 75, ataque: 80, defensa: 70, ataqueEspecial: 65, defensaEspecial: 75, velocidad: 90
  }),
  crearPokemon(43, "Oddish", ["planta", "veneno"], {
    vida: 45, ataque: 50, defensa: 55, ataqueEspecial: 75, defensaEspecial: 65, velocidad: 30
  }),
  crearPokemon(44, "Gloom", ["planta", "veneno"], {
    vida: 60, ataque: 65, defensa: 70, ataqueEspecial: 85, defensaEspecial: 75, velocidad: 40
  }),
  crearPokemon(45, "Vileplume", ["planta", "veneno"], {
    vida: 75, ataque: 80, defensa: 85, ataqueEspecial: 110, defensaEspecial: 90, velocidad: 50
  }),
  crearPokemon(46, "Paras", ["bicho", "planta"], {
    vida: 35, ataque: 70, defensa: 55, ataqueEspecial: 45, defensaEspecial: 55, velocidad: 25
  }),
  crearPokemon(47, "Parasect", ["bicho", "planta"], {
    vida: 60, ataque: 95, defensa: 80, ataqueEspecial: 60, defensaEspecial: 80, velocidad: 30
  }),
  crearPokemon(48, "Venonat", ["bicho", "veneno"], {
    vida: 60, ataque: 55, defensa: 50, ataqueEspecial: 40, defensaEspecial: 55, velocidad: 45
  }),
  crearPokemon(49, "Venomoth", ["bicho", "veneno"], {
    vida: 70, ataque: 65, defensa: 60, ataqueEspecial: 90, defensaEspecial: 75, velocidad: 90
  }),
  crearPokemon(50, "Diglett", ["tierra"], {
    vida: 10, ataque: 55, defensa: 25, ataqueEspecial: 35, defensaEspecial: 45, velocidad: 95
  }),
  crearPokemon(51, "Dugtrio", ["tierra"], {
    vida: 35, ataque: 100, defensa: 50, ataqueEspecial: 50, defensaEspecial: 70, velocidad: 120
  }),
  crearPokemon(52, "Meowth", ["normal"], {
    vida: 40, ataque: 45, defensa: 35, ataqueEspecial: 40, defensaEspecial: 40, velocidad: 90
  }),
  crearPokemon(53, "Persian", ["normal"], {
    vida: 65, ataque: 70, defensa: 60, ataqueEspecial: 65, defensaEspecial: 65, velocidad: 115
  }),
  crearPokemon(54, "Psyduck", ["agua"], {
    vida: 50, ataque: 52, defensa: 48, ataqueEspecial: 65, defensaEspecial: 50, velocidad: 55
  }),
  crearPokemon(55, "Golduck", ["agua"], {
    vida: 80, ataque: 82, defensa: 78, ataqueEspecial: 95, defensaEspecial: 80, velocidad: 85
  }),
  crearPokemon(56, "Mankey", ["lucha"], {
    vida: 40, ataque: 80, defensa: 35, ataqueEspecial: 35, defensaEspecial: 45, velocidad: 70
  }),
  crearPokemon(57, "Primeape", ["lucha"], {
    vida: 65, ataque: 105, defensa: 60, ataqueEspecial: 60, defensaEspecial: 70, velocidad: 95
  }),
  crearPokemon(58, "Growlithe", ["fuego"], {
    vida: 55, ataque: 70, defensa: 45, ataqueEspecial: 70, defensaEspecial: 50, velocidad: 60
  }),
  crearPokemon(59, "Arcanine", ["fuego"], {
    vida: 90, ataque: 110, defensa: 80, ataqueEspecial: 100, defensaEspecial: 80, velocidad: 95
  }),
  crearPokemon(60, "Poliwag", ["agua"], {
    vida: 40, ataque: 50, defensa: 40, ataqueEspecial: 40, defensaEspecial: 40, velocidad: 90
  }),
  crearPokemon(61, "Poliwhirl", ["agua"], {
    vida: 65, ataque: 65, defensa: 65, ataqueEspecial: 50, defensaEspecial: 50, velocidad: 90
  }),
  crearPokemon(62, "Poliwrath", ["agua", "lucha"], {
    vida: 90, ataque: 95, defensa: 95, ataqueEspecial: 70, defensaEspecial: 90, velocidad: 70
  }),
  crearPokemon(63, "Abra", ["psiquico"], {
    vida: 25, ataque: 20, defensa: 15, ataqueEspecial: 105, defensaEspecial: 55, velocidad: 90
  }),
  crearPokemon(64, "Kadabra", ["psiquico"], {
    vida: 40, ataque: 35, defensa: 30, ataqueEspecial: 120, defensaEspecial: 70, velocidad: 105
  }),
  crearPokemon(65, "Alakazam", ["psiquico"], {
    vida: 55, ataque: 50, defensa: 45, ataqueEspecial: 135, defensaEspecial: 95, velocidad: 120
  }),
  crearPokemon(66, "Machop", ["lucha"], {
    vida: 70, ataque: 80, defensa: 50, ataqueEspecial: 35, defensaEspecial: 35, velocidad: 35
  }),
  crearPokemon(67, "Machoke", ["lucha"], {
    vida: 80, ataque: 100, defensa: 70, ataqueEspecial: 50, defensaEspecial: 60, velocidad: 45
  }),
  crearPokemon(68, "Machamp", ["lucha"], {
    vida: 90, ataque: 130, defensa: 80, ataqueEspecial: 65, defensaEspecial: 85, velocidad: 55
  }),
  crearPokemon(69, "Bellsprout", ["planta", "veneno"], {
    vida: 50, ataque: 75, defensa: 35, ataqueEspecial: 70, defensaEspecial: 30, velocidad: 40
  }),
  crearPokemon(70, "Weepinbell", ["planta", "veneno"], {
    vida: 65, ataque: 90, defensa: 50, ataqueEspecial: 85, defensaEspecial: 45, velocidad: 55
  }),
 
  crearPokemon(71, "Victreebel", ["planta", "veneno"], {
    vida: 80, ataque: 105, defensa: 65, ataqueEspecial: 100, defensaEspecial: 70, velocidad: 70
  }),
  crearPokemon(72, "Tentacool", ["agua", "veneno"], {
    vida: 40, ataque: 40, defensa: 35, ataqueEspecial: 50, defensaEspecial: 100, velocidad: 70
  }),
  crearPokemon(73, "Tentacruel", ["agua", "veneno"], {
    vida: 80, ataque: 70, defensa: 65, ataqueEspecial: 80, defensaEspecial: 120, velocidad: 100
  }),
  crearPokemon(74, "Geodude", ["roca", "tierra"], {
    vida: 40, ataque: 80, defensa: 100, ataqueEspecial: 30, defensaEspecial: 30, velocidad: 20
  }),
  crearPokemon(75, "Graveler", ["roca", "tierra"], {
    vida: 55, ataque: 95, defensa: 115, ataqueEspecial: 45, defensaEspecial: 45, velocidad: 35
  }),
  crearPokemon(76, "Golem", ["roca", "tierra"], {
    vida: 80, ataque: 120, defensa: 130, ataqueEspecial: 55, defensaEspecial: 65, velocidad: 45
  }),
  crearPokemon(77, "Ponyta", ["fuego"], {
    vida: 50, ataque: 85, defensa: 55, ataqueEspecial: 65, defensaEspecial: 65, velocidad: 90
  }),
  crearPokemon(78, "Rapidash", ["fuego"], {
    vida: 65, ataque: 100, defensa: 70, ataqueEspecial: 80, defensaEspecial: 80, velocidad: 105
  }),
  crearPokemon(79, "Slowpoke", ["agua", "psiquico"], {
    vida: 90, ataque: 65, defensa: 65, ataqueEspecial: 40, defensaEspecial: 40, velocidad: 15
  }),
  crearPokemon(80, "Slowbro", ["agua", "psiquico"], {
    vida: 95, ataque: 75, defensa: 110, ataqueEspecial: 100, defensaEspecial: 80, velocidad: 30
  }),
  crearPokemon(81, "Magnemite", ["electrico", "acero"], {
    vida: 25, ataque: 35, defensa: 70, ataqueEspecial: 95, defensaEspecial: 55, velocidad: 45
  }),
  crearPokemon(82, "Magneton", ["electrico", "acero"], {
    vida: 50, ataque: 60, defensa: 95, ataqueEspecial: 120, defensaEspecial: 70, velocidad: 70
  }),
  crearPokemon(83, "Farfetch'd", ["normal", "volador"], {
    vida: 52, ataque: 90, defensa: 55, ataqueEspecial: 58, defensaEspecial: 62, velocidad: 60
  }),
  crearPokemon(84, "Doduo", ["normal", "volador"], {
    vida: 35, ataque: 85, defensa: 45, ataqueEspecial: 35, defensaEspecial: 35, velocidad: 75
  }),
  crearPokemon(85, "Dodrio", ["normal", "volador"], {
    vida: 60, ataque: 110, defensa: 70, ataqueEspecial: 60, defensaEspecial: 60, velocidad: 110
  }),
  crearPokemon(86, "Seel", ["agua"], {
    vida: 65, ataque: 45, defensa: 55, ataqueEspecial: 45, defensaEspecial: 70, velocidad: 45
  }),
  crearPokemon(87, "Dewgong", ["agua", "hielo"], {
    vida: 90, ataque: 70, defensa: 80, ataqueEspecial: 70, defensaEspecial: 95, velocidad: 70
  }),
  crearPokemon(88, "Grimer", ["veneno"], {
    vida: 80, ataque: 80, defensa: 50, ataqueEspecial: 40, defensaEspecial: 50, velocidad: 25
  }),
  crearPokemon(89, "Muk", ["veneno"], {
    vida: 105, ataque: 105, defensa: 75, ataqueEspecial: 65, defensaEspecial: 100, velocidad: 50
  }),
  crearPokemon(90, "Shellder", ["agua"], {
    vida: 30, ataque: 65, defensa: 100, ataqueEspecial: 45, defensaEspecial: 25, velocidad: 40
  }),
  crearPokemon(91, "Cloyster", ["agua", "hielo"], {
    vida: 50, ataque: 95, defensa: 180, ataqueEspecial: 85, defensaEspecial: 45, velocidad: 70
  }),
  crearPokemon(92, "Gastly", ["fantasma", "veneno"], {
    vida: 30, ataque: 35, defensa: 30, ataqueEspecial: 100, defensaEspecial: 35, velocidad: 80
  }),
  crearPokemon(93, "Haunter", ["fantasma", "veneno"], {
    vida: 45, ataque: 50, defensa: 45, ataqueEspecial: 115, defensaEspecial: 55, velocidad: 95
  }),
  crearPokemon(94, "Gengar", ["fantasma", "veneno"], {
    vida: 60, ataque: 65, defensa: 60, ataqueEspecial: 130, defensaEspecial: 75, velocidad: 110
  }),
  crearPokemon(95, "Onix", ["roca", "tierra"], {
    vida: 35, ataque: 45, defensa: 160, ataqueEspecial: 30, defensaEspecial: 45, velocidad: 70
  }),
  crearPokemon(96, "Drowzee", ["psiquico"], {
    vida: 60, ataque: 48, defensa: 45, ataqueEspecial: 43, defensaEspecial: 90, velocidad: 42
  }),
  crearPokemon(97, "Hypno", ["psiquico"], {
    vida: 85, ataque: 73, defensa: 70, ataqueEspecial: 73, defensaEspecial: 115, velocidad: 67
  }),
  crearPokemon(98, "Krabby", ["agua"], {
    vida: 30, ataque: 105, defensa: 90, ataqueEspecial: 25, defensaEspecial: 25, velocidad: 50
  }),
  crearPokemon(99, "Kingler", ["agua"], {
    vida: 55, ataque: 130, defensa: 115, ataqueEspecial: 50, defensaEspecial: 50, velocidad: 75
  }),
  crearPokemon(100, "Voltorb", ["electrico"], {
    vida: 40, ataque: 30, defensa: 50, ataqueEspecial: 55, defensaEspecial: 55, velocidad: 100
  }),
  crearPokemon(101, "Electrode", ["electrico"], {
    vida: 60, ataque: 50, defensa: 70, ataqueEspecial: 80, defensaEspecial: 80, velocidad: 150
  }),
  crearPokemon(102, "Exeggcute", ["planta", "psiquico"], {
    vida: 60, ataque: 40, defensa: 80, ataqueEspecial: 60, defensaEspecial: 45, velocidad: 40
  }),
  crearPokemon(103, "Exeggutor", ["planta", "psiquico"], {
    vida: 95, ataque: 95, defensa: 85, ataqueEspecial: 125, defensaEspecial: 75, velocidad: 55
  }),
  crearPokemon(104, "Cubone", ["tierra"], {
    vida: 50, ataque: 50, defensa: 95, ataqueEspecial: 40, defensaEspecial: 50, velocidad: 35
  }),
  crearPokemon(105, "Marowak", ["tierra"], {
    vida: 60, ataque: 80, defensa: 110, ataqueEspecial: 50, defensaEspecial: 80, velocidad: 45
  }),
  crearPokemon(106, "Hitmonlee", ["lucha"], {
    vida: 50, ataque: 120, defensa: 53, ataqueEspecial: 35, defensaEspecial: 110, velocidad: 87
  }),
  crearPokemon(107, "Hitmonchan", ["lucha"], {
    vida: 50, ataque: 105, defensa: 79, ataqueEspecial: 35, defensaEspecial: 110, velocidad: 76
  }),
  crearPokemon(108, "Lickitung", ["normal"], {
    vida: 90, ataque: 55, defensa: 75, ataqueEspecial: 60, defensaEspecial: 75, velocidad: 30
  }),
  crearPokemon(109, "Koffing", ["veneno"], {
    vida: 40, ataque: 65, defensa: 95, ataqueEspecial: 60, defensaEspecial: 45, velocidad: 35
  }),
  crearPokemon(110, "Weezing", ["veneno"], {
    vida: 65, ataque: 90, defensa: 120, ataqueEspecial: 85, defensaEspecial: 70, velocidad: 60
  }),
  crearPokemon(111, "Rhyhorn", ["tierra", "roca"], {
    vida: 80, ataque: 85, defensa: 95, ataqueEspecial: 30, defensaEspecial: 30, velocidad: 25
  }),
  crearPokemon(112, "Rhydon", ["tierra", "roca"], {
    vida: 105, ataque: 130, defensa: 120, ataqueEspecial: 45, defensaEspecial: 45, velocidad: 40
  }),
  crearPokemon(113, "Chansey", ["normal"], {
    vida: 250, ataque: 5, defensa: 5, ataqueEspecial: 35, defensaEspecial: 105, velocidad: 50
  }),
  crearPokemon(114, "Tangela", ["planta"], {
    vida: 65, ataque: 55, defensa: 115, ataqueEspecial: 100, defensaEspecial: 40, velocidad: 60
  }),
  crearPokemon(115, "Kangaskhan", ["normal"], {
    vida: 105, ataque: 95, defensa: 80, ataqueEspecial: 40, defensaEspecial: 80, velocidad: 90
  }),
  crearPokemon(116, "Horsea", ["agua"], {
    vida: 30, ataque: 40, defensa: 70, ataqueEspecial: 70, defensaEspecial: 25, velocidad: 60
  }),
  crearPokemon(117, "Seadra", ["agua"], {
    vida: 55, ataque: 65, defensa: 95, ataqueEspecial: 95, defensaEspecial: 45, velocidad: 85
  }),
  crearPokemon(118, "Goldeen", ["agua"], {
    vida: 45, ataque: 67, defensa: 60, ataqueEspecial: 35, defensaEspecial: 50, velocidad: 63
  }),
  crearPokemon(119, "Seaking", ["agua"], {
    vida: 80, ataque: 92, defensa: 65, ataqueEspecial: 65, defensaEspecial: 80, velocidad: 68
  }),
  crearPokemon(120, "Staryu", ["agua"], {
    vida: 30, ataque: 45, defensa: 55, ataqueEspecial: 70, defensaEspecial: 55, velocidad: 85
  }),
  crearPokemon(121, "Starmie", ["agua", "psiquico"], {
    vida: 60, ataque: 75, defensa: 85, ataqueEspecial: 100, defensaEspecial: 85, velocidad: 115
  }),
  crearPokemon(122, "Mr. Mime", ["psiquico", "hada"], {
    vida: 40, ataque: 45, defensa: 65, ataqueEspecial: 100, defensaEspecial: 120, velocidad: 90
  }),
  crearPokemon(123, "Scyther", ["bicho", "volador"], {
    vida: 70, ataque: 110, defensa: 80, ataqueEspecial: 55, defensaEspecial: 80, velocidad: 105
  }),
  crearPokemon(124, "Jynx", ["hielo", "psiquico"], {
    vida: 65, ataque: 50, defensa: 35, ataqueEspecial: 115, defensaEspecial: 95, velocidad: 95
  }),
  crearPokemon(125, "Electabuzz", ["electrico"], {
    vida: 65, ataque: 83, defensa: 57, ataqueEspecial: 95, defensaEspecial: 85, velocidad: 105
  }),
  crearPokemon(126, "Magmar", ["fuego"], {
    vida: 65, ataque: 95, defensa: 57, ataqueEspecial: 100, defensaEspecial: 85, velocidad: 93
  }),
  crearPokemon(127, "Pinsir", ["bicho"], {
    vida: 65, ataque: 125, defensa: 100, ataqueEspecial: 55, defensaEspecial: 70, velocidad: 85
  }),
  crearPokemon(128, "Tauros", ["normal"], {
    vida: 75, ataque: 100, defensa: 95, ataqueEspecial: 40, defensaEspecial: 70, velocidad: 110
  }),
  crearPokemon(129, "Magikarp", ["agua"], {
    vida: 20, ataque: 10, defensa: 55, ataqueEspecial: 15, defensaEspecial: 20, velocidad: 80
  }),
  crearPokemon(130, "Gyarados", ["agua", "volador"], {
    vida: 95, ataque: 125, defensa: 79, ataqueEspecial: 60, defensaEspecial: 100, velocidad: 81
  }),
  crearPokemon(131, "Lapras", ["agua", "hielo"], {
    vida: 130, ataque: 85, defensa: 80, ataqueEspecial: 85, defensaEspecial: 95, velocidad: 60
  }),
  crearPokemon(132, "Ditto", ["normal"], {
    vida: 48, ataque: 48, defensa: 48, ataqueEspecial: 48, defensaEspecial: 48, velocidad: 48
  }),
  crearPokemon(133, "Eevee", ["normal"], {
    vida: 55, ataque: 55, defensa: 50, ataqueEspecial: 45, defensaEspecial: 65, velocidad: 55
  }),
  crearPokemon(134, "Vaporeon", ["agua"], {
    vida: 130, ataque: 65, defensa: 60, ataqueEspecial: 110, defensaEspecial: 95, velocidad: 65
  }),
  crearPokemon(135, "Jolteon", ["electrico"], {
    vida: 65, ataque: 65, defensa: 60, ataqueEspecial: 110, defensaEspecial: 95, velocidad: 130
  }),
  crearPokemon(136, "Flareon", ["fuego"], {
    vida: 65, ataque: 130, defensa: 60, ataqueEspecial: 95, defensaEspecial: 110, velocidad: 65
  }),
  crearPokemon(137, "Porygon", ["normal"], {
    vida: 65, ataque: 60, defensa: 70, ataqueEspecial: 85, defensaEspecial: 75, velocidad: 40
  }),
  crearPokemon(138, "Omanyte", ["roca", "agua"], {
    vida: 35, ataque: 40, defensa: 100, ataqueEspecial: 90, defensaEspecial: 55, velocidad: 35
  }),
  crearPokemon(139, "Omastar", ["roca", "agua"], {
    vida: 70, ataque: 60, defensa: 125, ataqueEspecial: 115, defensaEspecial: 70, velocidad: 55
  }),
  crearPokemon(140, "Kabuto", ["roca", "agua"], {
    vida: 30, ataque: 80, defensa: 90, ataqueEspecial: 55, defensaEspecial: 45, velocidad: 55
  }),
  crearPokemon(141, "Kabutops", ["roca", "agua"], {
    vida: 60, ataque: 115, defensa: 105, ataqueEspecial: 65, defensaEspecial: 70, velocidad: 80
  }),
  crearPokemon(142, "Aerodactyl", ["roca", "volador"], {
    vida: 80, ataque: 105, defensa: 65, ataqueEspecial: 60, defensaEspecial: 75, velocidad: 130
  }),
  crearPokemon(143, "Snorlax", ["normal"], {
    vida: 160, ataque: 110, defensa: 65, ataqueEspecial: 65, defensaEspecial: 110, velocidad: 30
  }),
  crearPokemon(144, "Articuno", ["hielo", "volador"], {
    vida: 90, ataque: 85, defensa: 100, ataqueEspecial: 95, defensaEspecial: 125, velocidad: 85
  }),
  crearPokemon(145, "Zapdos", ["electrico", "volador"], {
    vida: 90, ataque: 90, defensa: 85, ataqueEspecial: 125, defensaEspecial: 90, velocidad: 100
  }),
  crearPokemon(146, "Moltres", ["fuego", "volador"], {
    vida: 90, ataque: 100, defensa: 90, ataqueEspecial: 125, defensaEspecial: 85, velocidad: 90
  }),
  crearPokemon(147, "Dratini", ["dragon"], {
    vida: 41, ataque: 64, defensa: 45, ataqueEspecial: 50, defensaEspecial: 50, velocidad: 50
  }),
  crearPokemon(148, "Dragonair", ["dragon"], {
    vida: 61, ataque: 84, defensa: 65, ataqueEspecial: 70, defensaEspecial: 70, velocidad: 70
  }),
  crearPokemon(149, "Dragonite", ["dragon", "volador"], {
    vida: 91, ataque: 134, defensa: 95, ataqueEspecial: 100, defensaEspecial: 100, velocidad: 80
  }),
  crearPokemon(150, "Mewtwo", ["psiquico"], {
    vida: 106, ataque: 110, defensa: 90, ataqueEspecial: 154, defensaEspecial: 90, velocidad: 130
  }),
  crearPokemon(151, "Mew", ["psiquico"], {
    vida: 100, ataque: 100, defensa: 100, ataqueEspecial: 100, defensaEspecial: 100, velocidad: 100
  })

]
