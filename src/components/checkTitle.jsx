export const TitleCheck = (carPart)=>{
    switch (carPart){
        case "rfWheel": return "Переднее правое колесо";
        case "rrWheel": return "Заднее правое колесо";
        case "lfWheel": return "Переднее левое колесо";
        case "lrWheel": return "Заднее левое колесо";
        case "hood": return "Капот"
        case "lHeadlight": return "Левая фара";
        case "rHeadlight": return "Правая фара";
        case "rMirror": return "Правое зеркало";
        case "lMirror": return "Левое зеркало";
        case "windshield": return "Лобовое стекло";
        case "fBumper": return "Передний бампер";
        case "rBumper": return "Задний бампер";
        case "roof": return "Крыша";
        case "rfDoor": return "Передняя правая дверь";
        case "rrDoor": return "Задняя правая дверь";
        case "lfDoor": return "Передняя левая дверь";
        case "lrDoor": return "Задняя левая дверь";
        case "trunk": return "Багажник";
        case "rRearlight": return "Правый фонарь";
        case "lRearlight": return "Левый фонарь";
        case "rrFender": return "Заднее правое крыло";
        case "rfFender": return "Переднее правое крыло";
        case "lrFender": return "Заднее левое крыло";
        case "lfFender": return "Переднее левое крыло";
        default: return "none"
    }
  }