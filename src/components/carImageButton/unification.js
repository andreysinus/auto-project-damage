export const Unific = (carPart) =>{
    switch(carPart){
        case "Переднее правое колесо": return "Колесо"
        case "Заднее правое колесо": return "Колесо"   
        case "Переднее левое колесо": return "Колесо"
        case "Заднее левое колесо": return "Колесо"   
        //
        case "Переднее правое крыло": return "Крыло переднее"
        case "Заднее правое крыло": return "Крыло заднее"   
        case "Переднее левое крыло": return "Крыло переднее"
        case "Заднее левое крыло": return "Крыло заднее"   
        //
        case "Передняя правая дверь": return "Дверь передняя"
        case "Задняя правая дверь": return "Дверь задняя"   
        case "Передняя левая дверь": return "Дверь передняя"
        case "Задняя левая дверь": return "Дверь задняя"   
        //
        case "Front right fender": return "Front fender"
        case "Rear right fender": return "Rear fender"   
        case "Front left fender": return "Front fender"
        case "Rear left fender": return "Rear fender"   
        //
        case "Front right door": return "Front door"
        case "Rear right door": return "Rear door"   
        case "Front left door": return "Front door"
        case "Rear left door": return "Rear door"   
        //
        default: break
    }
    return carPart
}