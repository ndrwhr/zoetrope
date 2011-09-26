var Zoetrope = function(){
    var container = document.querySelector('.container'),
        frames = document.querySelector('.frames');

    // Properties with getters and setters:
    var period = 1.200,
        angle = -3;

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
    DAT.GUI.autoPlace = false;

    var zt = new Zoetrope(),
        gui = new DAT.GUI();

    document.getElementById('options').appendChild(gui.domElement);

    gui.add(zt, 'period', 0.01, 10, 0.01);
    gui.add(zt, 'angle', -25, 25, 0.1);
};