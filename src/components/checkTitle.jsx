export const TitleCheck = (carPart)=>{
    switch (carPart){
        case "rfWheel": return "Переднее правое колесо";
        case "rrWheel": return "Заднее правое колесо";
        case "lfWheel": return "Переднее левое колесо";
        case "lrWheel": return "Заднее левое колесо";
        case "hood": return "Капот"
        case "lHeadlight": return "Передняя фара";
        case "rHeadlight": return "Передняя фара";
        case "rMirror": return "Зеркало бокового вида";
        case "lMirror": return "Зеркало бокового вида";
        case "windshield": return "Лобовое стекло";
        case "fBumper": return "Бампер передний";
        case "rBumper": return "Бампер задний";
        case "roof": return "Крыша";
        case "rfDoor": return "Передняя правая дверь";
        case "rrDoor": return "Задняя правая дверь";
        case "lfDoor": return "Передняя левая дверь";
        case "lrDoor": return "Задняя левая дверь";
        case "trunk": return "Багажник";
        case "rRearlight": return "Задняя фара";
        case "lRearlight": return "Задняя фара";
        case "rrFender": return "Заднее правое крыло";
        case "rfFender": return "Переднее правое крыло";
        case "lrFender": return "Заднее левое крыло";
        case "lfFender": return "Переднее левое крыло";
        case "lThreshold": return "Порог";
        case "rThreshold": return "Порог";
        case "lfPane": return "Стекло передней форточки";
        case "rfPane": return "Стекло передней форточки";
        case "lrPane": return "Стекло задней форточки";
        case "rrPane": return "Стекло задней форточки";
        case "lfGlass": return "Стекло передней двери";
        case "lrGlass": return "Стекло задней двери";
        case "rfGlass": return "Стекло передней двери";
        case "rrGlass": return "Стекло задней двери";
        case "rearGlass": return "Заднее стекло";
        case "bFoglight": return "Задняя противотуманная фара";
        case "lFoglight": return "Передняя противотуманная фара";
        case "rFoglight": return "Передняя противотуманная фара";
        default: return "none"
    }
  }