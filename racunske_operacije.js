let prviBroj = prompt ("UNESITE PRVI BROJ:")
const OPERACIJA = prompt ("UNESITE RAČUNSKU OPERACIJU (+,-,*,/):")
let drugiBroj = prompt ("UNESITE DRUGI BROJ:")
prviBroj = parseFloat (prviBroj)
drugiBroj = parseFloat (drugiBroj)

switch (OPERACIJA) {
    case "+": {
        document.write ("REZULTAT SABIRANJA JE: " + (prviBroj + drugiBroj))
        break 
    }
    case "-": {
        document.write ("REZULTAT ODUZIMANJA JE: " + (prviBroj - drugiBroj))
        break
    }
    case "*": {
        document.write ("REZULTAT MNOŽENJA JE: " + (prviBroj * drugiBroj))
        break 
    }
    case "/": {
        document.write ("REZULTAT DELJENJA JE: " + (prviBroj / drugiBroj))
        break 
    }
    default: {
        document.write ("NISTE UNELI VALIDNU RAČUNSKU OPERACIJU ( + , - , * , / )")
    }
}
