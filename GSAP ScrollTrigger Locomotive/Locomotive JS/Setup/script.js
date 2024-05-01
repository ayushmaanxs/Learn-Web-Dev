// Locomotive js hum use krenge scrolling ko boht smooth banane ke liye
// proper structure banana important hai locomotive use krne ke liye
// https://github.com/locomotivemtl/locomotive-scroll --> yaha jakr iske readme me jakr smooth section me niche ki side me diya gaya code copy paste kara hai

const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});
//itna karne ke baad #wrapper pe --> hmari website pe smooth scrolling apply ho jayega