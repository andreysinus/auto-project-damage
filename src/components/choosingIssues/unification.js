export const Unific = (carPart) =>{
    switch(carPart){
        case "Переднее правое колесо": return "Колесо"
        case "Заднее правое колесо": return "Колесо"   
        case "Переднее левое колесо": return "Колесо"
        case "Заднее левое колесо": return "Колесо"   
        //
        case "Переднее правое крыло": return "Переднее крыло"
        case "Заднее правое крыло": return "Заднее крыло"   
        case "Переднее левое крыло": return "Переднее крыло"
        case "Заднее левое крыло": return "Заднее крыло"   
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