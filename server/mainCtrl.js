 const stuff = 
     {
         name: `Dario`,
         location: `Atlanta, GA`,
         occupations: [`web developer`, `jack of all trades`],
         hobbies: [
             {
                 name: `basketball`,
                 type: `sport`
             },
             {
                 name: `football`,
                 type: `sport`
             }
         ]
     }
 


module.exports = {
    getStuff(req, res, next) {
       return res.status(200).json(stuff);
    },
    getName(req, res, next){
     return res.status(200).json(stuff.name);  
    },
    getLocation(req, res, next){
      return  res.status(200).json(stuff.location);
    },
    getOccupations(req, res, next){
      return  res.status(200).json(stuff.occupations);
    },
    getLatest(req, res, next){
     return   res.status(200).json(stuff.occupations[stuff.occupations.length -1]);
    },
    getHobbies(req, res, next){
     return   res.status(200).json(stuff.hobbies)
    },
    changeName(req, res, next){
        stuff.name = req.body.name;
       return res.status(201).json(stuff.name)
    },
    changeLocation(req, res, next){
        stuff.location = req.body.location;
        return res.status(201).json(stuff.location)
    },
    addHobby(req, res, next){
        stuff.hobbies.push(req.body);
        return res.status(200).json(stuff.hobbies)
    },
    addOccupation(req, res, next){
        stuff.occupation.push(req.body);
        return res.status(200).json(stuff.occupation)
    }
    
}