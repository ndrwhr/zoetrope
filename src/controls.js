var Zoetrope = function(){
    var container = document.querySelector('.container'),
        frames = document.querySelector('.frames');

    // Properties with getters and setters:
    var period = 1.200,
        angle = -3,
        animation = 'willie';

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

    Object.defineProperty(this, 'Animation', {
        get: function(){ return animation },
        set: function(value){
            animation = value;
            container.className = container.className.replace(/horse|ball|willie/g, '') + animation;
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
    gui.add(zt, 'Animation').options({
        'Muybridge Horse': 'horse',
        'Bouncing Ball': 'ball',
        'Steamboat Willie': 'willie'
    });

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