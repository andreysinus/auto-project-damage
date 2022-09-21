export const TitleCheck = (carPart)=>{
    switch (carPart){
        case "wheel": return "Резина";
        case "disk": return "Колесный диск";
        case "hood": return "Капот"
        case "lHeadlight": return "Передняя фара";
        case "rHeadlight": return "Передняя фара";
        case "rMirror": return "Зеркало бокового вида";
        case "lMirror": return "Зеркало бокового вида";
        case "windshield": return "Лобовое стекло";
        case "fBumper": return "Бампер передний";
        case "rBumper": return "Бампер задний";
        case "roof": return "Крыша";
        case "fDoor": return "Дверь передняя";
        case "rDoor": return "Дверь задняя";
        case "trunk": return "Багажник";
        case "rRearlight": return "Задняя фара";
        case "lRearlight": return "Задняя фара";
        case "rFender": return "Крыло заднее";
        case "fFender": return "Крыло переднее";
        case "lThreshold": return "Порог";
        case "rThreshold": return "Порог";
        case "fPane": return "Стекло передней форточки";
        case "rPane": return "Стекло задней форточки";
        case "fGlass": return "Стекло передней двери";
        case "rGlass": return "Стекло задней двери";
        case "rfGlass": return "Стекло передней двери";
        case "rrGlass": return "Стекло задней двери";
        case "rearGlass": return "Заднее стекло";
        case "fFoglight": return "Передняя противотуманная фара";
        case "fFoglightR": return "Передняя противотуманная фара";
        case "rFoglight": return "Задняя противотуманная фара";
        case "rearSofa": return "Задний диван";
        case "lSeat": return "Переднее сиденье";
        case "rSeat": return "Переднее сиденье";
        case "salon": return "Салон";
        default: return "none"
    }
  }