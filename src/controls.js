var Zoetrope = function(){
    var container = document.querySelector('.container'),
        frames = document.querySelector('.frames');

    // Properties with getters and setters:
    var period = 1.200,
        angle = -3,
        slitWidth = 'medium';

    Object.defineProperty(this, 'Period', {
        get: function(){ return period },
        set: function(value){
            period = value;
            frames.style.webkitAnimationDuration = (period * 1000) + 'ms';
        }
    });

    Object.defineProperty(this, 'Angle', {
        get: function(){ return angle },
        set: function(value){
            angle = value;
            container.style.webkitTransform = 'rotateX(' + angle + 'deg)';
        }
    });

    Object.defineProperty(this, 'Slit Width', {
        get: function(){ return slitWidth },
        set: function(value){
            slitWidth = value;
            frames.className = frames.className.replace(/small|medium|large/g, '') + slitWidth;
        }
    });
};

window.onload = function(){
    // Setup the DAT.GUI interface.
    DAT.GUI.autoPlace = false;

    var zt = new Zoetrope(),
        gui = new DAT.GUI();

    document.getElementById('options').appendChild(gui.domElement);

    gui.add(zt, 'Period', 0.01, 10, 0.01);
    gui.add(zt, 'Angle', -25, 25, 0.1);
    gui.add(zt, 'Slit Width').options('small', 'medium', 'large');

    // Setup the little show hide control button.
    var controls = document.getElementById('controls'),
        button = document.getElementById('controls-toggle');

    button.addEventListener('click', function(event){
        event.preventDefault();

        var closed = controls.className.match(/closed/),
            className = closed ? '' : 'closed',
            text = closed ? 'Hide Controls' : 'Show Controls';

        controls.className = className;
        button.innerHTML = text;
    }, false);
};