const Database = require('./db'); //pode ser só ('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  // Inserir dados na tabela
   await saveOrphanage(db, {
        lat: "-19.7416068",
        lng: "-47.8934006",
        name: "Lar MRdePaula",
        about: "Presta assistência a crianças de 6 a 16 em que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989897899",
        images: [
            "https://images.unsplash.com/photo-1595009503377-e3be116106b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/photo-1602958169956-a279ffff1b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(),
        instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 08hs até as 18hs.",
        open_on_weekends: "0"
    }) //

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

   // Consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage) //

   /* // Deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))*/
})
