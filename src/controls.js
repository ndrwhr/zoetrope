var Zoetrope = function(){
    var container = document.getElementById('container'),
        frames = document.querySelector('.frames');

    // Properties with getters and setters:
    var period = 2,
        angle = -10;

    Object.defineProperty(this, 'period', {
        get: function(){ return period },
        set: function(value){
            period = value;
            frames.style.webkitAnimationDuration = (period * 1000) + 'ms';
        }
    });

    Object.defineProperty(this, 'angle', {
        get: function(){ return angle },
        set: function(value){
            angle = value;
            container.style.webkitTransform = 'rotateX(' + angle + 'deg)';
        }
    });
};

window.onload = function(){
    var zt = new Zoetrope(),
        gui = new DAT.GUI();

    gui.add(zt, 'period', 0.2, 10, 0.01);
    gui.add(zt, 'angle', -25, 25);
};