var cats = [
  {
    count: 0,
    name: "Taddy",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    nicknames :['Tad','TaTa','dydy']
  },
  {
    count: 0,
    name: "Kiger",
    imgSrc: "img/4154543904_6e2428c421_z.jpg",
    nicknames :['KiKi','gerger','Kit']
  },
  {
    count: 0,
    name: "Lazzer",
    imgSrc: "img/9648464288_2516b35537_z.jpg",
    nicknames :['Laz','LaLa','zer']
  }

];


var Cat = function(data){
  var self = this;
  self.count = ko.observable(data.count);
  self.name = ko.observable(data.name);
  self.imgSrc = ko.observable(data.imgSrc);

  self.nickname = ko.observableArray(data.nicknames
  // [
    // {name:'Tad'},
    // {name:'TaTa'},
    // {name:'dydy'}
  // ]
  );

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

var ViewModel = function(){
  var self = this;

  self.catList = ko.observableArray([]);
  cats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });
  // console.log(self.catList());
  self.currentCat = ko.observable(self.catList()[0]);

  self.increamentCounter = function(){
    self.currentCat().count(self.currentCat().count() + 1);
  };

  self.selectCat = function(cat){
    self.currentCat(cat);
  };
}

ko.applyBindings(new ViewModel());
