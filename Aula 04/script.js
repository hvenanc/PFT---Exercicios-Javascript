let entrada = prompt("Escolha uma mulher importante na história da tecnologia, para saber mais sobre seus feitos: \n 1 - Ada Lovelace \n 2 - Grace Hopper \n 3 - Hedy Lamarr \n 4 - Marian Croak \n 5 - Gladys Mae West");
let opcao = Number(entrada);
switch(opcao) {
    case 1:
        feito = "Ada Lovelace foi a primeira programadora da história, conhecida por seu trabalho no conceito de programação de computadores.";
        break;
    case 2:
        feito = "Hopper foi uma das líderes do desenvolvimento da linguagem de programação COBOL amplamente utilizada em aplicações comerciais e governamentais.";
        break;
    case 3:
        feito = "Invenção de um sistema de comunicação por salto de frequência, que mais tarde se tornaria uma base importante para tecnologias modernas como Wi-Fi, Bluetooth e GPS.";
        break;
    case 4:
        feito = "Croak foi uma das líderes na criação de tecnologias de VoIP, permitindo que as pessoas fizessem chamadas de voz pela internet, ao invés de usar linhas telefônicas tradicionais.";
        break;
    case 5:
        feito = "Gladys Mae West é uma matemática e cientista computacional cuja contribuição foi fundamental para o desenvolvimento do Sistema de Posicionamento Global (GPS).";
        break;
    default:
        feito = "Opção Inválida";
        break;
}
alert(feito);