/* global Animal: false */

(function(){

  'use strict';


  window.animalFactory = function(){
    var animals = [];
    var animal;
    var photos;

    photos = [];
    photos[0] = 'http://www.zastavki.com/pictures/originals/2013/Animals___Cats_Small_cat_calls_mom_046864_.jpg';
    photos[1] = 'http://media.catmoji.com/post/c8yc/small-cat-big-teeth.jpg';
    photos[2] = 'http://www.ourtravelpics.com/mumbai/mumbai_074.jpg';

    animal = new Animal('golio', 2, 'male', photos, 'dogy dog', 'green', 'Dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'http://www.zastavki.com/pictures/originals/2013/Animals___Cats_Small_cat_calls_mom_046864_.jpg';
    photos[1] = 'http://media.catmoji.com/post/c8yc/small-cat-big-teeth.jpg';
    photos[2] = 'http://www.ourtravelpics.com/mumbai/mumbai_074.jpg';

    animal = new Animal('fido', 3, 'male', photos, 'happy dog', 'brown', 'Dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'http://www.city-data.com/forum/attachments/dogs/9165-i-need-suggestions-good-small-dogs-p3300024.jpg';
    photos[1] = 'http://static2.businessinsider.com/image/4f58d2e2ecad04df42000040-480/boo-dog.jpg';
    photos[2] = 'http://2.bp.blogspot.com/-5QJe60I4puM/Tc6evs6pi9I/AAAAAAAAAQc/O7RBV_ctq-I/s1600/smalldog_Chihuahua.jpg';

    animal = new Animal('hokl', 2, 'female', photos, 'Very happy dog', 'black', 'Dog');
    animals.push(animal);
    
    photos[0] = 'http://bunkblog.net/wp-content/uploads/2013/03/D-3.jpg';
    photos[1] = 'http://animal-science.com/animalpic/dog-15.jpg';
    photos[2] = 'http://cdn.cutestpaw.com/wp-content/uploads/2011/11/cute-cat-l.jpg';

    animal = new Animal('django', 8, 'male', photos, 'fighter dog', 'Blue', 'Dog');
    animals.push(animal);

    photos = [];
    photos[0] = 'http://3rdbillion.net/wp-content/uploads/2013/11/455d9b6e40a1e828e102a2b503d55d9f1.png';
    photos[1] = 'http://petnewsandviews.com/wp-content/uploads/2011/03/Bugsy-the-spokesdog-for-Lucky-Dog-Cuisine.jpg';
    photos[2] = 'http://www.buzzle.com/img/articleImages/270048-11218-4.jpg';
    photos[3] = 'http://www.lastwordonnothing.com/wp-content/uploads/2012/11/Conan2.jpg';

    animal = new Animal('Orangy', 8, 'female', photos, 'Very happy cat', 'orange', 'cat');
    animals.push(animal);


    return animals;
  };



})();
