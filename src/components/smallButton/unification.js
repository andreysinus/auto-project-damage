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
        default: break
    }
    return carPart
}