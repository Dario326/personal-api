const mainCtrl = require("./mainCtrl")

module.exports = app => {
    app.get(`/api/stuff`, mainCtrl.getStuff);
    app.get(`/api/stuff/name`, mainCtrl.getName);
    app.get(`/api/stuff/location`, mainCtrl.getLocation);
    app.get(`/api/stuff/occupations`, mainCtrl.getOccupations);
    app.get(`/api/stuff/occupations/latest`, mainCtrl.getLatest);
    app.get(`/api/stuff/hobbies`, mainCtrl.getHobbies);
    
    
    app.put(`/api/stuff/name`, mainCtrl.changeName);
    app.put(`/api/stuff/location`, mainCtrl.changeLocation)
    
    app.post(`/api/stuff/hobbies`, mainCtrl.addHobby)
    app.post(`/api/stuff/occupations`, mainCtrl.addOccupation)
}


        



