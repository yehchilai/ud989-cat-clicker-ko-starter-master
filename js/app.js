var ViewModel = function(){
  var self = this;
  self.count = ko.observable(0);
  self.name = ko.observable("Taddy");
  self.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

  self.increamentCounter = function(){
    self.count(self.count() + 1);
  };

  self.level = ko.computed(function(){
    if(self.count() === 0){
      return "Newborn";
    }else if(self.count() < 10){
      return "Infant";
    }else if(self.count() < 20){
      return "Teen";
    }else{
      return "Adult";
    }
  });

}

ko.applyBindings(new ViewModel());
